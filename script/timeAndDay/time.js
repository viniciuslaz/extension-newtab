let clockInterval;
let _hours = 0;
let _minutes = 0;

function getCurrentTime() {
  const now = new Date();
  const hours = now.getHours();
  const minutes = now.getMinutes();

  return {
    hours: hours,
    minutes: minutes,
  };
}

export async function clock() {
  start();
  clearInterval(clockInterval);
  clockInterval = setInterval(start, 1000);

  function start() {
    const { hours, minutes } = getCurrentTime();

    if (hours != _hours) {
      const paddedHours = hours.toString().padStart(2, "0");
      document.getElementById("hours").innerHTML = paddedHours;
      _hours = hours;
    }

    if (minutes != _minutes) {
      const paddedMinutes = minutes.toString().padStart(2, "0");
      document.getElementById("minutes").innerHTML = paddedMinutes;
      _minutes = minutes;
    }
  }
}
