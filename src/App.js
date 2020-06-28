import React from "react";
import { Grid, Row, Col } from "react-flexbox-grid";
import "./App.css";
import NavBar from "./app/navbar/navbar";
import { Routes } from "./routes.config.js";
function App() {
  return (
    <Grid fluid style={{ margin: 0, padding: 0, overflow: "hidden" }}>
      <Row>
        <Col xs={0} lg={1} md={0} style={{ padding: 0 }}>
          <NavBar />
        </Col>
        <Col xs={12} lg={11} md={12} style={{ padding: 0 }}>
          <Routes />
        </Col>
      </Row>
    </Grid>
  );
}

export default App;
