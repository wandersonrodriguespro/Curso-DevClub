

/**
 * 
 * 
 *      For
 * 
 *      1 - Inicialização - Criar uma variável e colocar um valor inicial para ele
 *      2 - Condição - Enquanto for true, o laço continuará iterando.
 *          Ele irá verificar antes de cada iteração
 *      3 - Expressão Final - O que irá ocorrer a cada vez que o nosso laço for executado
 * 
 * 
 * 
 * for ([inicialzação]; [condição]; [expressão final])
 *  Seu código aqui
 */

const users = [
    'Maria',
    'Aline',
    'joão',
    'Caroline',
    'Maria',
    'Alice',
    'Maria',
    'Aline',
    'joão',
    'Caroline',
    'Maria',
    'Alice'
]


// for (let i = 0; i < 20; i++) {
//     console.log(i);   
// }


for (let i = 0; i < users.length; i++) {
    console.log(users[i]);
}