import React, { useState } from 'react';
import { Accordion, Card, Button } from 'react-bootstrap';


function Affiliate(){

    const [isLoggedIn, setIsLoggedIn] = useState(!!localStorage.getItem('token'));
    return(
     <div className="max-width">
        <div className="container">
        <>
       
        <div className="n1jo2sj6">

        {isLoggedIn &&(
        <div className="ljuq1em">
    <div className="affiliate-wrap">
    <div className="dtzaqyu left-wrap">
        <div className="dashboard-top">
            <div className="left">
                <div className="top-text">
                    <p className="t ttu">Total Reward Earned:</p>
                    <p className="n">BDT&nbsp;0.00</p>
                </div>
            </div>
            <div className="right">
                <div className="top-text">
                    <p className="t ttu">Total Friends Referred:</p>
                    <p className="n">0</p>
                </div>
            </div>
        </div>
        <div className="dashboard-mid">
            <div className="mid-left">
                <div className="mid-header">
                    <img alt="network" src="/assets/network.a415d3eb.png"/>
                    <p className="ttu">Referral Rewards</p>
                    <button>
                        <span>Details</span>
                        <svg className="s1ff97qc icon">
                           
                        </svg>
                    </button>
                </div>
                <div className="left-rn">
                    <span>BDT&nbsp;0.00</span>
                </div>
                <div className="withdraw-btn">
                    <button>Withdraw
                        <svg className="s1ff97qc icon icon-blank">
                      
                    </svg>
                </button>
            </div>
        </div>
        <div className="mid-right">
            <div className="mid-header">
                <img alt="discount" src="/assets/discount.bf090f3a.png"/>
                <p className="ttu">Commission Rewards</p>
                <button>
                    <span>Details</span>
                    <svg className="s1ff97qc icon">
                       
                    </svg>
                </button>
            </div>
            <div className="right-rn">
                <span>BDT&nbsp;0.00</span>
            </div>
            <div className="withdraw-btn">
                <button>Withdraw<svg className="s1ff97qc icon icon-blank">
                   
                </svg>
            </button>
        </div>
    </div>
</div>
<div className="dashboard-bot">
    <div className="bot-title">
        <p>Rewards Activities</p>
    </div>
    <div className="bot-info">
        <div className="empty sowd61n ">
            <img src="/assets/empty_w.png"/>
            <div className="msg">No info yet <br/> Invite friends to join you now!</div>
        </div>
    </div>
</div>
<button className="ui-button button-normal s-conic2 dashboard-btn">
    <div className="button-inner">
        <img alt="dashboard" src="/assets/dashboard.47e6fdaf.png"/>
        <span>Go to Dashboard</span>
        <svg className="s1ff97qc icon icon-blank">
          
        </svg>
    </div>
</button>
</div>
<div className="i1kucbv9 right-wrap">
    <div className="invite-top">
        <div className="top-inner">
            <p className="int-t ttu">Invite a Friend to Get:</p>
            <p className="int-st ttu"><span className="y">BDT&nbsp;109,777.75</span><span>Referral Rewards</span></p>
            <p className="int-st ttu"><span className="y">25%</span><span>Commission Rewards</span></p>
        </div>
    </div>
    <div className="invite-inputs">
        <div className="ip-item">
            <p className="ip-t">Referral Code</p>
            <div className="like-input"><p>qtgyh508</p>
                <button><svg className="s1ff97qc icon">
                </svg>
            </button>
        </div>
    </div>
    <div className="ip-item">
        <p className="ip-t">Referral Link</p>
        <div className="like-input"><p>https://bc.game/i-qtgyh508-n/</p><button>
            <svg className="s1ff97qc icon">
              
            </svg>
            </button>
        </div>
    </div>
</div>
<div className="invite-btns">
    <button className="ui-button button-normal s-conic4">
        <div className="button-inner">Create another code 
            <svg className="s1ff97qc icon icon-blank">
              
            </svg>
        </div>
    </button>
    <button className="ui-button button-normal share-btn">
        <div className="button-inner">Share via social media</div>
    </button>
</div>
<div className="invite-link">
        <button>
            <span>Referral Terms &amp; Conditions</span>
            <svg className="s1ff97qc icon">
              
            </svg>
        </button>
    </div>
</div>
</div>
    </div>
    )}
     {!isLoggedIn &&(
       <>
         <div className="banner-wrap">
            <div className="banner-inner">
                <p className="b-t ttu">Invite Friends to Earn</p>
                <p className="b-st ttu"><b>$1,000.00 + 25% Commission</b></p>
                <button className="ui-button button-normal s-conic b-s">
                    <div className="button-inner">Sign up &amp; Earn</div>
                </button>
                <p className="b-d">Referral Terms &amp; Conditions</p>
            </div>
        </div>
        <div className="referral-commission">
            <div className="referral common-item">
                <p className="rci-t ttu">Get your <span className="s">$1,000.00</span> referral rewards</p>
                <p className="rci-d">Every friend you invite, will get you $1,000.00, the more you invite, the more you will get!</p>
                <button className="ui-button button-normal rci-btn">
                    <div className="button-inner">
                        <span>Please see the details</span>
                        <svg className="s1ff97qc icon">
                           
                        </svg>
                    </div>
                </button>
                <img alt="refferral" src="/assets/referral.8365b050.png" className="rci-img"/>
            </div>
            <div className="commission common-item">
                <p className="rci-t ttu">Get your <span className="s">25%</span> commission rewards</p>
                <p className="rci-d">You will receive commission rewards every time your friends place wager based on the games.</p>
                <button className="ui-button button-normal rci-btn">
                    <div className="button-inner">
                        <span>Please see the details</span>
                        <svg className="s1ff97qc icon">
                         
                        </svg>
                    </div>
                </button>
                <img alt="refferral" src="/assets/commission.a4f11d85.png" className="rci-img"/>
            </div>
        </div>
       </>

     )}
        <div className="licxpy1">
            <div className="title-wrap">
                <div className="red-wrap">
                    <div className="red-bg">
                </div>
                <div className="red-dont">
                </div>
            </div>
            <p>Live Rewards</p>
        </div>
        <div className="lr-top">
            <div className="lr-top-left">
                <p>Total Rewards Sent To-Date</p>
                <div className="y-w">$24,198,652.04</div>
            </div>
            <div className="line">
            </div>
            <div className="lr-top-right">
                <div className="c1mxe6k6 vertical swiper">
                    <div className="motion-container" draggable="false" >
                        <div className="swiper-slide" draggable="false">
                            <div className="reward-swiper-item item-0" draggable="false">
                                <p className="username" draggable="false">Gmzxpbzcuoac</p>
                                <div className="d" draggable="false">Got <div className="cq8kbks coin notranslate" draggable="false">
                                    <div className="amount amount-str" draggable="false">0.4704</div>
                                    <img className="coin-icon" src="/coin/INR.black.png" draggable="false"/>
                                </div> rewards</div>
                            </div>
                            <div className="reward-swiper-item item-1" draggable="false">
                                <p className="username" draggable="false">Zqkdebknmpyb</p>
                                <div className="d" draggable="false">Got 
                                    <div className="cq8kbks coin notranslate" draggable="false">
                                    <div className="amount amount-str" draggable="false">0.50</div>
                                    <img className="coin-icon" src="/coin/USDT.black.png" draggable="false"/>
                                </div> rewards</div>
                            </div>
                            <div className="reward-swiper-item item-2" draggable="false">
                                <p className="username" draggable="false">Bzcqnqjwnyb</p>
                                <div className="d" draggable="false">Got <div className="cq8kbks coin notranslate" draggable="false">
                                    <div className="amount amount-str" draggable="false">2.7273</div>
                                    <img className="coin-icon" src="/coin/INR.black.png" draggable="false"/>
                                </div> rewards</div>
                            </div>
                            <div className="reward-swiper-item item-3" draggable="false"><p className="username" draggable="false">Fpkulbvigoac</p>
                                <div className="d" draggable="false">Got <div className="cq8kbks coin notranslate" draggable="false">
                                    <div className="amount amount-str" draggable="false">0.595</div>
                                    <img className="coin-icon" src="/coin/INR.black.png" draggable="false"/>
                                </div> rewards</div>
                            </div>
                        </div>
                        <div className="swiper-slide" draggable="false" >
                            <div className="reward-swiper-item item-0" draggable="false">
                                <p className="username" draggable="false">Zpjwnsnwnyb</p>
                                <div className="d" draggable="false">Got 
                                    <div className="cq8kbks coin notranslate" draggable="false">
                                        <div className="amount amount-str" draggable="false">0.50</div>
                                        <img className="coin-icon" src="/coin/USDT.black.png" draggable="false"/>
                                    </div> rewards</div>
                                </div>
                                <div className="reward-swiper-item item-1" draggable="false">
                                    <p className="username" draggable="false">Cdglpbsrtoac</p>
                                    <div className="d" draggable="false">Got <div className="cq8kbks coin notranslate" draggable="false">
                                        <div className="amount amount-str" draggable="false">0.50</div>
                                        <img className="coin-icon" src="/coin/USDT.black.png" draggable="false"/>
                                    </div> rewards</div>
                                </div>
                                <div className="reward-swiper-item item-2" draggable="false">
                                    <p className="username" draggable="false">Hot Tuna</p>
                                    <div className="d" draggable="false">Got <div className="cq8kbks coin notranslate" draggable="false">
                                        <div className="amount amount-str" draggable="false">25.00</div>
                                        <img className="coin-icon" src="/coin/USDT.black.png" draggable="false"/>
                                    </div> rewards</div>
                                </div>
                                <div className="reward-swiper-item item-3" draggable="false">
                                    <p className="username" draggable="false">AayAss</p>
                                    <div className="d" draggable="false">Got 
                                        <div className="cq8kbks coin notranslate" draggable="false">
                                            <div className="amount amount-str" draggable="false">0.5992</div>
                                            <img className="coin-icon" src="/coin/INR.black.png" draggable="false"/>
                                        </div> rewards
                                    </div>
                                </div>
                            </div>
                            <div className="swiper-slide" draggable="false" >
                            <div className="reward-swiper-item item-0" draggable="false">
                                <p className="username" draggable="false">Zpjwnsnwnyb</p>
                                <div className="d" draggable="false">Got 
                                    <div className="cq8kbks coin notranslate" draggable="false">
                                        <div className="amount amount-str" draggable="false">0.50</div>
                                        <img className="coin-icon" src="/coin/USDT.black.png" draggable="false"/>
                                    </div> rewards</div>
                                </div>
                                <div className="reward-swiper-item item-1" draggable="false">
                                    <p className="username" draggable="false">Cdglpbsrtoac</p>
                                    <div className="d" draggable="false">Got <div className="cq8kbks coin notranslate" draggable="false">
                                        <div className="amount amount-str" draggable="false">0.50</div>
                                        <img className="coin-icon" src="/coin/USDT.black.png" draggable="false"/>
                                    </div> rewards</div>
                                </div>
                                <div className="reward-swiper-item item-2" draggable="false">
                                    <p className="username" draggable="false">Hot Tuna</p>
                                    <div className="d" draggable="false">Got <div className="cq8kbks coin notranslate" draggable="false">
                                        <div className="amount amount-str" draggable="false">25.00</div>
                                        <img className="coin-icon" src="/coin/USDT.black.png" draggable="false"/>
                                    </div> rewards</div>
                                </div>
                                <div className="reward-swiper-item item-3" draggable="false">
                                    <p className="username" draggable="false">AayAss</p>
                                    <div className="d" draggable="false">Got 
                                        <div className="cq8kbks coin notranslate" draggable="false">
                                            <div className="amount amount-str" draggable="false">0.5992</div>
                                            <img className="coin-icon" src="/coin/INR.black.png" draggable="false"/>
                                        </div> rewards
                                    </div>
                                </div>
                            </div>
                            
                           
    
    
    
                         </div>
                     </div>
                 </div>
             </div>
         </div>
         <div className="pfco62a">
            <div className="program-left">
                <img alt="program" src="/assets/program_w.ada9b999.png"/></div>
                <div className="program-right">
                    <p className="p-t ttu">Learn more about our <span>Affiliate program</span></p>
                    <div className="p-d">If you have a large audience and followers. We have special conditions for you to customize your referral program!</div>
                    <div className="p-d">If you can invite players and their wager amount reaches a billion dollars and above, you will get your own customized casino! You can set up a casino website with your domain and design style.</div>
                    <div className="p-dd"><span>for more details, please</span>
                        <span className="contact">Contact Us</span>:</div>
                    <div className="email-wrap"><a href="mailto:business@bc.game" keep-scroll-position="true" className="contacts-link-item" target="_self"><p className="l">business@bc.game</p>
                        <p className="send-now">Send now</p>
                        <svg className="s1ff97qc icon">
                           
                    </svg>
                </a>
            </div>
        </div>
    </div>
    </div>
    
        </>
       


        
        </div>

        
     </div>

     
    );

}
export default Affiliate;