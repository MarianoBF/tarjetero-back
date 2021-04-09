const db = require("../models");
const Ubicacion = db.ubicacion;

exports.create = (req, res) => {
  try {
    const ubicacion = new Ubicacion({
      region: req.body.region,
      pais: req.body.pais,
      ciudad: req.body.ciudad,
    });
    ubicacion.save()
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
    Ubicacion.find()
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
    Ubicacion.updateOne(
      {ciudad: req.body.ciudad}
      , {$set: {
        region: req.body.region,
        pais: req.body.pais,
        ciudad: req.body.ciudad,
      }})
    .then(data => res.send(data))
    .catch(error=> console.log(error))

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
    console.log(req.params.ciudad)
    Ubicacion.deleteOne({ciudad: req.params.ciudad})
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
    Ubicacion.deleteMany()
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

