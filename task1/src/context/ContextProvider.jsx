// ContextProvider.jsx
import React, { createContext, useState } from "react";

export const MyContext = createContext();

export default function ContextProvider({ children }) {
  const [theme, setTheme] = useState("light");
  const [selectedProject, setSelectedProject] = useState(null);

  const projects = [
    {
      name: "My Portfolio",
      img: "/images/portfolio.png",
      description: "Personal portfolio website",
      link: "https://example.com",
    },
    {
      name: "Cool App",
      img: "/images/app.png",
      description: "A really cool project",
      link: "https://example.com/app",
    },
  ];

  return (
    <MyContext.Provider
      value={{ theme, setTheme, projects, selectedProject, setSelectedProject }}
    >
      {children}
    </MyContext.Provider>
  );
}
