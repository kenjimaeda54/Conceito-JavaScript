const data = new Date();
const checkDay = day(data)
const checkMounth = mounth(data)
const print = restDate(data);
const hours = fullHours();
const text = document.querySelector('.date');
text.innerHTML += `<h1> ${print}  <small> ${hours} </small>   <h1>`


//metodo get.Day, pega o dia da semana,segunda,terça so que em numeros(1,2,3)
function day(data) {
    const days = ['domingo', 'segundo', 'terça', 'quarta', 'quinta', 'sexta', 'sabado']
    return days
}


function mounth(data) {
    const mouths = ['Janeiro', 'Fevereiro', 'Março', 'Abril', 'Maio', 'Junho',
        'Agosto', 'Outubro', 'Novembro', 'Dezembro']
    return mouths
}

function zero(item) {
    return item >= 10 ? item : `0${item}`
}

function restDate(data) {
    const year = data.getFullYear();
    const day = zero(data.getDate());
    const days = data.getDay();
    const mounths = data.getMonth();
    const print = `${checkDay[days]}, ${day} de ${checkMounth[mounths]} de  ${year}  `
    return print
}

function fullHours() {
    const hours = zero(data.getHours());
    const minute = zero(data.getMinutes());
    const print = `${hours}:${minute}`
    return print
}

