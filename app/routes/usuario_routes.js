module.exports = app => {

    const router = require("express").Router();
    
    const usuario = require("../controllers/usuario_controller.js")
       
    router.post("/registro", usuario.create);

    router.post("/login", usuario.login);

    app.use("/api/v1/", router)

    }
