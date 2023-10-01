import React from "react";
import {
  Container,
  Form,
  Input,
  Label,
  Row,
  Col,
  Button,
  Sidebar,
} from "reactstrap";
import UpdateRoom from "./UpdateRoom";
import DeleteRoom from "./DeleteRoom";

function RoomDisplay(props) {
  const handleUpdateRoom = async () => {
  };

  const handleDeleteRoom = async () => {
  };

  return (
    <>
      <Sidebar>
        <UpdateRoom
          open={props.openUpdateRoom}
          handleUpdateRoom={handleUpdateRoom}
        />
        <DeleteRoom
          open={props.openDeleteRoom}
          handleDeleteRoom={handleDeleteRoom}
        />
      </Sidebar>
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
            <Button onClick={() => props.openUpdateRoom()}>Update Room</Button>
          </Col>
          <Col md="10">
            <h3>{props.selectedRoom.title}</h3>
          </Col>
        </Row>
        <Row className="mt-3">
          <Col md="2">
            <h3>Description</h3>
            <p>{props.selectedRoom.description}</p>
          </Col>
          <Col>
            <Container
              style={{
                background: "white",
                height: "40rem",
                width: "65rem",
              }}
            ></Container>
          </Col>
        </Row>
      </Container>
    </>
  );
}

export default RoomDisplay;
