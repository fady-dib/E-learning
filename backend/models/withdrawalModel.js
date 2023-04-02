const mongoose = require("mongoose");

const withdrawalSchema = new mongoose.Schema({
    class : {
        type:mongoose.Schema.Types.ObjectId,
        ref: "Class",
        required : true
    },
    student :{
        type:mongoose.Schema.Types.ObjectId,
        ref: "User",
        required: true
    },

    reason:{
        type: String,
        required:true
    }
    
})

const Withdrawal = mongoose.model("Withdrawal" , withdrawalSchema);

module.exports = Withdrawal