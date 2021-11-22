const getWeather = (() => {
  const convertData = (data) => {
    const {
      name: cityName,
      main: { temp, feels_like: feelsLike, temp_min: low, temp_max: high },
    } = data;
    return { cityName, temp, feelsLike, low, high };
  };

  const getData = async (city) => {
    try {
      const response = await fetch(
        `https://api.openweathermap.org/data/2.5/weather?q=${city}&units=imperial&appid=c0508df5600e22b81d919deefdacfda6`,
        { mode: 'cors' }
      );
      if (!response.ok) throw new Error(`City not found!`);
      const data = convertData(await response.json());
      console.log(data);
      return data;
    } catch (err) {
      alert(err);
      return;
    }
  };
  return { getData };
})();

export default getWeather;
