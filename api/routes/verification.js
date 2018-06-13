const express = require("express");
const verificationController = require("../controllers/verifications.js");
const initVerification = () => {
    const verificationRouter = express.Router(); 
    verificationRouter.post('/', verificationController.insertDetails);
    return verificationRouter;
}
module.exports=initVerification;
