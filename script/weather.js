export async function getWeather() {
  try {
    let ip_user;
    await fetch("https://api.ipify.org?format=json").then(async (response) => {
      const retorno = await response.json();
      ip_user = retorno.ip;
    });

    const url = `http://api.weatherapi.com/v1/forecast.json?key=01274ecb976f48409c200638242604&q=${ip_user}&lang=pt`;

    await fetch(url).then(async (response) => {
      const retorno = await response.json();
      console.log(retorno);
      document.getElementById(
        "first-information"
      ).innerHTML = `${retorno.current.condition.text}. Atualmente faz ${retorno.current.temp_c}°`;

      document.getElementById(
        "second-information"
      ).innerHTML = `Com maxima de ${retorno.forecast.forecastday[0].day.maxtemp_c}° para hoje`;

      /*const currentImg = document.getElementById("current-img");
      currentImg.src = retorno.current.condition.icon;*/

      document.getElementById(
        "current-temp"
      ).innerHTML = `${retorno.current.temp_c}°`;
    });
  } catch (error) {
    throw error;
  }
}
