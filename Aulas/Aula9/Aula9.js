// Entendendo a funcinalidae do operador THIS

function aluno(nome,nota){
    //Aqui o this.nome e this.nome, se tornam uma variável que recebe um parâmentro da função. Mesmo que contém o mesmo nome, 
    //o operador THIS é capaz de diferenciar a variável em que ele foi declarado.
    this.nome=nome
    this.nota=nota
    console.log(nome);
    console.log(nota);
}
console.log(aluno('JS', 10));