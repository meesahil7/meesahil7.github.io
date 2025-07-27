// import styles from "../Styles/home.module.css";
import "../Styles/home.css";
import my_image from "../Assets/sahil_khan.jpeg";
import Typed from "react-typed";
import "react-typed/dist/animatedCursor.css";
import { AiFillGithub, AiFillLinkedin } from "react-icons/ai";

const About = () => {
  const redirect = () => {
    console.log(window);
    window.open(
      "https://drive.google.com/file/d/1JURes7BbTyj3cJ-OMRlocQ0W9nFDjCrU/view?usp=sharing"
    );
  };
  return (
    <div id="home" className="homeDiv">
      <div className="container">
        <div className="leftContainer">
          <h3>Hello, I'm</h3>
          <h1 className="name">SAHIL KHAN</h1>
          <Typed
            className="role"
            strings={[
              "Full Stack Web Developer",
              "Frontend Developer",
              "Backend Developer",
              "Ask me about MERN",
            ]}
            typeSpeed={100}
            backSpeed={100}
            loop
          />
          <button className="resumeBtn" onClick={redirect}>
            <a href="/Sahil-Khan-Resume.pdf" download className="anchor">
              My Resume
            </a>
          </button>
          <div className="icons-main-div">
            <div onClick={() => window.open("https://github.com/meesahil7")}>
              <AiFillGithub className="icons" />
            </div>
            <div
              onClick={() => window.open("https://linkedin.com/in/meesahil7")}
            >
              <AiFillLinkedin className="icons" />
            </div>
          </div>
        </div>

        <div className="rightContainer">
          <img className="start" src={my_image} alt="Sahil_Khan" />
        </div>
      </div>
      <hr />
    </div>
  );
};

export default About;
