const express = require('express');
// const MongoClient = require('mongodb').MongoClient

require('dotenv').config();

const app = express();

// connectionString = `mongodb+srv://${process.env.DB_USER}:${process.env.DB_PASS}@${process.env.DB_HOST}/myFirstDatabase?retryWrites=true&w=majority`

app.use(express.json())
app.use(express.urlencoded({ extended: true}))

const db = require("./app/models");

db.mongoose.connect(db.url, {
    useNewUrlParser: true,
    useUnifiedTopology: true})
    .then( ()=> {
        console.log('Connected to Database')
        // const db = client.db('delilah-db')
        // const contatoCollection = db.collection('contactos')

        // contatoCollection.insertOne({aaaaaa: "aaaaaaaaaaaaa"})
        //         .then(result=> {
        //             console.log(result)
        //         })
        


    })
    .catch(console.error)


require("./app/routes/contacto_routes")(app);

app.listen(3000, function() {
    console.log('Escuchando en 3000')
})