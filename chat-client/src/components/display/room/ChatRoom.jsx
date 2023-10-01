import {
  isMessageOwner,
  setIntervalToUpdateChatRoomMessages,
  isRoomOwner,
} from "./chat-room-utils";
import { displayMessages } from "../message/MessegeDisplay";

function ChatRoom({ token }) {
  const roomId = parseInt(window.location.pathname.split("/")[2]);
  const messages = getMessagesForRoom(roomId);
  displayMessages(messages);
  setIntervalToUpdateChatRoomMessages(roomId, 30000);
  if (!isRoomOwner(roomId)) {
    return;
  }
  if (!isMessageOwner(message)) {
    return;
  }
}

export default ChatRoom;
