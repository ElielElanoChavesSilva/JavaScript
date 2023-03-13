const horas = document.getElementById('horas')
const minutos = document.getElementById('minutos')
const segundos = document.getElementById('segundos')
const milessegundos = document.getElementById('milissegundos')
const relogio = setInterval(function hora() {
    let dataAtual = new Date();
    let hr = zeroEsquerda(dataAtual.getHours(),2);
    let min = zeroEsquerda(dataAtual.getMinutes(),2);
    let sec = zeroEsquerda(dataAtual.getSeconds(),2);
    let mil = zeroEsquerda(dataAtual.getMilliseconds(),2);
     horas.textContent = hr;
     minutos.textContent = min;
     segundos.textContent = sec;
    milessegundos.textContent = mil;
})
function zeroEsquerda(num, zeros){
    return String(num).padStart(zeros,'0')
}