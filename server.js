require("dotenv-safe").config();

const { json, urlencoded } = require('body-parser');
const { createEngine } = require('express-react-views');
const express = require('express');
const mongoose = require('mongoose');
const cookieParser = require('cookie-parser');
const jwt = require("jsonwebtoken");
const cors = require('cors');

const app = express(); 
const options = { beautify: true };

let rotaPacote  = require('./routes/pacotes');
let rotaUsuario = require('./routes/usuarios');
let rotaViews = require('./routes/view');
let rotaCategoria = require('./routes/categorias');

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

app.set('views', __dirname+'/views');
app.set('view engine', 'jsx');

app.engine('jsx', createEngine(options));

app.use(json());
app.use(urlencoded());
app.use(cookieParser(process.env.SECRET));
app.use((req, res, next) => {
    console.warn("########################################");
    console.warn(`# Hora da requisição: ${Date.now()}`);
    console.warn(`# Método: ${req.method}`);
    console.warn(`# Url: ${req.url}`);
    // console.warn(`# Body: ${req.body}`);
    // console.warn(`# Cookies: ${Object.values(req.signedCookies)}`);
    console.warn("########################################");
    next();
});
app.use(cors({
    origin: "http://localhost:3000/",
    credentials: true
}));
app.use('/static', express.static(__dirname+'/public'))
app.use('/api/usuarios', rotaUsuario);
app.use('/api/pacotes', rotaPacote);
app.use('/api/categorias', rotaCategoria);
app.use('/view', rotaViews);

app.listen(process.env.PORT, ()=> {
    console.log(`Entrar: http://localhost:${process.env.PORT}`);
});