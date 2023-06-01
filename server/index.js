const express = require('express');
const database = require('../server/database/firebase.js');
const clientsRouter = require("../server/database/routers/clients_router");
const blogsRouter = require('../server/database/routers/blogs_router');
const adminRouter = require("../server/database/routers/admin_router.js");

const cors = require('cors');
const PORT = 3000;
const app = express();
app.use(express.json());
app.use(cors());
app.use("/api/clients", clientsRouter);
app.use('/api/blogs', blogsRouter);
app.use('/api/admin', adminRouter)





app.listen(PORT, () => {

    console.log('listening on port 3000')

});
