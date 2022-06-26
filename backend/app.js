const express = require("express");
const app = express();
const {port, dburl} = require("./config");
const routes = require("./route");
const mongoose = require("mongoose");
const cors =require('cors')

mongoose.connect(dburl, (err) => {
    if(err) throw err
    console.log("Db connected")
})

app.use(express.json({}))
app.use(cors())
app.use('/api', routes)

app.listen(port, () => console.log("Server is running", port))