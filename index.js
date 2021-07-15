const express = require('express');
const routes = require('./routes')
const app = express();
const mongoose = require('mongoose')

app.use(express.json())
let port = 3000;

const dbPath = 'mongodb://localhost/robo2-1-2021';
const options = {
    userNewUrlParser: true,
    useUnifiedTopoligy:true
}
const mongo = mongoose.connect(dbPath,options)
mongo.then(()=>{
    console.log("correcto")
},error=>{
    console.log(error)
})

app.use('/',routes);


app.listen(port,()=>{
    console.log("servidor corriendo")
})
