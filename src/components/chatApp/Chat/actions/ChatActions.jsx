import React from "react";
import { useChat, useUser } from "../../../../store/store";
import { useState } from "react";
import Attachments from "./attachments/Attachments";
import SendIcon from "../../../../svg/Send";
import Input from "./Input";
import EmojiPickerApp from "./EmojiPicker";

function ChatActions() {
  const { activeConversation, sendMessage } = useChat();
  const { user } = useUser();
  const { token } = user;
  const [message, setMessage] = useState("");
  const values = {
    message,
    convo_id: activeConversation.id,
    files: [],
    token,
  };
  const SendMessageHandler = async (e) => {
    e.preventDefault();
    await sendMessage(values);
    setMessage("");
  };
  return (
    <form
      onSubmit={(e) => SendMessageHandler(e)}
      className="dark:bg-dark_bg_2 h-[60px] w-full flex items-center absolute bottom-0 py-2 px-4 select-none"
    >
      {/*Container*/}
      <div className="w-full flex items-center gap-x-2">
        {/*Emojis and attachpments*/}
        <ul className="flex gap-x-2">
          <EmojiPickerApp />
          <Attachments />
        </ul>
        {/*Input*/}
        <Input message={message} setMessage={setMessage} />
        {/*Send button*/}
        <button type="submit" className="btn-chat">
          <SendIcon className="dark:fill-dark_svg_1" />
        </button>
      </div>
    </form>
  );
}

export default ChatActions;
