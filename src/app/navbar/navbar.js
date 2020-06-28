import React from "react";
import { Link } from "react-router-dom";
import { ReactComponent as Home } from "../assets/images/home.svg";
import { ReactComponent as Project } from "../assets/images/innovation.svg";
import { ReactComponent as Experience } from "../assets/images/experience.svg";
import { ReactComponent as Contact } from "../assets/images/contact.svg";
import "./navbar.css";
const NavBar = () => {
  const [activeTab, setActiveTab] = React.useState('home');
  const actieLink = "#003049";
  const activeSvg = "white";
  const links = [
    { link: "/", component: Home, label: "home" },
    { link: "/expertise", component: Experience, label: "expertise" },
    { link: "/projects", component: Project, label: "projects" },
    { link: "/contact", component: Contact, label: "contact" },
  ];
  return (
    <div style={{ backgroundColor: "#F77F00" }}>
      <div className="nav-container">
        <div className="nav-link-item--logo">{"Logo"}</div>
        <div className="nav-link">
          {links.map((link) => (
            <Link to={link.link} className="nav-link-item">
              <div
                style={{
                  width: "100%",
                }}
                onClick={()=>setActiveTab(link.label)}
              >
                <link.component
                  style={{
                    display: "block",
                    margin: "0 auto",
                    width: "30px",
                    height: "30px",
                    padding: "30px 0px",
                    fill: activeTab === link.label ? "white" : "#333",
                  }}
                />
              </div>
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
};

export default NavBar;
