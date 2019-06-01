require('dotenv').config();
const express = require('express'); 
const massive = require('massive'); 
const axios = require('axios');  
const controller = require("./server/controller");
const session = require("express-session");


const app = express(); 
let { SERVER_PORT, SESSION_SECRET } = process.env;

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
    .catch(err => console.log(err)); 

const port = process.env.port || 4000;
app.listen(SERVER_PORT, () => {   
    console.log(`Purring on Port ${SERVER_PORT}`); 
});