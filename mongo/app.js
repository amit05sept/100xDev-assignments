const express = require('express');
const mongoose = require('mongoose');

const app = express();


const dbURI = `mongodb+srv://gladiator:hY71vbIpc2YNfLSw@mongolearning.jh0csbb.mongodb.net/DBone?retryWrites=true&w=majority`;

mongoose.connect(dbURI)
.then(res=>app.listen(3000))
.catch(err=>console.log(err));



app.get('/',(req,res)=>{
    res.send({msg:"success"});
});