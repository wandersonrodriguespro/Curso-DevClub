let opcaoPlayer01
let opcaoPlayer02
let resultPlay01 = 0
let resultPlay02 = 0

const btnPlayer01 = document.getElementById('btn-jogador1')
const btnPlayer02 = document.getElementById('btn-jogador2')
const opacityResult = document.querySelector('button')
const pointPlay1 = document.querySelector('.point-play1')
const pointPlay2 = document.querySelector('.point-play2')
const container1 = document.querySelector('.container-player1')
const container2 = document.querySelector('.container-player2')
const containerResultado = document.querySelector('.container-resultado')
const vsResult = document.querySelector('.vsResult')
const load = document.querySelector('.load')


const result = document.querySelector('.result')
const reset = document.getElementById('reset')

const choicesFrases = [ 
    'Eu até queria ser mais rápido mas o bicicleta quebrou',
    'Uma xicara de café cairia tão bem agora 🤗',
    'Pode puxar o banquinho, acho que vai demorar',
    'mais rápido que uma tartaruga com cafeína.',
    'Estamos dando um trato nos bits bagunçados.',
    'mais rápido que o flash na maratona.',
    'Como quem espera café na segunda-feira.',
    'Não é mágica, é tecnologia!',
    'Espera aí, estamos aquecendo os bits',
    'Estamos treinando hamsters para rodar mais rápido.',
    'Carregando alegria e alguns bits perdidos pelo caminho.',
    'Porque até a tecnologia precisa de um café.',
    'Vou ali pegar um café.',
    'Estamos convencendo os bits a correrem mais rápido.',
    'Mais lento que um caracol com peso na consciência.',
    'Mais eficiente que a desculpa do meu despertador.',
    'Como quem espera a senha do Wi-Fi na casa do amigo.',
    'Tão rápido quanto um raio, mas com menos trovões.',
    'Espera aí, estamos contando piadas para animar os servidores.',
    'Estamos ajustando o cronômetro do tempo.',
    'Carregando sorrisos e um pouco de chocolate, só para garantir.',
    'Como quem espera o ketchup descer na garrafa.',
    'Estamos afinando as cordas do ukulele do servidor.',
    'Estamos contando piadas internas que só o servidor entende.',
    'Carregando tão rápido quanto um raio, mas sem o trovão para não assustar.',
    'Como uma tartaruga com pressa.',
    'Carregando alegria e um sorriso no pacote.',
    'Mais ágil que um pinguim no gelo.',
    'Como quem espera a chuva no verão.',
    'Carregando otimismo em doses concentradas.',
    'Estamos ajustando os ponteiros do riso.',
    'Como quem espera o bolo no forno.',
    'Aguarde ou conte até 100, se preferir.',
    'Estamos desenrolando o tapete vermelho digital.',
    'Aguarde um momento ou faça uma dança rápida enquanto espera',
    'Mais rápido que a água fervendo para o café.',
    'Aguarde com calma... vou ser mais rápido que uma formiga no piquenique.',
    'Como quem espera o elevador chegar no último andar.',
    'Mais rápido que uma soneca de gato.',
    'Aguarde ou faça uma careta engraçada enquanto espera.',
    'Estamos ajustando os ponteiros do relógio cibernético.',
    'Mais rápido que uma ideia brilhante.',
    'Estamos contando piadas internas para animar o processo.',
    'Mais rápido que um abraço de urso.',
    'Mais rápido que um pensamento positivo.',
    'Aguarde um pouco ou conte até três suspiros profundos.',
    'Mais rápido que a espera pelo fim de semana.',
    'Estamos penteando os bits para um visual mais elegante.',
    'Aguarde estamos dando uma aula de ioga aos bytes.',
    'Aguarde ou faça um breve alongamento.',
    'Estamos dando um polimento nos pixels.',
    'Aguarde ou aproveite para fazer uma poesia rápida.',
    'Como quem espera a sobremesa depois do jantar.',
    'Mais rápido que um caracol após a chuva.',
    'Aguarde... estamos soltando balões virtuais para animar.',
    'Aguarde ou cante uma música curta enquanto espera.',
    'Aguarde um pouco mais... ou faça uma careta para o tédio.',
    'Aguarde... estamos contando estrelas cadentes para sorte extra.',
]


const getRandomFrase = () => {
    const randomIndex = Math.floor(Math.random() * choicesFrases.length);
    return choicesFrases[randomIndex];
}

// const fraseEscolhida = getRandomFrase();



const opPlayer01 = (op01) => {
    opcaoPlayer01 = op01
    verificarJogadores()
}

const opPlayer02 = (op02) => {
    opcaoPlayer02 = op02
    verificarJogadores()
}



const verificarJogadores = () => {

    if (opcaoPlayer01 && !opcaoPlayer02) {

        container1.style.display = 'none'
        container2.style.display = 'flex'
        result.innerHTML = ('Aguardando Player 2')
        result.style.border = '1px solid'
        

    }else if (opcaoPlayer01 && opcaoPlayer02) {
        container2.style.display = 'none'
        containerResultado.style.display = 'flex'
        

        result.innerHTML = ('Aguardando ...')
        result.style.border = '1px solid'
        vsResult.innerHTML = getRandomFrase()

        
        
    }
    setTimeout(jogar, 5000)
}


