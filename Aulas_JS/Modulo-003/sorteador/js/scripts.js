
const result = document.getElementById('result');
const btnReset = document.getElementById('btnReset');
const numMin = document.querySelector('.input_min')
const numMax = document.querySelector('.input_max')
const btnSortear = document.getElementById('btnSortear')
const bgAlert = document.querySelector('.bg-alert')
const closeAlert = document.querySelector('.close')
const valNumIni = document.querySelector('.validation-at-start')

bgAlert.addEventListener('click', closePopUp)
valNumIni.addEventListener('click', closePopUp)
closeAlert.addEventListener('click', closePopUp)

function closePopUp() {
    bgAlert.style.display = 'none'
    valNumIni.style.display = 'none'
}


btnSortear.addEventListener('click', function(){

    if(numMin.value == '' || numMax.value == ''){
        bgAlert.style.display = 'flex'
    } 
    else if (numMin.value > numMax.value){
        valNumIni.style.display = 'flex'
    }else {
        generateNumber()
    }
})

function generateNumber() {
    const min = Math.ceil(numMin.value);
    const max = Math.floor(numMax.value);

    let currentNumber = min;
    result.style.background = '#00000023'
    result.style.backdropFilter = 'blur(20px)'
    
    const interval = setInterval(() => {
        currentNumber = Math.floor(Math.random() * (max - min + 1)) + min;
        result.innerHTML = currentNumber;
        
    }, 50);

    setTimeout(() => {
        clearInterval(interval);
        result.innerHTML = currentNumber;
        result.style.fontWeight = '900';
        result.style.background = '#AEC346'
    }, 2000);
}


btnReset.addEventListener('click', function() {
    numMin.value = ''
    numMax.value = ''
    result.innerHTML = '-----'
    result.style.background = '#00000023'
    result.style.backdropFilter = 'blur(20px)'
})


