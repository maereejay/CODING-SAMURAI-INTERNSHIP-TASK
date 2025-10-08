import "./App.css";
import LandingSection from "./components/LandingSection/LandingSection";
import TodayWeather from "./components/TodayWeather/TodayWeather";
import { useAppContext } from "./context/AppContext";
function App() {
  const { showWeather } = useAppContext();

  return (
    <div className="App">
      <div className="Content">
        {showWeather ? <TodayWeather /> : <LandingSection />}
      </div>
    </div>
  );
}

export default App;
