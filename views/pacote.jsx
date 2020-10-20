let React = require('react');

let HeaderLayout = require('./layouts/HeaderLayout');
let MenuLayout = require('./layouts/MenuLayout');
let FooterLayout = require('./layouts/FooterLayout');

let CadastraCategoria = require('./components/CadastraCategoria');
let CadastraPacotes = require('./components/CadastraPacotes');

function Pacote(props){
    return (
        <div id="root">
            <HeaderLayout titulo="Pacote" subtitulo="Administração dos pacotes Linux" />
            <MenuLayout />

            <CadastraCategoria />
            <CadastraPacotes />

            <FooterLayout />
        </div>
    );
}

module.exports = Pacote;