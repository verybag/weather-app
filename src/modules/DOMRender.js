const render = (() => {
  const results = (data) => {
    if (!data) return;

    const searchResult = document.querySelector('.results');
    searchResult.classList.add('active');

    const cityName = document.getElementById('city');
    const temp = document.getElementById('temp');
    const feelsLike = document.getElementById('feelsLike');
    const low = document.getElementById('low');
    const high = document.getElementById('high');

    cityName.textContent = `${data.cityName}`;
    temp.textContent = `${data.temp}°F`;
    feelsLike.textContent = `Feels like: ${data.feelsLike}°F`;
    low.textContent = `Low: ${data.low}°F`;
    high.textContent = `High: ${data.high}°F`;
  };

  return { results };
})();

export default render;
