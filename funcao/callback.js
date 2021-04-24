//modo de trabalhar usando callback,normalmente melhor maneira 
//e usar as promisses,para garantir que algo vai retornar

//aqui estou simulando tempos aleatorios para nossas funções,assim
//simulo tempo aleatorio ,normalmente ocorre quando estamos consumindo algo 
//externo
function round(max = 3000, min = 1000) {
    const number = Math.random() * (max - min) + min;
    return Math.floor(number)
}


//aqui crio minhas funções que serão executadas
function f1(callback) {
    setTimeout(function () {
        if (callback) return callback();
    }, round)
    console.log('f1')
}

function f2(callback) {
    setTimeout(function () {
        if (callback) return callback();
    }, round)
    console.log('f2')
}

function f3(callback) {
    setTimeout(function () {
        if (callback) return callback();
    }, round)
    console.log('f3')
}


//aqui determino a ordem que vai ser executada cada função,
//assim consigo determina a ordem exata de cada função

f1(f1callaback)
function f1callaback() {
    return f2(f2callback);
}

function f2callback() {
    return f3(f3callback);
}

function f3callback() {
    console.log("Ola mundo")
}