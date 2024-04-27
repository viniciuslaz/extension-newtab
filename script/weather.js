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

    const url = `http://api.weatherapi.com/v1/current.json?key=01274ecb976f48409c200638242604&q=${
      city_storage ? city_storage : "rolante"
    }`;

    await fetch(url).then(async (response) => {
      const retorno = await response.json();
      console.log(retorno);
      //document.getElementById("weather").innerHTML = retorno.current.temp_c;
    });
  } catch (error) {
    throw error;
  }
}
