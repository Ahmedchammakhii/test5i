const express = require('express')
const clientsRouter=require("../server/database/routers/clients_router")
const database = require('../server/database/firebase.js')
const cors=require('cors')
const PORT = 3000
const app = express()
app.use(express.json())
app.use("/api/clients",clientsRouter)
app.use(cors())







app.listen(PORT,()=>{
    console.log('listening on port 3000')
})