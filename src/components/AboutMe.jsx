import React from "react";
import "./AboutMe.css";
import vikram from "../assets/vikram.jpg.jpg";

const AboutMe = () => {
    return (
    <>
     <div className="mp">
        <img src={vikram} className="d-block  " alt="viki" />
        <div className="mx-4">
          <h3 className="md">
            *I Am <span className="vikram">Vikram</span>
          </h3>
          <h3 className="sam">
            *I Am From Maharashtra , Dist -
            <span className="pm"> Sambhaji Nagar</span>
          </h3>
          <h3>*Front End Developer, And UI UX Designer</h3>
          <h3>
            <span className="class">* JavaScript Framework </span>Angular, React{" "}
            <br />
            <h3>
              <span className="class1">*Database </span> MySql
            </h3>
            <h3>
              <span className="class2">*Backend </span> Basic Java
            </h3>
          </h3>
        </div>
      </div>
    </>
  );
};

export default AboutMe;
