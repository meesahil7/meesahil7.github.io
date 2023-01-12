import styles from "./project.module.css";
import img1 from "../../Data/ndtv.png";
import img2 from "../../Data/weather-app.png";
import html from "../../Data/html.svg";
import js from "../../Data/javascript.svg";
import css from "../../Data/css.svg";

const Project = () => {
  const demo1 = () => {
    window.open("https://elaborate-chaja-41c243.netlify.app/");
  };
  const demo2 = () => {
    window.open("https://starlit-chebakia-85f8f2.netlify.app/");
  };
  return (
    <div className={styles.projectDiv} id={styles.project}>
      <h1 className={styles.heading}>My Projects</h1>
      <div className={styles.container}>
        <div className={styles.cards}>
          <div className={styles.card}>
            <div className={styles.card2}>
              <img className={styles.cardImage} src={img1} alt="" />
              <p className={styles.para}>
                NDTV.com provides latest news from India and around the world.
                Get breaking news alerts from India and follow today's live news
                updates in field of politics.
              </p>
              <div className={styles.tsImg}>
                <img src={html} alt="" />
                <img src={css} alt="" />
                <img src={js} alt="" />
              </div>
              <div>
                <button className={styles.uiverse} onClick={demo1}>
                  Demo
                </button>
                <button className={styles.uiverse}>Github</button>
              </div>
            </div>
          </div>
        </div>
        <div className={styles.cards}>
          <div className={styles.card}>
            <div className={styles.card2}>
              <img className={styles.cardImage} src={img2} alt="" />
              <p className={styles.para}>
                NDTV.com provides latest news from India and around the world.
                Get breaking news alerts from India and follow today's live news
                updates in field of politics.
              </p>
              <div className={styles.tsImg}>
                <img src={html} alt="" />
                <img src={css} alt="" />
                <img src={js} alt="" />
              </div>
              <div>
                <button className={styles.uiverse} onClick={demo2}>
                  Demo
                </button>
                <button className={styles.uiverse}>Github</button>
              </div>
            </div>
          </div>
        </div>
        <div className={styles.cards}>
          <div className={styles.card}>
            <div className={styles.card2}>
              <img className={styles.cardImage} src={img1} alt="" />
              <p className={styles.para}>
                NDTV.com provides latest news from India and around the world.
                Get breaking news alerts from India and follow today's live news
                updates in field of politics.
              </p>
              <div className={styles.tsImg}>
                <img src={html} alt="" />
                <img src={css} alt="" />
                <img src={js} alt="" />
              </div>
              <div>
                <button className={styles.uiverse}>Demo</button>
                <button className={styles.uiverse}>Github</button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Project;
