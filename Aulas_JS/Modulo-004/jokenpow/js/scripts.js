let opcaoPlayer01
let opcaoPlayer02
let resultPlay01 = 0
let resultPlay02 = 0

const btnPlayer01 = document.getElementById('btn-jogador1')
const btnPlayer02 = document.getElementById('btn-jogador2')
const opacityResult = document.querySelector('button')
const pointPlay1 = document.querySelector('.point-play1')
const pointPlay2 = document.querySelector('.point-play2')



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

        result.innerHTML = ('Aguardando Player 2')
        result.style.border = '1px solid'

    } else if (!opcaoPlayer01 && opcaoPlayer02) {

        result.innerHTML = ('Aguardando Player 1')
        result.style.border = '1px solid'

    } else if (opcaoPlayer01 && opcaoPlayer02) {

        result.innerHTML = ('Clique em Jogar')
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
        btnPlayer01.style.display = 'flex'
        btnPlayer02.style.display = 'flex'
        destacar()
        opcaoPlayer01 = null
        opcaoPlayer02 = null


    } else if (
        opcaoPlayer01 == 'rock' && opcaoPlayer02 == 'scissor' ||
        opcaoPlayer01 == 'paper' && opcaoPlayer02 == 'rock' ||
        opcaoPlayer01 == 'scissor' && opcaoPlayer02 == 'paper') {


        resultPlay01++
        pointPlay1.innerHTML = resultPlay01
        result.innerHTML = 'Vitorio Player 01'
        result.style.backgroundColor = '#4D80D8'
        result.style.color = '#ffffff'
        btnPlayer01.style.display = 'flex'
        btnPlayer02.style.display = 'flex'
        destacar()
        opcaoPlayer01 = null
        opcaoPlayer02 = null
    } else if (
        opcaoPlayer01 == 'rock' && opcaoPlayer02 == 'paper' ||
        opcaoPlayer01 == 'paper' && opcaoPlayer02 == 'scissor' ||
        opcaoPlayer01 == 'scissor' && opcaoPlayer02 == 'rock') {


        resultPlay02++
        pointPlay2.innerHTML = resultPlay02
        result.innerHTML = 'Vitorio Player 02'
        result.style.backgroundColor = '#E0470F'
        result.style.color = '#ffffff'
        btnPlayer01.style.display = 'flex'
        btnPlayer02.style.display = 'flex'
        destacar()
        opcaoPlayer01 = null
        opcaoPlayer02 = null
    }

}
const p1Rock = document.querySelector('.p1rock')
const p1Paper = document.querySelector('.p1paper')
const p1Scissor = document.querySelector('.p1scissor')
const p2Rock = document.querySelector('.p2rock')
const p2Paper = document.querySelector('.p2paper')
const p2Scissor = document.querySelector('.p2scissor')



