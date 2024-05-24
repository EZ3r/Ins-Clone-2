import React, { useState } from "react";
import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  updateProfile,
} from "firebase/auth";
import { auth } from "../firebase";

function Signup() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [username, setUsername] = useState("");

  const handleSignUp = (event) => {
    event.preventDefault();
    createUserWithEmailAndPassword(auth, email, password)
      .then((authUser) => {signInWithEmailAndPassword(auth, email, password)
       .then(() =>updateProfile(auth.currentUser, {displayName: username,}));})
      .catch((err) => {alert(err);});
  };

  return (
    <div className="flex flex-col border border-gray-400 p-12 mx-8">
      <img
        src="https://www.pngkey.com/png/full/828-8286178_mackeys-work-needs-no-elaborate-presentation-or-distracting.png"
        alt=""
        className="w-52 mx-auto mb-10"
      />
      <input
        onChange={(e) => setEmail(e.target.value)}
        type="email"
        placeholder="Email"
        value={email}
        className="bg-gray-800 border border-gray-400 rounded-md p-3 mb-3 text-white focus:outline-none focus:ring focus:border-gray-500"
      />
      <input
        onChange={(e) => setUsername(e.target.value)}
        type="text"
        placeholder="Username"
        value={username}
        className="bg-gray-800 border border-gray-400 rounded-md p-3 mb-3 text-white focus:outline-none focus:ring focus:border-gray-500"
      />
      <input
        onChange={(e) => setPassword(e.target.value)}
        type="password"
        placeholder="Password"
        value={password}
        className="bg-gray-800 border border-gray-400 rounded-md p-3 mb-3 text-white focus:outline-none focus:ring focus:border-gray-500"
      />
      <button
        onClick={handleSignUp}
        className="p-3 rounded-lg border-0 font-bold text-white bg-blue-500 hover:cursor-pointer hover:bg-blue-600"
      >
        Sign up
      </button>
    </div>
  );
}

export default Signup;

