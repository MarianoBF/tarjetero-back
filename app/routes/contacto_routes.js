module.exports = app => {

    const router = require("express").Router();
    
    const contacto = require("../controllers/contacto_controller.js")
    
    router.get("/contactos", contacto.findAll);
    
    router.post("/contacto", contacto.create);

    // router.put("/usuario/:id_usuario", usuarios.update);

    // router.delete("/usuario/:id_usuario", usuarios.delete);

    // router.post("/usuario/login", usuarios.login);

    router.put("/contacto/", contacto.update);

    router.delete("/contacto/:contacto", contacto.delete);

    router.delete("/contactos", contacto.deleteAll);

    app.use("/api/v1/", router)

    }
