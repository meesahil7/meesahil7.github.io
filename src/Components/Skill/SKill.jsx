import React from "react";
import styles from "./skill.module.css";

const SKill = () => {
  return (
    <div className={styles.skillDiv} id="skill">
      <h1 className={styles.heading}>My Skills</h1>
      <div className={styles.imageDiv}>
        <div>
          <img src={require("../../Data/html.svg").default} alt="html-icon" />
          <p>HTML</p>
        </div>
        <div>
          <img src={require("../../Data/css.svg").default} alt="css-icon" />
          <p>CSS</p>
        </div>
        <div>
          <img
            src={require("../../Data/javascript.svg").default}
            alt="javascript-icon"
          />
          <p>JavaScript</p>
        </div>
        <div>
          <img
            src={require("../../Data/mongodb.svg").default}
            alt="mongodb-icon"
          />
          <p>Mongo DB</p>
        </div>
        <div>
          <img
            src={require("../../Data/expressjs.svg").default}
            alt="expressjs-icon"
          />
          <p>Express JS</p>
        </div>
        <div>
          <img src={require("../../Data/react.svg").default} alt="react-icon" />
          <p>React</p>
        </div>
        <div>
          <img
            src={require("../../Data/nodejs.svg").default}
            alt="nodejs-icon"
          />
          <p>Node JS</p>
        </div>
        <div>
          <img
            src={require("../../Data/github.svg").default}
            alt="git-icon"
            style={{ backgroundColor: "white" }}
          />
          <p>GitHub</p>
        </div>
        <div>
          <img src={require("../../Data/npm.svg").default} alt="npm-icon" />
          <p>NPM</p>
        </div>
        <div>
          <img src={require("../../Data/redux.svg").default} alt="redux-icon" />
          <p>Redux</p>
        </div>
        <div>
          <img
            src={require("../../Data/typescript.svg").default}
            alt="typescript-icon"
          />
          <p>TypeScript</p>
        </div>
        <div>
          <img
            src={require("../../Data/chakra-ui.svg").default}
            alt="chakra-ui-icon"
          />
          <p>Chakra UI</p>
        </div>
      </div>
    </div>
  );
};

export default SKill;
