const express = require("express");
const openHomeController = require("../controllers/openHome.js");
const openHome = () => {
    console.log("inside openHome.js Routes")
    const verificationRouter = express.Router();
    verificationRouter.get('/', openHomeController.getHome);
    return verificationRouter;
}
module.exports= openHome;