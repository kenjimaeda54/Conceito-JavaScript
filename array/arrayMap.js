//map retorna um array e não afeta original,a menos que deseja. 
//Reorna com mesmo numero de quantidade de itens do meu array 
//map(value,index,array)


//retornar o dobro de cada item do array
const numeros = [5, 80, 1, 2, 3, 5, 8, 7, 11, 15, 22, 27]
const maps = numeros.map(value => value * 2)
console.log(maps)


//Para cada elemento:
//Retorne apenas uma string com o nome de cada pessoa
//Remova apenas a chave nome do obeto
//Adicione um id para cada elemento
const pessoas = [
    { nome: "Ricardo", idade: 60 },
    { nome: "Jean", idade: 35 },
    { nome: "Gil", idade: 23 },
    { nome: "Marysa", idade: 43 },
    { nome: "Clei", idade: 55 },
    { nome: "Erika", idade: 70 },
];

const objetoNome = pessoas.map(value => value.nome);
console.log(objetoNome)


//usando essa anotação eu disse ao javascript que minha variavel chama idade é ele 
//tem os valores da idade do array de objetos pessoas.
//ou seja criei um novo array com nome idade contendo os valores da idade do array
//se eu trocar idade para outro nome reflete no meu novo array,
// vai printar{idade:60} se eu chamar de objeto{objeto:60}
const removeNome = pessoas.map(value => ({ idade: value.idade }));
console.log(removeNome)

//usano o spread operator posibilita eu criar um novo array
//assim não altero o original 
// para adicionar um item no objeto e simples,so preciso  declarar
//dentro do function posso usar tudo que desejo, pop(),splice()
//exemplo se desejar deletar um item//delete pessoas.nome é so retornar
const addItem = pessoas.map(function (value, index) {
    const newObjt = { ...value }
    newObjt.id = (index * 2.3) * 100 + "fmsod"
    return newObjt;

})
console.table(addItem)



