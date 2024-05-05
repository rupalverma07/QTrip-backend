// const express = require('express')
const app = require("./app")
const mongoose = require('mongoose')
require('dotenv').config()

// const app = express();

mongoose.connect(process.env.MONGODB_URL).then(()=>{
    console.log('connected to MongoDb')
}).catch((error)=>{
    console.log('error')
});


app.listen(process.env.PORT,()=>{
    console.log(`Server is running on ${process.env.PORT}` )
})