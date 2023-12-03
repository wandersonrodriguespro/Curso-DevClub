
/** MAP
 * 
 *      Serve para mapear os array
 *      Forearch com mais poderes
 *      
 *      - Cria um novo arry, apartir do arry percorrido (array original)
 *      - Cria um novo array, com a mesma quantidade de item do array original
 *      - Aceita 3 parametros
 *          - item do array  (posição 1)
 *          - index          (posição 2)
 *          - array completo (posição 2)
 * 
 */


const number = [1, 2, 3, 4, 5, 6, 7]


const doubleNormal = number.map( item => {
    return item * 2
})


const dobleArrowFunction = number.map ((item) => item * 3 )

console.log(double);