const initVerification = require("./verification.js");
const openHome= require("./openHome.js");
const initRoutes = (app) => {

  console.log("inside index.js");
  app.use('/', openHome());
  app.use('/verify', initVerification()); 
}

module.exports=initRoutes;