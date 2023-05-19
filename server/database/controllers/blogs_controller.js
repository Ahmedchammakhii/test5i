const {getBlogs,createBlog,getMonthlyBlogs,getOneBlog,deleteBlog,updateBlog} = require('../models/blogs_model');



exports.getAllBlogs=async(req,res)=>{
    try{
        let blogs=await getBlogs()
        res.status(200).json(blogs)
    }
    catch(err){
      res.status(500).json({message:err})
    }
}
exports.getBlog=async(req,res)=>{
    let blogID=req.params.id
    try {
        let one=await getOneBlog(blogID)
        res.status(200).json(one)
    }
    catch(e){
        res.status(500).json({message:e})
    }
}
exports.deleteOneblog=async(req,res)=>{
    let blogId=req.params.id
    try{
        let oneToDelete=await deleteBlog(blogId)
        res.status(200).json(oneToDelete)
    }
    catch(e){
        res.status(500).json({message:e})
    }
}
exports.addBlog=async(req,res)=>{
let blog = {title:req.body.title,description:req.body.description,image:req.body.image_url,created_at:req.body.created_at}
try {
    let addone=await createBlog(blog)
    res.status(200).json(addone)
}
catch(e){
    res.status(500).json({message:e})
}
}
exports.monthlyBlogs=async(req,res)=>{
    try{
        let blogs=await getMonthlyBlogs()
        res.status(200).json(blogs)
    }
    catch(e){
        res.status(500).json({message:e})
    }
}

exports.updateBlog=async(req,res)=>{
   let id=req.params.id
   let updatedData={
    title:req.body.title,
    description:req.body.description,
    image:req.body.image_url,
   }
    try{
        let blogtoupdate=await updateBlog(id,updatedData)
        res.status(200).json(blogtoupdate)
    }
    catch(e){
        res.status(500).json({message:e})
    }
}