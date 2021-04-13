const db = require("../models");
const Usuario = db.usuario;
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");
const config = require("../config/db.config");

exports.create = (req, res) => {
  try {
    const validacion = chequearToken(
      req.headers["authorization"].split(" ")[1]
    );
    if (validacion.perfil === "Admin") {
      const usuario = new Usuario({
        nombre: req.body.nombre,
        apellido: req.body.apellido,
        email: req.body.email,
        perfil: req.body.perfil,
        password: bcrypt.hashSync(req.body.password, 5),
      });
      usuario
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

exports.login = (req, res) => {
  try {
    const validacion = chequearToken(
      req.headers["authorization"].split(" ")[1]
    );
    if (validacion.perfil === "Admin") {
      const usuarioLoguear = {
        email: req.body.email,
        password: req.body.password,
      };
      console.log(usuarioLoguear);
      Usuario.findOne({email: usuarioLoguear.email})
        .then(data => {
          console.log(data);

          const passwordOK = bcrypt.compareSync(
            usuarioLoguear.password,
            data.password
          );
          if (passwordOK) {
            const token = jwt.sign(
              {
                perfil: data.perfil,
                email: data.email,
                id_usuario: data._id,
              },
              config.SECRETO,
              {expiresIn: 86400}
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
        .catch(error => console.log(error));
    } else {
      res.status(401).send("Token inválido");
    }
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
    const validacion = chequearToken(
      req.headers["authorization"].split(" ")[1]
    );
    if (validacion.perfil === "Admin") {
      Usuario.find()
        .then(data => res.send(data))
        .catch(error => console.log(error));
    } else {
      res.status(401).send("Token inválido");
    }
  } catch {
    res.status(400).send("Error");
  }
};

exports.findOne = (req, res) => {
  try {
    const validacion = chequearToken(
      req.headers["authorization"].split(" ")[1]
    );
    if (validacion.perfil === "Admin") {
      Usuario.findOne({email: req.body.email})
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
    if (validacion.perfil === "Admin") {
      Usuario.updateOne(
        {id: req.body.id},
        {
          $set: {
            nombre: req.body.nombre,
            apellido: req.body.apellido,
            email: req.body.email,
            perfil: req.body.perfil,
            password: bcrypt.hashSync(req.body.password, 5),
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
    if (validacion.perfil === "Admin") {
      Usuario.deleteOne({_id: req.params.id})
        .then(data => res.send(data))
        .catch(error => console.log(error));
    } else {
      res.status(401).send("Token inválido");
    }
  } catch {
    res.status(400).send("Error");
  }
};
