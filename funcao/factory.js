//Factory function(função  fabrica)

const people = { nome: "Luiz", sobrenome: "Carlos", idade: 25, peso: 70, altura: 1.75 }
const people1 = { nome: "Carlos", sobrenome: "Maeda", idade: 32, peso: 80, altura: 1.90 }
const people2 = { nome: "Joao", sobrenome: "Vivas", idade: 25, peso: 95.5, altura: 1.80 }

const { nome, sobrenome, idade, peso, altura } = people;
const { nome1, sobrenome1, idade1, peso1, altura1 } = people1;
const { nome2, sobrenome2, idade2, peso2, altura2 } = people2;
const all = peoples(people);
const all1 = peoples(people1);
const all2 = peoples(people2);
const { fullName, imc, data, } = all;
all.fullName = "Ricardo Kenji";
console.log(fullName, imc, data());
console.log(all1.data(), all1.imc);
console.log(all2.data(), all2.imc);





//por se tratar  função construtora preciso 
//atribuir retorno.Com a propriedade  get eu transformo minha função 
//em uma constante, fica evidente na descontrução const{fullName,imc}, 
//Repara no data() invoco como função ja o imc não precisa e fullName 
//tambem. Com setter posso manipular de forma pratica minha função  
//com comportamento de constante
function peoples(value) {
    return {
        nome,
        sobrenome,

        data() {
            return `\nNome:${value.nome} Sobrenome:${value.sobrenome}/Pesso:${value.peso}kg e Altura:${value.altura}m`

        },

        //getter
        get fullName() {
            return `\nEu me chamo ${value.nome} ${value.sobrenome}`
        },

        //setter

        set fullName(valor) {
            const rach = valor.split(' ');
            console.log(rach[0])
        },

        //getter
        get imc() {
            let calc = value.peso / Math.pow(value.altura, 2)
            return `\nMeu imc é ${calc.toFixed(2)}`
        }

    }
}

