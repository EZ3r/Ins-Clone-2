import { Avatar } from "@mui/material";
import React from "react";

function Suggestions() {
  return (
    <div className="mt-7 mr-5">
      <div className="text-gray-500 font-bold">Suggestions for you</div>
      <div className="mt-4 space-y-4">
        <div className="flex justify-between items-center">
          <div className="flex items-center">
            <span className="ml-2">
              <Avatar>E</Avatar>
            </span>
            <div className="flex flex-col ml-2">
              <span className="font-semibold text-sm">ElvisZ</span>
              <span className="text-gray-500 text-xs">New to Instagram</span>
            </div>
          </div>
          <button className="text-blue-500 font-bold bg-transparent border-0 mr-1 hover:text-gray-500 cursor-pointer">
            Follow
          </button>
        </div>

        <div className="flex justify-between items-center">
          <div className="flex items-center">
            <span className="ml-2">
              <Avatar>K</Avatar>
            </span>
            <div className="flex flex-col ml-2">
              <span className="font-semibold text-sm">KevinLee</span>
              <span className="text-gray-500 text-xs">New to Instagram</span>
            </div>
          </div>
          <button className="text-blue-500 font-bold bg-transparent border-0 mr-1 hover:text-gray-500 cursor-pointer">
            Follow
          </button>
        </div>
      </div>
    </div>
  );
}

export default Suggestions;
