function setData(retorno) {
  document.getElementById(
    "first-information"
  ).innerHTML = `${retorno.weather[0].description}. Atualmente faz ${retorno.main.temp}°`;

  document.getElementById(
    "second-information"
  ).innerHTML = `Com maxima de ${retorno.main.temp_max}° para hoje`;

  /*const currentImg = document.getElementById("current-img");
  currentImg.src = `https://${retorno.current.condition.icon}`;
  currentImg.classList.remove("display-none");*/

  document.getElementById("current-temp").innerHTML = `${retorno.main.temp}°`;
}

export async function getWeather() {
  try {
    let oldData = localStorage.getItem("weather");
    if (oldData) {
      setData(JSON.parse(oldData));
    }

    let city_storage = localStorage.getItem("city");

    if (city_storage) {
      const regex = city_storage.match(/[a-zA-Z]/g);
      city_storage = regex ? regex.join("") : undefined;
    }

    if (!city_storage) {
      localStorage.setItem("city", "rolante");
    }

    const url = `http://15.228.13.27:4000/current`;

    await fetch(url)
      .then(async (response) => {
        const retorno = await response.json();
        localStorage.setItem("weather", JSON.stringify(retorno));

        setData(retorno);
      })
      .catch(function (error) {
        console.log("Ocorreu um erro com a sua solicitacao! " + error.message);
      });
  } catch (error) {
    throw error;
  }
}
