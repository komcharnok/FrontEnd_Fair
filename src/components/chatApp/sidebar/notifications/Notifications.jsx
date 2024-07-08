import React from "react";
import NotificationIcon from '../../../../svg/Notification';
import SmallArrowIcon from '../../../../svg/SmallArrow';
import CloseIcon from '../../../../svg/Close';

export default function Notifications() {
  return (
    <div className="h-[90px] dark:bg-dark_bg_3 flex items-center p-[13px]">
      {/*container*/}
      <div className="w-full flex items-center justify-between">
        {/*Left */}
        <div className="flex items-center gap-x-4">
          <div className="cursor-pointer">
            <NotificationIcon className="dark:fill-blue_1 " />
          </div>
          <div className="flex flex-col">
            <span className="text-base leading-5 text-dark_text_1">Get notified of new messages</span>
            <span className="text-sm leading-5 text-dark_text_2 mt-0.5 flex items-center gap-0.5">
              Turn on desktop notifications
              <SmallArrowIcon className="dark:fill-dark_svg_2 mt-1" />
            </span>
          </div>
        </div>
        {/*Right */}
        <div className="cursor-pointer">
          <CloseIcon className="dark:fill-dark_svg_2" />
        </div>
      </div>
    </div>
  );
}
