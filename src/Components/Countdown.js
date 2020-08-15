import React, { useState } from "react";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import moment from "moment";

function Countdown() {
  const releaseDate = 1597734000;
  const currentDate = moment().unix();
  const [timeDiff, setTimeDiff] = useState(0);

  const dayVal = Math.floor(timeDiff / 86400);
  const hourVal = Math.floor((timeDiff % 86400) / 3600);
  const minVal = Math.floor(((timeDiff % 86400) % 3600) / 60);
  const secVal = Math.floor(((timeDiff % 86400) % 3600) % 60);

  setTimeout(function () {
    setTimeDiff(releaseDate - currentDate);
  }, 1000);

  return (
    <Row style={{ textAlign: "center" }}>
      <Col>
        <h2>
          Days
          <br />
          {dayVal}
        </h2>
      </Col>
      <Col>
        <h2>
          Hours
          <br />
          {hourVal}
        </h2>
      </Col>
      <Col>
        <h2>
          Mins
          <br />
          {minVal}
        </h2>
      </Col>
      <Col>
        <h2>
          Seconds
          <br />
          {secVal}
        </h2>
      </Col>
    </Row>
  );
}

export default Countdown;
