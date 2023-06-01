const {signUpAsAdmin,signIn,signOut} = require('../admin/admin')


exports.signUp=async(req,res)=>{
    let email=req.body.email
    let password=req.body.password
    try{
        const newAdmin=await signUpAsAdmin(email,password);
        res.status(200).json(newAdmin)
    }
    catch(e){
        res.status(500).json({message:e})
    }
}
exports.signInAdmin=async(req,res)=>{
    let email=req.body.email
    let password=req.body.password 
    try{
        const session=await signIn(email,password);
        res.status(200).json(session)
    }
    catch(e){
        res.status(500).json({message:e})
    }
}
exports.logOut=async(req,res)=>{
    let uid=req.params.uid
    try {
       let sessionEnd= await signOut(uid)
        res.status(200).json(sessionEnd)
    }
    catch(e){
        res.status(500).json({message:e})
    }
}