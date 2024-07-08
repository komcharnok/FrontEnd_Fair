import { useEffect } from "react";
import Sidebar from "../../components/chatApp/sidebar/Sidebar";
import { useUser, useChat } from "../../store/store";

function MainChat() {
  const { user } = useUser();
  const { getConversations, conversations } = useChat();

  // console.log("conversations = ", conversations);
  useEffect(() => {
    if (user?.token) {
      getConversations();
      // dispatch(getConversations(user.token));
    }
  }, [user]);
  return (
    <div className="h-screen dark:bg-dark_bg_1 flex items-center justify-center overflow-hidden">
      {/*container*/}
      <div className="container h-screen flex py-[19px]">
        {/*Sidebar*/}
        <Sidebar />
      </div>
    </div>
  );
}

export default MainChat;
