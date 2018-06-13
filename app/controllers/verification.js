const articles= require('../models/students');
const express = require("express");
const router = express.Router();
class verificationController{

    static insertDetails(req,res){
        let article1 = new articles(req.body);
        article1.save((err, result) => {
        if (err) 
        throw err;
        console.log("saved to database");
        res.send("<H1>1 records inserted </H1>");
        });
    }
    

  

}
module.exports =verificationController;

