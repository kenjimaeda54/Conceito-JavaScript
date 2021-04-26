//Fucntion gerador não usa returno,se utilizar ele finaliza a função,assim não
//consigo chamar. 
function* gerador() {
    yield 1
    yield "Estou gerando algo novo"
    yield 3
}
const g1 = gerador()
//retorna um objeto com {value é done}:
//ao iniciar a função done é falso,ate finalizar a função, então apos isto  se torna true
console.log(g1.next().value)
//cada vez que chamar o next retorna yield ate finalizar
console.log(g1.next().value)



//com funções geradoras é possivel  delegar outras dentro
function* geradors() {
    yield "Eu estou iniciando";
    yield "Eu agora sou o atual";
    yield "Agora eu que sou o atual"

}

function* all() {
    yield* geradors();
    yield "Vamos começar denovo"
    yield "Eu sou o fim"
}
const result = all();
for (let i = 0; i < 5; i++) {
    console.log(result.next().value)
}

//metodo dentro da função geradora
function* implement() {

    yield function first() {
        console.log(3)
    }

    yield function second() {
        console.log(5)
    }

}
const print = implement();
const f1 = print.next().value;
const f2 = print.next().value;
f1();
f2();
