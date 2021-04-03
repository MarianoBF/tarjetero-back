const express = require('express');
const bodyParser = require('body-parser');
const MongoClient = require('mongodb').MongoClient

require('dotenv').config();

const app = express();

connectionString = `mongodb+srv://${process.env.DB_USER}:${process.env.DB_PASS}@${process.env.DB_HOST}/myFirstDatabase?retryWrites=true&w=majority`

console.log(connectionString)

MongoClient.connect(connectionString, {
    useUnifiedTopology: true})
    .then(client => {
        console.log('Connected to Database')
        const db = client.db('delilah-db')
        const contatoCollection = db.collection('contactos')
        app.use(bodyParser.urlencoded({ extended: true}))

        contatoCollection.insertOne({aaaaaa: "aaaaaaaaaaaaa"})
                .then(result=> {
                    console.log(result)
                })
        
        app.listen(3000, function() {
            console.log('Escuchando en 3000')
        })

    })
    .catch(console.error)
