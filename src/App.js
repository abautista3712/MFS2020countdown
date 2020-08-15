import React, { useState, useEffect } from "react";
import Title from "./Components/Title";
import Countdown from "./Components/Countdown";
import PreReleaseBtn from "./Components/PreReleaseBtn";
import PostReleaseBtn from "./Components/PostReleaseBtn";
import Container from "react-bootstrap/Container";
import "bootstrap/dist/css/bootstrap.css";
// import logo from "./logo.svg";
import moment from "moment";
import "./App.css";

function App() {
  const [isReleaseDate, setIsReleaseDate] = useState(false);
  const [timeDiff, setTimeDiff] = useState(0);

  const releaseDate = 1597734000;
  const currentDate = moment().unix();

  useEffect(() => {
    if (timeDiff < 0) {
      setIsReleaseDate(true);
    }
  }, [timeDiff]);

  setTimeout(function () {
    setTimeDiff(releaseDate - currentDate);
  }, 1000);

  return (
    <div>
      <video
        style={{ position: "absolute", minHeight: "100%", minWidth: "100%" }}
        loop
        autoPlay
        muted
      >
        <source
          src="https://assets.mixkit.co/videos/preview/mixkit-hyperlapse-of-a-cloudy-sky-1766-large.mp4"
          type="video/mp4"
        />
        Your browser does not support the video tag.
      </video>
      <Container className="centerAlign overlay">
        <Title />
        <Countdown />
        {isReleaseDate ? <PostReleaseBtn /> : <PreReleaseBtn />}
      </Container>
    </div>
  );
}

export default App;
