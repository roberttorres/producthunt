const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const requireDir = require('require-dir');

// Iniciando o App
const app = express();
app.use(express.json());
app.use(cors());

//Iniciando o DB
mongoose.connect('mongodb://localhost:27017/nodeapi', { 
    useNewUrlParser: true }
);

//require('./src/models/Product');
requireDir('./src/models');



//Rotas
app.use("/api", require('./src/routes'));

app.listen(3001);  // para nossa aplicação ouvir a porta '3001';
