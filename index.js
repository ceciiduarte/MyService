const express = require ('express');
const handlebars = require ('express-handlebars');
const path = require ('path');

const server = express();
server.use(express.static(path.join(__dirname, '/public')));
server.engine('handlebars', handlebars({defaultLayout:main}));
server.set('view-engine', 'handlebars');

server.get('/', function(req,res){
    res.render('home');
});

server.get('/cadastro', function(req,res){
    res.render('cadastro');
});