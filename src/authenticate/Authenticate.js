import React, { useState } from "react";
import Login from "./Login";
import Signup from "./Signup";

const Authenticate = () => {
  const [active, setActive] = useState("login");

  const handleChange = () => {
    setActive(active === "login" ? "signup" : "login");
  };

  return (
    <div className="flex flex-row items-center mx-12">
      <div className="flex-1 text-center">
        <img src="https://i.imgur.com/P3Vm1Kq.png" alt="ins" className="w-96 mt-10" />
      </div>
      <div className="flex-1">
        {active === "login" ? <Login /> : <Signup />}
        <div className="border border-gray-400 p-5 mx-8 mt-3 text-center">
          <span className="font-medium text-sm">
            {active === "login" ? (
              <>
                Don't have an account?{" "}
                <button onClick={handleChange} className="font-bold text-blue-500 hover:cursor-pointer">
                  Sign Up
                </button>
              </>
            ) : (
              <>
                Have an account?{" "}
                <button onClick={handleChange} className="font-bold text-blue-500 hover:cursor-pointer">
                  Log in
                </button>
              </>
            )}
          </span>
        </div>
      </div>
    </div>
  );
}

export default Authenticate;