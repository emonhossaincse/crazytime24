import React from "react";
import CardLists from "./CardLists";

export default function TwisterPoker() {
  const TwisterPokerImgList = [
    {
      id: 1,
      img: "./cardImg/TwisterPokerFootballEuro.jpg"
    },
    {
      id: 2,
      img: "./cardImg/TwisterPokerFootballEuro.jpg"
    },
    {
      id: 3,
      img: "./cardImg/TwisterPokerFootballEuro.jpg"
    }
  ];

  return (
    <div className="twisterPoker">
      <CardLists cardTitle="Live Dealer" dataList={TwisterPokerImgList} />
    </div>
  );
}
