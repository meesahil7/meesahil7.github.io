import styles from "./navbar.module.css";
import { FaBars } from "react-icons/fa";
import { useState } from "react";
import Dropdown from "./Dropdown";

const Navbar = () => {
  const [showDropdown, setShowDropdown] = useState(false);
  return (
    <div>
      <div className={styles.main}>
        <h1 className={styles.logo} onClick={() => window.location.reload()}>
          {"<Sahil/>"}
        </h1>
        <div className={styles.btnWrapper}>
          <a href="#home">Home</a>
          <a href="#about">About</a>
          <a href="#skill">Skill</a>
          <a href="#project">Project</a>
          <a href="#contact">Contact</a>
          <a
            target="_blank"
            href="https://drive.google.com/file/d/1eWRAqunjozqzfwnEGNeomWvII9eFjcqw/view?usp=sharing"
          >
            Resume
          </a>
        </div>
        <div className={styles.navbar}>
          <FaBars
            className={styles.fabar}
            onClick={() => setShowDropdown(!showDropdown)}
          />
        </div>
      </div>
      {showDropdown && <Dropdown setShowDropdown={setShowDropdown} />}
    </div>
  );
};

export default Navbar;
