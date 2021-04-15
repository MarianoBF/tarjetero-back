const express = require("express");
const cors = require("cors");
require("dotenv").config();
const mongoose = require("mongoose");
mongoose.set("useNewUrlParser", true);
mongoose.set("useFindAndModify", false);
mongoose.set("useCreateIndex", true);
const bcrypt = require("bcryptjs");
const swaggerUI = require('swagger-ui-express');
const YAML = require('yamljs')
const docs = YAML.load('./spec.yaml');

const app = express();

app.use(express.json());
app.use(express.urlencoded({extended: true}));

const corsOptions = {
  origin: "http://localhost:3000",
};

app.use(cors(corsOptions));

app.use((req, res, next) => {
  console.log(req.body, req.path);
  next();
});

app.use('/docs', swaggerUI.serve, swaggerUI.setup(docs));

const db = require("./app/models");
const Usuario = db.usuario;

db.mongoose
  .connect(db.url, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then((dbase) => {
    console.log(dbase)
    console.log("Connected to Database");
    if (process.argv.includes("inicial")) {
      const usuario = new Usuario({
        nombre: "Admin",
        apellido: "Admin",
        email: "admin@admin.com",
        perfil: "Admin",
        password: "$2a$05$p.WwGv./t5duFX/qTkgIiesoWnCQsz.e3lmJxNWtVUGcNDeQS61CS",
      });
      usuario
        .save()
        .then(data => console.log(data))
        .catch(error => console.log(error));
    }
  })
  .catch(console.error);

require("./app/routes/contacto_routes")(app);
require("./app/routes/ubicacion_routes")(app);
require("./app/routes/empresas_routes")(app);
require("./app/routes/usuario_routes")(app);

app.listen(3500, function () {
  console.log("Escuchando en 3500");
});
