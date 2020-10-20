const React = require('react');

function CadastraLogin(props){
    return  <section className="padding-10">
                <form method="POST" action="/api/usuarios/login" className="card padding-10 light-gray">
                    <h3 className="text-center padding-16">Login Administrador</h3>
                    <label for="email">
                        Email: 
                    </label>
                    <input type="email" placeholder="Digite o seu email" name="email" id="email" className="input border-bottom-eggplant-focus white" />
                    <label for="nome">
                        Senha: 
                    </label>
                    <input type="password" placeholder="Digite o seu senha" name="senha" id="senha" className="input border-bottom-eggplant-focus white" />
                    <input type="submit" className="btn btn-block eggplant" value="Cadastrar" />
                </form>               
            </section>;
}

module.exports = CadastraLogin;