module.exports = app => {

    const router = require("express").Router();
    
    const contacto = require("../controllers/contacto_controller.js")
    
    router.get("/contactos", contacto.findAll);

    router.get("/contacto", contacto.findOne);
    
    router.post("/contacto", contacto.create);

    router.put("/contacto/:id", contacto.update);

    router.delete("/contacto/:id", contacto.delete);

    router.delete("/contactos", contacto.deleteAll);

    app.use("/api/v1/", router)

    }
