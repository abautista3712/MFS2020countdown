import React from "react";
import Countdown from "./Components/Countdown";
import Emoji from "./Components/Emoji";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import "bootstrap/dist/css/bootstrap.css";
// import logo from "./logo.svg";
import "./App.css";

function App() {
  return (
    <div>
      <video
        style={{ position: "absolute", minHeight: "100%", minWidth: "100%" }}
        loop
        autoPlay
      >
        <source
          src="https://assets.mixkit.co/videos/preview/mixkit-hyperlapse-of-a-cloudy-sky-1766-large.mp4"
          type="video/mp4"
        />
        Your browser does not support the video tag.
      </video>
      <Container className="centerAlign">
        <Row style={{ zIndex: "1" }}>
          <Col>
            <h1 style={{ textAlign: "center" }}>
              {" "}
              <Emoji symbol={"✈️"} label="airplane" />
              Time Until Microsoft Flight Simulator 2020
              <Emoji symbol={"✈️"} label="airplane" />
            </h1>
          </Col>
        </Row>
        <Countdown />
      </Container>
    </div>
  );
}

export default App;
