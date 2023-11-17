
const form = document.querySelector(".fale-conosco")
const mask = document.querySelector('.mascara-form')
const mascAlerta = document.querySelector('.mascara-alerta')

function contactForm() {
    form.style.left = "calc(50% - 175px)"
    mask.style.visibility = "visible"
}

function submitForm() {

    let nome = document.querySelector('.input-nome').value.trim()
    let telefone = document.querySelector('.input-tel').value.trim()
    let info = document.querySelector('.input-info').value.trim()
    let alert = document.querySelector('.alert')

    if (nome === '' || telefone === '' || info === '') {

        alert.style.display = 'block'
        mascAlerta.style.visibility = "visible"
        return;

    } else {
        form.style.left = "-500px"
        mask.style.visibility = "hidden"
        document.getElementById('actionSubmit').submit();
    }
}

document.querySelector('.mascara-form').addEventListener('click', function() {
    closeForm();
})


function closeForm(){
    form.style.left = "-500px"
    mask.style.visibility = "hidden"
}

document.querySelector('.mascara-alerta').addEventListener('click', function () {
    closePopup();
});

function closePopup() {
    
    let close = document.getElementsByClassName('closePopup')
    let alert = document.querySelector('.alert')

    alert.style.display = 'none'
    form.style.opacity = 1
    mascAlerta.style.visibility = "hidden"

}

