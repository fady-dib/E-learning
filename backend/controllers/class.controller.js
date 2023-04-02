const Class = require("../models/classModel");
const mongoose = require("mongoose");

exports.createClass = async (req,res) => {
    const { name , instructor} = req.body;

    const course = await Class.create({name,instructor });

    res.json({
        message : "Class Added successfully",
        class : course
    })
}

exports.enroll = async (req,res) => {
    const {class_id, student} = req.body;

    if (!mongoose.Types.ObjectId.isValid(class_id)) {
        return res.status(400).json({ error: "Invalid class_id" });
      }

      try {

        // const enroll = await Class.findOneAndUpdate({_id:class_id},{$push : {students : student_id}} );

        const class_exist = await Class.findById(class_id);

        if (!class_exist)  return res.status(404).json({ error: "Class not found" });

       class_exist.students.push({student});

        await class_exist.save();
          
        res.json({
            message: "Student enrolled successfully",
            class_exist
          });
   

      }
      catch (error) {
        res.status(500).json({ error: error.message });
      }

}

exports.getClasses = async(req,res) =>{

    const classes = await Class.find().populate("students.student","-password")

    res.json(classes)
}