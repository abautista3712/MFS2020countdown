import React, { useState, useRef } from "react";
import Button from "react-bootstrap/Button";

const PostReleaseBtn = () => {
  const [isButtonClicked, setIsButtonClicked] = useState(false);
  let btnRef = useRef();

  const handleButtonClick = (e) => {
    e.preventDefault();
    isButtonClicked ? setIsButtonClicked(false) : setIsButtonClicked(true);
    if (btnRef.current) {
      btnRef.current.setAttribute("disabled", "disabled");
      btnRef.current.setAttribute("style", "background:grey");
    }
    console.log(isButtonClicked);
  };

  return (
    <Button className="overlay" ref={btnRef} onClick={handleButtonClick}>
      {isButtonClicked
        ? "Yeah, Kuya. Take that as a lesson!"
        : "Hope you enjoy the game! Click Here!"}
    </Button>
  );
};

export default PostReleaseBtn;
