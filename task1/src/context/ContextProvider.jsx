// ContextProvider.jsx
import React, { createContext, useState } from "react";

import budgetwise1 from "../Assets/projects/budgetwise/1.png";
import budgetwise2 from "../Assets/projects/budgetwise/2.png";
import budgetwise3 from "../Assets/projects/budgetwise/3.png";
import budgetwise4 from "../Assets/projects/budgetwise/4.png";
import budgetwise5 from "../Assets/projects/budgetwise/5.png";
import budgetwise6 from "../Assets/projects/budgetwise/6.png";
import budgetwise7 from "../Assets/projects/budgetwise/7.png";
import budgetwise8 from "../Assets/projects/budgetwise/8.png";
import budgetwise9 from "../Assets/projects/budgetwise/9.png";
import budgetwise10 from "../Assets/projects/budgetwise/10.png";
import budgetwise11 from "../Assets/projects/budgetwise/11.png";
import budgetwise12 from "../Assets/projects/budgetwise/12.png";

import farmhub1 from "../Assets/projects/Farmhub/1.png";
import farmhub2 from "../Assets/projects/Farmhub/2.png";
import farmhub3 from "../Assets/projects/Farmhub/3.png";
import farmhub4 from "../Assets/projects/Farmhub/4.png";
import farmhub5 from "../Assets/projects/Farmhub/5.png";
import farmhub6 from "../Assets/projects/Farmhub/6.png";
import farmhub7 from "../Assets/projects/Farmhub/7.png";

import gamehub1 from "../Assets/projects/gamehub/1.png";
import gamehub2 from "../Assets/projects/gamehub/2.png";
import gamehub3 from "../Assets/projects/gamehub/3.png";
import gamehub4 from "../Assets/projects/gamehub/4.png";
import gamehub5 from "../Assets/projects/gamehub/5.png";
import gamehub6 from "../Assets/projects/gamehub/6.png";
import gamehub7 from "../Assets/projects/gamehub/7.png";
import gamehub8 from "../Assets/projects/gamehub/8.png";

import ovenalc1 from "../Assets/projects/ovenalc/1.png";
import ovenalc2 from "../Assets/projects/ovenalc/2.png";
import ovenalc3 from "../Assets/projects/ovenalc/3.png";
import ovenalc4 from "../Assets/projects/ovenalc/4.png";
import ovenalc5 from "../Assets/projects/ovenalc/5.png";

import zombieType1 from "../Assets/projects/zombieType/1.png";
import zombieType2 from "../Assets/projects/zombieType/2.png";
import zombieType3 from "../Assets/projects/zombieType/3.png";
import zombieType4 from "../Assets/projects/zombieType/4.png";
import zombieType5 from "../Assets/projects/zombieType/5.png";
import zombieType6 from "../Assets/projects/zombieType/6.png";

export const MyContext = createContext();

export default function ContextProvider({ children }) {
  const [theme, setTheme] = useState("light");
  const [selectedProject, setSelectedProject] = useState(null);

  const projects = [
    {
      id: 1,
      name: "Oven Alchemy",
      images: [ovenalc1, ovenalc2, ovenalc3, ovenalc4, ovenalc5],
      description:
        "A landing page for Oven Alchemy. It features a responsive design and a smooth scrolling experience. It is built using HTML, CSS, and JavaScript. It has a clean and modern design that is easy to navigate.",
      liveLink: "https://github.com/maereejay/oven-alchemy",
      codeLink: "https://github.com/maereejay/oven-alchemy",
    },
    {
      id: 2,
      name: "Zombie Typing Game",
      images: [
        zombieType1,
        zombieType2,
        zombieType3,
        zombieType4,
        zombieType5,
        zombieType6,
      ],
      description:
        "A game where you need to type the words that appear on the screen. It is built using Reactjs. It features a game experience where you need to type the words that appear on the screen in order to reach the safe house and win the game.",
      liveLink: "https://zombie-type-six.vercel.app/",
      codeLink: "https://github.com/maereejay/zombieType",
    },
    {
      id: 3,
      name: "Farmhub",
      images: [
        farmhub1,
        farmhub2,
        farmhub3,
        farmhub4,
        farmhub5,
        farmhub6,
        farmhub7,
      ],
      description:
        "A landing page for Farmhub. It features a responsive design and a smooth scrolling experience. It is built using HTML, CSS, and JavaScript. It has a clean and modern design that is easy to navigate.",
      liveLink: "https://github.com/maereejay/FarmHub",
      codeLink: "https://github.com/maereejay/FarmHub",
    },
    {
      id: 4,
      name: "Budgetwise",
      images: [
        budgetwise1,
        budgetwise2,
        budgetwise3,
        budgetwise4,
        budgetwise5,
        budgetwise6,
        budgetwise7,
        budgetwise8,
        budgetwise9,
        budgetwise10,
        budgetwise11,
        budgetwise12,
      ],
      description:
        "A website for Budgetgeting.It features a responsive design and a smooth scrolling experience. It is built using HTML, CSS, and JavaScript. It has a clean and modern design that is easy to navigate.",
      liveLink: "https://github.com/maereejay/budgetWise",
      codeLink: "https://github.com/maereejay/budgetWise",
    },
    {
      id: 5,
      name: "Gaming hub",
      images: [
        gamehub1,
        gamehub2,
        gamehub3,
        gamehub4,
        gamehub5,
        gamehub6,
        gamehub7,
        gamehub8,
      ],
      description:
        "A game hub consisting of 3 games; rock paper scissors, tic tac toe and memory card gameIt features a responsive design and a smooth scrolling experience. It is built using HTML, CSS, and JavaScript. It has a clean and modern design that is easy to navigate.",
      liveLink: "https://github.com/maereejay/lucy-game",
      codeLink: "https://github.com/maereejay/lucy-game",
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
