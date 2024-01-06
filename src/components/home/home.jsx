import React, { useState } from "react";
import "./home.css";

const Homepage = () => {
  return (
    <>
      <div>
        <h1 className="heading">
          BedStats<span className="blinker"></span>
        </h1>

        <p className="descr">
          The #1 Bedwars statistics bot that delivers immediate, real time
          results.
        </p>
      </div>
    </>
  );
};

export default Homepage;
