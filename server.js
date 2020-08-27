const express = require('express');
const cors = require('cors');
const mongoose = require('mongoose');
const requireDir = require('require-dir');

//Iniciar App
const app = express();
//Importar Models
requireDir('./src/models');
//Permite usar Json
app.use(express.json());
//Permite acessar de outras maquinas
app.use(express.cors());
//Iniciar DB
mongoose.connect('mongodb://localhost:27017/nodeapi', { 
    useNewUrlParser:true, 
    useUnifiedTopology: true 
});
//Rotas
app.use('/api', require("./src/routes"));
//Atualizações
app.listen(3001);