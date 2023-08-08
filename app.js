const express = require('express');
const mongoose = require('mongoose');
const dotenv =require('dotenv');

const app =express();
if(process.env.NODE_ENV !== 'production'){dotenv.config();}
const PORT = process.env.PORT || 3000;
mongoose.set('strictQuery',false);

app.use(express.json());
app.use(express.urlencoded({extended: true}));


// Replace the uri string with your connection string.
const uri = "mongodb+srv://captin:Typer800@cluster0.lqqlats.mongodb.net/?retryWrites=true&w=majority"
const start = async() =>{
 try{ 
  await mongoose.connect('mongodb+srv://captin:Typer800@cluster0.lqqlats.mongodb.net/?retryWrites=true&w=majority');
  app.listen(PORT,()=>{
    console.log('App listening on port '+ PORT);
  })
   }catch(e){
    console.log(e.message)
   }
}
start();
