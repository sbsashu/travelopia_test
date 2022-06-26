const mongoose = require("mongoose");
const {dburl} = require("../config")


const db =  mongoose.connect(dburl, (err) => {
    if(err) throw err
    console.log("Db connected")
})

module.exports = {
 db
}