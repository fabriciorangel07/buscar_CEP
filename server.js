const express = require('express');
const cors = require("cors");

const server = express();

let Correios = require('node-correios');
let correio = new Correios();

server.use(cors());

const porta = 3011;

server.listen(porta, () => console.log(`Servidor Rodando na porta: ${porta}`));


server.get('/', (req,res) => {
    console.log('Rota de Cep encontrada!!!');
    const { cep } = req.query;
    console.log('>>' + cep);

    correio.consultaCEP({ cep: cep })
    .then(result => {
        res.send( result ); 
        console.log( result );
        console.log( "Sucesso na consulta!!"); 
    })
    .catch(error => {
      console.log("Erro de Catch " + error);
    });

});

