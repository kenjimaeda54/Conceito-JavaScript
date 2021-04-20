
//Quando tem uma função dentro de objeto e chamado metodo
// codigo abaixo vai imprimir Minha idade atual é 33// Agora minha idade e 34
//minha idade atual é 34//Agora minha idade e 35//
//minha idade atual é 35//Agora minha idade e 36 e assim sucessivamente
//estou incrementando a idade. Com this eu acesso o valor dentro do objeto
const people = {
    nome: "Ricardo",
    sobrenome: "Vivas",
    idade: 32,
    speak() {
        console.log(`\nMinha idade atual é ${this.idade}`)
    },
    old() {
        this.idade++
        return this.idade
    }
}
people.speak();
console.log("Minha idade agora é " + people.old())
people.speak();
console.log("Minha idade agora é " + people.old())
people.speak();
console.log("Minha idade agora é " + people.old())

// objeto e referenciado por {} array é por []. Quando uma função
//esta no objeto é conhecida como metodo
const people = {
    nome: "Luiz",
    sobrenome: "Maeda",
    idade: 25,
    speak() {
        console.log("Eu sou apenas um metodo")
    }
}
people.speak();



//Criei uma função para criar um objeto
function people(nome, sobrenome, idade) {
    return {
        nome,
        sobrenome,
        idade,
    }
}

const people1 = people("Luiz", "Maeda", 26)
console.log(people1);
console.log(people1.idade);
const people2 = people("Ricardo", "Sabio", 20)
console.log(people2);
console.log(people2.idade);
const people3 = people("Beatriz", "Otavio", 28)
console.log(people3);
console.log(people3.idade);
const people4 = people("Ivanildo", "Miranda", 55)
console.log(people4);
console.log(people4.idade);