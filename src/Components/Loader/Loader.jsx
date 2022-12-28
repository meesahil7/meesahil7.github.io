import React from "react";
import styles from "./loader.module.css";

const Loader = () => {
  return (
    <div id={styles.container}>
      <div id={styles.loader}>
        <h1 id={styles.loaderHeading}>Sahil Khan</h1>
      </div>
    </div>
  );
};

export default Loader;
