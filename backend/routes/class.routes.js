const { Router } = require("express");
const {createClass,enroll, getClasses, withdrawalRequest, getWithdrawals, rejectWithdrawal, approveWithdrawal} = require("../controllers/class.controller");

const router = Router();
const { adminMiddleware} = require("../middlewares/admin.middleware");

router.post("/add",adminMiddleware,createClass);
router.post("/enroll",enroll);
router.get("/classes", getClasses)
router.post("/withdrawal",withdrawalRequest);
router.get("/withdrawals",getWithdrawals);
router.post("/reject", adminMiddleware,rejectWithdrawal);
router.post("/approve",adminMiddleware,approveWithdrawal)


module.exports = router