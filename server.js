const express = require("express");
// const MongoClient = require('mongodb').MongoClient
const cors = require("cors");
require("dotenv").config();

const app = express();

// connectionString = `mongodb+srv://${process.env.DB_USER}:${process.env.DB_PASS}@${process.env.DB_HOST}/myFirstDatabase?retryWrites=true&w=majority`

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
    // const db = client.db('delilah-db')
    // const contatoCollection = db.collection('contactos')

    // contatoCollection.insertOne({aaaaaa: "aaaaaaaaaaaaa"})
    //         .then(result=> {
    //             console.log(result)
    //         })
  })
  .catch(console.error);

require("./app/routes/contacto_routes")(app);
require("./app/routes/ubicacion_routes")(app);
require("./app/routes/empresas_routes")(app);
require("./app/routes/usuario_routes")(app);

app.listen(3500, function () {
  console.log("Escuchando en 3500");
});
