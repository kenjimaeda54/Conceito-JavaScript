function change() {

    const form = document.querySelector('.form')
    const result = document.querySelector('.resultados')

    const people = [];

    function add(e) {
        e.preventDefault();
        const nome = document.querySelector('.nome')
        const pesso = document.querySelector('.pesso')
        const altura = document.querySelector('.altura')
        const idade = document.querySelector('.idade')

        people.push({
            nome: nome.value,
            pesso: pesso.value,
            altura: altura.value,
            idade: idade.value
        })
        console.log(people)
        result.innerHTML += `<p>Nome:${nome.value}\nPesso:${pesso.value} </p>`

    }

    form.addEventListener('submit', add)
}
change();