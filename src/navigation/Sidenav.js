import React from "react";
import HomeIcon from "@mui/icons-material/Home";
import SearchIcon from "@mui/icons-material/Search";
import ExploreIcon from "@mui/icons-material/Explore";
import SlideshowIcon from "@mui/icons-material/Slideshow";
import ChatIcon from "@mui/icons-material/Chat";
import FavoriteBorderIcon from "@mui/icons-material/FavoriteBorder";
import AddCircleOutlineIcon from "@mui/icons-material/AddCircleOutline";
import MenuIcon from "@mui/icons-material/Menu";
import { Avatar } from "@mui/material";
import { useDispatch, useSelector } from "react-redux";
import { signOut } from "firebase/auth";
import { logoutUser } from "../features/userSlice";
import { auth } from "../firebase";

function Sidenav() {
  const user = useSelector((state) => state.data.user.user);
  const dispatch = useDispatch();
  const handelLogout = () => {dispatch(logoutUser());signOut(auth);};

  return (
    <div className="fixed flex flex-col justify-between z-10 h-screen p-6">
      <img
        className="w-30 mb-6"
        src="https://www.pngkey.com/png/full/828-8286178_mackeys-work-needs-no-elaborate-presentation-or-distracting.png"
        alt="Instagram Logo"
      />

      <div className="flex flex-col space-y-2">
        <button className="flex items-center text-white bg-transparent border-0 p-2 rounded-lg hover:bg-white hover:bg-opacity-20">
          <HomeIcon />
          <span className="ml-2 font-bold text-lg">Home</span>
        </button>
        <button className="flex items-center text-white bg-transparent border-0 p-2 rounded-lg hover:bg-white hover:bg-opacity-20">
          <SearchIcon />
          <span className="ml-2 font-bold text-lg">Search</span>
        </button>
        <button className="flex items-center text-white bg-transparent border-0 p-2 rounded-lg hover:bg-white hover:bg-opacity-20">
          <ExploreIcon />
          <span className="ml-2 font-bold text-lg">Explore</span>
        </button>
        <button className="flex items-center text-white bg-transparent border-0 p-2 rounded-lg hover:bg-white hover:bg-opacity-20">
          <SlideshowIcon />
          <span className="ml-2 font-bold text-lg">Reels</span>
        </button>
        <button className="flex items-center text-white bg-transparent border-0 p-2 rounded-lg hover:bg-white hover:bg-opacity-20">
          <ChatIcon />
          <span className="ml-2 font-bold text-lg">Messages</span>
        </button>
        <button className="flex items-center text-white bg-transparent border-0 p-2 rounded-lg hover:bg-white hover:bg-opacity-20">
          <FavoriteBorderIcon />
          <span className="ml-2 font-bold text-lg">Notifications</span>
        </button>
        <button className="flex items-center text-white bg-transparent border-0 p-2 rounded-lg hover:bg-white hover:bg-opacity-20">
          <AddCircleOutlineIcon />
          <span className="ml-2 font-bold text-lg">Create</span>
        </button>
        <button className="flex items-center text-white bg-transparent border-0 p-2 rounded-lg hover:bg-white hover:bg-opacity-20">
          <Avatar>
            {user.username ? user.username.charAt(0).toUpperCase() : "A"}
          </Avatar>
          <span className="ml-2">
            {user.username}
            <button
              onClick={handelLogout}
              className="ml-2 text-sm font-bold text-white bg-opacity-20 bg-white rounded-lg p-2 hover:bg-opacity-40"
            >
              Logout
            </button>
          </span>
        </button>
      </div>

      <div className="fixed bottom-3">
        <button className="flex items-center text-white bg-transparent border-0 p-2 rounded-lg hover:bg-white hover:bg-opacity-20">
          <MenuIcon />
          <span className="ml-2 font-bold text-lg">More</span>
        </button>
      </div>
    </div>
  );
}

export default Sidenav;
