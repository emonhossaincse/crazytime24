import React from "react";

function CasinoSearch(){
    return(
        <section className="search">
  <input type="search" id="search-input" className="search-box" placeholder="Search For Game or by Provider" />
  <label htmlFor="search-input">
    <svg width={800} height={800} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M10 4a6 6 0 1 0 0 12 6 6 0 0 0 0-12m-8 6a8 8 0 1 1 14.32 4.906l5.387 5.387a1 1 0 0 1-1.414 1.414l-5.387-5.387A8 8 0 0 1 2 10" fill="#ffffff" /></svg>
  </label>
</section>

    );

}
export default CasinoSearch;