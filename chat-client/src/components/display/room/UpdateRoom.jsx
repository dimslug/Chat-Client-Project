import React from "react";
import { Container, Form, Input, Label, Row, Col, Button } from "reactstrap";

function UpdateRoom(props) {
  const handleUpdateRoom = async () => {
  };

  return (
    <Container
      fluid
      className="justify-content"
      style={{
        background: "grey",
        height: "85vh",
        width: "70vw",
        marginTop: "1em",
        marginBottom: "2em",
        padding: "1em",
      }}
    >
      <Row className="gx-3">
        <Col md="2">
          <Button>Submit</Button>
        </Col>
        <Col md="10">
          <Form>
            <Row className="align-items-center">
              <Col md="10">
                <Label for="message">Message</Label>
                <Input type="text" name="message" id="message" />
              </Col>
              <Col md="2">
                <Button>Update Room</Button>
              </Col>
            </Row>
          </Form>
        </Col>
      </Row>
    </Container>
  );
}

export default UpdateRoom;
