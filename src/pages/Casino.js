import React from 'react';
import CasinoNav from '../component/nav/CasinoNav';
import CasinoSearch from '../component/nav/CasinoSearch';
import CasinoList from '../component/common/CasinoList';

function Casino(){

    return(
       <main className='max-width'>
        <div className='casino-page'>
        <CasinoSearch/>
        <CasinoNav/>
        <CasinoList/>
        </div>
       </main>

    );

}
export default Casino;