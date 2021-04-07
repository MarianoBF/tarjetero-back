const db = require("../models");
const Empresa = db.empresa;

exports.create = (req, res) => {
  try {
    const empresa = new Empresa({
      nombre: req.body.nombre,
      direccion: req.body.direccion,
      pais: req.body.pais,
      ciudad: req.body.ciudad,
      email: req.body.email,
      telefono: req.body.telefono
    });
    empresa.save(empresa)
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

exports.findAll = (req, res) => {
  try {
    Empresa.find()
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

exports.update = (req, res) => {
  try {
     Empresa.updateOne(
      {nombre: req.body.nombre},
      {$set: {
        nombre: req.body.nombre,
        direccion: req.body.direccion,
        pais: req.body.pais,
        ciudad: req.body.ciudad,
        email: req.body.email,
        telefono: req.body.telefono
      }})
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


exports.delete = (req, res) => {
  try {
    const empresaBorrar = req.params.empresa
    Empresa.findOneAndDelete(empresaBorrar)
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


exports.deleteAll = (req, res) => {
  try {
    Empresa.deleteMany()
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
