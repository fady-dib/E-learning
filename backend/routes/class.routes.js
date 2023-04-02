const { Router } = require("express");
const {createClass,enroll, getClasses, withdrawalRequest, getWithdrawals} = require("../controllers/class.controller");

const router = Router();

router.post("/add",createClass);
router.post("/enroll",enroll);
router.get("/classes", getClasses)
router.post("/withdrawal",withdrawalRequest);
router.get("/withdrawals",getWithdrawals)


module.exports = router