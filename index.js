require('dotenv').config();
const express = require('express'); 
const massive = require('massive'); 
const axios = require('axios');  
const controller = require("./server/controller");
const session = require("express-session");


const app = express(); 
let { SERVER_PORT, SESSION_SECRET } = process.env;

// app.use(express.cookieParser(SESSION_SECRET));
// app.use(express.session());

app.use(express.json());
app.use(
  session({
    secret: SESSION_SECRET,
    resave: false,
    saveUninitialized: false
  })
);

massive(process.env.CONNECTION_STRING)
    .then(dbInstance => {
        app.set('db', dbInstance)
        console.log('the db is connected')
    })
    .catch(err => console.log('err in db')); 

// Endpoints 

//Endpoint for users to sign up and create an account 
app.post('/auth/signup', async (req, res) => {
  let {username, password} = req.body;  
  let db = req.app.get('db') 
  let userFound = await db.check_user_exists([username]);  
  if (userFound[0]) {
    return res.status(200).send('username already exists')  
  } 
  let salt = bcrypt.genSaltSync(10); 
  let hash = bcrypt.hashSync(password, salt); 
  let createdUser = await db.create_customer([username, hash]) 
  req.session.user = {id: createdUser[0].id, username: createdUser[0].username}
  res.status(200).send(req.session.user) 
}); 

//Endpoint for checking if correct username and password has entered 

app.post('/auth/login', async (req, res) => {
  let {username, password} = req.body;
  let db = req.app.get('db')
  let userFound = await db.check_user_exists(username) 
  if (!userFound[0]) { 
    return res.status(200).send('Incorrect username. Please try again.'); 
  }
  let result = bcrypt.compareSync(password, userFound[0].user_password)
  if (result) { 
    req.session.user = {id: userFound[0].id, username: userFound[0].username}
    res.status(200).send(req.session.user) 
  } else {
    return res.status(401).send('Incorrect username/password') 
  }
}); 

const port = process.env.port || 4000;
app.listen(SERVER_PORT, () => {   
    console.log(`Purring on Port ${SERVER_PORT}`); 
});