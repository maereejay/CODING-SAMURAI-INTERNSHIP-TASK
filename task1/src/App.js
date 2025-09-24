import "./App.css";
import ContextProvider from "./context/ContextProvider";
import Themetoggle from "./components/Themetoggle";
import Section1 from "./components/Section1/section1";
import Navbar from "./components/navbar";
import Skills from "./components/Skills/skills";
import Section2 from "./components/Section2/section2";
import Section3 from "./components/Section3/section3";
function App() {
  return (
    <ContextProvider>
      <div className="App">
        <div className="logo">
          <h1>OM</h1>
          <div className="themetoggleSect">
            <Themetoggle />
          </div>
        </div>
        <div className="firstSection">
          <Navbar />
          <Section1 />
        </div>
        <div className="skillSection">
          <Skills />
        </div>
        <div className="secondSection">
          <Section2 />
        </div>
        <div className="thirdSection">
          <Section3 />
        </div>
      </div>
    </ContextProvider>
  );
}

export default App;
