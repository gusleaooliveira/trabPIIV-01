const React = require('react');
const { useState, useEffect } = require('react');
const axios = require('axios');


function execute(){
    console.log("############################################");
    console.log("############################################");
    console.log("############################################");
    console.log("############################################");
    console.log("############################################");
    console.log("############################################");
    console.log("############################################");
    console.log("############################################");
    console.log("############################################");
    console.log("############################################");
    console.log("############################################");
    console.log("############################################");
}


function CadastraPacotes(props){
   return  <section className="padding-10" onLoad={execute}>

                <form method="POST" action="/api/pacotes/" className="card padding-10 light-gray">
                    <h3 className="text-center padding-16">Cadastrar Pacotes</h3>
                 
                    <select className="input border-bottom-eggplant-focus white" id="categorias">                               
                    </select>

                    <label for="nome">
                        Nome do pacote: 
                    </label>
                    <input type="text" placeholder="Digite o nome do pacote" name="nome" id="nome" className="input border-bottom-eggplant-focus white" />
                    
                    <label for="descricao">
                        Descrição: 
                    </label>
                    <textarea placeholder="Descreva o pacote" name="descricao" id="descricao" className="input border-bottom-eggplant-focus white" ></textarea>
                    
                    <label for="comandoInstalar">
                        Comando para instalar: 
                    </label>
                    <input type="text" placeholder="Digite o comando para instalar" name="comandoInstalar" id="comandoInstalar" className="input border-bottom-eggplant-focus white" />
                    
                    <label for="comandoApagar">
                        Comando para apagar: 
                    </label>
                    <input type="text" placeholder="Digite o comando para apagar" name="comandoApagar" id="comandoApagar" className="input border-bottom-eggplant-focus white" />
                    
                    <label for="versao">
                        Versão: 
                    </label>
                    <input type="number" placeholder="Digite a versão" min="1" name="vesao" id="versao" className="input border-bottom-eggplant-focus white" />
                    
                    <input type="submit" className="btn btn-block eggplant" value="Cadastrar" />
                </form>
                          
            </section>;
}

module.exports = CadastraPacotes;