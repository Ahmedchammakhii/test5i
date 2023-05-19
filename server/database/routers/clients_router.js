const clientsRouter=require("express").Router();
const clientController =require("../controllers/clients_controller");

clientsRouter.get("/",clientController.getClients)
// clientsRouter.get("/clients",clientController.getClients);
clientsRouter.get("/client/:id",clientController.getOneClient);
clientsRouter.delete("/delete/client/:id",clientController.deleteOneUser);
clientsRouter.post("/add/client",clientController.addUser)




module.exports=clientsRouter;
