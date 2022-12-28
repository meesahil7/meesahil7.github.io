import { useEffect, useState } from "react";
import "./App.css";
import About from "./Components/About/About";
import Contact from "./Components/Contact/Contact";
import Home from "./Components/Home/Home";
import Loader from "./Components/Loader/Loader";
import Navbar from "./Components/Navbar/Navbar";
import Project from "./Components/Project/Project";
import SKill from "./Components/Skill/SKill";

function App() {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    let id = setTimeout(() => {
      setIsLoading(false);
      clearTimeout(id);
    }, 3000);
  }, [setIsLoading]);
  console.log(isLoading);
  return (
    <div className="App">
      {isLoading ? (
        <Loader />
      ) : (
        <div>
          <Navbar />
          <Home />
          <About />
          <SKill />
          <Project />
          <Contact />
        </div>
      )}
    </div>
  );
}

export default App;
