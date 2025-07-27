import styles from "../Styles/project.module.css";
import us from "../Assets/urban-service.png";
// import weather from "../Assets/weather-app.png";
import mytv from "../Assets/mytv.png";
import typescript from "../Assets/typescript.svg";
import react from "../Assets/react.svg";
import shadcn from "../Assets/shadcn-ui-seeklogo.svg";
import zod from "../Assets/zod-seeklogo.svg";
import nest from "../Assets/nestjs-icon.svg";
import npm from "../Assets/npm.svg";
import chakraui from "../Assets/chakra-ui.svg";
import css from "../Assets/css.svg";
import redux from "../Assets/redux.svg";
import ucc from "../Assets/ucc-landing.png";
import apuniSarkar from "../Assets/apuni-sarkar.png";
import antDesign from "../Assets/Ant-Design.svg";

const Project = () => {
  const demo1 = () => {
    window.open("https://quack-spoon-1626.vercel.app/");
  };
  const demo2 = () => {
    window.open("https://elaborate-chaja-41c243.netlify.app/");
  };
  const uccLink = () => {
    window.open("https://ucc.uk.gov.in/");
  };
  const apuniSarkarLink = () => {
    window.open("https://eservices.uk.gov.in/");
  };
  return (
    <div className={styles.projectDiv} id="project">
      <h1 className={styles.heading}>Projects</h1>
      <div className={styles.container}>
        <div className={styles.cards}>
          <div className={styles.card}>
            <div className={styles.card2}>
              <img className={styles.cardImage} src={ucc} alt="" />
              <h3 className={styles.title}>UCC Portal</h3>
              <div className={styles.para}>
                <p>
                  A streamlined process for accessing and registering for
                  services under the Uniform Civil Code framework, ensuring ease
                  of use, transparency, and equal access for all citizens.
                </p>
              </div>
              <div className={styles.tsImg}>
                <img src={react} alt="" />
                <img src={nest} alt="" />
                <img src={typescript} alt="" />
                <img src={zod} alt="" />
                <img src={shadcn} alt="" />
              </div>
              <div>
                <button className={styles.uiverse} onClick={uccLink}>
                  Demo
                </button>
                {/* <button
                  className={styles.uiverse}
                  onClick={() =>
                    window.open(
                      "https://github.com/meesahil7/thoughtful-smash-1100"
                    )
                  }
                >
                  Github
                </button> */}
              </div>
            </div>
          </div>
        </div>
        <div className={styles.cards}>
          <div className={styles.card}>
            <div className={styles.card2}>
              <img className={styles.cardImage} src={apuniSarkar} alt="" />
              <h3 className={styles.title}>Apuni Sarkar</h3>
              <div className={styles.para}>
                <p>
                  Apuni Sarkar Our Government at Your Door. Essential Online
                  Services for the Citizens of Uttarakhand
                </p>
              </div>
              <div className={styles.tsImg}>
                <img src={react} alt="" />
                <img src={nest} alt="" />
                <img src={typescript} alt="" />
                <img src={antDesign} alt="" />
              </div>
              <div>
                <button className={styles.uiverse} onClick={apuniSarkarLink}>
                  Demo
                </button>
              </div>
            </div>
          </div>
        </div>
        <div className={styles.cards}>
          <div className={styles.card}>
            <div className={styles.card2}>
              <img className={styles.cardImage} src={us} alt="" />
              <h3 className={styles.title}>Urban Service</h3>
              <div className={styles.para}>
                <p>
                  Urban Service provides a platform that allows skilled and
                  experienced professionals to connect with users looking for
                  specific services.
                </p>
              </div>
              <div className={styles.tsImg}>
                <img src={css} alt="" />
                <img src={react} alt="" />
                <img src={redux} alt="" />
                <img src={npm} alt="" />
                <img src={chakraui} alt="" />
              </div>
              <div>
                <button className={styles.uiverse} onClick={demo1}>
                  Demo
                </button>
                <button
                  className={styles.uiverse}
                  onClick={() =>
                    window.open("https://github.com/meesahil7/quack-spoon-1626")
                  }
                >
                  Github
                </button>
              </div>
            </div>
          </div>
        </div>
        {/* <div className={styles.cards}>
          <div className={styles.card}>
            <div className={styles.card2}>
              <img className={styles.cardImage} src={ndtv} alt="" />
              <h3 className={styles.title}>NDTV Clone</h3>
              <div className={styles.para}>
                <p>
                  NDTV.com provides latest news from India and around the world.
                  Get breaking news alerts from India and follow today's live
                  news updates in field of politics.
                </p>
              </div>
              <div className={styles.tsImg}>
                <img src={html} alt="" />
                <img src={css} alt="" />
                <img src={js} alt="" />
              </div>
              <div>
                <button className={styles.uiverse} onClick={demo2}>
                  Demo
                </button>
                <button
                  className={styles.uiverse}
                  onClick={() =>
                    window.open(
                      "https://github.com/meesahil7/thoughtful-smash-1100"
                    )
                  }
                >
                  Github
                </button>
              </div>
            </div>
          </div>
        </div> */}
        {/* <div className={styles.cards}>
          <div className={styles.card}>
            <div className={styles.card2}>
              <img className={styles.cardImage} src={happyfox} alt="" />
              <h3 className={styles.title}>Happyfox Clone</h3>
              <div className={styles.para}>
                <p>
                  HappyFox is a ridiculously easy, powerfully simple customer
                  support and ticket management software platform.
                </p>
              </div>
              <div className={styles.tsImg}>
                <img src={html} alt="" />
                <img src={css} alt="" />
                <img src={js} alt="" />
              </div>
              <div>
                <button
                  className={styles.uiverse}
                  onClick={() =>
                    window.open("https://cheerful-duckanoo-d5d1ea.netlify.app/")
                  }
                >
                  Demo
                </button>
                <button
                  className={styles.uiverse}
                  onClick={() =>
                    window.open(
                      "https://github.com/NAYANKUMAR21/closed-mask-38"
                    )
                  }
                >
                  Github
                </button>
              </div>
            </div>
          </div>
        </div> */}
        <div className={styles.cards}>
          <div className={styles.card}>
            <div className={styles.card2}>
              <img className={styles.cardImage} src={mytv} alt="" />
              <h3 className={styles.title}>MyTv+</h3>
              <div className={styles.para}>
                <p>
                  MyTv+ is a website for watching Movies and shows. It has a
                  subscription functionality with firebase for the users and
                  admin both.
                </p>
              </div>
              <div className={styles.tsImg}>
                <img src={css} alt="" />
                <img src={react} alt="" />
                <img src={redux} alt="" />
                <img src={npm} alt="" />
                <img src={chakraui} alt="" />
              </div>
              <div>
                <button
                  className={styles.uiverse}
                  onClick={() => window.open("https://bymeclone.netlify.app/")}
                >
                  Demo
                </button>
                <button
                  className={styles.uiverse}
                  onClick={() =>
                    window.open(
                      "https://github.com/priyanshu1120/bent-tail-4615"
                    )
                  }
                >
                  Github
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Project;
