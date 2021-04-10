const db = require("../models");
const Contacto = db.contacto;

exports.create = (req, res) => {
  try {
    const contacto = new Contacto({
      nombre: req.body.nombre,
      apellido: req.body.apellido,
      empresa: req.body.empresa,
      cargo: req.body.cargo,
      email: req.body.email,
      region: req.body.region,
      ciudad: req.body.ciudad,
      interes: req.body.interes,
      canalPreferido: req.body.canalPreferido,
      canales: req.body.canales,
    });
    contacto
      .save()
      .then(data => res.send(data))
      .catch(error => console.log(error));
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
      .catch(error => console.log(error));
  } catch {
    res.status(400).send("Error");
  }
};

exports.findOne = (req, res) => {
  try {
    Contacto.find({
      $or: [{nombre: req.body.nombre}, {apellido: req.body.apellido}, {empresa: req.body.empresa}],
    })
      .then(data => res.send(data))
      .catch(error => console.log(error));
  } catch {
    res.status(400).send("Error");
  }
};

exports.update = (req, res) => {
  try {
    Contacto.updateOne(
      {_id: req.params.id},
      {
        $set: {
          nombre: req.body.nombre,
          apellido: req.body.apellido,
        },
      }
    )
      .then(data => res.send(data))
      .catch(error => console.log(error));
  } catch {
    res.status(400).send("Error");
  }
};

exports.delete = (req, res) => {
  try {
    Contacto.deleteOne({_id: req.params.id})
      .then(data => res.send(data))
      .catch(error => console.log(error));
  } catch {
    res.status(400).send("Error");
  }
};

exports.deleteAll = (req, res) => {
  try {
    Contacto.deleteMany()
      .then(data => res.send(data))
      .catch(error => console.log(error));
  } catch {
    res.status(400).send("Error");
  }
};
