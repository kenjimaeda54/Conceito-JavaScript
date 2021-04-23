
// new Error e um objeto construtor com ele e possivel tratar erro identico
//ao erro interno
function soma(x, y) {
    if (typeof x != 'number' || typeof y != 'number') {
        throw new Error('x é y precisam ser numeros')
        return;
    }
    return x + y

}

//try  e uma promisse e volta erro caso não der sucesso
//preferencia não mostrar erros internos aos usuarios

try {

    const all = soma('1', 2)

} catch (error) {
    console.log('Mostrar aos usuarios erros amigaveis,não internos')

}

//aqui estou retornando o erro criado na função soma() com new Error
try {

    const all = soma('1', 2)

} catch (error) {
    console.log(error)

}
