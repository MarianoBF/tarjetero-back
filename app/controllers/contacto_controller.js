const db = require("../models");
const Contacto = db.contacto;

exports.create = (req, res) => {
  try {
    const contacto = new Contacto({
      nombre: req.body.nombre,
      apellido: req.body.apellido
    });
    contacto.save(contacto)
    .then(data => res.send(data))
    .catch(error => console.log(error))
    
  } catch {
    res
      .status(400)
      .send(
        "Hubo un problema al crear el contacto, revise los datos y vuelva a intentar en un momento"
      );
  }
};


exports.findAll = (req, res) => {
  try {
    Contacto.find()
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
    const contacto = new Empresa({
      nombre: req.body.nombre,
      apellido: req.body.apellido
    });
    Contacto.findOneAndUpdate({nombre: contacto.nombre, apellido: contacto.apellido})
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
    const contactoBorrar = req.params.contacto
    Contacto.findOneAndDelete(contactoBorrar)
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
    Contacto.deleteMany()
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
