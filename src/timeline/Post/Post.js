import MoreHorizIcon from "@mui/icons-material/MoreHoriz";
import { Avatar } from "@mui/material";
import React from "react";
import FavoriteBorderIcon from "@mui/icons-material/FavoriteBorder";
import ChatBubbleOutlineIcon from "@mui/icons-material/ChatBubbleOutline";
import TelegramIcon from "@mui/icons-material/Telegram";
import BookmarkBorderIcon from "@mui/icons-material/BookmarkBorder";

function Post({ user, postImage, likes, timestamp }) {
  return (
    <div className="w-[550px] mx-10 my-7">
      <div className="flex justify-between items-center mb-2">
        <div className="flex items-center font-bold">
          <Avatar className="mr-2">{user.charAt(0).toUpperCase()}</Avatar>
          {user} • <span className="text-gray-500 ml-2 text-sm">{timestamp}</span>
        </div>
        <MoreHorizIcon />
      </div>
      <div className="mb-2">
        <img src={postImage} alt="" className="w-full rounded-lg border border-gray-300" />
      </div>
      <div>
        <div className="flex justify-between items-center mb-2">
          <div className="flex space-x-2">
            <FavoriteBorderIcon className="p-2 text-2xl cursor-pointer" />
            <ChatBubbleOutlineIcon className="p-2 text-2xl cursor-pointer" />
            <TelegramIcon className="p-2 text-2xl cursor-pointer" />
          </div>
          <BookmarkBorderIcon className="p-2 text-2xl cursor-pointer" />
        </div>
        <p>Liked by {likes} people</p>
      </div>
    </div>
  );
}

export default Post;
