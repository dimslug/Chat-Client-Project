import React from "react";

const AddMessage = ({ onAddMessage }) => {
  const [messageContent, setMessageContent] = useState("");

  const handleAddMessage = () => {
    if (messageContent.trim() === "") {
      alert("Message content cannot be empty.");
      return;
    }

    const newMessage = {
      id: Date.now(),
      content: messageContent,
      owner: "user123",
    };

    onAddMessage(newMessage);

    setMessageContent("");
  };

  return (
    <div>
      <h3>Add Message:</h3>
      <input
        type="text"
        value={messageContent}
        onChange={(e) => setMessageContent(e.target.value)}
        placeholder="Enter your message"
      />
      <button onClick={handleAddMessage}>Submit</button>
    </div>
  );
};

export default AddMessage;
