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

    const withdrawals = await Withdrawal.find({"status":"pending"}).populate("class","-students").populate("student","-password")

    res.json(withdrawals)
}

exports.withdrawalRequest = async (req,res) => {
    const { class_id, student_id, reason } = req.body;

    const status = "pending"
    try {
    const withdrawal = await Withdrawal.create({class:class_id,student:student_id,reason, status:status });

    res.json({
        message : "withdrawal request added successfully",
        withdrawal
    })
}
catch (err) {
    console.error(err);
    res.status(500).json({ message: "Internal server error" });
  }
}

exports.rejectWithdrawal = async (req,res) => {
    const {withdrawal_id} = req.body
    try{
    const reject = await Withdrawal.findByIdAndUpdate({_id : withdrawal_id}, {$set : {status:"rejected"}},{new:true})
    res.json(reject)
    }
    catch (err) {
        console.error(err);
        res.status(500).json({ message: "Internal server error" });
      }

}

exports.approveWithdrawal = async(req,res) => {
    const {withdrawal_id} = req.body

    try{
        const approve = await Withdrawal.findByIdAndUpdate({_id : withdrawal_id}, {$set : {status:"approved"}},{new:true})
        res.json(approve)
        }
        catch (err) {
            console.error(err);
            res.status(500).json({ message: "Internal server error" });
          }
}

