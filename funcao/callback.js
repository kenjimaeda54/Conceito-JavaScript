//modo de trabalhar usando callback,normalmente melhor maneira 
//e usar as promisses,para garantir que algo vai retornar

//aqui estou simulando tempos aleatorios para nossas funções,assim
//simulo tempo aleatorio ,normalmente ocorre quando estamos consumindo algo 
//externo
function round(max = 3000, min = 1000) {
    const all = Math.random() * (max - min) + min;
    const number = Math.floor(all);
    console.log(number)

}

//aqui crio minhas funções que serão executadas
function f1(callback) {
    setTimeout(function () {
        if (callback)
            return callback();
    }, round)
    console.log('F1')
}
function f2(callback) {
    setTimeout(function () {
        if (callback)
            return callback();
    }, round)
    console.log('f2')
}
function f3(callback) {
    setTimeout(function () {
        if (callback)
            return callback();
    }, round)
    console.log('f3')
}

//aqui determino a ordem que vai ser executada cada função,
//assim consigo determina a ordem exata de cada função
f1(f1callback);

function f1callback() {
    return f2(f2callback);
}
function f2callback() {
    return f3(f3callback);

}

function f3callback() {
    console.log("Ola mundo")

}

