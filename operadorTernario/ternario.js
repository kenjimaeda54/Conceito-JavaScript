//(condição) ? "valor" : "valor"
// vai impremir normal ou vip de acordo com o valor atribuido no user
//é um if reduzido,conhecido como ternario.
const user = 1010;
const status = user > 1000 ? "vip" : "normal";
console.log(status)

//aqui e um condição curto circuito, na condição OU se houver um verdadeiro
// no caso a string,vai mostrar o primeiro valor verdadeiro
//se a condição fosse && , se houver um falso a condição vai ser falsa,
// supondo que é  verdadeira,vai mostrar o ultimo verdadeiro
const color = null;
const userColor = color || 'pink';
console.log(userColor)

//aqui em baixo printa Black porque a primeira condição verdadeira e o Black
const color = 'black'
const userColor = color || 'pink';
console.log(userColor);