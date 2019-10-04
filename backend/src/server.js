const express = require('express');
const mongoose = require('mongoose');

const routes = require('./routes');

const app = express();

mongoose.connect('mongodb+srv://omnistack:omnistack@cluster0-1cjpa.mongodb.net/semana09?retryWrites=true&w=majority', {
    useNewUrlParser: true,
    useUnifiedTopology: true,
})

// GET, POST, PUT, DELETE

// req.query = Acessar query params (filtros)
// req.params = Acessar route params (edição, delete)
// req.body = Acessar corpo da requisição (criação, edição)

app.use(express.json());
app.use(routes);

app.listen(3333);