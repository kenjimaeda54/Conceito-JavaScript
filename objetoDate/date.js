
function complete(item) {

    return item >= 10 ? item : `0${item}`;
}

function fullDate(data) {
    const dia = complete(data.getDate());
    const mes = complete(data.getMonth() + 1);
    const ano = complete(data.getFullYear());
    const hora = complete(data.getHours());
    const minutos = complete(data.getMinutes());
    const segundos = complete(data.getSeconds());
    const newDate = `${dia}-${mes}-${ano} ${hora}:${minutos}:${segundos}`
    return newDate
}

const data = new Date();
const full = fullDate(data)
console.log(data)