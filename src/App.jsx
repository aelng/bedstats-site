import { useState } from "react";
import "./App.css";
import Topnav from "./components/nav/Topnav";
import Homepage from "./components/home/home";
import Buttons from "./components/buttons/buttons";
import Team from "./components/team/team";

function App() {
  return (
    <>
      <Topnav />
      <Homepage />
      <Buttons />
      <Team />
    </>
  );
}

export default App;
