const  path='../views/index.pug';
const students= require('../models/students.js');
class openHomeController{
  static getHome(req,res)
  {
    console.log("inside openHome Controller", req.body);

      res.render('index', { title: 'Form Validation', success: req.session.success, errors: req.session.errors, body:req.body});
      req.session.errors = null;
      req.session.destroy();
  }
    
} 

  
module.exports=openHomeController;