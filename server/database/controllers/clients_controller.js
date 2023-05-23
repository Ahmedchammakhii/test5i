const {getUsers,createUser,getOneUser,deleteUser,getMonthlyUsers} = require('../models/clients_model')


exports.getClients=async(req,res)=>{
    try{
        let users=await getUsers()
        res.status(200).json(users)
    }
    catch(err){
        console.log(err)
    }
}
exports.getOneClient=async(req,res)=>{
    let userID=req.params.id
    try {
        let one=await getOneUser(userID)
        res.status(200).json(one)
    }
    catch(e){
        res.status(500).json({message:e})
    }
}
exports.deleteOneUser=async(req,res)=>{
    let userId=req.params.id
    try{
        let oneToBan=await deleteUser(userId)
        res.status(200).json(oneToBan)
    }
    catch(e){
        res.status(500).json({message:e})
    }
}
exports.addUser=async(req,res)=>{
let user = {first_name:req.body.fin,last_name:req.body.ln,email:req.body.email}
try {
    let addone=await createUser(user)
    res.status(200).json(addone)
}
catch(e){
    res.status(500).json({message:e})
}
}

exports.getMonthlyProspects=async(req,res)=>{
    try {
        let monthly=await getMonthlyUsers()
        res.status(200).json(monthly)
    }
    catch(e){
        res.status(500).json({message:e})
    }
}