const express = require('express');
const clientsRouter=require("../server/database/routers/clients_router");
const blogsRouter=require('../server/database/routers/blogs_router')
const database = require('../server/database/firebase.js');
const {getMonthlyUsers} =require('./database/models/clients_model')
const cors=require('cors');
const PORT = 3000;
const app = express();
app.use(express.json());
app.use(cors());
app.use("/api/clients",clientsRouter);
app.use('/api/blogs',blogsRouter);






app.listen(PORT,()=>{
    getMonthlyUsers().then(()=> console.log('listening on port 3000'))
   
});