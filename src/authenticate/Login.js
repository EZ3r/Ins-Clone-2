import React, { useState } from "react";
import { signInWithEmailAndPassword } from "firebase/auth";
import { auth } from "../firebase";

function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleLogin = () => {
    signInWithEmailAndPassword(auth, email, password);
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
        className="bg-gray-800 border border-gray-400 rounded-md p-3 mb-3 text-white focus:outline-none focus:ring focus:border-gray-500"
      />
      <input
        onChange={(e) => setPassword(e.target.value)}
        type="password"
        placeholder="Password"
        className="bg-gray-800 border border-gray-400 rounded-md p-3 mb-3 text-white focus:outline-none focus:ring focus:border-gray-500"
      />
      <button
        onClick={handleLogin}
        className="p-3 rounded-lg border-0 font-bold text-white bg-blue-500 hover:cursor-pointer hover:bg-blue-600"
      >
        Log in
      </button>
    </div>
  );
}

export default Login;
