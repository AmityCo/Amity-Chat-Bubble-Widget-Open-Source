import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { ChattingPage } from "./ChattingPage";
import { MyChat } from "./MyChat";
import SideNavbar from "./SideNavbar";

import React, { useEffect, useState } from "react";
import "./Home.css";

export const HomeComp = () => {
  const { user, loading, error } = useSelector((store) => store.user);
  const amityUser = useSelector((store) => store.user);
  const { chatting } = useSelector((store) => store.chatting);
  const navigate = useNavigate();
  const [isOpenChat, setIsOpenChat] = useState(false);
  useEffect(() => {
    if (amityUser?.userId.userId.length == 0) {
      navigate("/register");
    }
  }, [amityUser]);

  function onClickAddChat(value) {
    setIsOpenChat(value);
  }
  return (
    <div className="home-cont">
      <SideNavbar />
      <div className={isOpenChat ? "" : "display-none"}>
        <MyChat onClickStartChat={onClickAddChat} />
      </div>

      <div className={!isOpenChat ? "" : "display-none"}>
        {chatting._id ? (
          <ChattingPage />
        ) : (
          <MyChat onClickStartChat={onClickAddChat} />
        )}
      </div>
    </div>
  );
};
