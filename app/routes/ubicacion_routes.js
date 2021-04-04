module.exports = app => {

    const router = require("express").Router();
    
    const ubicacion = require("../controllers/ubicacion_controller.js")
       
    // router.post("/ubicacion", ubicacion.create);

    app.use("/api/v1/", router)

    }
