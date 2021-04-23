const people = {
    nome: "Ricardo",
    sobrenome: "Maeda",
    peso: 70,
    rua: {

        avenida: "Cruz das graças",
        numero: 150,

    },

}


//pegando um valor de atribuição de um objeto dentro do objeto
//dessa forma tem que ser o nome exato da varivavel,não e atribuição igual array
const { rua: { avenida, numero } } = people
console.log(avenida, numero)



//Atribuindo por destruturação uma nova variavel dentro de uma variavel
//existtente no objeto,aqui dentro tambem posso atribuir um valor padrão
//para nova variavel
const { nome: names, rua } = people
console.log(names, rua);



//atribuição por destrutaração,definindo nome padrão,caso não possuir
//esse atribuição na constante nome do objeto sera atribuido Ricardo
//para surgir efeito tenho que comentar a variavel nome no objeto
const { nome = 'Não existe o nome', sobrenome } = people
console.log(nome, sobrenome)


// atribuição por desustruturação,objeto não posso pular,itens igual em array
//se desejo pegar alguma variavel especifica tenho que declarar o nome
// no caso pequei pesso
const { nome, peso } = people
console.log(nome, sobrenome)

//vai dar console.log em forma de tabela
console.table({ people })