import React from "react";
import { ReactComponent as LinkedIn } from '../../assets/images/linkedin-logo.svg';
import { ReactComponent as GitHub } from '../../assets/images/github-logo.svg';
import {DisplayImage as userImage} from "../../assets/images/user.png"
import './home.scss'
const Home = () => {
  const {
    FullName = "full",
    // DisplayImage = "",
    BannerTitle = "bannerTiktr",
    BannerDescription = "BannerDescription",
    WorkLinks = "work",
  } = {};
  return (
    <div className="home-container" id="home-page">
      <div className="home-detail">
        <div
          className="home-detail_name"
          style={{ color: 'white' }}
        >
          <p className="home-detail_name--first">
            {FullName.substring(0, FullName.indexOf(" "))}
          </p>
          <p className="home-detail_name--last">
            {FullName.substring(FullName.lastIndexOf(" "), FullName.length)}
          </p>
          <p
            className="home-detail_title"
            style={{ color: 'white' }}
          >
            {BannerTitle}
          </p>
          <p
            className="home-detail_description"
            style={{ color: 'white' }}
          >
            {BannerDescription}
          </p>
        </div>
        <div className="home-detail_social">
          <a href={WorkLinks.LinkedIn}>
            <LinkedIn
              className="home-detail_social--img"
              style={{ fill: 'white' }}
            />
          </a>
          <a href={WorkLinks.GitHub}>
            <GitHub
              className="home-detail_social--img"
              style={{ fill: 'white' }}
            />
          </a>
        </div>
      </div>
      <div
        className="home-face"
        style={{ backgroundColor: '#8D99AE' }}
      >
        <div className="color-picker">
          <div
            className="color-item"
            style={{ backgroundColor: "#FFC30B" }}
            // onClick={() => this.props.changeSecondaryColor("#FFC30B")}
          ></div>
          <div
            className="color-item"
            style={{ backgroundColor: "#57A0D3" }}
            // onClick={() => this.props.changeSecondaryColor("#57A0D3")}
          ></div>
          <div
            className="color-item"
            style={{ backgroundColor: "#98FB98" }}
            // onClick={() => this.props.changeSecondaryColor("#98FB98")}
          ></div>
          <div
            className="color-item"
            style={{ backgroundColor: "#FE7F9C" }}
            // onClick={() => this.props.changeSecondaryColor("#FE7F9C")}
          ></div>
        </div>
       <div>
        <img src={require('../../assets/images/user.png')} className="home-face_image" alt="home-face" />
        </div>
      </div>
    </div>
  );
};

export default Home;
