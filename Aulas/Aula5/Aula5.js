/*Noçoes básicas sobre funções*/

function Soma(n1,n2){
   return n1 + n2
}

//Aqui o usuario coloca dois números para somar

let num1 = parseInt(prompt("Digite um número"))
let num2 = parseInt(prompt("Digite outro número"))

let soma = Soma(num1,num2);

//Verificando se os dois números somados é par ou ímpar.

function Num(soma){
    if(soma % 2 == 0) {
        return "Par";
    } 
    else{
        return "Impar";
    }
}

console.log(Num(soma))