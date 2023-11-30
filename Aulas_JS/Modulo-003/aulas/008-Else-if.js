




/**
 * 
 * 
 * IF (SE)
 * Else (Se não)
 * Else ih (Se não se)
 * 
 * 
 * 
 */


const temperatura = 35 


if(temperatura == 36){
    console.log('Está Bem');
}else if (temperatura > 36 && temperatura <= 40) {
    console.log('Está com Febre');
}else if (temperatura > 40) {
    console.log('Esta com Muita Febre')
}else {
    console.log('Está com hipotermia')
}