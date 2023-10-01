import React from "react";
import { Container, Button } from "reactstrap";

function DeleteRoom(props) {
  const handleDeleteRoom = async () => {
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
          <Button onClick={handleDeleteRoom}>Delete Room</Button>
        </Col>
        <Col md="10">
          <h3>{props.selectedRoom.title}</h3>
        </Col>
      </Row>
    </Container>
  );
}

export default DeleteRoom;
