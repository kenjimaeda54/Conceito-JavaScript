//para unir dois arrays ha duas possibilidades pelo metodo cancat é spread operator
//sera feito as duas maneiras

const a1 = [1, 2, 3]
const a2 = ["Luiz", "Pereira"]

const a3 = a1.concat(a2)
console.log(a3)

//caso desejar colocar outro item
const a3 = a1.concat(a2, "Luiz")
console.log(a3)

//caso desejar colocar outro array 
const a3 = a1.concat(a2, [9, 8, 6])
console.log(a3)

//outra maneira é usar o spread operator,alem de mais pratico é boa pratica
const a3 = [...a1, ...a2];
console.log(a3)

//adicionando outros elementos
const a3 = [...a1, 1, ...a2, "Luiz"]
console.log(a3)

//para adiconar outro array é possivel de duas formas.Primeira,se você deseja um array 
//dentro do array seria assim
const a3 = [...a1, ...a2, [89, 95, 71]]
console.log(a3)

//agora caso deseja apenas os valores do array seria dessa forma
const a3 = [...a1, ...a2, ...[89, 95, 71]]
console.log(a3)



