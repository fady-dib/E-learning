const express = require("express");
const app = express();
require("dotenv").config();
require("./config/db.config")
console.log(process.env.PORT)

const port = process.env.PORT || 3002

app.listen(port, () => {
    console.log("Server is running on port ", port);
})
