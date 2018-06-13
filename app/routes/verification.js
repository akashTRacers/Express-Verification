const express = require("express");
const verificationController = require("../controllers/verification");
const validationMiddleWare = require("../validations/validation");

const initVerification = () => {
    const verificationRouter = express.Router(); 
    verificationRouter.post('/', validationMiddleWare.validateDetails, verificationController.insertDetails);
    return verificationRouter;
}
module.exports=initVerification;
