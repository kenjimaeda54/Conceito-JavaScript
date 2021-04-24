function allHour() {
    const data = new Date();
    return data.toLocaleTimeString('pt-BR', {
        hour12: false
    })
}

const hours = setInterval(function () {
    console.log(allHour());
}, 1000)

setTimeout(function () {
    clearInterval(hours)
}, 3000)

setTimeout(function () {
    console.log("parou")
}, 4000)
