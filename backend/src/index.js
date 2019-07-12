const express = require('express');
const mongoose = require('mongoose');
const path = require('path');
const cors = require('cors');

//express lida com rotas
const app = express();

//divide o servidor para eq ele suporte http e web socket
const server = require('http').Server(app);
const io = require('socket.io')(server);


mongoose.connect('mongodb+srv://moisesmengo:04121994@cluster0-nudjy.mongodb.net/test?retryWrites=true&w=majority', {
    useNewUrlParser: true,
});

//repassa essa informação para todas as rotas
app.use((req, res, next) => {
    req.io = io;

    next();
})

//todos os ips podem acessar esse backend
app.use(cors());

//rota para arquivos estáticos
app.use('/files', express.static(path.resolve(__dirname, '..', 'uploads')));

app.use(require('./routes'));

server.listen(3333);
