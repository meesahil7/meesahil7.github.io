import styles from "../Styles/about.module.css";

const About = () => {
  return (
    <div id="about" className={styles.aboutDiv}>
      <div className={styles.description}>
        <h1 className={styles.heading}>About Me</h1>
        {/* <h1 className={styles.title}>
          I'm Sahil Khan, a MERN stack developer.
        </h1> */}
        <h3 className={styles.para}>
          I'm a MERN stack developer. I love exploring new technologies in the
          field of Web Development and always try to adapt to them. I believe in
          the concept of continuous learning by regularly upgrading my skills
          and enhancing my knowledge. I have learnt MERN stack, data structures,
          algorithms, and soft skills at Masai School.
        </h3>
      </div>
      <img
        className={styles.logo}
        src={require("../Assets/programmer.svg").default}
        alt=""
      />
    </div>
  );
};

export default About;
