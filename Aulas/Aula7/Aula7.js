//Noções básicas de Função Geradora

function* perguntas(){
    const nome=yield 'Qual seu nome?'
    const esporte=yield 'Qual seu esporte favorito?'
    return "Seu nome é " + nome + " e seu esporte favorito é " + esporte
}

const res= perguntas()
console.log(res.next().value);
console.log(res.next('Eliel').value);
console.log(res.next('Futsal').value);