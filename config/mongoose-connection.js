const mongoose = require('mongoose');

mongoose
.connect("mongodb://12.0.0.0:27017/scatch")
.then(function(){
    console.log("connected");
})
.catch(function(err){
    console.log(err);
})

module.exports = mongoose.connection;