const jogar = () => {

    if (
        opcaoPlayer01 == 'rock' && opcaoPlayer02 == 'rock' ||
        opcaoPlayer01 == 'paper' && opcaoPlayer02 == 'paper' ||
        opcaoPlayer01 == 'scissor' && opcaoPlayer02 == 'scissor') {

        result.innerHTML = 'Empate'
        result.style.border = '1px solid'

        vsResult.innerHTML = 'X'
        load.style.display = 'none'
            
        destacar()
        opcaoPlayer01 = null
        opcaoPlayer02 = null


    } else if (
        opcaoPlayer01 == 'rock' && opcaoPlayer02 == 'scissor' ||
        opcaoPlayer01 == 'paper' && opcaoPlayer02 == 'rock' ||
        opcaoPlayer01 == 'scissor' && opcaoPlayer02 == 'paper') {


        resultPlay01++
        pointPlay1.innerHTML = resultPlay01
        result.innerHTML = 'Vitória Player 01'
        result.style.backgroundColor = '#4D80D8'
        result.style.color = '#ffffff'

        vsResult.innerHTML = 'X'
        load.style.display = 'none'

        destacar()
        opcaoPlayer01 = null
        opcaoPlayer02 = null
    } else if (
        opcaoPlayer01 == 'rock' && opcaoPlayer02 == 'paper' ||
        opcaoPlayer01 == 'paper' && opcaoPlayer02 == 'scissor' ||
        opcaoPlayer01 == 'scissor' && opcaoPlayer02 == 'rock') {


        resultPlay02++
        pointPlay2.innerHTML = resultPlay02
        result.innerHTML = 'Vitória Player 02'
        result.style.backgroundColor = '#E0470F'
        result.style.color = '#ffffff'
        
        vsResult.innerHTML = 'X'
        load.style.display = 'none'

        destacar()
        opcaoPlayer01 = null
        opcaoPlayer02 = null
    }

}


const p1RockResult = document.querySelector('.p1rock-result')
const p1PaperResult = document.querySelector('.p1paper-result')
const p1ScissorResult = document.querySelector('.p1scissor-result')
const p2RockResult = document.querySelector('.p2rock-result')
const p2PaperResult = document.querySelector('.p2paper-result')
const p2ScissorResult = document.querySelector('.p2scissor-result')



function destacar() {

    if (opcaoPlayer01 == 'rock' && opcaoPlayer02 == 'rock') {

        p1RockResult.style.display = 'flex'
        p2RockResult.style.display = 'flex'
        opcaoPlayer01 = null
        opcaoPlayer02 = null


    } else if (opcaoPlayer01 == 'paper' && opcaoPlayer02 == 'paper') {
        p1PaperResult.style.display = 'flex'
        p2PaperResult.style.display = 'flex'
        opcaoPlayer01 = null
        opcaoPlayer02 = null


    } else if (opcaoPlayer01 == 'scissor' && opcaoPlayer02 == 'scissor') {
        
        p1ScissorResult.style.display = 'flex'
        p2ScissorResult.style.display = 'flex'
        opcaoPlayer01 = null
        opcaoPlayer02 = null


    } else if (opcaoPlayer01 == 'rock' && opcaoPlayer02 == 'scissor') {

        p1RockResult.style.display = 'flex'
        p2ScissorResult.style.display  = 'flex'
        opcaoPlayer01 = null
        opcaoPlayer02 = null


    } else if (opcaoPlayer01 == 'rock' && opcaoPlayer02 == 'paper') {
        
        p1RockResult.style.display = 'flex'
        p2PaperResult.style.display = 'flex'
        opcaoPlayer01 = null
        opcaoPlayer02 = null


    } else if (opcaoPlayer01 == 'paper' && opcaoPlayer02 == 'rock') {
        
        p2RockResult.style.display = 'flex'
        p1PaperResult.style.display = 'flex'
        opcaoPlayer01 = null
        opcaoPlayer02 = null

    } else if (opcaoPlayer01 == 'paper' && opcaoPlayer02 == 'scissor') {

        p1PaperResult.style.display = 'flex'
        p2ScissorResult.style.display = 'flex'
        opcaoPlayer01 = null
        opcaoPlayer02 = null

    } else if (opcaoPlayer01 == 'scissor' && opcaoPlayer02 == 'rock') {

        p1ScissorResult.style.display = 'flex'
        p2RockResult.style.display = 'flex'
        opcaoPlayer01 = null
        opcaoPlayer02 = null

    } else if (opcaoPlayer01 == 'scissor' && opcaoPlayer02 == 'paper') {

        p1ScissorResult.style.display = 'flex'
        p2PaperResult.style.display = 'flex'
        opcaoPlayer01 = null
        opcaoPlayer02 = null

    }
}


reset.addEventListener('click', () => {
    
    containerResultado.style.display = 'none'
    container1.style.display = 'flex'
    vsResult.innerHTML = 'Clique em Ver Resultado'
    load.style.display = 'flex'

    opcaoPlayer01 = ''
    opcaoPlayer02 = ''
    resultPlay01 = 0
    resultPlay02 = 0

    

    pointPlay1.innerHTML = resultPlay01
    pointPlay2.innerHTML = resultPlay02
    result.style.backgroundColor = '#ffffff'
    result.style.color = '#000000'
    result.style.border = '1px solid'
    result.innerHTML = 'Aguardando...'

    resetDisplay()

})

function resetDisplay() {
    p2PaperResult.style.display = 'none'
    p2ScissorResult.style.display = 'none'
    p2RockResult.style.display = 'none'
    p1RockResult.style.display = 'none'
    p1PaperResult.style.display = 'none'
    p1ScissorResult.style.display = 'none'
}

const limparDestaque = document.querySelector('.limpar-novamente')


limparDestaque.addEventListener('click', () => {
    containerResultado.style.display = 'none'
    container1.style.display = 'flex'
    opcaoPlayer01 = null
    opcaoPlayer02 = null
    result.innerHTML = 'Aguardando...'
    result.style.backgroundColor = '#ffffff'
    result.style.color = '#000000'
    result.style.border = '1px solid'
    vsResult.innerHTML = 'Clique em Ver Resultado'
    load.style.display = 'flex'
    resetDisplay()

})