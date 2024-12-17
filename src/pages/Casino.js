import React from "react";
import WhatsNew from "../component/common/WhatsNew";
import CasinoFooter from "../component/common/CasinoFooter";
import CasinoNav from "../component/nav/CasinoNav";

function Casino() {
  return (
    <main className="max-width">
      <div className="casino-page">
        <CasinoNav/>
            
        <WhatsNew />
        
        <CasinoFooter />
      </div>
    </main>
  );
}
export default Casino;
