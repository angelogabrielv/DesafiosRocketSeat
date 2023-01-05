// Método 1
// O programa irá atualizar constatemente a data atual e irá calcular a diferença entre a data atual e a data estipulada, isso ocorre a cada segundo.
let dateGoal = new Date("oct 19 2022 00:00:00");

const days = document.querySelector(".watch .days");
const hours = document.querySelector(".watch .hours");
const min = document.querySelector(".watch .min");
const sec = document.querySelector(".watch .sec");

setInterval(() => {
  let dateNow = Date.now();
  let diff = (dateGoal - dateNow) / 1000;
  let daysT = setTwoDigital(parseInt(diff / (60 * 60 * 24)));
  let hoursT = setTwoDigital(parseInt((diff / (60 * 60)) % 24));
  let minT = setTwoDigital(parseInt((diff / 60) % 60));
  let secT = setTwoDigital(parseInt(diff % 60));

  days.innerHTML = daysT;
  hours.innerHTML = hoursT;
  min.innerHTML = minT;
  sec.innerHTML = secT;

  function setTwoDigital(argument) {
    return argument > 9 ? argument : "0" + argument;
  }
}, 1000);
