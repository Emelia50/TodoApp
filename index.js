const express = require('express');
const mongoose = require('mongoose');
require('dotenv/config');
const todoModel = require('./models/todoModels');

const app = express();
//routes
app.get('/',(req, res)=>{
res.send('we are in the root folder');
});

app.get('/complete_todo',(req, res)=>{
    res.send('we are in the completed todos folder');
});
//datadase connection
mongoose.connect(process.env.DB_URL,()=>console.log('successfully connected'));
//port to listen to requests
app.listen(process.env.PORT_NUMBER || 2021);