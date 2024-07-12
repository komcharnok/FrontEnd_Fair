import React from "react";
import EmojiIcon from "../../../../svg/Emoji";

function EmojiPickerApp() {
  return (
    <li className="w-full">
      <button className="btn-chat" type="button">
        <EmojiIcon className="dark:fill-dark_svg_1" />
      </button>
    </li>
  );
}

export default EmojiPickerApp;
