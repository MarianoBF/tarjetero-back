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
const cookieParser = require('cookie-parser');


const app = express();

app.use(express.json());
app.use(express.urlencoded({extended: true}));

const corsOptions = {
  credentials: true,
  origin: ["https://marianobf.github.io", "http://localhost:3000"]
};

app.use(cors(corsOptions));

app.use(cookieParser());

app.use((req, res, next) => {
  console.log(req.body, req.path);
  console.log(req.cookies.token)
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
  .then(() => {
    console.log("Connected to Database");
    if (process.argv.includes("inicial")) {
      const usuario = new Usuario({
        nombre: "Admin",
        apellido: "Admin",
        email: "admin@admin.com",
        perfil: "Admin",
        password: bcrypt.hashSync('admin',5),
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

app.get("/", (req, res) => {
  res.json({message: "Servicio operativo"});
});

app.listen(process.env.PORT, function () {
  console.log("Escuchando en: " + process.env.PORT);
});
