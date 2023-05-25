const adminRouter=require("express").Router();;
const adminController = require("../controllers/admin_controller");
const {signIn}=require("../admin/admin.js")


adminRouter.post("/signUp",adminController.signUp)
adminRouter.post("/signIn",signIn)
adminRouter.get("/signOut/:uid", adminController.logOut)


module.exports=adminRouter