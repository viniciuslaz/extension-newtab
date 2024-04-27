let dayInterval;
let _day;
let _month;
let _dayOfWeek;

const daysOfWeek = [
  "Domingo",
  "Segunda-feira",
  "Terça-feira",
  "Quarta-feira",
  "Quinta-feira",
  "Sexta-feira",
  "Sábado",
];

const months = [
  "Janeiro",
  "Fevereiro",
  "Março",
  "Abril",
  "Maio",
  "Junho",
  "Julho",
  "Agosto",
  "Setembro",
  "Outubro",
  "Novembro",
  "Dezembro",
];

function getCurrentDay() {
  const today = new Date();
  const dayOfWeek = daysOfWeek[today.getDay()];
  const day = today.getDate();
  const month = months[today.getMonth()];

  return {
    dayOfWeek: dayOfWeek,
    day: day,
    month: month,
  };
}

export async function day() {
  start();
  clearInterval(dayInterval);
  dayInterval = setInterval(start, 1000);

  function start() {
    const { dayOfWeek, day, month } = getCurrentDay();

    if (dayOfWeek != _dayOfWeek) {
      document.getElementById("dayOfWeek").innerHTML = `${dayOfWeek},`;
      _dayOfWeek = dayOfWeek;
    }

    if (day != _day) {
      document.getElementById("day").innerHTML = day;
      _day = day;
    }

    if (month != _month) {
      document.getElementById("month").innerHTML = `de ${month}`;
      _month = month;
    }
  }
}
