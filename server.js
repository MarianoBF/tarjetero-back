const express = require("express");
const cors = require("cors");
require("dotenv").config();
const mongoose = require("mongoose");
mongoose.set('useNewUrlParser', true);
mongoose.set('useFindAndModify', false);
mongoose.set('useCreateIndex', true);

const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

const corsOptions = {
  origin: "http://localhost:3000",
};

app.use(cors(corsOptions));

app.use((req, res, next) => {
  console.log(req.body, req.path);
  next()
});

const db = require("./app/models");

db.mongoose
  .connect(db.url, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() => {
    console.log("Connected to Database");
  })
  .catch(console.error);

require("./app/routes/contacto_routes")(app);
require("./app/routes/ubicacion_routes")(app);
require("./app/routes/empresas_routes")(app);
require("./app/routes/usuario_routes")(app);

app.listen(3500, function () {
  console.log("Escuchando en 3500");
});
