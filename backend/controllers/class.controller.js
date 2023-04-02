const Class = require("../models/classModel");
const Withdrawal = require("../models/withdrawalModel");

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


      try {

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

exports.getWithdrawals = async (req,res) => {

    const withdrawals = await Withdrawal.find().populate("class","-students").populate("student","-password")

    res.json(withdrawals)
}

exports.withdrawalRequest = async (req,res) => {
    const { class_id, student_id, reason } = req.body;

    const withdrawal = await Withdrawal.create({class:class_id,student:student_id,reason });

    res.json({
        message : "withdrawal request added successfully",
        withdrawal
    })
}

