const db = require("../models");
const Empresa = db.empresa;

exports.create = (req, res) => {
  try {
    const empresa = new Empresa({
      razon_social: req.body.razon_social,
      direccion: req.body.direccion
    });
    empresa.save(empresa)
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
