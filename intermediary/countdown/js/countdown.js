// O programa vai calcular a diferença de tempo em ms e então esse tempo será decrementado a cada 1 unidade, até chegar no valor 0 onde irá disparar um alerta e deixar o contador = 0

// Countdown método 2
timeToday = Date.now();
timeGoal = new Date("jan 19 2023 09:42:00");
timeDiff = timeGoal - timeToday;
// Usado para obter a diferença de tempo

const daysT = document.querySelector(".watch .days");
const hoursT = document.querySelector(".watch .hours");
const minT = document.querySelector(".watch .min");
const secT = document.querySelector(".watch .sec");
// Usado para selecionar o html

function startTimer(duration, display) {
  let timer = duration,
    days,
    hours,
    minutes,
    seconds;
  // Declarando as variáveis

  setInterval(function () {
    days = parseInt(timer / (60 * 60 * 24));
    hours = parseInt((timer / (60 * 60)) % 24);
    minutes = parseInt((timer / 60) % 60);
    seconds = parseInt(timer % 60);
    // parseInt(valor, base) retorna um número na base numérica 'decimal por padrão (10)'
    // Podia ser usado o Math.floor também

    days = days < 10 ? "0" + days : days;
    hours = hours < 10 ? "0" + hours : hours;
    minutes = minutes < 10 ? "0" + minutes : minutes;
    seconds = seconds < 10 ? "0" + seconds : seconds;

    daysT.innerHTML = days;
    hoursT.innerHTML = hours;
    minT.innerHTML = minutes;
    secT.innerHTML = seconds;
    // Inserindo o js no html

    if (--timer < -1) {
      alert("Lançamento concluido!");
      timer = 0;
    }
  }, 1000);
}

window.onload = function () {
  let duration = timeDiff / 1000;
  startTimer(duration);
};
// window.onload é um evento que é disparado quando a página é completamente carregada
