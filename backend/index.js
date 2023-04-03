const express = require("express");
const app = express();
require("dotenv").config();
const cors = require("cors");

app.use(express.json())


// const corsOptions = {
//     origin: "http://localhost:3002"
//   };

app.use(cors());

console.log(process.env.PORT)

const port = process.env.PORT || 3002

const authRouter = require("./routes/auth.routes")
app.use('/auth', authRouter)

const { authMiddleware } = require("./middlewares/auth.middleware");

const classRouter = require("./routes/class.routes")
app.use('/class',authMiddleware, classRouter)

const fileRouter = require("./routes/file.routes")
app.use('/file', authMiddleware, fileRouter);


app.listen(port, (err) => {
    if (err) console.log(err)
    console.log("Server is running on port ", port);
    require("./config/db.config")
})
