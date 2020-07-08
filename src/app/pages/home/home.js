import React from "react";
import { ReactComponent as LinkedIn } from "../../assets/images/linkedin-logo.svg";
import { ReactComponent as GitHub } from "../../assets/images/github-logo.svg";
import { DisplayImage as userImage } from "../../assets/images/user.png";
import "./home.scss";
import Typist from "../../components/Typist";

const Home = () => {
  return (
    <div className="home-container" id="home-page">
      <div className="home-detail">
        <div style={{marginBottom:'140px'}}>
          <h1
            style={{
              fontSize: "2.5em",
              width: "467px",
              fontFamily: "Raleway",
              fontSize: "32pt",
            }}
          >
            <br />
            <span style={{ color: "#FFFFFF" }}>Hello, i'm</span>{" "}
            <span style={{ color: "#E4436D" }}>Abhishek</span>
            <br />
            <span style={{ color: "#FFFFFF" }}>i'm </span>
            <span
              class="txt-rotate"
              data-period="2000"
              data-rotate='[ "FullStack Developer .", "Coder .", "Learner ." ]'
            ></span>
          </h1>
          {Typist()}
        </div>
        <div className="home-detail_social">
          <a href={"/"}>
            <LinkedIn
              className="home-detail_social--img"
              style={{ fill: "white" }}
            />
          </a>
          <a href={"/"}>
            <GitHub
              className="home-detail_social--img"
              style={{ fill: "white" }}
            />
          </a>
        </div>
      </div>
    </div>
  );
};

export default Home;
