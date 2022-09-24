const express = require('express');
const app = express();
const mongoose = require("mongoose");
const Response = require('./utlis/response')
const task  = require('./routes/userRoutes');
const cors = require('cors')
app.use(express.json());


app.use(cors())



app.use(task);










mongoose.connect('mongodb://127.0.0.1:27017/myProject' ,()=> console.log(new Response("" , "" ,"Database Connected",{})));




app.listen(3001 , ()=> console.log(new Response("","","Server Connected" , {url : "http://localhost:3001"})));