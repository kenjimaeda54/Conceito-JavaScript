/* Variaveis primtivas:string,number,symbol,null fazem apenas
copias ao declarar igual   */

/* Variaveis mutaveis - array,objeto e função  elas trabalham com referencia */

//Se você fizer dessa maneira vai perceber que nome vai ser Carlos é b vai ser Luiz
//porque não altera apens copia,primitivos não são alterados
let nome = "Luiz"
let b = nome;
nome = "Carlos"
console.log(nome, b)


// Se eu fizer dessa maneira observa que estou declarando let b = array ao fazer isto
// b passa a ter valor do array ou seja toda vez que eu alterar no array, altera b.
// na linha 15 console.log(b) vai ter mesmo valores que o Array e mais o Ricardo que sofreu push no 
//array algo que não ocorre nos valores primitivos.Para retirar esta duvida e so olhar exemplo
//anterior este progama, você ao alterar uma variavel atribuido igual  não ocorre nada na outra
let array = ["Luiz", "Carlos", "Beatriz"]
let b = array

array.push("Ricardo")
console.log(b);

//Ao realizar o spread let b=[...array] você faz uma copia da variavel array,assim tudo que fizer
// no array não afeta no b
let array = ["Beatriz", "Ricardo", "Erika"]
let b = [...array]
array.push("Rafael")
console.log(b)
console.log(array)

//Spread também vale para os objetos// Ao aplicar desta maneira b mantem os valores de people
// e o ao realizar people.nome = "Erika",altera apenas ao chamar objeto people e não em b.
// Se não fizer o spread auteticamente altera o valor de b e assim objeto b vai ter Erika em nome
const people = {
    nome: "Ricardo",
    sobrenome: "Maeda",
    idade: 20,
}
let b = { ...people }
people.nome = "Erika"
console.log(b)
console.log(people)