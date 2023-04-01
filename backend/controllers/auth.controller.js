const User = require("../models/userModel")

const register = async (req,res) => {
    const {first_name,last_name,email,password} = req.body;

    const existingUser = await User.findOne({ email });

    if (existingUser) return res.status(409).json({ message: "Email already exists" });

    const user = new User();
    user.first_name = first_name;
    user.last_name = last_name;
    user.password = password;
    user.email = email;

    await user.save();

    const {password: hashedPassword, ...newUser} = user.toJSON()
    res.status(201).json(newUser);


}

