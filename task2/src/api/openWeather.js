export async function fetchTodayWeather(lat, lon) {
  const apiKey = process.env.REACT_APP_OPENWEATHER_API_KEY;
  const url = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&units=metric&appid=${apiKey}`;

  try {
    const res = await fetch(url);
    if (!res.ok) throw new Error("Weather fetch failed");
    const data = await res.json();
    console.log("Today weather data:", data);
    return data;
  } catch (err) {
    console.error("Error fetching weather:", err);
    return null;
  }
}
