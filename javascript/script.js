const digitos = document.querySelectorAll('.number')
const visor = document.getElementById('visor')
const clear = document.getElementById('clear')
const operacoes = document.querySelectorAll('.operacao')
const igual = document.getElementById('igual')
const corBg = document.querySelectorAll('.cor')
const bodyHtml = document.querySelector('body')
const resultadoSpan = document.createElement('span')

const calculadoraWorspace = document.getElementById('calculadoraAbrir')
const calculadoraReal = document.getElementById('Calculadora')
const calculadoraFechar = document.querySelector('.utilidadeItem')
const calcUtil = document.getElementById('utilidades')
let mousePressionado = false

calcUtil.addEventListener('mousedown', function() {
    mousePressionado = true
    console.log(mousePressionado)
})

calcUtil.addEventListener('mouseup', function() {
    mousePressionado = false
    console.log(mousePressionado)
})

calculadoraReal.addEventListener('mousemove', (e) => {
    if(mousePressionado == true) {

        calculadoraReal.style.left = (e.pageX - calculadoraReal.clientWidth / 2) + 'px'
        calculadoraReal.style.top = (e.pageY - calculadoraReal.clientHeight / 15) + 'px'
    }
})

calculadoraWorspace.addEventListener('dblclick', function() {
    calculadoraReal.style.visibility = 'visible'
})

calculadoraFechar.addEventListener('click', function() {
    mousePressionado = false
    calculadoraReal.style.visibility = 'hidden'
})

digitos.forEach(function(digito) {
    digito.addEventListener('click', function() {

        // const novoDigito = document.createElement('span')
        // novoDigito.innerText = digito.innerText

        resultadoSpan.innerText = ''

        visor.append(digito.innerText)

    })
})

clear.addEventListener('click', function() {
    visor.innerText = ''
})

operacoes.forEach(function(operacao) {
    operacao.addEventListener('click', function() {
        simbolo(operacao.innerText)
    })
}) 

function simbolo(operacao){
    switch(operacao) {

        case '+':
            num1 = parseInt(visor.innerText)
            visor.innerText = ''

            igual.addEventListener('click', function() {


                num2 = parseInt(visor.innerText)
                resultado = num1 + num2

                visor.innerText = ''

                resultadoSpan.innerText = resultado

                visor.appendChild(resultadoSpan)

                num1 = ''
                num2 = ''

            })    
            break;

        case '-':

        case 'X':

            break;

        case '%':

            break;

        case '/':
            
            break;

    }
}