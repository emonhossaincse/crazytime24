import React from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFacebook } from '@fortawesome/free-brands-svg-icons';


function HomeBigBanner(){

    return(
       
    <div className="home-big-banner">
        <div className="container">
            <div className="d-flex">
            <div className="content">
                <h5>SIGN UP & <span>GET</span> REWARD</h5>
                <h2>UP TO<span>$20,000.00</span></h2> 
                <div className="action">
                    <button>Sign Up Now</button> 
                    <p>Or  
                        <a href="#"><span className="icon"><FontAwesomeIcon icon={faFacebook} /></span></a>
                        <a href="#"><span className="icon"><FontAwesomeIcon icon={faFacebook} /></span></a>   </p>
                   
                </div>  
            </div>
            <div className="thumbnail">
                <img src="/assets/media/thumbnail/banner_rbg.png"/>
            </div>
            </div>
        </div>
    </div>
        
    );
}
export default HomeBigBanner;