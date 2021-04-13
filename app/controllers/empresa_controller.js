const db = require("../models");
const Empresa = db.empresa;
const chequearToken = require("../auth/auth");

exports.create = (req, res) => {
  try {
    const validacion = chequearToken(
      req.headers["authorization"].split(" ")[1]
    );
    if (validacion.resultado === "Autorizado") {
      const empresa = new Empresa({
        nombre: req.body.nombre,
        direccion: req.body.direccion,
        pais: req.body.pais,
        ciudad: req.body.ciudad,
        email: req.body.email,
        telefono: req.body.telefono,
      });
      empresa
        .save()
        .then(data => res.send(data))
        .catch(error => console.log(error));
    } else {
      res.status(401).send("Token inválido");
    }
  } catch {
    res.status(400).send("Error");
  }
};

exports.findAll = (req, res) => {
  try {
    const validacion = chequearToken(
      req.headers["authorization"].split(" ")[1]
    );
    if (validacion.resultado === "Autorizado") {
      Empresa.find()
        .then(data => res.send(data))
        .catch(error => console.log(error));
    } else {
      res.status(401).send("Token inválido");
    }
  } catch {
    res.status(400).send("Error");
  }
};

exports.update = (req, res) => {
  try {
    const validacion = chequearToken(
      req.headers["authorization"].split(" ")[1]
    );
    if (validacion.resultado === "Autorizado") {
      Empresa.updateOne(
        {nombre: req.body.nombre},
        {
          $set: {
            nombre: req.body.nombre,
            direccion: req.body.direccion,
            pais: req.body.pais,
            ciudad: req.body.ciudad,
            email: req.body.email,
            telefono: req.body.telefono,
          },
        }
      )
        .then(data => res.send(data))
        .catch(error => console.log(error));
    } else {
      res.status(401).send("Token inválido");
    }
  } catch {
    res.status(400).send("Error");
  }
};

exports.delete = (req, res) => {
  try {
    const validacion = chequearToken(
      req.headers["authorization"].split(" ")[1]
    );
    if (validacion.resultado === "Autorizado") {
      Empresa.deleteOne({empresa: req.params.empresa})
        .then(data => res.send(data))
        .catch(error => console.log(error));
    } else {
      res.status(401).send("Token inválido");
    }
  } catch {
    res.status(400).send("Error");
  }
};

exports.deleteAll = (req, res) => {
  try {
    const validacion = chequearToken(
      req.headers["authorization"].split(" ")[1]
    );
    if (validacion.resultado === "Autorizado") {
      Empresa.deleteMany()
        .then(data => res.send(data))
        .catch(error => console.log(error));
    } else {
      res.status(401).send("Token inválido");
    }
  } catch {
    res.status(400).send("Error");
  }
};
