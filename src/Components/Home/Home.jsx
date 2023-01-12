import styles from "./home.module.css";
import logo from "../../Data/new2.png";

const About = () => {
  const redirect = () => {
    console.log(window);
    window.open(
      "https://drive.google.com/file/d/1eWRAqunjozqzfwnEGNeomWvII9eFjcqw/view?usp=sharing"
    );
  };
  return (
    <div id="home" className={styles.homeDiv}>
      <div className={styles.container}>
        <div className={styles.rightContainer}>
          <h3 style={{ color: "violet" }}>Hi, all!</h3>
          <h1>I'm Sahil Khan!</h1>
          <h2>Full-Stack Web Developer</h2>
          <button className={styles.resumeBtn} onClick={redirect}>
            My Resume
          </button>
        </div>
        <div className={styles.leftContainer}>
          <img className={styles.start} src={logo} alt="" />
        </div>
      </div>
      <hr />
    </div>
  );
};

export default About;
