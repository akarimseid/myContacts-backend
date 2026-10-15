// console.log(" this is express ");

const express = require("express");

//using dotenv
const dotenv = require("dotenv").config();

const app = express();

const port = process.env.PORT || 5000;

app.use(express.json())

app.use("/api/contacts", require("./routes/contactRoutes"))

app.listen(port, ()=> {
    console.log("app is running in port " + port);
})