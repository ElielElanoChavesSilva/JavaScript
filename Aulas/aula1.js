/*Questão que intera dois valores que o usuário inseriu, 
mostrando q quantidade de números pares e ímpares entre eles.*/




var valor1 = parseInt(prompt("Digite o primeiro valor"));
var valor2 = parseInt(prompt("Digite o segundo valor"));

var contpares = 0;
var contimpares = 0;

for(var i=valor1; i <= valor2; i++){
    if(i % 2 == 0) {
        contpares++
    } else {
        contimpares++
    }
}
console.log("Numeros pares: " + contpares);
console.log("Numeros impares:" + contimpares);