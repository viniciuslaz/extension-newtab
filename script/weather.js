export async function getWeather() {
  try {
    const city = localStorage.getItem("city");
    if (!city) {
      localStorage.setItem("city", "rolante");
    }

    const url = `http://api.weatherapi.com/v1/current.json?key=01274ecb976f48409c200638242604&q=${
      city ? city : "rolante"
    }`;

    const response = await fetch(url);
    if (!response.ok) {
      throw new Error("Erro ao carregar a página. Status:", response.status);
    }
    return response.json();
  } catch (error) {
    throw error;
  }
}
