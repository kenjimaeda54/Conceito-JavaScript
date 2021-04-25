//Fucntion gerador não usa returno,se utilizar ele finaliza a função,assim não
//consigo chamar. 
function* gerador() {
    yield 1
    yield "Estou gerando algo novo"
    yield 3
}
const g1 = gerador()
//retorna um objeto com value é done:
//ao iniciar a função done é falso,ate finalizar a função, então apos isto  se torna true
console.log(g1.next().value)
//cada vez que chamar o next retorna yield ate finalizar
console.log(g1.next().value)



//funções geradoras é possivel delegar   outras dentro
function* gerador1() {
    yield "Eu estou gerando"
    yield "Eu sou o proximo"
    yield "Eu sou o ultimo"
}

function* gerador2() {
    yield* gerador1();
    yield "Eu agora sou o utlimo"
    yield 1
}

const result = gerador2()
for (let i = 0; i < 5; i++) {

    console.log(result.next().value)

}


//metodo dentro da função geradora
function* implement() {
    yield function () {
        console.log("Eu vim do yeild1")
    }

    yield function () {
        console.log("Eu vim do yeild2")
    }
}
const results = implement();
const f1 = results.next().value;
const f2 = results.next().value;
f1();
f2();




