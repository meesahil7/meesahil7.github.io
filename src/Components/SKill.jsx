import React from "react";
import styles from "../Styles/skill.module.css";

const SKill = () => {
  return (
    <div className={styles.skillDiv} id="skill">
      <h1 className={styles.heading}>Skills</h1>
      <div className={styles.imageDiv}>
        <div>
          <img src={require("../Assets/html.svg").default} alt="html-icon" />
          <p>HTML</p>
        </div>
        <div>
          <img src={require("../Assets/css.svg").default} alt="css-icon" />
          <p>CSS</p>
        </div>
        <div>
          <img
            src={require("../Assets/javascript.svg").default}
            alt="javascript-icon"
          />
          <p>JavaScript</p>
        </div>
        <div>
          <img
            src={require("../Assets/typescript.svg").default}
            alt="typescript-icon"
          />
          <p>TypeScript</p>
        </div>
        <div>
          <img src={require("../Assets/react.svg").default} alt="react-icon" />
          <p>React</p>
        </div>
        <div>
          <img
            src={require("../Assets/icons8-next.js.svg").default}
            alt="react-icon"
          />
          <p>Next Js</p>
        </div>
        <div>
          <img
            src={require("../Assets/nodejs.svg").default}
            alt="nodejs-icon"
          />
          <p>Node JS</p>
        </div>
        <div>
          <img
            src={require("../Assets/nestjs-icon.svg").default}
            alt="nestjs-icon"
          />
          <p>Nest JS</p>
        </div>
        <div>
          <img
            src={require("../Assets/expressjs.svg").default}
            alt="expressjs-icon"
          />
          <p>Express JS</p>
        </div>
        <div>
          <img
            src={require("../Assets/mongodb.svg").default}
            alt="mongodb-icon"
          />
          <p>Mongo DB</p>
        </div>
        <div>
          <img
            src={require("../Assets/shadcn-ui-seeklogo.svg").default}
            alt="shadcn-icon"
          />
          <p>ShadCn</p>
        </div>
        <div>
          <img
            src={require("../Assets/zod-seeklogo.svg").default}
            alt="zod-icon"
          />
          <p>Zod</p>
        </div>
      </div>
    </div>
  );
};

export default SKill;
