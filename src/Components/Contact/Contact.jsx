import React from "react";
import "./contact.css";
import { BsFillTelephoneOutboundFill } from "react-icons/bs";
import { MdLocationOn } from "react-icons/md";
import { AiFillLinkedin, AiFillMail, AiFillGithub } from "react-icons/ai";

const Contact = () => {
  return (
    <div className="container" id="contact">
      <div className="heading">
        <h1>Contact me</h1>
      </div>
      <div className="main-div">
        <div className="contact-div">
          <div>
            <h1 className="title">Reach out to me!</h1>
            <p>
              Discuss a project or just want to say Hi? My inbox is open to all!
            </p>
            <div className="links">
              <div>
                <AiFillMail className="icons" />
                <a href="mailto:meesahil7@gmail.com">meesahil7@gmail.com</a>
              </div>
              <div>
                <AiFillGithub className="icons" />
                <a href="https://github.com/meesahil7">GitHub</a>
              </div>
              <div>
                <AiFillLinkedin className="icons" />
                <a href="https://www.linkedin.com/in/meesahil7">linkedin</a>
              </div>
              <div>
                <BsFillTelephoneOutboundFill className="icons" />
                <a href="tel:+919051357356">+91 9051357356</a>
              </div>
              <div className="links">
                <MdLocationOn className="icons" />
                <a href="">Kolkata, India</a>
              </div>
            </div>
          </div>
        </div>
        <div className="mail-img">
          <img src={require("../../Data/mail.svg").default} />
        </div>
      </div>
    </div>
  );
};

export default Contact;
