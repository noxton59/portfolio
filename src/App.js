import "./App.css";
import "./style/navBar.css";
import "./style/intro.css";
import "./style/projects.css";
import "./style/contact.css";
import NavBar from "./components/navBar";
import Intro from "./components/intro";
import Projects from "./components/projects";
import Contact from "./components/contact";
import { useState, useEffect } from "react";

function App() {
  const [width, setWidth] = useState(null);

  useEffect(()=>{
    function handleResize() {
      setWidth(window.innerWidth);
    }
    handleResize();
    window.addEventListener("resize", handleResize);
    function cleanUp() {
      window.removeEventListener("resize", handleResize);
    }
    return cleanUp;
  }, []);

  return (
    <div className="App">
      <NavBar width={width}/>
      <Intro width={width}/>
      <Projects width={width}/>
      <Contact/>
    </div>
  );
}

export default App;
