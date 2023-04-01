const User = require("../models/userModel");
const jwt = require("jsonwebtoken");

exports.register = async (req,res) => {
    const {first_name,last_name,email,password} = req.body;

    const existing_user = await User.findOne({ email });

    if (existing_user) return res.status(409).json({ message: "Email already exists" });

    const user = new User();
    user.first_name = first_name;
    user.last_name = last_name;
    user.password = password;
    user.email = email;

    await user.save();

    const {password: hashed_password, ...new_user} = user.toJSON()
    res.status(201).json(new_user);


}

exports.login = async (req,res) => {
    const {email, password} = req.body;

    const existing_user = await User.findOne({ email });

    if (!existing_user) return res.status(404).json({ message: "Invalid credentials" });

    const is_matched = existing_user.matchPassword(password);
    if (!is_matched) return res.status(404).json({ message: "Invalid credentials" });

    const token = jwt.sign({ id: existing_user._id, email: existing_user.email }, process.env.SECRET_KEY);

    res.json({ token })

}

