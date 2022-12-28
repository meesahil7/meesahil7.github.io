import "./navbar.css";

const Navbar = () => {
  return (
    <div className="main">
      <h1 className="logo" onClick={() => window.location.reload()}>
        {"< Sahil />"}
      </h1>
      <div className="btn-wrapper">
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
    </div>
  );
};

export default Navbar;
