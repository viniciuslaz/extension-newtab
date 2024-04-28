export async function getWeather() {
  try {
    let city_storage = localStorage.getItem("city");

    if (city_storage) {
      const regex = city_storage.match(/[a-zA-Z]/g);
      city_storage = regex ? regex.join("") : undefined;
    }

    if (!city_storage) {
      localStorage.setItem("city", "rolante");
    }

    const url = `http://api.weatherapi.com/v1/forecast.json?key=01274ecb976f48409c200638242604&lang=pt&q=${
      city_storage ? city_storage : "rolante"
    }`;

    await fetch(url)
      .then(async (response) => {
        const retorno = await response.json();
        document.getElementById(
          "first-information"
        ).innerHTML = `${retorno.current.condition.text}. Atualmente faz ${retorno.current.temp_c}°`;

        document.getElementById(
          "second-information"
        ).innerHTML = `Com maxima de ${retorno.forecast.forecastday[0].day.maxtemp_c}° para hoje`;

        const currentImg = document.getElementById("current-img");
        currentImg.src = `https://${retorno.current.condition.icon}`;
        currentImg.classList.remove("display-none");

        document.getElementById(
          "current-temp"
        ).innerHTML = `${retorno.current.temp_c}°`;
      })
      .catch(function (error) {
        console.log("Ocorreu um erro com a sua solicitacao! " + error.message);
      });
  } catch (error) {
    throw error;
  }
}
