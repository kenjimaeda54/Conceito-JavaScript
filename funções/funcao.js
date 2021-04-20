
//Mesma ideia da inferior com dois parametros
const other = (n, y) => n + y;

console.log(other(5, 10));


//Quando tem apenas uma linha na minha função e argumetno posso chamar assim
//nome desse caso e arew function. Se tivese dois parametros seria
// const result = (n,y) => return result = n + y
const result = n => n ** 0.5;

console.log(result(9))

//Como dito anteriormente e possivel reaproveitar as funções em baixo foi usado
//duas funções para pega a raiz de um numero
//Esta formula também pode ser feita da seguinte maneira n**0.5
const result = function (n) {
    return Math.sqrt(n);
}
console.log(result(9))
console.log(result(25))

//Outra maneira de chamar a função
const result = function (n) {
    n = 88 + 153
    return n;
}
console.log(result())


//Passando apenas um argumento e deixando outro fixo,tambem posso passar
//os dois parametros,e util quando tem valor vazio, garanto que minha função
//sempre tem um valor
function edit(x = 1, y = 1) {
    result = x + y
    return result;
}
const value = edit(9)
console.log(value)


//Deixando na função valor fixo como parametro
function edit(x = 1, y = 1) {

    result = x + y
    return result;

}
const value = edit();
console.log(`Seu resultado é ${value}`)


//Função com parametro é retorno
function edit(x, y) {

    return x + y

}

const result = edit(5, 10)
console.log(`Sua soma é ${result}`)

//Função com parametro
function edit(x) {

    console.log(`Seu numero é ${x}`)

}

edit(20)


//Função sem retorno nenhum é tambem sem parametro;
//Funções podem ser reaproveitadas ou seja poderia chamar varias vezes

function nome() {

    console.log("Bom dia")
}

nome();

