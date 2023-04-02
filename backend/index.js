const express = require("express");
const app = express();
require("dotenv").config();
app.use(express.json())


console.log(process.env.PORT)

const port = process.env.PORT || 3002

const authRouter = require("./routes/auth.routes")
app.use('/auth', authRouter)

const classRouter = require("./routes/class.routes")
app.use('/class', classRouter)

app.listen(port, (err) => {
    if (err) console.log(err)
    console.log("Server is running on port ", port);
    require("./config/db.config")
})
