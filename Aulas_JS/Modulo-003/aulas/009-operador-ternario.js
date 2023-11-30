


/**
 * 
 * 
 * Operador ternario
 * 
 * 
 *      ?   if      (se)
 *      :   else    (se não)
 *      &&          (if sem else)
 * 
 * 
 * 
 */


const salario = 3000


if (salario < 3000) {
    console.log('O colaborador é Junior')
} else if (salario >= 3000 && salario < 10000){
    console.log('Ele é senior')
}else {
    console.log('Ele é diretor')
}

// else/if ternario

salario < 3000 ? console.log('O colaborador é Junior') : console.log('O colaborador é senior')

//  if / else if / else

salario < 3000 ? console.log('O colaborador é Junior') : salario >= 3000 && salario < 1000 ? console.log('Ele é Senior') : console.log('Ele é diretor')


// Expressão somente com o if fica da seguinte forma...

salario < 3000 && console.log('O colcaborador é junior')

//Quando usar um ou a outra??

// O operador ternario só é usado quando o retorno é pequeno e cabe em uma linha
// caso contrario usa-se o if e o Else comum