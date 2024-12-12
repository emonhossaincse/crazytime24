import React from "react";
import CasinoNav from "../component/nav/CasinoNav";
import CasinoSearch from "../component/nav/CasinoSearch";
import CasinoList from "../component/common/CasinoList";
import WhatsNew from "../component/common/WhatsNew";
import Exclusive from "../component/common/Exclusive";
import Santa from "../component/common/Santa";
import BestBigTime from "../component/common/BestBigTime";

function Casino() {
  return (
    <main className="max-width">
      <div className="casino-page">
        <CasinoSearch />
        <CasinoNav />
        <CasinoList />
        <WhatsNew />
        <Exclusive />
        <Santa />
        <BestBigTime />
      </div>
    </main>
  );
}
export default Casino;
