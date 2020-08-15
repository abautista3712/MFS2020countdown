import React, { useState, useRef } from "react";
import Button from "react-bootstrap/Button";

const ClickBtn = () => {
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
    <Button style={{ zIndex: "1" }} ref={btnRef} onClick={handleButtonClick}>
      {isButtonClicked
        ? "Yeah, Kuya. Take that as a lesson!"
        : "Click on Release"}
    </Button>
  );
};

export default ClickBtn;
