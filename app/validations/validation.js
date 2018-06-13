const express = require("express");
var router = express.Router()
//const verificationController = require("../controllers/verification.js");

const validateDetails = (req,res,next) => {
    console.log("inside validations");
    verificationRouter = express.Router(); 
    req.check('email', 'Invalid email address').isEmail();
    req.check('password', 'Password is invalid').isLength({min: 4}).equals(req.body.confirmPassword);
    req.check('mobile','enter valid mobile no').isNumeric();

    var errors=req.validationErrors();
    if(errors){
        req.session.errors=errors;
        req.session.success=false;
        res.redirect('/');
    }
    else{
     next();
    }
    /*
    else{
        verificationRouter.post('',verificationController.insertDetails);
    }*/

}
module.exports = {validateDetails};