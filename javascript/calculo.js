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

function simbolo(operacao) {
    var adicao = false;
    var subtracao = false;
    var num1, num2, resultado;

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
            alert('Trabalho em progresso')
            break

        case '/':
            alert('Trabalho em progresso');
            break

        case '%':
            alert('Trabalho em progresso')
            
    }
}

igual.addEventListener('click', function () {

    num2 = parseInt(visor.innerText)
    
    console.log(num1 + ', ' + num2)
    if(adicao) {
        resultado = num1 + num2
    } else if(subtracao){
        resultado = num1 - num2
        
    }

    visor.innerText = ''
    resultadoSpan.innerText = resultado
    visor.appendChild(resultadoSpan)
    num1 = ''
    subtracao = false;
});