const express = require('express');
const mongoose = require("mongoose");
const cors = require('cors');
const Router = require('./Route/Product-Route');
const app = express();
require('dotenv').config();
const PORT = process.env.PORT || 4000;
const CategoryRoute = require('./Route/Category-Route');

app.use(cors());
app.use(express.urlencoded({extended : true}));
app.use("/api/v1",Router);
app.use("/api/v1",CategoryRoute);
// app.use(express.json());

mongoose.connect(process.env.MONGO_DB)
.then(() => {
    console.log("Database connect") 
})
.catch((data) =>{
    console.log(data);
})




app.get("*",(req, res) => {
    res.send("<a href='/'>Go Back</a>");
})
app.listen(PORT, ()=>{
    console.log("Sever Started : ",PORT);
})
