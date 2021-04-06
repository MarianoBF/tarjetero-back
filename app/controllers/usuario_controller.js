const db = require("../models");
const Usuario = db.usuario;
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");
const config = require("../config/db.config");

exports.create = (req, res) => {
  try {
    const usuario = new Usuario({
      nombre: req.body.nombre,
      apellido: req.body.apellido,
      email: req.body.email,
      perfil: req.body.perfil,
      password: bcrypt.hashSync(req.body.password, 5)
    });
    usuario.save(usuario)
    .then(data => res.send(data))
    .catch(error => console.log(error))

  } catch {
    res
      .status(400)
      .send(
        "Error"
      );
  }
};

  exports.login = (req, res) => {
    try {
      const usuarioLoguear = {
        email: req.body.email,
        password: req.body.password,
      };
      console.log(usuarioLoguear)
      Usuario.findOne({ email: usuarioLoguear.email })
      .then(data => 
        {        console.log(data)

            const passwordOK = bcrypt.compareSync(usuarioLoguear.password, data.password);
            if (passwordOK) {
                const token = jwt.sign(
                  {
                    perfil: data.perfil,
                    email: data.email,
                    id_usuario: data._id,
                  },
                  config.SECRETO,
                  { expiresIn: 86400 }
                );
                res.send(token);
              } else {
                res
                  .status(400)
                  .send(
                    "Hubo un problema al loguear, revise los datos y vuelva a intentar en un momento"
                  );
              }
        })
        .catch(error => console.log(error))         
        } catch {
      res
        .status(400)
        .send(
          "Hubo un problema al loguear, revise los datos y vuelva a intentar en un momento"
        );
    }
  };
  


exports.findAll = (req, res) => {
    try {
      usuario.find()
      .then(data => res.send(data))
      .catch(error => console.log(error))
  
    } catch {
      res
        .status(400)
        .send(
          "Error"
        );
    }
  };
  
  