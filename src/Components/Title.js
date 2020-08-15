import React from "react";
import Emoji from "./Emoji";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";

const Title = () => {
  return (
    <Row className="overlay">
      <Col>
        <h1 style={{ textAlign: "center" }}>
          {" "}
          <Emoji symbol={"✈️"} label="airplane" />
          Time Until Microsoft Flight Simulator 2020
          <Emoji symbol={"✈️"} label="airplane" />
        </h1>
      </Col>
    </Row>
  );
};

export default Title;
