function soma(x, y) {
    if (typeof y !== 'number' || typeof x !== 'number') {
        throw new Error("X e Y precisam ser mumeros");
        return;
    }

    return x + y;

}

try {

    const error = soma('1', 2);

} catch (error) {

    console.log("Precisa mostrar isso para usuario,nunca mostrar erro interno ao usuario")

}

try {

    const error = soma('1', 2);

} catch (error) {

    console.log(error)

}