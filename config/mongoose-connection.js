const mongoose = require('mongoose');
const dbgr = require("debug")("development:mongoose");
const config = require("config");


mongoose
.connect(`${config.get("MONGODB_URI")}/`)
.then(function(){
    dbgr.log("connected");
})
.catch(function(err){
    dbgr.log(err);
})

module.exports = mongoose.connection;