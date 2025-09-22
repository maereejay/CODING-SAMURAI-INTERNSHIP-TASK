import React, { useState } from "react";
import "./Themetoggle.css";
export default function Themetoggle() {
  const [isSun, setIsSun] = useState(true);
  const [isMoon, setIsMoon] = useState(false);

  const handleSunClick = () => {
    setIsSun(true);
    setIsMoon(false);
  };

  const handleMoonClick = () => {
    setIsSun(false);
    setIsMoon(true);
  };
  return (
    <div className="themetoggle">
      <svg
        className={`themeicon moon ${isMoon ? "activeMoon" : ""}`}
        onClick={() => handleMoonClick()}
        width="30"
        height="30"
        viewBox="0 0 30 30"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M15.0002 26.25C16.5041 26.2501 17.9928 25.9486 19.3782 25.3634C20.7636 24.7783 22.0177 23.9212 23.0662 22.843C24.1146 21.7648 24.9363 20.4873 25.4825 19.0861C26.0288 17.6849 26.2885 16.1883 26.2464 14.685C24.6731 15.7801 22.7837 16.3282 20.8685 16.2451C18.9534 16.162 17.1186 15.4524 15.646 14.2251C14.1734 12.9979 13.1445 11.321 12.7176 9.45227C12.2906 7.5835 12.4892 5.62622 13.2827 3.88125C10.4805 4.31308 7.94462 5.78708 6.18254 8.00833C4.42045 10.2296 3.56207 13.0343 3.77913 15.8613C3.99619 18.6882 5.27268 21.329 7.35321 23.2552C9.43375 25.1814 12.1649 26.251 15.0002 26.25Z"
          fill="currentColor"
          stroke="var(--stroke-color)"
          stroke-width="1.5"
          stroke-linecap="round"
          stroke-linejoin="round"
        />
      </svg>
      <svg
        className={`themeicon sun ${isSun ? "activeSun" : ""}`}
        onClick={() => handleSunClick()}
        width="29"
        height="30"
        viewBox="0 0 29 30"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <g clip-path="url(#clip0_50_76)">
          <path
            d="M22.9582 15C22.9582 16.1491 22.7395 17.2869 22.3144 18.3485C21.8893 19.4101 21.2663 20.3747 20.4809 21.1872C19.6954 21.9997 18.763 22.6442 17.7368 23.084C16.7106 23.5237 15.6107 23.75 14.4999 23.75C13.3891 23.75 12.2893 23.5237 11.263 23.084C10.2368 22.6442 9.30439 21.9997 8.51896 21.1872C7.73353 20.3747 7.1105 19.4101 6.68543 18.3485C6.26035 17.2869 6.04157 16.1491 6.04157 15C6.04157 12.6794 6.93272 10.4538 8.51896 8.81282C10.1052 7.17188 12.2566 6.25 14.4999 6.25C16.7432 6.25 18.8946 7.17188 20.4809 8.81282C22.0671 10.4538 22.9582 12.6794 22.9582 15ZM23.9032 24.72L23.8995 24.7238L23.8959 24.72L23.8995 24.7163L23.9032 24.72ZM27.7952 14.995V15H27.7904V14.995H27.7952ZM23.9007 5.27125L23.9032 5.275L23.8995 5.2775L23.8959 5.275L23.9007 5.27125ZM14.4987 1.245H14.5035V1.25H14.4987V1.245ZM5.10511 5.275L5.10149 5.2775L5.09907 5.275L5.10149 5.27125L5.10511 5.275ZM1.21186 14.995V15H1.20703V14.995H1.21186ZM5.10149 24.7163L5.10511 24.72L5.10149 24.7238L5.09907 24.72L5.10149 24.7163ZM14.4987 28.745H14.5035V28.75H14.4987V28.745Z"
            fill="currentColor"
            stroke="var(--stroke-color)"
            stroke-width="2"
            stroke-linecap="square"
          />
        </g>
        <defs>
          <clipPath id="clip0_50_76">
            <rect width="29" height="30" fill="white" />
          </clipPath>
        </defs>
      </svg>
    </div>
  );
}
