require('dotenv').config();
const express = require('express'); 
const massive = require('massive'); 
const axios = require('axios');  
const controller = require("./server/controller");
const session = require("express-session");
const bcrypt = require('bcrypt');



const app = express(); 
let { SERVER_PORT} = process.env;

// app.use(express.cookieParser(SESSION_SECRET));
// app.use(express.session());

app.use(express.json());
app.use(session({
    secret: process.env.SESSION_SECRET,
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
  let {email, password} = req.body;  
  let db = req.app.get('db') 
  let userFound = await db.check_user_exists([email]);  
  if (userFound.length > 0) {
    return res.status(200).send('email already exists')  
  } 
  let profPic = `https://robohash.org/${email}`;  
  let salt = bcrypt.genSaltSync(10); 
  let hash = bcrypt.hashSync(password, salt); 
  let createdUser = await db.create_user([email, hash, profPic]) 
  delete createdUser[0].user_password 
  req.session.user = createdUser[0] 
  res.status(200).send(createdUser[0]) 
}); 

//Endpoint for checking if correct username and password has entered 

app.post('/auth/login', async (req, res) => {
  let {email, password} = req.body;
  let db = req.app.get('db')
  let userFound = await db.check_user_exists(email) 
  if (!userFound[0]) { 
    return res.status(200).send('Incorrect email. Please try again.'); 
  }
  let result = bcrypt.compareSync(password, userFound[0].user_password)
  if (result) { 
    delete userFound[0].user_password 
    req.session.user = userFound[0] 
    res.status(200).send(userFound[0]) 
  } else {
    return res.status(401).send('Incorrect email/password') 
  }
}); 

// //endpoint for logging out 
// app.get('/auth/logout', (req, res) => {
//   req.session.destroy();
//   res.sendStatus(200);
// }); // destroys the users session and sends a status of 200 

// // endpoint to check if the user is logged in and pull their info up if they are  
// app.get('/auth/user', (req, res) => {
//   if (req.session.user) {  // is there a user on session? 
//     res.status(200).send(req.session.user) // if there is send it up 
//   } else {
//     res.status(401).send('please log in') //if not send an error 
//   }
// });

const port = process.env.port || 4000;
app.listen(SERVER_PORT, () => {   
    console.log(`Purring on Port ${SERVER_PORT}`); 
});