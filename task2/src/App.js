import "./App.css";
import Forecast from "./components/Forecast/Forecast";
import LandingSection from "./components/LandingSection/LandingSection";
import TodayWeather from "./components/TodayWeather/TodayWeather";

function App() {
  return (
    <div className="App">
      <div className="Content">
        {/* <Forecast /> */}
        {/* <LandingSection /> */}
        <TodayWeather />
      </div>
    </div>
  );
}

export default App;
