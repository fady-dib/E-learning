const mongoose = require("mongoose");
const studentSchema = new mongoose.Schema({
    student: {
        type : mongoose.Schema.Types.ObjectId,
        ref: "User",
        required:true
    }
})

const classSchema = new mongoose.Schema({
    name : {
        type :String,
        required : true
    },
    instructor :{
        type: String,
        required: true
    },

    students: [studentSchema]
    
})

const Class = mongoose.model("Class" , classSchema);

module.exports = Class