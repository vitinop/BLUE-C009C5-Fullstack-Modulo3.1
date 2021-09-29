let arrayJogosFavorito= [
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
arrayJogosFavoritos.push(JogoFavorito)

const listaCards = document 

// função que renderiza os cards na tela 
arrayJogosFavoritos.map((JogoFavorito, index) => {
    listaCards.insertAdjacentHTML ('beforeend',
    `
    <section class=cardTemplate>

        <div class="cardGameIMG">
            <img src="${arrayJogosFavoritos.imagem}"
                alt="Capa do Jogo">
        </div>

        <div>
        <h1>${arrayJogosFavoritos.nome}</h1>
        <p class="cardInfoNota">${arrayJogosFavoritos.nota}</p>
            <p class="cardInfoGender">${arrayJogosFavoritos.genero}</h3>
        </div>

    </section>
    `
    )}




// Pegando valores de input no JS

const form = document.querySelector('.js-form')

form.addEventListener ("submit", (evento) => {
    evento.preventDefault(); 
const formNome= document.getElementById("gameName").value
console.log(formNome);
const formImg= document.getElementById("gameImage").value
console.log(formImg);
const formGender= document.getElementById("gameGender").value
console.log(formGender);
const formGrade= document.getElementById("gameGrade").value
console.log(formGrade);
} )




