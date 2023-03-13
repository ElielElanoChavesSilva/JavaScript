/*Entendendo a diferença entre While e Do While */

//While

let arr=[10,20,30,"Teste"];
let i = 0;

while(i <= arr.length) {
    console.log(arr[i]);
    i++
}

/*Do while. 
Você tem a opção de executar qualquer bloco de comandos antes do loop.*/

let n = 20;

do {
    if(n % 2 == 0){ 
        console.log('Par');
    } 
    n++
} 
while(n <= 20){
    console.log('Fim');
}


