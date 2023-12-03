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

    }// else if (!opcaoPlayer01 && opcaoPlayer02) {

    //     result.innerHTML = ('Aguardando Player 1')
    //     result.style.border = '1px solid'

    // } 
    else if (opcaoPlayer01 && opcaoPlayer02) {
        container2.style.display = 'none'
        containerResultado.style.display = 'flex'

        result.innerHTML = ('Aguardando ...')
        result.style.border = '1px solid'
    }
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
        // opcaoPlayer01 = null
        // opcaoPlayer02 = null


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
        // opcaoPlayer01 = null
        // opcaoPlayer02 = null
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
        // opcaoPlayer01 = null
        // opcaoPlayer02 = null
    }

}
// const p1Rock = document.querySelector('.p1rock')
// const p1Paper = document.querySelector('.p1paper')
// const p1Scissor = document.querySelector('.p1scissor')
// const p2Rock = document.querySelector('.p2rock')
// const p2Paper = document.querySelector('.p2paper')
// const p2Scissor = document.querySelector('.p2scissor')


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


    } else if (opcaoPlayer01 == 'paper' && opcaoPlayer02 == 'paper') {
        p1PaperResult.style.display = 'flex'
        p2PaperResult.style.display = 'flex'


    } else if (opcaoPlayer01 == 'scissor' && opcaoPlayer02 == 'scissor') {
        
        p1ScissorResult.style.display = 'flex'
        p2ScissorResult.style.display = 'flex'


    } else if (opcaoPlayer01 == 'rock' && opcaoPlayer02 == 'scissor') {

        p1RockResult.style.display = 'flex'
        p2ScissorResult.style.display  = 'flex'


    } else if (opcaoPlayer01 == 'rock' && opcaoPlayer02 == 'paper') {
        
        p1RockResult.style.display = 'flex'
        p2PaperResult.style.display = 'flex'


    } else if (opcaoPlayer01 == 'paper' && opcaoPlayer02 == 'rock') {
        
        p2RockResult.style.display = 'flex'
        p1PaperResult.style.display = 'flex'

    } else if (opcaoPlayer01 == 'paper' && opcaoPlayer02 == 'scissor') {

        p1PaperResult.style.display = 'flex'
        p2ScissorResult.style.display = 'flex'

    } else if (opcaoPlayer01 == 'scissor' && opcaoPlayer02 == 'rock') {

        p1ScissorResult.style.display = 'flex'
        p2RockResult.style.display = 'flex'

    } else if (opcaoPlayer01 == 'scissor' && opcaoPlayer02 == 'paper') {

        p1ScissorResult.style.display = 'flex'
        p2PaperResult.style.display = 'flex'

    }
}


reset.addEventListener('click', () => {
    
    containerResultado.style.display = 'none'
    container1.style.display = 'flex'
    vsResult.innerHTML = 'Clique em Ver Resultado'
    load.style.display = 'flex'

    opcaoPlayer01 = null
    opcaoPlayer02 = null
    resultPlay01 = 0
    resultPlay02 = 0

    

    pointPlay1.innerHTML = resultPlay01
    pointPlay2.innerHTML = resultPlay02
    result.style.backgroundColor = '#ffffff'
    result.style.color = '#000000'
    result.style.border = '1px solid'
    result.innerHTML = 'Aguardando...'

    // p1Rock.style.opacity = '1'
    // p1Paper.style.opacity = '1'
    // p1Scissor.style.opacity = '1'
    // p1Rock.style.transform = 'scale(1)'
    // p1Paper.style.transform = 'scale(1)'
    // p1Scissor.style.transform = 'scale(1)'

    // p2Rock.style.opacity = '1'
    // p2Paper.style.opacity = '1'
    // p2Scissor.style.opacity = '1'
    // p2Rock.style.transform = 'scale(1)'
    // p2Paper.style.transform = 'scale(1)'
    // p2Scissor.style.transform = 'scale(1)'

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
    opcaoPlayer01 = ""
    opcaoPlayer02 = ""
    result.innerHTML = 'Aguardando...'
    result.style.backgroundColor = '#ffffff'
    result.style.color = '#000000'
    result.style.border = '1px solid'
    vsResult.innerHTML = 'Clique em Ver Resultado'
    load.style.display = 'flex'
    // p1Rock.style.opacity = '1'
    // p1Paper.style.opacity = '1'
    // p1Scissor.style.opacity = '1'
    // p1Rock.style.transform = 'scale(1)'
    // p1Paper.style.transform = 'scale(1)'
    // p1Scissor.style.transform = 'scale(1)'

    // p2Rock.style.opacity = '1'
    // p2Paper.style.opacity = '1'
    // p2Scissor.style.opacity = '1'
    // p2Rock.style.transform = 'scale(1)'
    // p2Paper.style.transform = 'scale(1)'
    // p2Scissor.style.transform = 'scale(1)'
    resetDisplay()

})