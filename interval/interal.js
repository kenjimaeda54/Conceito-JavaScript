function allHour() {
    const data = new Date();
    return data.toLocaleTimeString('PT-BR', {
        hour12: false

    });

}

const taime = setInterval(function timer() {
    console.log(allHour());

}, 1000);


setTimeout(function () {
    clearInterval(taime)

}, 3000)

setTimeout(function () {
    console.log('parou')
}, 4000)