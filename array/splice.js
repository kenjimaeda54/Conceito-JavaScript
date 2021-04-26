//               -3       -2         -1 
//                0       1          2
const nomes = ["Luiz", "Pereira", "Otavio"]

//splice(indice,delete,item,item...)

//com o metodo splice é possivel aplicar de forma customizada
// push,pop,unshift,shift. No caso do push ideial e usar o proprio metodo

//push---> aplica um item no final do array,
nomes.push("Beatriz")
console.log(nomes)

//agora se eu dessejar aplicar mais nomes ao inves de apenas um
nomes.splice(nomes.length, 0, "Beatriz", "Rafael", "Ricardo")
console.log(nomes)

//com o pop eu deleto utltimo elmento do array, usando splice ficaria assim
nomes.splice(-1, 1)
console.log(nomes)

//com o unshift eu adicino elemento no array,usando splice ficaria assim.
//atenção no unshift consigo apenas adicionar um elemento,com splice posso 
//adiconar varios se desejar apenas um é so inserir um valor
nomes.splice(0, 0, "Ricardo", "Beatriz")
console.log(nomes)

//com o shift eu deleto o primeiro elemento no array,usando splice ficaria assim
nomes.splice(0, 1)
console.log(nomes)

//também  é possivel deletar varios itens com o metodo splice
//deletei todos os itens do array é acresentei so Pereira,resultado é um array
//apenas com um item
nomes.splice(-3, 3, "Pereira")
console.log(nomes)

