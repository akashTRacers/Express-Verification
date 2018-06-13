const  path='../views/index.hbs';

class openHomeController{
  static getHome(req,res)
  {
    console.log("inside openHome Controller");
    res.render('index', { title: 'Form Validation', success: req.session.success, errors: req.session.errors });
    req.session.errors = null;
    req.session.destroy();
   
   } 
}
  
module.exports=openHomeController;