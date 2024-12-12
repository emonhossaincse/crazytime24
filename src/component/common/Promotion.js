import React from "react";
import CardLists from "./CardLists";

export default function Promotion() {
  const PromotionImgList = [
    {
      id: 1,
      img: "./cardImg/CatsAhoyMouse.jpg",
      cardUpperSubtitle: "Shake the Globe",
      cardUpperTitle: "SHAKE THE GLOBE EACH DAY AND GET FREE SPINS"
    },
    {
      id: 2,
      img: "./cardImg/LCOffersSeason_Main_December.jpg",
      cardUpperSubtitle: "Live Casino Offers Season",
      cardUpperTitle: "ENJOY THE FESTIVITIES WITH CASH PRIZES AND GOLDEN CHIPS EACH WEEK"
    },
    {
      id: 3,
      img: "./cardImg/LCOS_LiveCasinoGiveawa.jpg",
      cardUpperSubtitle: "Cat's Ahoy! Mouse Mayhem",
      cardUpperTitle: "JOIN THIS HIGH-SEAS ADVENTURE"
    },
    {
      id: 4,
      img: "./cardImg/ShakeTheGlobeCCP_2024.jpg",
      cardUpperSubtitle: "$500,000 Live Casino Giveaway",
      cardUpperTitle: "WITH A TOP PRIZE OF $2,000 EACH WEEK"
    }
  ];

  return (
    <div className="promotion">
      <CardLists
        cardTitle=""
        dataList={PromotionImgList}
      />
    </div>
  );
}
