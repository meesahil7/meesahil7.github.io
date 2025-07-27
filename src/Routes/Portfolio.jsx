import React, { useEffect, useState } from "react";
import "../App.css";
import Loader from "../Components/Loader";
import Navbar from "../Components/Navbar";
import Home from "../Components/Home";
import About from "../Components/About";
import SKill from "../Components/SKill";
import Project from "../Components/Project";
import { GitStat } from "../Components/GitStat";
import Contact from "../Components/Contact";
import { HiChevronDoubleUp } from "react-icons/hi";
import { Experience } from "../Components/Experience";

const Portfolio = () => {
  const [isLoading, setIsLoading] = useState(true);
  const [bool, setBool] = useState(false);
  window.onscroll = () => {
    scrollFunction();
  };

  const top = () => {
    document.body.scrollTop = 0;
    document.documentElement.scrollTop = 0;
  };

  function scrollFunction() {
    if (
      document.body.scrollTop > 20 ||
      document.documentElement.scrollTop > 20
    ) {
      setBool(true);
    } else {
      setBool(false);
    }
  }

  useEffect(() => {
    let id = setTimeout(() => {
      setIsLoading(false);
      clearTimeout(id);
    }, 3000);
  }, [setIsLoading]);
  return (
    <div>
      {isLoading ? (
        <div>
          <Loader />
        </div>
      ) : (
        <div>
          <Navbar />
          <Home />
          <About />
          <Project />
          <Experience />
          <SKill />
          <GitStat />
          <Contact />
          {bool && <HiChevronDoubleUp id="scrollBtn" onClick={top} />}
        </div>
      )}
    </div>
  );
};

export default Portfolio;
