const { Router } = require("express");
const {createClass,enroll, getClasses} = require("../controllers/class.controller");

const router = Router();

router.post("/add",createClass);
router.post("/enroll",enroll);
router.get("/classes", getClasses)


module.exports = router