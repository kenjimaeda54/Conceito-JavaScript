//IFFE -> immediately invoked fucntion expression
//São funções invocadas automaticamente
//Assim garanto que menos variaveis globais,ja que elas podem afetar
//nosso condigo por algo externo
(function () {
    console.log("Eu sempre sou invocado")

})();

//passando parametros
(function (name, altura) {

    console.log(name, ` ${altura}0m`)

})("Luiz", 1.80);

//criando outras funções dentro da função IFFE
(function () {

    function people() {
        return `Eu sou o Ricardo`
    }
    console.log(people());

})();




