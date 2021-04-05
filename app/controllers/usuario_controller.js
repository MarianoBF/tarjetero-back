const db = require("../models");
const Usuario = db.usuario;

exports.create = (req, res) => {
  try {
    const usuario = new Usuario({
      nombre: req.body.nombre,
      apellido: req.body.apellido,
      email: req.body.email,
      perfil: req.body.perfil,
      password: req.body.password
    });
    usuario.save(usuario)
    .then(data => console.log(data))
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
      const usuario = new Usuario({
        nombre: req.body.nombre,
        apellido: req.body.apellido,
        email: req.body.email,
        perfil: req.body.perfil,
        password: req.body.password
      });
      usuario.save(usuario)
      .then(data => console.log(data))
      .catch(error => console.log(error))
  
    } catch {
      res
        .status(400)
        .send(
          "Error"
        );
    }
  };