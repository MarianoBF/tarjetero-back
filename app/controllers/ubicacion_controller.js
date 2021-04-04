const db = require("../models");
const Ubicacion = db.ubicacion;

exports.create = (req, res) => {
  try {
    const ubicacion = new Ubicacion({
      region: req.body.region,
      pais: req.body.pais
    });
    ubicacion.save(ubicacion)
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
