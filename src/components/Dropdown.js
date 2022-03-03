import React from "react";
import { Accordion } from "react-bootstrap";

const Dropdown = () => {
  return (
    <Accordion>
      <Accordion.Item eventKey="0">
        <Accordion.Header>
          <h4>How to use pomodoro</h4>
        </Accordion.Header>
        <Accordion.Body>
          <p>Click Play button to start the timer</p>
          <p>Settings button is disabled when in focus mode</p>
          <p>Click settings to change your prefered work and break timer</p>
        </Accordion.Body>
      </Accordion.Item>
    </Accordion>
  );
};

export default Dropdown;
