import {
  getConversationId,
  getConversationName,
  getConversationPicture,
} from "../../../../utils/chat";
import { useChat, useUser } from "../../../../store/store";
import { capitalize } from "../../../../utils/string";
import { dateHandler } from "../../../../utils/date";
import useSocketStore from "../../../../store/storeSocket";

function Conversation({ convo }) {
  const { open_create_conversation, activeConversation } = useChat();
  // socket
  const { socket } = useSocketStore();
  // console.log("activeConversation = ", activeConversation);
  console.log("convo = ", convo);
  const { user } = useUser();
  const { token } = user;
  const values = {
    receiver_id: getConversationId(user, convo.users),
    token,
  };
  const openConversation = async () => {
    await open_create_conversation(values);
    socket.emit("join conversation", activeConversation);
  };

  // console.log("user = ", user)
  console.log("convo = ", convo);

  return (
    <li
      onClick={() => openConversation()}
      className="list-none h-[72px] w-full dark:bg-dark_bg_1 hover cursor-pointer dark:text-dark_text_1 px-[10px]"
    >
      {/*Container */}
      <div className="relative w-full flex items-center justify-between py-[10px]">
        {/*Left*/}
        <div className="flex items-center gap-x-3">
          <div className="relative min-w-[50px] max-w-[50px] h-[50px] rounded-full overflow-hidden">
            <img
              src={getConversationPicture(user, convo.users)}
              alt="picture"
              className="w-full h-full object-cover "
            />
          </div>
          {/*Conversation name and message*/}
          <div className="w-full flex flex-col">
            {/*Conversation name*/}
            <h1 className="font-bold flex items-center gap-x-2">
              {capitalize(getConversationName(user, convo.users))}
            </h1>
            {/* Conversation message */}
            <div>
              <div className="flex items-center gap-x-1 dark:text-dark_text_2">
                <div className="flex-1 items-center gap-x-1 dark:text-dark_text_2">
                  <p>
                    {convo.latestMessage?.message.length > 25
                      ? `${convo.latestMessage?.message.substring(0, 25)}...`
                      : convo.latestMessage?.message}
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
        {/*Right*/}
        <div className="flex flex-col gap-y-4 items-end text-xs">
          <span className="dark:text-dark_text_2">
            {convo.latestMessage?.createdAt
              ? dateHandler(convo.latestMessage?.createdAt)
              : ""}
          </span>
        </div>
      </div>
      {/*Border*/}
      <div className="ml-16 border-b dark:border-b-dark_border_1"></div>
    </li>
  );
}

export default Conversation;
