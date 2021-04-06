module.exports = app => {

    const router = require("express").Router();
    
    const usuario = require("../controllers/usuario_controller.js")
       
    router.post("/usuario", usuario.create);

    router.post("/login", usuario.login);

    router.get("/usuarios", usuario.findAll);

    app.use("/api/v1/", router)

    }
