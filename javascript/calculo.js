const digitos = document.querySelectorAll('.number')
const visor = document.getElementById('visor')
const clear = document.getElementById('clear')
const operacoes = document.querySelectorAll('.operacao')
const igual = document.getElementById('igual')
const corBg = document.querySelectorAll('.cor')
const bodyHtml = document.querySelector('body')
const resultadoSpan = document.createElement('span')

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

adicao = false
subtracao = false
multiplicacao = false
divisao = false
mol = false
let num1, num2, resultado


function simbolo(operacao) {
    

    switch (operacao) {
        case '+':
            
            num1 = parseInt(visor.innerText);
            
            visor.innerText = '';
            adicao = true;
            break;

        case '-':
            num1 = parseInt(visor.innerText);
            visor.innerText = '';
            subtracao = true;
            break;
        case 'X':
            num1 = parseInt(visor.innerText);
            visor.innerText = '';
            multiplicacao = true;
            break

        case '/':
            num1 = parseInt(visor.innerText);
            visor.innerText = '';
            divisao = true;
            break

        case '%':
            num1 = parseInt(visor.innerText);
            visor.innerText = '';
            mol = true;
            break;
            
    }
}

igual.addEventListener('click', function () {

    num2 = parseInt(visor.innerText)
    if(adicao){

        resultado = num1 + num2
        adicao = false

    } else if(subtracao){

        resultado = num1 - num2
        subtracao = false

    } else if(multiplicacao) {

        resultado = num1 * num2
        multiplicacao = false

    } else if(divisao) {

        resultado = num1 / num2
        multiplicacao = false

    } else if(mol) {
        resultado = num1 % num2
        mol = false
    }

    visor.innerText = ''
    resultadoSpan.innerText = resultado
    visor.appendChild(resultadoSpan)
    num1 = ''
    subtracao = false;

});