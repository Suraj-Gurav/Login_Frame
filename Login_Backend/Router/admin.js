const express=require("express");
const Router =express.Router();

Router.post("/add",require("./../Controller/admin").adminLogin);
Router.get("/",require("./../Controller/admin").loginValue);
Router.put("/:userId",require("./../Controller/admin").updateAdmin);
// Router.delete("/:userId",require("./../Controller/admin").deleteAdmin);

module.exports=Router;