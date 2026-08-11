//require("dotenv").config({path:"./.env"});
import dotenv from "dotenv";
//import DB_NAME from "./constants.js";
import app from "./app.js";
import connectDB from "./db/index.js";

dotenv.config({ path: "./.env" });

const PORT = process.env.PORT || 8000;

connectDB()
  .then(() => {
    app.listen(PORT, () => {
      console.log(`Server is running on port ${PORT}`);
    });
  })
  .catch((error) => {
    console.error("MongoDB connection failed:", error);
  });









// mongoose.connect(process.env.MONGODB_URL, {PORT=8000,
// MONGODB_URL="mongodb+srv://backend-kano:Lordkrishna06%40@linkedinclone.elatb8f.mongodb.net/"})

// function connectDB(){

// }
// connectDB()




























/*import express from express
const app=express()

(async()=>{
    try{
       await  mongoose.connect(`${process.env.MOGODB_URL}/${process.env.DB_NAME}/${
            DB_NAME
        }`)
        app.on("error: ",(error)=>{
            console.log("ERROR:",error)
        throw error
        })
        app.listen(process.env.PORT,()=>{
            console.log(`Server is running on port ${process.env.PORT}`)
        })

    }catch(error){
        console.error("ERROR:",error)
    }
})()*/