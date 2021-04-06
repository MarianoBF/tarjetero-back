module.exports = app => {

    const router = require("express").Router();
    
    const empresas = require("../controllers/empresa_controller.js")
       
    router.post("/empresa", empresas.create);

    router.get("/empresas", empresas.findAll);

    app.use("/api/v1/", router)

    }
