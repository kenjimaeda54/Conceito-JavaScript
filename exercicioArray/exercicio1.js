function change() {

    const data = document.querySelector('.form');
    const result = document.querySelector('.resultados')
    const pessoas = [];

    function add(event) {
        event.preventDefault();
        const nome = document.querySelector('.nome')
        const pesso = document.querySelector('.pesso')
        const altura = document.querySelector('.altura')
        const idade = document.querySelector('.idade')

        pessoas.push({
            nome: nome.value,
            pesso: pesso.value,
            altura: altura.value,
            idade: idade.value
        })
        console.log(pessoas)
        result.innerHTML += `<p>Nome:${nome.value} \n Pesso:${pesso.value}</p>`
    }

    data.addEventListener('submit', add)

}
change();