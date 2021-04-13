module.exports = app => {

    const router = require("express").Router();
    
    const usuario = require("../controllers/usuario_controller.js")
       
    router.post("/usuario", usuario.create);

    router.post("/login", usuario.login);

    router.get("/usuarios", usuario.findAll);

    router.get("/usuario", usuario.findOne);

    router.put("/usuario/:id", usuario.update);

    router.delete("/usuario/:id", usuario.delete);  

    app.use("/api/v1/", router)

    }
