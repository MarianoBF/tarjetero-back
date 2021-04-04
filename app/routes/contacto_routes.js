module.exports = app => {

    const router = require("express").Router();
    
    const usuarios = require("../controllers/contacto_controller.js")
    
    // router.get("/contactos", usuarios.findAll);
    
    router.post("/contacto", usuarios.create);

    // router.put("/usuario/:id_usuario", usuarios.update);

    // router.delete("/usuario/:id_usuario", usuarios.delete);

    // router.post("/usuario/login", usuarios.login);

    app.use("/api/v1/", router)

    }
