const mongoose = require("mongoose");

const fileSchema = new mongoose.Schema({
    file : {
        data: Buffer,
        contentType: String
    },
   name :{
        type: String,
        required:true
   }


    
})

const File = mongoose.model("File" , fileSchema);

module.exports = File