export async function getWeather() {
  try {
    const city = localStorage.getItem("city");
    if (!city) {
      localStorage.setItem("city", "rolante");
    }

    const url = `http://api.weatherapi.com/v1/current.json?key=01274ecb976f48409c200638242604&q=${
      city ? city : "rolante"
    }`;

    await fetch(url).then(async (response) => {
      const retorno = await response.json();
      console.log(retorno)
      document.getElementById("weather").innerHTML = retorno.current.temp_c;
    });
  } catch (error) {
    throw error;
  }
}
