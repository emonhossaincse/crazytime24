import React from "react";
import "../assets/css/sports.css"
import Inplay from "../layout/Inplay";

const Sports = () => {
 
  return (
    <div className="sports-container max-width game-lunch">

    <Inplay />
      <div className="iframe">
      <iframe width="560" height="315" src="https://lmt.ss8055.com/index?Id=53525301&t=d" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
      </div>
    </div>
  );
};

export default Sports;
