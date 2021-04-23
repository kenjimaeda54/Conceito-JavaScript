//Segue a documentação abaixo
//https://developer.mozilla.org/pt-BR/docs/Web/JavaScript/Reference/Global_Objects/Date


//Outre maneira de chamar,lembrar que o mes para ele e de 0 a 11
// então precisa somar 1
const data = new Date()
console.log('Ano', data.getFullYear());
console.log('Mes', data.getMonth() + 1);
console.log('Dia', data.getDay());
console.log('Hora', data.getHours());


//Outro forma de chamar// mes para a funçaõ date começa no zero ou seja 0 a 11
//por isso estou somando mais 1
const data = new Date('2015-04-20 16:05:04');
console.log('Dia,', data.getDate());
console.log('Mes,', data.getMonth() + 1);
console.log('Hora', data.getHours());
console.log('Ano', data.getFullYear());


//Outra maneira de pegar a data
const data = new Date(2015, 04, 20, 16, 05, 04)
console.log(data.toString()) * /


//Pego a data em formato ingles.
const data = new Date();
console.log(data.toString());