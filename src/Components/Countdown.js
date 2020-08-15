import React, { useState } from "react";
import Col from "react-bootstrap/Col";
import moment from "moment";

function Countdown() {
  //   const [date] = useState(moment().format("LLL"));
  //   const [currentDate, setCurrentDate] = useState(
  //     moment().format("MMMM Do YYYY, h:mm:ss a")
  //   );
  const currentDate = moment().unix();
  const releaseDate = 1597734000;
  const [timeDiff, setTimeDiff] = useState();

  const dayVal = Math.floor(timeDiff / 86400);
  const hourVal = Math.floor((timeDiff % 86400) / 3600);
  const minVal = Math.floor(((timeDiff % 86400) % 3600) / 60);
  const secVal = Math.floor(((timeDiff % 86400) % 3600) % 60);

  //   const timeDiff = relea/seDate - currentDate;
  setTimeout(function () {
    setTimeDiff(releaseDate - currentDate);
  }, 1000);

  return (
    <div>
      {/* <h2>{currentDate}</h2>
      <h2>{releaseDate}</h2>
      <h2>{timeDiff}</h2> */}
      <h2>Days{dayVal}</h2>
      <h2>Hours{hourVal}</h2>
      <h2>Min{minVal}</h2>
      <h2>Sec{secVal}</h2>
      {/* <h1>{console.log(releaseDate._d)}</h1> */}
    </div>
  );
}

export default Countdown;
