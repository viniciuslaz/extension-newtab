export function convertKelvinToCelcius(tempKelvin) {
  let tempCelsius = tempKelvin - 273.15;
  tempCelsius = Math.round(tempCelsius * 10) / 10;
  return tempCelsius;
}
