const fecha = new Date('Oct 18, 2024 17:00:00').getTime();
let interval = setInterval(function(){
    const now = new Date().getTime();
    let distance = fecha-now;
    let days = Math.floor(distance/(1000*60*60*24));
    let hours = Math.floor((distance%(1000*60*60*24))/(1000*60*60));
    let minutes = Math.floor((distance%(1000*60*60))/(1000*60));
    let seconds = Math.floor((distance%(1000*60))/(1000));
    console.log(fecha)
    console.log(`Dias: ${days} Horas: ${hours} Minutos: ${minutes} Segundos: ${seconds}`)

    document.querySelector(".days").innerHTML = days
    document.querySelector(".hours").innerHTML = hours
    document.querySelector(".minutes").innerHTML = minutes
    document.querySelector(".seconds").innerHTML = seconds
},1000)

