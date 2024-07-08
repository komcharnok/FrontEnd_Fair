import React, { useState } from "react";
import axios from "axios";
import SearchIcon from '../../../../svg/Search';
import FilterIcon from '../../../../svg/FilterIcon';

export default function Search() {
  return (
    <div className="h-[49px] py-1.5">
      {/*Container*/}
      <div className="px-[10px]">
        {/*Search input container*/}
        <div className="flex items-center gap-x-2">
          <div className="w-full flex dark:bg-dark_bg_2 rounded-lg pl-2">
            <span className="w-8 flex items-center justify-center ">
              <SearchIcon className="dark:fill-dark_svg_2 w-5" />
            </span>
            <input
              type="text"
              placeholder="Search or start a new chat"
              className="input-chatapp"
            />
          </div>
          <button className="btn-chat">
            <FilterIcon className="dark:fill-dark_svg_2" />
          </button>
        </div>
      </div>
    </div>
  );
}
