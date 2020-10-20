let React = require('react');

let HeaderLayout = require('./layouts/HeaderLayout');
let MenuLayout = require('./layouts/MenuLayout');
let FooterLayout = require('./layouts/FooterLayout');

let CadastraLogin = require('./components/CadastraLogin');

function Login(props){
    return (
        <div id="root">
            <HeaderLayout titulo="Login" subtitulo="Login" />
            <MenuLayout />
            <CadastraLogin />
            <FooterLayout />
        </div>
    );
}

module.exports = Login;