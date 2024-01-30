import React from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFacebook, faGoogle,  faTelegram, faLine, faSteam, faGoogleWallet} from '@fortawesome/free-brands-svg-icons';


function HomeBigBanner(){

    return(
       
    <div className="max-width">
        <div className="home-big-banner">
        <div className="container">
            <div className="d-flex">
            <div className="content col-lg-5">
                <h5>SIGN UP & <span>GET</span> REWARD</h5>
                <h2>UP TO<span>$20,000.00</span></h2> 
                <div className="action d-flex">
                    <button className="blue-ui">Sign Up Now</button> 
                    <p>or 
                        <button className="socile"><FontAwesomeIcon icon={faGoogle} /></button>
                        <button className="socile"><FontAwesomeIcon icon={faFacebook} /></button>
                        <button className="socile"><FontAwesomeIcon icon={faTelegram} /></button>
                        <button className="socile"><FontAwesomeIcon icon={faLine} /></button> 
                        <button className="socile"><FontAwesomeIcon icon={faSteam} /></button>
                        <button className="socile"><FontAwesomeIcon icon={faGoogleWallet} /></button> 
                       </p>
                </div>  
            </div>
            <div className="thumbnail col-lg-7">
                <img className="light-mode" src="/assets/media/thumbnail/169018078930595.png"/>
                <img className="dark-mode"  src="/assets/media/thumbnail/16901807926590.png"/>
            </div>
            </div>
        </div>
        </div>
    </div>
        
    );
}
export default HomeBigBanner;