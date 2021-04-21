/* Avaliação de curto circuito
&& vai availar a condição caso a condição se houver um falso ela  torna falsa,precisa todas serem
&& verdadeiras
|| vai availar condição para ela ser falsa,precisa tudo ser falso,se houver 
|| um verdadeiro ela assume verdadeiro


para java script esses valores são falsos por naturza,restante e verdadeiro
FALSY
false
0
"" '' ``
null/undefined
NaN
         */

// vai retornar null,porque minha condição e falso e primeiro valor falso é null
let number = null;
console.log('people' && number); 

//vai retornar 0 porque a condição é falsa é o primeiro  valor falso e o 0
let pessoa = "Luiz"
let number = null
let nulo = 0
console.log(pessoa && nulo && number)


//vai retonar 10 porque minha condição e verdadeira e o ultimo valor verdadeiro é o 10
let name = "Luiz"
let idade = 20
let peso = 10
console.log(name && idade && peso)

//vai retornar Luiz porque minha condição e verdadeira por ser condição OU é meu primeiro valor
//verdadeiro e o Luiz,string e consierado valor verdadeiro para java script
let pessoa = "Luiz"
let number = 0
let nulo = null
console.log(pessoa || number || nulo)

// vai retonar 10 porque minha condição e verdadeira é o primeiro valor verdadeiro é o 10,
let pessoa = "Luiz"
let number = 10
let nullo = 0
console.log(number || pessoa || nullo)


//vai retornar 0 porque a condição é falsa e meu utlimo valor falso é o 0
let number = null
let numero = 0
console.log(number || numero)



