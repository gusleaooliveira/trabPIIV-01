const { json, urlencoded } = require('express');
const express = require('express');
const mongoose = require('mongoose');
const { createEngine } = require('express-react-views');
const cookieParser = require('cookie-parser');

const app = express(); 
const port = 3000;
const options = { beautify: true };

let rotaPacote  = require('./routes/pacotes');
let rotaUsuario = require('./routes/usuarios');
let rotaViews = require('./routes/view')

mongoose.connect('mongodb://localhost/api_pacotes', {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useFindAndModify: false
}).then(() => {
    console.log("###################");
    console.log("# DB Conectado! ");
    console.log("###################");
}).catch((err) => {
    console.error("################################");
    console.error("# Erro ao conectar com o BD! ");
    console.error(`# Erro => ${err}`);
    console.error("################################");
});

mongoose.Promise = global.Promise;


app.set('views', __dirname+'/views');
app.set('view engine', 'jsx');

app.engine('jsx', createEngine(options));

app.use(json());
app.use(urlencoded());
app.use(cookieParser());
app.use((req, res, next) => {
    console.warn("########################################");
    console.warn(`# Hora da requisição: ${Date.now()}`);
    console.warn(`# Método: ${req.method}`);
    console.warn("########################################");
    next();
});
app.use('/static', express.static(__dirname+'/public'))
app.use('/api/usuario', rotaUsuario);
app.use('/api/pacote', rotaPacote);
app.use('/view', rotaViews);

app.listen(port, ()=> {
    console.log(`Entrar: http://localhost:${port}`);
});