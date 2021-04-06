module.exports = app => {

    const router = require("express").Router();
    
    const ubicacion = require("../controllers/ubicacion_controller.js")
       
    router.post("/ubicacion", ubicacion.create);

    router.get("/ubicaciones", ubicacion.findAll);

    app.use("/api/v1/", router)

    }
