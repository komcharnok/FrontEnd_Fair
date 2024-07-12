import { useChat, useUser } from "../../../store/store";
import { useEffect } from "react";
import ChatHeader from "./header/ChatHeader";
import ChatMessages from "./messages/ChatMessages";
import ChatActions from "./actions/ChatActions";

function ChatContainer() {
  const { activeConversation, getConversationMessages, messages } = useChat();
  const { user } = useUser();
  const { token } = user;
  const values = {
    token,
    convo_id: activeConversation?.id,
  };

  

  useEffect(() => {
    if (activeConversation?.id) {
      getConversationMessages(values);
    }
  }, [activeConversation]);
  return (
    <div className="relative w-full h-full border-l dark:border-l-dark_border_2 select-none overflow-hidden">
      {/*Container*/}
      <div>
        {/*Chat header*/}
        <ChatHeader />
        {/*Chat messages*/}
        <ChatMessages />
        {/* Chat Actions */}
        <ChatActions />
      </div>
    </div>
  );
}

export default ChatContainer;
