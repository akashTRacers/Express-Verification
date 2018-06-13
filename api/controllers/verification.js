class verificationController{

    static insertDetails(req,res){
        req.check('email', 'Invalid email address').isEmail();
        req.check('password', 'Password is invalid').isLength({min: 4}).equals(req.body.confirmPassword);
        req.check('mobile','enter valid mobile no').isNumeric();

        var errors=req.validationErrors();
        if(errors){
        req.session.errors=errors;
        req.session.success=false;
        }
        else{
            req.session.success=true;

        }
        res.redirect('/');

    }



}