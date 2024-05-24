import React from "react";
import Sidenav from "./navigation/Sidenav";
import Timeline from "./timeline/Timeline";

function Homepage() {
  return (
    <div className="flex flex-row">
      <div className="relative flex-[0.2]">
        <Sidenav />
      </div>
      <div className="flex-[0.8]">
        <Timeline />
      </div>
    </div>
  );
}

export default Homepage;

