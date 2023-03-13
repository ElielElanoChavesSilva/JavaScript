/*Aprendendo a utilização do 'For of'.*/


const notas =[12,66,42,61,98]

let aprovados=0
let reprovados=0
for(dados of notas){
    dados>=60 ? aprovados++ : reprovados++
}

console.log("contém " + aprovados + " aprovados e " + reprovados + " reprovados")
