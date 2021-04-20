const array = ['Maria', 'Joao', 'Carlos']


//retorno se isto e uma instancia de array
console.log(array instanceof Array);


//pego a quantidade do meu array
console.log(array.length)


//Removo o primeiro item do array é tenho um calback na variavel remove
//qual item foi retirado
const remove = array.shift();
console.log(remove)
console.log(array)


//Removo o ultimo item é consigo ter um calback na variavel removido
// do numero retirado
const removido = array.pop();
console.log(removido);
console.log(array)


//Adiciono Beatriz no inicio do array não e aconselhavel,diminui a perfomanece
//Porque ao fazer isto altero o indice de todos
array.unshift("Beatriz");
console.log(array);

//Aidiciono Ricardo no final do array
array.push('Ricardo');
console.log(array)

console.log(array[0]);