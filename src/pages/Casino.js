import React from "react";
import CasinoSearch from "../component/nav/CasinoSearch";
import WhatsNew from "../component/common/WhatsNew";
import CasinoFooter from "../component/common/CasinoFooter";

function Casino() {
  return (
    <main className="max-width">
      <div className="casino-page">
            
        <WhatsNew />
        
        <CasinoFooter />
      </div>
    </main>
  );
}
export default Casino;
