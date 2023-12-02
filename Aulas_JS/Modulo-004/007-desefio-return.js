

/**
 * 
 * Todos os produtos acima de 30,00 tem desconto de 10%
 * Calcula desconto
 * calcular valor final
 * 
 * 
 */


const cart = [10, 244, 99, 2, 20, 33, 250]

let valorFinalComDesconto = 0
let valorFinal = 0


function calcularDesconto(price, disconto) {
    const result = (price * disconto) / 100
    return result
}

cart.forEach(value => {
    valorFinal += value
});


cart.forEach((value) => {

    if (value > 30) {
        const disconto = calcularDesconto(value, 10)
        valorFinalComDesconto += (value - disconto)
    } else {
        valorFinalComDesconto += value
    }

});

let totalDesconto = (valorFinal - valorFinalComDesconto).toFixed(2)

console.log(`O Valor Total Foi De: R$ ${valorFinal.toFixed(2)}
Valor Com Desconto R$ ${valorFinalComDesconto.toFixed(2)}
Total de Desconto ${totalDesconto}`)