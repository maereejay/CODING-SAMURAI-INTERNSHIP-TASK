import { createContext, useContext, useState } from "react";

const AppContext = createContext();

export function AppProvider({ children }) {
  const [showWeather, setShowWeather] = useState(false);
  const [location, setLocation] = useState({
    label: "",
    lat: null,
    lon: null,
  });

  return (
    <AppContext.Provider
      value={{
        showWeather,
        setShowWeather,
        location,
        setLocation,
      }}
    >
      {children}
    </AppContext.Provider>
  );
}

// Custom hook for cleaner imports
export function useAppContext() {
  return useContext(AppContext);
}
