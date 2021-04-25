//Funções recursivas são funções que auto se chamam.
//Mesmo principio do while e for;
function loop(max) {
    number.push(max)
    if (max > 19) return number;
    max++;
    loop(max);
}

const number = []
const array = loop(2)
console.table(number)