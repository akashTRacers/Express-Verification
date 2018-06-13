const express = require("express");
const validations=require('../validations/validation.js');
//const verificationController = require("../controllers/verification.js");
const initVerification = () => {
    const verificationRouter = express.Router(); 
    //verificationRouter.post('/', validations.checkDetails());
    verificationRouter.use(validations);

    return verificationRouter;
}
module.exports=initVerification;
