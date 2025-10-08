import "./LandingSection.css";
import Logo from "../Logo/Logo";
import { useState, useEffect } from "react";
import { useAppContext } from "../../context/AppContext";

export default function LandingSection() {
  const { setShowWeather, setLocation } = useAppContext();
  const [value, setValue] = useState("");

  const [suggestions, setSuggestions] = useState([]);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    if (!value.trim()) {
      setSuggestions([]);
      return;
    }

    const delayDebounce = setTimeout(async () => {
      setLoading(true);
      try {
        const res = await fetch(
          `https://wft-geo-db.p.rapidapi.com/v1/geo/cities?namePrefix=${encodeURIComponent(
            value
          )}&limit=10&offset=0&sort=-population&minPopulation=100000`,
          {
            headers: {
              "X-RapidAPI-Key": process.env.REACT_APP_GEODB_API_KEY,
              "X-RapidAPI-Host": process.env.REACT_APP_GEODB_HOST,
            },
          }
        );

        const data = await res.json();
        setSuggestions(data.data || []);
        console.log("Suggestions:", data.data);
      } catch (err) {
        console.error(err);
        setSuggestions([]);
      } finally {
        setLoading(false);
      }
    }, 400); // wait 400ms after typing stops

    return () => clearTimeout(delayDebounce);
  }, [value]);

  const handleClick = () => {
    if (!value.trim()) return;
    setLocation(value.trim());
    setSuggestions([]);
    setShowWeather(true);
  };

  const handleKeyDown = (e) => {
    if (e.key === "Enter") handleClick();
  };
  return (
    <div className="landingSection">
      <div className="logo-container">
        <div className="logo">
          <Logo />
        </div>
      </div>
      <div className="landingContent">
        <div className="heading">
          <h2>WHERE ARE YOU?</h2>
        </div>
        <div className="input">
          <input
            type="text"
            placeholder="Paris, France"
            value={value}
            onChange={(e) => setValue(e.target.value)}
            onKeyDown={handleKeyDown}
          />
          {suggestions.length > 0 && (
            <div className="suggestionBox">
              <div className="suggestions-list">
                {suggestions.map((city) => (
                  <div
                    key={city.id}
                    className="suggestion-item"
                    onClick={() => {
                      setValue(`${city.city}, ${city.country}`);
                      setSuggestions([]);
                    }}
                  >
                    {city.city}, {city.country}
                  </div>
                ))}
              </div>
            </div>
          )}
        </div>

        <div className="button">
          <button onClick={handleClick}>Get your weather forecast</button>
        </div>
      </div>
    </div>
  );
}
