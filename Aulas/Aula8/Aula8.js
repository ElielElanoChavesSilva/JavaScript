// //  Noções básicas sobre Map

const lista=[10,20,30,40,50]
lista.map((el,i)=>{
    console.log("Número: " + el + " - Índice do número " + i);
})



//  Relacinando com o DOM 

let divs=[...document.getElementsByTagName("div")]
divs.map((el)=>{
    el.innerHTML= 'Itens alterados'
})



//  Convertendo uma lista de String em numeros e retornando o dobro.

const dobrar=(e) => e*2
const arrey=['10','20','30','40','50'].map(dobrar)

console.log(arrey);
const converter=(e) => parseInt(e)
