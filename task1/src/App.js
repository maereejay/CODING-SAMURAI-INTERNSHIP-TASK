import "./App.css";
import Themetoggle from "./components/Themetoggle";
import Section1 from "./components/Section1/section1";
import Navbar from "./components/navbar";
import Skills from "./components/Skills/skills";
function App() {
  return (
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
    </div>
  );
}

export default App;
