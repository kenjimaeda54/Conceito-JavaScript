//filter(valor,indice,array) -> valor é os valores dos array//indice são os indices
// é o array [] é o array em si.
const numeros = [5, 80, 1, 2, 3, 5, 8, 7, 11, 15, 22, 27]

//estou pegando os valores e verificando se são marioes que 10,se for eu tenho
//calback para a constante filters.
const filters = numeros.filter(item => item > 10);
console.log(filters)


//outra maneira de realizar
const filters = numeros.filter(function (valor) {
    return valor > 10
})
console.log(filters)

//retorna  nomes com letras maiores que 5
//retorna  idade com maiores de 50
//retorna  nomes que termina que termina a
const pessoas = [
    { nome: "Ricardo", idade: 60 },
    { nome: "Jean", idade: 35 },
    { nome: "Gil", idade: 23 },
    { nome: "Marysa", idade: 43 },
    { nome: "Clei", idade: 55 },
    { nome: "Erika", idade: 70 },
];
const pessoaFilterNome = pessoas.filter(value => value.nome.length >= 5);
const pessoaFilterNumero = pessoas.filter(value => value.idade > 50);
const pessoaFilterA = pessoas.filter(value => value.nome.toLowerCase().endsWith('a'));


//em pessoaFilterA coloquei metodo toLocaleLowerCase(),para validar apenas os minusculos
//endsWith("a") é um metodo que pega so a ultima letra
console.log(pessoaFilterNome);
console.log(pessoaFilterNumero);
console.log(pessoaFilterA);
