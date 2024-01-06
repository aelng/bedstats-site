import React, { useState } from "react";
import Ali from "../../media/silly.png";
import Gian from "../../media/giann.png";
import "./team.css";
import "../home/home.css";

const Team = () => {
  return (
    <>
      <div className="mt-[25%]">
        <p className="heading">Team</p>
        <div className="justify-center flex mt-[7%]">
          <div className="flex flex-col items-center mr-14">
            <a href="https://www.linkedin.com/in/gian-pena/" target="_blank">
              <img src={Gian} className="person mb-4" />{" "}
            </a>
            <p className="descr">Gian Pena</p>
            <p className="descr">Founder and Developer</p>
          </div>

          <div className="flex flex-col items-center">
            <a href="https://www.linkedin.com/in/ali-elnagmi/" target="_blank">
              <img src={Ali} className="person mb-4" />
            </a>
            <p className="descr">Ali Elnagmi</p>
            <p className="descr">Developer</p>
          </div>
        </div>
      </div>
    </>
  );
};

export default Team;
