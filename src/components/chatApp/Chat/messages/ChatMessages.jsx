import { useChat, useUser } from "../../../../store/store";
import { useRef } from "react";
import { useEffect } from "react";
import Message from "./Message";

function ChatMessages() {
  const { messages } = useChat();
  const { user } = useUser();

  //   const endRef = useRef();

  //   useEffect(() => {
  //     scrollToBottom();
  //   }, [messages]);
  //   const scrollToBottom = () => {
  //     endRef.current.scrollIntoView({ behavior: "smooth" });
  //   };
  return (
    <div className="mb-[60px]">
      {/*Container*/}
      <div className="scrollbar overflow_scrollbar overflow-auto py-2 px-[5%]">
        {/*Messages*/}
        {messages &&
          messages.map((message) => (
            <Message
              message={message}
              key={message.id}
              me={user.user_id == message.senderId}
            />
          ))}
        {/* <div className="mt-2" ref={endRef}></div> */}
      </div>
    </div>
  );
}

export default ChatMessages;
