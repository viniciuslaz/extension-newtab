import { getWeather } from "./weather.js";
import { clock } from "./timeAndDay/time.js";
import { day } from "./timeAndDay/day.js";
import { greeting } from "./greeting/greeting.js";

window.onload = function () {
  try {
    const elementBackground = document.querySelector(".background");
    if (elementBackground) elementBackground.style.opacity = 1;

    setTimeout(() => {
      const elementBody = document.querySelector("body");
      elementBody.className = "";
    }, 0);

    getWeather();
    clock();
    day();
    greeting();
  } catch (error) {
    console.error(error);
  }
};
