import React from "react";
import "./about.css";

const About = () => {
  return (
    <div className="container">
      <div className="photo">
        <img
        src="https://avatars.githubusercontent.com/u/114169815?s=400&u=e39016f1926813106c35a0138785474ab6bef304&v=4"
        alt="profilPhoto"/>

      <div className="info">
          <h3>Caroline Barbosa</h3>
          <p>Age: 20</p>
          <p>Baku, Xhazar, Bina</p>
          <h4>Contacts</h4>
        <p>Phone: 077-748-36-36</p>
        <p>Email: hasanovarzuman7@gmail.com</p>
        <p>
          <a
            href="https://github.com/arzuman-hasanov"
            target="_blank"
            rel="noreferrer"
          >
            Github Account
          </a>
        </p>
      </div>
    </div>
    </div>
  );
}

export default About;