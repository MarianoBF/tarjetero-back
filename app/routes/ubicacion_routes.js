module.exports = app => {

    const router = require("express").Router();
    
    const ubicacion = require("../controllers/ubicacion_controller.js")
       
    router.post("/ubicacion", ubicacion.create);

    router.get("/ubicaciones", ubicacion.findAll);

    router.put("/ubicacion/", ubicacion.update);

    router.delete("/ubicacion/:ciudad", ubicacion.delete);

    router.delete("/ubicaciones", ubicacion.deleteAll);


    app.use("/api/v1/", router)

    }
