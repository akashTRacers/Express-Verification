const students= require('../models/students');
const express = require("express");
//const  path='../views/index.pug';
const router = express.Router();
class verificationController{

    static insertDetails(req,res){
        console.log(">>>>>>>>>>>",req.body);
        let student1 = new students({
            name: req.body.name,
            email:req.body.email,
            mobile:req.body.mobile,
            password:req.body.password

        });

        student1.save((err,result) => {
        if (err) {
            console.log(">>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>",err.message,"<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<");
           /* Shubham sir
            const result = Object.keys(err).map(key => {
                const obj = {};
                obj[key] = err[key];
                return obj;
            });
            */
           
                var result = Object.keys(err).map(function(key) {
                return [err[key]];
                });
            console.log(result[2], "**********")
            res.render('index',{errors:result[2], body:req.body});

        }
        else{
        console.log("saved to database");
        res.send("<H1>1 records inserted </H1>");
        }
    });
        
    }
}
module.exports =verificationController;

