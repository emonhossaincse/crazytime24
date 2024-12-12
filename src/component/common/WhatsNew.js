import React from "react";
import CardLists from "./CardLists";

export default function WhatsNew() {

  const WhatsnewImgList = [
    {id: 1, 
      img: "./cardImg/HitTheTop.jpg"
    },
    {id: 2, 
      img: "./cardImg/HotTurkey.jpg"
    },
    {id: 3, 
      img: "./cardImg/LightsOfLuck.jpg"
    },
    {id: 4, 
      img: "./cardImg/CatsAhoyMouseMayhem.jpg"
    },
    {id: 5, 
      img: "./cardImg/FlyJet.jpg"
    },
    {id: 6, 
      img: "./cardImg/OceanRuler.jpg"
    },
    {id: 7, 
      img: "./cardImg/PenguinsChristmasPartyTime_1000x400.jpg"
    },
    {id: 8, 
      img: "./cardImg/OceanRuler.jpg"
    }
  ]

  return (
    <div className="whatsnew">
      <CardLists cardTitle="Discover What's New" dataList={WhatsnewImgList} />
    </div>
  );
}
