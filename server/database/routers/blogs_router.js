const blogsRouter=require("express").Router();;
const blogsController = require("../controllers/blogs_controller");

blogsRouter.get('/',blogsController.getAllBlogs);
blogsRouter.get('/oneblog/:id',blogsController.getBlog);
blogsRouter.post('/add',blogsController.addBlog);
blogsRouter.delete('/delete/:id',blogsController.deleteOneblog);
blogsRouter.get('/get/monthly/blogs',blogsController.monthlyBlogs);
blogsRouter.put('/update/blog/:id',blogsController.updateBlog)





module.exports= blogsRouter;