import React from "react";
import CasinoNav from "../component/nav/CasinoNav";
import CasinoSearch from "../component/nav/CasinoSearch";
import WhatsNew from "../component/common/WhatsNew";
import Exclusive from "../component/common/Exclusive";
import Santa from "../component/common/Santa";
import BestBigTime from "../component/common/BestBigTime";
import LiveDealer from "../component/common/LiveDealer";
import TwisterPoker from "../component/common/TwisterPoker";
import Promotion from "../component/common/Promotion";
import CasinoFooter from "../component/common/CasinoFooter";

function Casino() {
  return (
    <main className="max-width">
      <div className="casino-page">
        <CasinoSearch />
        <CasinoNav />
        <Promotion />
        <WhatsNew />
        <Exclusive />
        <Santa />
        <BestBigTime />
        <LiveDealer />
        <TwisterPoker />
        <CasinoFooter />
      </div>
    </main>
  );
}
export default Casino;
