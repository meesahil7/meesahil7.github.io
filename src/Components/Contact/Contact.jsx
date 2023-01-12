import React from "react";
import styles from "./contact.module.css";
import { BsFillTelephoneOutboundFill } from "react-icons/bs";
import { MdLocationOn } from "react-icons/md";
import { AiFillLinkedin, AiFillMail, AiFillGithub } from "react-icons/ai";

const Contact = () => {
  return (
    <div className={styles.container} id={styles.contact}>
      <div className={styles.heading}>
        <h1>Contact me</h1>
      </div>
      <div className={styles.main}>
        <div className={styles.contactDiv}>
          <div>
            <h1 className={styles.title}>Reach out to me!</h1>
            <p>
              Discuss a project or just want to say Hi? My inbox is open to all!
            </p>
            <div className={styles.links}>
              <div>
                <AiFillMail className={styles.icons} />
                <a href="mailto:meesahil7@gmail.com">meesahil7@gmail.com</a>
              </div>
              <div>
                <AiFillGithub className={styles.icons} />
                <a href="https://github.com/meesahil7">GitHub</a>
              </div>
              <div>
                <AiFillLinkedin className={styles.icons} />
                <a href="https://www.linkedin.com/in/meesahil7">linkedin</a>
              </div>
              <div>
                <BsFillTelephoneOutboundFill className={styles.icons} />
                <a href="tel:+919051357356">+91 9051357356</a>
              </div>
              <div className={styles.links}>
                <MdLocationOn className={styles.icons} />
                <a href="">Kolkata, India</a>
              </div>
            </div>
          </div>
        </div>
        <div className={styles.mailImg}>
          <img src={require("../../Data/mail.svg").default} />
        </div>
      </div>
    </div>
  );
};

export default Contact;
