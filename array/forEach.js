//forEach interage em cada item do array,so serve para array
//forEach(value,indice,array[])
const numeros = [5, 80, 1, 2, 3, 5, 8, 7, 11, 15, 22, 27]

i = 0;
const total = numeros.forEach(item => i += item);
console.log(total)