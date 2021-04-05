const dbConfig = require("../config/db.config.js");

const mongoose = require("mongoose");
mongoose.Promise = global.Promise;

const db = {};
db.mongoose = mongoose;
db.url = dbConfig.URL;
db.contacto = require("./contacto_model.js")(mongoose);
db.empresa = require("./empresa_model.js")(mongoose);
db.ubicacion = require("./ubicacion_model.js")(mongoose);
db.usuario = require("./usuario_model.js")(mongoose);

module.exports = db;