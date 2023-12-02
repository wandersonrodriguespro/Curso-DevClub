

/** Functions / Funções
 * 
 * functions padrão -> function(){}
 * arrow functions  -> () => {}
 * 
 * 
 * não escreve "function".
 * Alem disso, usamos o sinal "=>" para cria-la, 
 * o que  lembra uma flecha, fazendo jus ao nome "arrow functions"
 * 
 * 
 */


function sum(num1, num2) {
    return num1 + num2
}

const sum2 = (num1, num2) => num1 + num2 // Arrow Function



console.log(sum(3,4));
console.log(sum2(2,8));