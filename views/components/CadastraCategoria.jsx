const React = require('react');

function CadastraAdministrador(props){

    return  <section className="padding-10">
                <form method="POST" action="/api/categorias/" className="card padding-10 light-gray">
                    <h3 className="text-center padding-16">Cadastrar Categorias</h3>
                    <label for="categoria">
                        Categoria: 
                    </label>
    
                    <input type="text" placeholder="Digite a categoria" name="categoria" id="categoria" className="input border-bottom-eggplant-focus white" />
                    
                    <input type="submit" className="btn btn-block eggplant" value="Cadastrar" />
                </form>                           
            </section>;
}

module.exports = CadastraAdministrador;