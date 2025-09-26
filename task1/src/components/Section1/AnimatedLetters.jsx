// AnimatedLetters.jsx
import React from "react";
import "./AnimatedLetters.css";

export default function AnimatedLetters({ text, className = "" }) {
  const chars = Array.from(text);

  return (
    <h3 className={`animated-letters ${className}`} aria-label={text}>
      {chars.map((ch, i) => {
        const isSeparator = ch === "|";
        return (
          <span
            key={i}
            className={`animated-letter ${isSeparator ? "separator" : ""}`}
            style={!isSeparator ? { animationDelay: `${(i % 8) * 0.07}s` } : {}}
          >
            {ch === " " ? "\u00A0" : ch}
          </span>
        );
      })}
    </h3>
  );
}
