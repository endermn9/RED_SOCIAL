require('dotenv').config();
const express = require('express');
const mongoose = require('mongoose');

const app = express();
app.use(express.json());

const {SERVER_PORT,SERVER_HOST,MONGODB_URI} = process.env;

mongoose.connect(MONGODB_URI).then(() => {
    app.listen(SERVER_PORT, ()  => {
        console.log(`la base de datos ha sido conectada y esta Iniciando la ruta ${SERVER_HOST} con el puerto ${SERVER_PORT} `);
    });
}).catch((HRROR) =>{
    console.log(HRROR);
});