function destacar() {

    if (opcaoPlayer01 == 'rock' && opcaoPlayer02 == 'rock') {
        p1Rock.style.transform = 'scale(1.2)'
        p2Rock.style.transform = 'scale(1.2)'
        p1Paper.style.opacity = '0'
        p1Scissor.style.opacity = '0'
        p2Paper.style.opacity = '0'
        p2Scissor.style.opacity = '0'
    } else if (opcaoPlayer01 == 'paper' && opcaoPlayer02 == 'paper') {
        p1Paper.style.transform = 'scale(1.2)'
        p2Paper.style.transform = 'scale(1.2)'

        p1Rock.style.opacity = '0'
        p1Scissor.style.opacity = '0'
        p2Rock.style.opacity = '0'
        p2Scissor.style.opacity = '0'
    } else if (opcaoPlayer01 == 'scissor' && opcaoPlayer02 == 'scissor') {
        p1Scissor.style.transform = 'scale(1.2)'
        p2Scissor.style.transform = 'scale(1.2)'

        p1Rock.style.opacity = '0'
        p1Paper.style.opacity = '0'
        p2Rock.style.opacity = '0'
        p2Paper.style.opacity = '0'

    } else if (opcaoPlayer01 == 'rock' && opcaoPlayer02 == 'scissor') {
        p1Rock.style.transform = 'scale(1.2)'
        p2Scissor.style.transform = 'scale(1.2)'

        p1Paper.style.opacity = '0'
        p1Scissor.style.opacity = '0'
        p2Paper.style.opacity = '0'
        p2Rock.style.opacity = '0'


    } else if (opcaoPlayer01 == 'rock' && opcaoPlayer02 == 'paper') {
        p1Rock.style.transform = 'scale(1.2)'
        p2Paper.style.transform = 'scale(1.2)'

        p1Paper.style.opacity = '0'
        p1Scissor.style.opacity = '0'
        p2Scissor.style.opacity = '0'
        p2Rock.style.opacity = '0'


    } else if (opcaoPlayer01 == 'paper' && opcaoPlayer02 == 'rock') {
        p2Rock.style.transform = 'scale(1.2)'
        p1Paper.style.transform = 'scale(1.2)'

        p1Rock.style.opacity = '0'
        p1Scissor.style.opacity = '0'
        p2Scissor.style.opacity = '0'
        p2Paper.style.opacity = '0'

    } else if (opcaoPlayer01 == 'paper' && opcaoPlayer02 == 'scissor') {
        p1Paper.style.transform = 'scale(1.2)'
        p2Scissor.style.transform = 'scale(1.2)'

        p1Rock.style.opacity = '0'
        p1Scissor.style.opacity = '0'
        p2Rock.style.opacity = '0'
        p2Paper.style.opacity = '0'

    } else if (opcaoPlayer01 == 'scissor' && opcaoPlayer02 == 'rock') {
        p1Scissor.style.transform = 'scale(1.2)'
        p2Rock.style.transform = 'scale(1.2)'

        p1Rock.style.opacity = '0'
        p1Paper.style.opacity = '0'
        p2Scissor.style.opacity = '0'
        p2Paper.style.opacity = '0'

    } else if (opcaoPlayer01 == 'scissor' && opcaoPlayer02 == 'paper') {
        p1Scissor.style.transform = 'scale(1.2)'
        p2Paper.style.transform = 'scale(1.2)'

        p1Rock.style.opacity = '0'
        p1Paper.style.opacity = '0'
        p2Scissor.style.opacity = '0'
        p2Rock.style.opacity = '0'

    }
}


reset.addEventListener('click', () => {
    opcaoPlayer01 = null
    opcaoPlayer02 = null
    resultPlay01 = 0
    resultPlay02 = 0

    pointPlay1.innerHTML = resultPlay01
    pointPlay2.innerHTML = resultPlay02
    result.style.backgroundColor = '#ffffff'
    result.style.color = '#000000'
    result.style.border = '1px solid'
    result.innerHTML = 'Aguardando Início!'

    p1Rock.style.opacity = '1'
    p1Paper.style.opacity = '1'
    p1Scissor.style.opacity = '1'
    p1Rock.style.transform = 'scale(1)'
    p1Paper.style.transform = 'scale(1)'
    p1Scissor.style.transform = 'scale(1)'

    p2Rock.style.opacity = '1'
    p2Paper.style.opacity = '1'
    p2Scissor.style.opacity = '1'
    p2Rock.style.transform = 'scale(1)'
    p2Paper.style.transform = 'scale(1)'
    p2Scissor.style.transform = 'scale(1)'

})

const limparDestaque = document.querySelector('.limpar-novamente')


limparDestaque.addEventListener('click', () => {
    opcaoPlayer01 = ""
    opcaoPlayer02 = ""
    result.innerHTML = 'Aguardando Escolha!'
    result.style.backgroundColor = '#ffffff'
    result.style.color = '#000000'
    result.style.border = '1px solid'
    p1Rock.style.opacity = '1'
    p1Paper.style.opacity = '1'
    p1Scissor.style.opacity = '1'
    p1Rock.style.transform = 'scale(1)'
    p1Paper.style.transform = 'scale(1)'
    p1Scissor.style.transform = 'scale(1)'

    p2Rock.style.opacity = '1'
    p2Paper.style.opacity = '1'
    p2Scissor.style.opacity = '1'
    p2Rock.style.transform = 'scale(1)'
    p2Paper.style.transform = 'scale(1)'
    p2Scissor.style.transform = 'scale(1)'

})