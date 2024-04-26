import { getWeather } from "./weather.js";
import { clock } from "./time.js";

try {
  getWeather()
    .then((data) => {
      console.log(data);
      document.getElementById("weather").innerHTML = data.location.name;
    })
    .catch((error) => {
      console.error(error);
    });

  clock();
} catch (error) {
  console.log(error);
}
