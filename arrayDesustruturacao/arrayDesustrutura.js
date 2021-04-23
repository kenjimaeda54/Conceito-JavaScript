
//atribuição desustruturação de array dentro de arrays
//               0          1            2                                   
//             0 1 2      0 1 2      0  1   2                  
const all = [[1, 2, 3], [7, 8, 9], [10, 11, 12]]
const [list1, , list3] = all;
console.log(list1[0], list3[2]);


//atribuindo valor padrão dentro da atribuição desustruturação
//caso houver algum valor na variavel ele mostra o valor da varivel
//se não mostra o valor padrão
const people = [/*"Ricardo"*/, "Rafael", "Matheus"]
const [people1 = "Beatriz", , people2 = "Erika"] = people
console.log(people1, people2)



//atribuição desustruturação de array
const numbers = [100, 200, 300, 400]
const [um, dois, tres] = numbers;
console.log(um, dois, tres)

//atribuição desustruturação de array com rest
const animal = ['pato', 'cachorro', 'gato', 'leao']
const [animal1, animal2, ...rest] = animal;
console.log(animal1, animal2, rest)

//atribuição desustruturação de array pulando itens
const material = ["caderno", "mochila", "lapis", "lapiseira", "sapato"]
const [item1, , item3, , item5] = material;
console.log(item1, item3, item5)