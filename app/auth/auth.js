const jwt = require("jsonwebtoken");
const dbConfig = require("../config/db.config");

chequearToken = (token) => {
  let validacion;
  if (!token) {
    validacion = "No se incluyó un token!";
    }
  console.log("pre-decoded", token)

  jwt.verify(token, dbConfig.SECRETO, (err, decoded) => {
    if (err) {
        validacion =  "Token inválido";
        console.log("decoded", decoded)
    } else {
        decoded.resultado = "Autorizado";
        validacion = decoded;
    }
  });
  return validacion
};

module.exports = chequearToken;