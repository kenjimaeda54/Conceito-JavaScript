//retorna apenas um valor do array
//reduce(acumulator,value,index,array) function()({},value inicial)

/*
//retornar a soma de todos numeros
const numeros = [5, 50, 80, 1, 2, 3, 5, 8, 7, 11, 15, 22, 27]
const result = numeros.reduce(function (acumulator, value) {
    acumulator += value
    return acumulator
})
console.log(result) */


//retorna a pessoa mais velha
const pessoas = [
    { nome: "Ricardo", idade: 60 },
    { nome: "Jean", idade: 35 },
    { nome: "Gil", idade: 100 },
    { nome: "Marysa", idade: 43 },
    { nome: "Clei", idade: 55 },
    { nome: "Erika", idade: 70 },
];

//acumulator sem valor inicial seria idade =60 /// no caso de value seria 
//idade = 35  ou seja estou comparando item anterior com novo.
// Ja que estou usando If não esquece de retornar  um valor ou outro.
//reduce precisa de um retorno se não acusa undefined
const moreOld = pessoas.reduce(function (acumulator, value) {
    if (acumulator.idade > value.idade) return acumulator
    return value
})
console.log(moreOld)

