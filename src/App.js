import React from "react";
import Title from "./Components/Title";
import Countdown from "./Components/Countdown";
import PreReleaseBtn from "./Components/PreReleaseBtn";
import PostReleaseBtn from "./Components/PostReleaseBtn";
import Container from "react-bootstrap/Container";
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
      <Container className="centerAlign overlay">
        <Title />
        <Countdown />
        <PreReleaseBtn />
        <PostReleaseBtn />
      </Container>
    </div>
  );
}

export default App;
