const express = require('express');
const app = express();

//Definindo qual porta vamos usar
const port = 3000;

//Criando uma lista/array para os filmes

const todosJogos= [
    { 
    nome: 'Red Dead Redeptiom 2',
    imagem:'https://images5.alphacoders.com/917/917971.jpg' ,
    genero: 'Ação',
    nota: '10',
    situacao:'true',
    },

    { 
        nome: 'DOTA 2',
        imagem:'https://thesquad.com.br/wp-content/uploads/2019/09/dota2-capa.jpg' ,
        genero: 'MOBA',
        nota: '9',
        situacao:'true',
    }
]

//GET / home
app.get('/',(req, res) => {
    res.send("Bem vindos a lista de Jogos !");
});

//Res manda uma informação/uma mensagem
//Req espera alguma coisa

//Listando os filmes
app.get('/jogos',(req, res)=>{
    res.send(todosJogos);
});

//Usando o Req(recebendo uma informação do servidor)

app.get('/jogos/:id', (req, res)=>{
    const id = req.params.id -1; //cria um id e armazena
    const jogoByID = todosJogos[id]; //pega o filme da variavel filmes
    res.send(jogoByID); //retorna o id e o filme
});



//Escuta o serviço solicitado
app.listen(port, () => {
    console.info(`App está rodando em: http://localhost:${port}/`)
});