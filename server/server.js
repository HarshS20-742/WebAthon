const express = require('express')
const app = express()
const port = 3000


app.get('/', (req, res) => {
  res.send('Hello World!')
})

app.listen(port, ()=>{
  console.log("listening")
})


const mongoose = require("mongoose");

const url = `mongodb+srv://Niraj:Niraj123@cluster0.ejahpmt.mongodb.net/test`;
mongoose.set('strictQuery', false);

mongoose.connect(process.env.MONGO_URL, () => {
  console.log("Connected to MongoDB");
});
