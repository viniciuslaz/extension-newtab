import { getWeather } from "./weather.js";
import { clock } from "./time.js";
import { day } from "./day.js";

try {
  getWeather();
  clock();
  day();
} catch (error) {
  console.log(error);
}
