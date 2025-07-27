import styles from "../Styles/navbar.module.css";

const Dropdown = ({ setShowDropdown }) => {
  return (
    <div className={styles.dropdown}>
      <div className={styles.btns}>
        <div onClick={(prev) => setShowDropdown(!prev)}>
          <a href="#home">Home</a>
        </div>
        <div onClick={(prev) => setShowDropdown(!prev)}>
          <a href="#about">About</a>
        </div>
        <div onClick={(prev) => setShowDropdown(!prev)}>
          <a href="#skill">Skill</a>
        </div>
        <div onClick={(prev) => setShowDropdown(!prev)}>
          <a href="#project">Project</a>
        </div>
        <div onClick={(prev) => setShowDropdown(!prev)}>
          <a href="#contact">Contact</a>
        </div>
        <div onClick={(prev) => setShowDropdown(!prev)}>
          <a
            target="_blank"
            href="https://drive.google.com/file/d/1eWRAqunjozqzfwnEGNeomWvII9eFjcqw/view?usp=sharing"
          >
            Resume
          </a>
        </div>
      </div>
    </div>
  );
};

export default Dropdown;
