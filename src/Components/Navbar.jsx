import styles from "../Styles/navbar.module.css";
import { FaBars, FaRegWindowClose } from "react-icons/fa";
import { useState } from "react";
import Dropdown from "./Dropdown";

const Navbar = () => {
  const [showDropdown, setShowDropdown] = useState(false);
  return (
    <div>
      <div className={styles.main}>
        <h1 className={styles.logo} onClick={() => window.location.reload()}>
          {"<S.Khan />"}
        </h1>
        <div className={styles.btnWrapper}>
          <a href="#home">Home</a>
          <a href="#about">About</a>
          <a href="#project">Project</a>
          <a href="#experience">Experience</a>
          <a href="#skill">Skill</a>
          <a href="#contact">Contact</a>
          {/* <a
            target="_blank"
            href="https://drive.google.com/file/d/1JURes7BbTyj3cJ-OMRlocQ0W9nFDjCrU/view?usp=sharing"
          >
            Resume
          </a> */}
        </div>
        <div className={styles.navbar}>
          {showDropdown ? (
            <FaRegWindowClose
              className={styles.faClose}
              onClick={() => setShowDropdown(false)}
            />
          ) : (
            <FaBars
              className={styles.fabar}
              onClick={() => setShowDropdown(true)}
            />
          )}
        </div>
      </div>
      {showDropdown && <Dropdown setShowDropdown={setShowDropdown} />}
    </div>
  );
};

export default Navbar;
