import React from "react";
import Button from "react-bootstrap/Button";

const PreReleaseBtn = () => {
  return (
    <Button variant="secondary" className="overlay" disabled>
      Click Here on Release Day
    </Button>
  );
};

export default PreReleaseBtn;
