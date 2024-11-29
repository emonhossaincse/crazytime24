import React, { useState, useEffect } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faFacebook,
  faGoogle,
  faTelegram,
  faLine,
  faSteam,
  faGoogleWallet
} from "@fortawesome/free-brands-svg-icons";

function HomeBigBanner() {
  const [isLoggedIn, setIsLoggedIn] = useState(!!localStorage.getItem("token"));
  const [username, setUsername] = useState(!!localStorage.getItem("username"));
  const [isSessionId, setisSessionId] = useState(
    !!localStorage.getItem("sessionid")
  );

  useEffect(() => {
    const token = localStorage.getItem("token");
    if (token) {
      setIsLoggedIn(true);
      // Initialize balance from local storage
      const storedUsername = localStorage.getItem("username");
      if (storedUsername) {
        setUsername(storedUsername);
      }
    }
  }, []);

  return (
    <div className="max-width">
      <div className="home-big-banner">
        <div className="container">
          <div className="d-flex">
            {!isLoggedIn &&
              <div className="content col-lg-5">
                <h5>
                  SIGN UP & <span>GET</span> REWARD
                </h5>
                <h2>
                  UP TO<span>$20,000.00</span>
                </h2>
                <div className="action d-flex">
                  <button className="blue-ui">Sign Up Now</button>
                  <p>
                    or
                    <div className="social-links w-100"> 
                      <button className="socile">
                        <FontAwesomeIcon icon={faGoogle} />
                      </button>
                      <button className="socile">
                        <FontAwesomeIcon icon={faFacebook} />
                      </button>
                      <button className="socile">
                        <FontAwesomeIcon icon={faTelegram} />
                      </button>
                      <button className="socile">
                        <FontAwesomeIcon icon={faLine} />
                      </button>
                      <button className="socile">
                        <FontAwesomeIcon icon={faSteam} />
                      </button>
                      <button className="socile">
                        <FontAwesomeIcon icon={faGoogleWallet} />
                      </button>
                    </div>
                  </p>
                </div>
              </div>}

            {isLoggedIn &&
              <div className="content col-lg-5">
                <h3>
                  Hi {username}! Welcome aboard
                </h3>
                <h4>FIRST DEPOSIT BONUS</h4>
                <h2>
                  <span>+180% REWARDS</span>
                </h2>
                <div className="action d-flex">
                  <button className="ui-button button-normal s-conic">
                    <div className="button-inner">Deposit &amp; Play</div>
                  </button>
                  <button className="ui-button button-normal s-conic3">
                    <div className="button-inner">Free Play</div>
                  </button>
                </div>
              </div>}

            <div className="thumbnail col-lg-7">
              <img
                className="light-mode"
                src="/assets/media/thumbnail/.png"
              />
              <img
                className="dark-mode"
                src="/assets/media/thumbnail/.png"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
export default HomeBigBanner;
