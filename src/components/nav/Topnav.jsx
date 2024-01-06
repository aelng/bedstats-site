import React, { useState } from "react";
import "./nav.css";
import bedd from "../../media/bedd.png";
import { FaDiscord } from "react-icons/fa";
import { FaHome } from "react-icons/fa";

import { SiPatreon } from "react-icons/si";

const Topnav = () => {
  return (
    <nav
      style={{ position: "absolute", top: "25px", right: "70px", zIndex: "10" }}
    >
      <img
        src={bedd}
        alt="bedimg"
        style={{
          width: "50px",
          height: "auto",
          position: "fixed",
          left: "50px",
          top: "18px",
        }}
      />

      <div className="flex items-center gap-12">

        <div className='flex items-center justify-center gap-2 thing'>
          <FaHome size={22} />
          <div className="hover:white hover:cursor-pointer styling ">
            <a
              href="https://top.gg/bot/601205271578017813"
              className="text-white hover:text-white visited:text-white"
              target="_blank"
            >
              Top.gg
            </a>
          </div>
        </div>


        <div className="hover:cursor-pointer thing flex items-center justify-center gap-2">
          <SiPatreon size={22} />
          <div className="styling">
            <a
              href="https://www.patreon.com/gian447?fan_landing=true"
              className="text-white hover:text-white visited:text-white"
              target="_blank"
            >
              Patreon
            </a>
          </div>
        </div>

        <div className="hover:text-white hover:cursor-pointer thing styling flex items-center gap-2 justify-center">
          <FaDiscord
            size={22}
          />
          <a
            href="https://discord.com/oauth2/authorize?client_id=601205271578017813&permissions=8&scope=applications.commands%20bot"
            className="text-white hover:text-white visited:text-white"
            target="_blank"
          >
            Invite
          </a>
        </div>

      </div>
    </nav>
  );
};

export default Topnav;
