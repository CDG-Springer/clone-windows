const calculadoraWorspace = document.getElementById('calculadoraAbrir')
const calculadoraReal = document.getElementById('Calculadora')
const calculadoraFechar = document.querySelector('#fechar')
const calcUtil = document.getElementById('mover')
let mousePressionado = false

calcUtil.addEventListener('mousedown', function() {
    mousePressionado = true
})

calcUtil.addEventListener('mouseup', function() {
    mousePressionado = false
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