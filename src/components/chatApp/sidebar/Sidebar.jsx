import React from "react";
import SidebarHeader from "./header/SidebarHeader";
import Notifications from "./notifications/Notifications";
import Search from "./search/Search";
import Conversations from "./conversations/Conversations";

function Sidebar() {
  return (
    <div className="flex0030 max-w-[30%] h-full select-none">
      <SidebarHeader />
      {/*Notifications */}
      <Notifications />
      <Search />
      <Conversations />
    </div>
  );
}

export default Sidebar;
