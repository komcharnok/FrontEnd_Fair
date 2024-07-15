import React from "react";
import { useChat } from "../../../../store/store";
import Conversation from "./Conversation";
function Conversations() {
  const { conversations } = useChat();
  // console.log("conversations = ", conversations);
  return (
    <div className="convos scrollbar">
      <ul>
        {conversations &&
          conversations
            // .filter((c) => c.latestMessage || c._id === activeConversation._id)
            .map((convo) => {
              return <Conversation convo={convo} key={convo.id} />;
            })}
      </ul>
    </div>
  );
}

export default Conversations;
