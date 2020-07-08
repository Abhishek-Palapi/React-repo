import React from "react";
import { Grid, Row, Col } from "react-flexbox-grid";
import "./App.css";
import NavBar from "./app/navbar/navbar";
import { Routes } from "./routes.config.js";
import Home from "./app/pages/home/home"
import Expertise from "./app/pages/expertise/expertise"
import Projects from "./app/pages/projects/projects"
import Contact from "./app/pages/contact/contact"
function App() {
  return (
    <Grid fluid style={{ margin: 0, padding: 0, overflow: "hidden" }}>
      <Row>
        <Col xs={0} lg={1} md={0} style={{ padding: 0 }}>
          <NavBar />
        </Col>
        <Col xs={12} lg={11} md={12} style={{ padding: 0 }}>
          <section id="home">
             <Home/>
          </section>
          <section id="expertise" style={{height:'912px'}}>
          <Expertise />
          </section>
          <section id="projects" style={{height:'912px'}}>
          <Projects />
          </section>
           <section id="contact" style={{height:'912px'}}>
           <Contact />
          </section>

        </Col>
      </Row>
    </Grid>
  );
}

export default App;
