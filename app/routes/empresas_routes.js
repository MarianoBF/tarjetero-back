module.exports = app => {

    const router = require("express").Router();
    
    const empresas = require("../controllers/empresas_controller.js")
       
    // router.post("/ubicacion", empresas.create);

    app.use("/api/v1/", router)

    }
