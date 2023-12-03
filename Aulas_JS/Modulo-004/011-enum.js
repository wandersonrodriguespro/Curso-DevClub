
/** ENUM
 * 
 *  humenScoreNumber    -> Camel Case
 *  GAME_OPTIONS        -> Snake Case
 * 
 */

const GAME_OPTION = {
    ROCK: 'rock',
    PAPER: 'paper',
    SCISSORS: 'scissors'
}


const playMachime = () => { 
    const choise = ['rock', 'paper', 'scissors'] //com Camel Case
    
}

const playMachimeEnum = () => { 
    const choise = [GAME_OPTION.ROCK, GAME_OPTION.PAPER, GAME_OPTION.SCISSORS] //com ENUM
    //Enum funfiona como o root do css, armazena o valor em um local e é possivel alterar só uma vez e autera nos demais locais que esta usando o enum
}
