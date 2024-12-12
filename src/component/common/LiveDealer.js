import React from "react";
import CardLists from "./CardLists";

export default function LiveDealer() {
  const LiveDealerImgList = [
    {
      id: 1,
      img: "./cardImg/OceanRuler.jpg"
    },
    {
      id: 2,
      img: "./cardImg/CatsAhoyMouseMayhem.jpg"
    },
    {
      id: 3,
      img: "./cardImg/FlyJet.jpg"
    },
    {
      id: 4,
      img: "./cardImg/HitTheTop.jpg"
    },
    {
      id: 5,
      img: "./cardImg/HotTurkey.jpg"
    },
    {
      id: 6,
      img: "./cardImg/LightsOfLuck.jpg"
    },
    {
      id: 7,
      img: "./cardImg/PenguinsChristmasPartyTime_1000x400.jpg"
    },
    {
      id: 8,
      img: "./cardImg/OceanRuler.jpg"
    }
  ];

  return (
    <div className="liveDealer">
      <CardLists cardTitle="Live Dealer" dataList={LiveDealerImgList} />
    </div>
  );
}
