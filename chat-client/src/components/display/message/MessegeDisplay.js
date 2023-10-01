import React from "react";
import { Container, Form, Input, Label, Row, Col, Button } from "reactstrap";

//! Display messages
const displayMessages = (messages) => {
  return messages.map((message) => (
    <Row key={message.id} className="gx-3">
      <Col md="10">
        <h3>{message.content}</h3>
      </Col>
      <Col md="2">
        {message.owner === selectedRoom.owner && (
          <Button onClick={() => handleUpdateMessage(message.id)}>
            Update
          </Button>
        )}
        {message.owner === selectedRoom.owner && (
          <Button onClick={() => handleDeleteMessage(message.id)}>
            Delete
          </Button>
        )}
      </Col>
    </Row>
  ));
};

//! Add message
const handleAddMessageSubmit = async (e) => {
  e.preventDefault();

  const newMessage = {
    content: e.target.message.value,
  };

  await handleAddMessage(selectedRoom.id, newMessage);

  e.target.message.value = "";
};

//! Update message
const handleUpdateMessageSubmit = async (e) => {
  e.preventDefault();

  const updatedMessage = {
    id: e.target.messageId.value,
    content: e.target.messageContent.value,
  };

  await handleUpdateMessage(updatedMessage.id, updatedMessage);

  e.target.messageId.value = "";
  e.target.messageContent.value = "";
};

//! Delete message
const handleDeleteMessage = async (messageId) => {
  await handleDeleteMessage(messageId);
};

//! Message display component
const MessageDisplay = ({ selectedRoom, handleMessageDisplay }) => {
  const messages = selectedRoom.messages;

  return (
    <Container fluid className="justify-content">
      <h3>{selectedRoom.title}</h3>
      <Row className="mt-3">
        <Col md="12">{displayMessages(messages)}</Col>
      </Row>
      <Form onSubmit={handleAddMessageSubmit}>
        <Row className="mt-3">
          <Col md="12">
            <Label for="message">Message</Label>
            <Input type="text" name="message" id="message" />
          </Col>
        </Row>
        <Button type="submit">Add Message</Button>
      </Form>
    </Container>
  );
};

export default MessageDisplay;
