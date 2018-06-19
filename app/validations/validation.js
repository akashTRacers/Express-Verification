const express = require("express");
var router = express.Router()
//const verificationController = require("../controllers/verification.js");

const validateDetails = (req,res,next) => {
    console.log("inside validations");
    verificationRouter = express.Router(); 
    req.check('email', 'Invalid email address').isEmail();
    req.check('password', 'Password is invalid').isLength({min:2}).equals(req.body.confirmPassword);
    //req.check('mobile','enter valid mobile no').isLength({min:4});

    var errors=req.validationErrors();
    console.log("***************",typeof(errors));
    console.log("&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&==1",req.body);
    if(errors){
        req.session.errors=errors;
        req.session.success=false;
        //req.body=body
        console.log("&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&==2",req.body);
        res.render('index',{success: req.session.success, errors: req.session.errors,  body:req.body});
        console.log("&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&==3",req.body);
    }
    else{
        console.log("&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&==4",req.body);
     next();
    }
    /*
    else{
        verificationRouter.post('',verificationController.insertDetails);
    }*/

}
module.exports = {validateDetails};