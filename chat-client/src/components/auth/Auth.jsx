import React, { useState } from "react";
import Signup from "./signup/Signup";
import Login from "./login/Login";
import { Button, Col, Container, Row } from "reactstrap";

function Auth(props) {
  const [button, setButton] = useState("Sign Up");

  const swapForm = () => {
    button === "Login" ? setButton("Sign Up") : setButton("Login");
  };

  const displayForm = () => {
    return button === "Login" ? (
      <Row>
        <Col>
          <Signup updateToken={props.updateToken} />
        </Col>
      </Row>
    ) : (
      <Row>
        <Col>
          <Login updateToken={props.updateToken} />
        </Col>
      </Row>
    );
  };

  return (
    <>
      <Container>{displayForm()}</Container>
      <Button onClick={swapForm} color="dark">
        {button}
      </Button>
    </>
  );
}

export default Auth;
