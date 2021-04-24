//para pegar todos os parametros  com a declaração function e possivel utilizar
//propriedade arguments,assim não preciso retornar os argumentos como paremetro
function numbers() {

    console.log(arguments)

}
const all = numbers(1, 2, 3, 4, 5, "Luiz", 12, "Otavio")

//utilizando for para somar todos os argumentos que estão retornando
function soma() {
    let all = 0
    for (let argument of arguments) {
        all += argument;
    }
    console.log(all)
}

const numbers = soma(1, 2, 10, 25)


//se eu desejar pular um argumento melhor maneira e com undefined.
//o z não assumiu o parametro matheus,porque ja tem argumento para ele
//na constante people. Para assumir precisaria  colocar
//undefined ou não declarar o argumento
function soma(x, y = "Matheus", z = "Matheus") {
    console.log(x, y, z)

}

const people = soma("Ricardo", undefined, "Erika")

//array por atribuição desustruturação
function animal([x, y, z, h]) {
    console.log(x, y, z, h)
}
const animals = animal([1, 2, 5, "Luiz"])

function animal([animal1, animal2, animal3]) {
    console.log(animal1, animal2, animal3)
}
const animals = ["Pato", "Cachorro", "Macaco"]
const all = animal(animals);


//objeto por atribuição desustruturação,precisa ser mesma variavel declarada
//na constante do objeto, array e objetos trabalham com mesmo principio

function animal({ animal1, animal2, animal3 }) {
    console.log(animal1, animal2, animal3)

}
const animals = { animal1: "Pato", animal2: "Cachorro", animal3: "Coelho" };
animal(animals)


//Realizando função interessante com  com rest 
//com o reduce eu dimino meu array apenas para um valor,
//Essa função trabalha com (valor atual,proximo valor){"Ideal para soma"}
//se eu alterar o valor do meu argumento em soma("+") ou soma("-")
//realiza somas e subtraçẽos diferentes
function soma(operador, ...rest) {
    if (operador == "+") {
        const soma = rest.reduce((item, index) => {

            return item + index;
        })
        console.log(soma)
    }
    if (operador == "-") {
        const soma = rest.reduce((item, index) => {

            return item - index;
        })
        console.log(soma)
    }
    if (operador == "/") {
        const soma = rest.reduce((item, index) => {

            return item / index;
        })
        console.log(soma)
    }
    if (operador == "*") {
        const soma = rest.reduce((item, index) => {

            return item * index;
        })
        console.log(soma)
    }



}

soma("/", 1, 20, 30, 40, 50)

//arrow function não funciona com a propriedade arguments
//solução interesante esta abaixo
const soma = (...args) => {
    console.log(args)

}
soma(1, 2, 3, 45)

//arrow function com com atribuição destruturação
const people = ({ name, idade }) => {
    console.log(name, idade)
}

const peoples = { name: "Beatriz", idade: "20 anos", peso: 70 }
people(peoples)
