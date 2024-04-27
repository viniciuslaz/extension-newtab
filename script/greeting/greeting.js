let dayInterval;
let _greet;

function getCurrentHour() {
  const today = new Date();
  const hour = today.getHours();

  return {
    hour: hour,
  };
}

function getGreeting(hour) {
  let greet = "Boa noite";

  if (hour < 5) {
    greet = "Boa noite";
  } else if (hour < 12) {
    greet = "Bom dia";
  } else if (hour < 18) {
    greet = "Boa tarde";
  }

  return greet;
}

export async function greeting() {
  start();
  clearInterval(dayInterval);
  dayInterval = setInterval(start, 60000);

  function start() {
    const { hour } = getCurrentHour();
    const greet = getGreeting(hour);
    if (_greet != greet) {
      document.getElementById("greeting").innerHTML = greet;
      _greet = greet;
    }
  }
}
