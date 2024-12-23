import React, { useState, useEffect } from "react";
import { Modal } from "react-bootstrap";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faWallet,
  faRightFromBracket,
  faUser,
  faXmark,
  faMoneyBill
} from "@fortawesome/free-solid-svg-icons";
import ProfileModal from "../../pages/account/ProfileModal";


const MyModal = ({ showModal, handleClose }) => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const [success, setSuccess] = useState("");
  const [validationError, setValidationError] = useState("");
  const [isLoggedIn, setIsLoggedIn] = useState(!!localStorage.getItem("token"));
  
  

  useEffect(() => {
    const errorTimer = setTimeout(() => {
      setError("");
      setValidationError("");
      setSuccess("");
    }, 5000);

    return () => clearTimeout(errorTimer);
  }, []);

  const handleUsernameChange = e => {
    setUsername(e.target.value);
  };

  const handlePasswordChange = e => {
    setPassword(e.target.value);
  };

  const handleLogin = async () => {
    try {
      const response = await fetch(`${process.env.REACT_APP_API_URL}/api/login`, {
        method: "POST",
        headers: {
          ACCEPT: "application/json",
          "Content-Type": "application/json"
        },
        body: JSON.stringify({ username, password })
      });

      const data = await response.json();

      if (response.ok) {
        console.log(data);
        localStorage.setItem("token", data.token);
        localStorage.setItem("remote_id", data.remote_id);
        localStorage.setItem("username", data.username);

        setIsLoggedIn(true);
        handleClose();
        window.location.reload();
      } else {
        setError(data.message || "An unexpected error occurred"); 
      }
    } catch (error) {
      console.error("Error during login:", error);
      setError("An unexpected error occurred");
    }
  };

  return (
    <Modal show={showModal} onHide={handleClose}>
      <div className="sh1kgj9">
        <div className="s1bscfa1">
          <div className="ithbrou">
            <div className="login-left">
              <img
                alt=""
                src="/assets/bg-c80415f6.png"
                className="common-left-img dark-mode"
              />
              <img
                alt=""
                src="/assets/bg_w-9476816a.png"
                className="common-left-img light-mode"
              />
              <img
                alt=""
                src="/assets/media/thumbnail/mobile_01.jpg"
                className="common-left-img mobile"
              />

              <div className="left-text">
                <p className="t">
                  Welcome to<span>BET 365</span>
                </p>
                <p className="st">Start your game journey now!</p>
              </div>
            </div>
            <div className="login-right">
              <div
                id="regist"
                className="simple-page s15zywit"
                style={{ opacity: 1, transform: "none" }}
              >
                <p className="sign-title">Sign In</p>
                <FontAwesomeIcon
                  className="close-icon"
                  onClick={handleClose}
                  icon={faXmark}
                />

                <form>
                  <div className="ui-input first-input">
                    <div className="input-control">
                      <input
                        type="text"
                        placeholder="Username"
                        value={username}
                        onChange={e => setUsername(e.target.value)}
                      />
                    </div>
                  </div>

                  <div className="ui-input pjkqlcx">
                    <div className="input-control">
                      <input
                        type="password"
                        placeholder="Password"
                        value={password}
                        onChange={e => setPassword(e.target.value)}
                      />
                      <svg className="s1ff97qc icon" />
                    </div>
                  </div>

                  <div className="buttons">
                    <button
                      type="button"
                      onClick={handleLogin}
                      className="ui-button button-big s-conic"
                    >
                      <div className="button-inner">Sign in</div>
                    </button>
                  </div>
                </form>
              </div>

              <div className="other-sign-wrap">
                <div className="line-text">
                  <div className="l" />
                  <div className="t">Log in directly with</div>
                  <div className="l" />
                </div>
                <div className="third-group-wrap">
                  <button id="gg_login" type="button" title="google">
                    <svg
                      width="12"
                      height="12"
                      viewBox="0 0 10 11"
                      xmlns="http://www.w3.org/2000/svg"
                      className="icon"
                    >
                      <path d="M6.8619 3.38909C6.37169 2.93243 5.70412 2.67872 5.02615 2.68886C3.77446 2.68886 2.72093 3.50068 2.33502 4.60677L0.749573 3.40937C1.56315 1.83647 3.21119 0.841974 5.02615 0.841974C6.21523 0.831834 7.36257 1.25803 8.22834 2.04957L6.8619 3.38909Z" />
                      <path d="M2.3347 6.39258C2.13649 5.81418 2.13665 5.18503 2.33485 4.60658L0.749407 3.40918C0.0713866 4.72837 0.0712314 6.28098 0.749252 7.59003C1.56283 9.16293 3.21103 10.1574 5.02598 10.1574C6.3159 10.1574 7.39831 9.74346 8.19046 9.03657L8.19682 9.04135C9.10425 8.21928 9.62582 7.02188 9.62582 5.61133C9.62582 5.29678 9.59451 4.97204 9.54236 4.66763H5.02588V6.46376H7.61271C7.5084 7.04221 7.1643 7.54952 6.65329 7.87426C6.22567 8.15839 5.67265 8.32053 5.02598 8.32053C3.7743 8.32053 2.72076 7.49867 2.33485 6.40272L0.751787 7.58806L2.3347 6.39258Z" />
                    </svg>
                  </button>
                  <button id="tg_login" type="button" title="telegram">
                    <svg
                      width="12"
                      height="12"
                      viewBox="0 0 10 9"
                      xmlns="http://www.w3.org/2000/svg"
                      className="tel icon"
                    >
                      <path d="M0.631267 4.23359L8.94963 0.522088C9.26472 0.381636 9.63257 0.52552 9.77174 0.843552C9.82141 0.956236 9.83693 1.08093 9.81624 1.20277L8.70026 7.90193C8.63145 8.31346 8.24549 8.59114 7.83779 8.52187C7.7219 8.50206 7.6117 8.45479 7.51702 8.38397L4.70353 6.27916C4.42674 6.07231 4.36827 5.6781 4.57367 5.39854C4.59695 5.36641 4.62386 5.33651 4.65335 5.30942L7.47408 2.69548C7.49943 2.67187 7.50098 2.6322 7.4777 2.6064C7.45752 2.58436 7.42441 2.57962 7.39854 2.59569L3.11829 5.27286C2.96256 5.36984 2.77269 5.39345 2.59885 5.33677L0.655584 4.70362C0.52417 4.66082 0.452255 4.51881 0.49468 4.38657C0.51641 4.31856 0.566078 4.2625 0.631267 4.23354V4.23359Z" />
                    </svg>
                  </button>
                  <button id="mm_login" type="button" title="metamask">
                    <svg
                      width="12"
                      height="12"
                      viewBox="0 0 12 12"
                      xmlns="http://www.w3.org/2000/svg"
                      className="icon"
                    >
                      <path
                        fillRule={"evenodd"}
                        clipPath={"evenodd"}
                        d="M0.614979 0.00163379C0.625651 -0.00178505 0.637657 0.000226031 0.646994 0.00706371L0.745707 0.0805353L4.39007 1.43949C4.3914 1.43661 4.39273 1.43386 4.39474 1.43125C4.4014 1.42173 4.41208 1.4161 4.42408 1.4161H7.58155C7.59289 1.4161 7.60423 1.42179 7.6109 1.43131C7.61223 1.43346 7.61356 1.43567 7.61423 1.43802L11.2486 0.0811386L11.3486 0.00706371C11.358 0.000226031 11.37 -0.00178505 11.3806 0.00163379C11.392 0.00505263 11.4007 0.0134992 11.404 0.024359L11.9983 1.79612C12.0003 1.80202 12.0003 1.80846 11.9996 1.81456L11.6061 3.69988L11.8362 3.8733C11.8449 3.88001 11.8502 3.89046 11.8502 3.90153C11.8502 3.91265 11.8449 3.92311 11.8362 3.92988L11.4987 4.18703L11.7522 4.38311C11.7608 4.38955 11.7655 4.39927 11.7662 4.40973C11.7668 4.42018 11.7622 4.43037 11.7548 4.43741L11.4127 4.7492L11.6108 4.89192C11.6194 4.89775 11.6241 4.90666 11.6254 4.91652C11.6268 4.92637 11.6234 4.93629 11.6174 4.94387L11.0878 5.55953L11.9049 8.07466C11.9089 8.08545 11.9069 8.09732 11.9002 8.10657C11.8936 8.11575 11.8822 8.12118 11.8709 8.12118H11.8602L11.1079 10.6706L8.45595 9.94175L7.94172 10.362L6.8939 11.0865H5.1024L4.05925 10.362L3.66039 10.0359L3.52967 9.97392C3.51966 9.96937 3.51299 9.96085 3.51032 9.95093L0.892442 10.6706L0.134756 8.08552L0.937796 5.58587C0.931126 5.58393 0.925123 5.58018 0.921122 5.57481L0.382872 4.94374C0.376202 4.93616 0.373534 4.92631 0.374868 4.91645C0.375535 4.9066 0.380871 4.89768 0.388874 4.89192L0.587633 4.7492L0.245474 4.43741C0.238138 4.43037 0.233469 4.42032 0.234136 4.40986C0.234136 4.39947 0.239472 4.38975 0.247475 4.38325L0.496925 4.18723L0.159434 3.92988C0.150097 3.92311 0.144761 3.91259 0.145428 3.90139C0.145428 3.89026 0.150764 3.87974 0.159434 3.8731L0.393543 3.69968L0.000694001 1.81456C-0.000639952 1.80846 2.70248e-05 1.80209 0.00202795 1.79619L0.591635 0.0244261C0.59497 0.0135662 0.603641 0.00505263 0.614979 0.00163379ZM3.73509 2.53967L4.75092 3.30687L4.33471 3.67537L3.27949 4.567L1.14966 5.18967L0.711109 4.67494L0.889232 4.54649C0.896874 4.54094 0.902165 4.53231 0.902165 4.52286C0.902753 4.51347 0.899226 4.50431 0.892171 4.49793L0.589421 4.22207L0.812222 4.04712C0.819864 4.04109 0.823979 4.03194 0.823979 4.02231C0.823979 4.01262 0.819276 4.00352 0.811634 3.99761L0.51535 3.77156L0.704054 3.63153C0.714048 3.62426 0.718751 3.61197 0.7164 3.60004L0.367796 1.92721L0.87042 0.415094L3.73509 2.53967ZM10.8432 5.18626L11.2852 4.67221L11.1074 4.54401C11.0991 4.53847 11.0945 4.52985 11.0939 4.52041C11.0933 4.51103 11.0974 4.50189 11.1044 4.49552L11.4061 4.22023L11.1802 4.04554C11.1725 4.03959 11.1678 4.03038 11.1684 4.02071C11.1684 4.01097 11.1725 4.00183 11.1807 3.99593L11.4772 3.76997L11.2917 3.63026C11.2823 3.62295 11.2776 3.61073 11.2799 3.59894L11.628 1.92861L11.122 0.418512L7.24491 3.29416L7.81665 3.80419L8.71593 4.56437L10.8432 5.18626ZM5.04102 7.42137L4.65751 6.60802L3.75442 7.01862C3.75643 7.02284 3.75776 7.02747 3.75776 7.03223L3.75843 7.04402L5.04102 7.42137ZM5.32045 9.03574L5.15504 9.14957C5.16038 9.15661 5.16238 9.16532 5.16171 9.17417L5.04966 10.1639L5.11636 10.0999H6.87984L6.9959 10.2021L6.87451 9.20528C6.86584 9.20622 6.85716 9.20421 6.84983 9.19918L6.63373 9.05089H5.3498C5.33779 9.05089 5.32712 9.04493 5.32045 9.03574ZM8.23372 7.01098L6.98714 7.37626L6.9858 7.36654L7.34797 6.60802L8.23372 7.01098Z"
                      />
                    </svg>
                  </button>
                  <button id="wc_login" type="button" title="wallet connect">
                    <svg
                      width="16"
                      height="16"
                      viewBox="0 0 13 9"
                      xmlns="http://www.w3.org/2000/svg"
                      className="icon"
                    >
                      <path
                        fillRule={"evenodd"}
                        clipPath={"evenodd"}
                        d="M11.4289 3.91921L12.1201 4.58746C12.2153 4.67825 12.2153 4.82718 12.1201 4.91797L9.00652 7.93605C8.91132 8.02685 8.75766 8.02685 8.66608 7.93605L6.45637 5.79324C6.43412 5.77145 6.39429 5.77145 6.37204 5.79324L4.16233 7.93605C4.06713 8.02685 3.91347 8.02685 3.82189 7.93605L0.697462 4.91797C0.602265 4.82718 0.602265 4.67825 0.697462 4.58746L1.38868 3.91921C1.48387 3.82842 1.63753 3.82842 1.72911 3.91921L3.93882 6.06203C3.96107 6.08381 4.00142 6.08381 4.02315 6.06203L6.23287 3.91921C6.32806 3.82842 6.48172 3.82842 6.5733 3.91921L8.78353 6.06203C8.80526 6.08381 8.84561 6.08381 8.86734 6.06203L11.0776 3.91921C11.18 3.82842 11.3337 3.82842 11.4289 3.91921ZM2.9949 2.36498C4.87918 0.53817 7.93791 0.53817 9.82219 2.36498L10.0493 2.58655C10.144 2.67735 10.144 2.82627 10.0493 2.91707L9.27326 3.66883C9.22566 3.71605 9.14909 3.71605 9.10149 3.66883L8.79054 3.36739C7.47331 2.09261 5.34379 2.09261 4.02655 3.36739L3.69388 3.69062C3.64628 3.73783 3.56919 3.73783 3.52159 3.69062L2.74604 2.93885C2.65085 2.84806 2.65085 2.69913 2.74604 2.60834L2.9949 2.36498Z"
                      />
                    </svg>
                  </button>
                  <button id="wa_login" type="button" title="whatsapp">
                    <svg
                      width="12"
                      height="12"
                      viewBox="0 0 15 15"
                      xmlns="http://www.w3.org/2000/svg"
                      className="icon"
                    >
                      <path d="M7.2 0a7 7 0 0 0-5.67 11.1l-.87 2.6 2.7-.86A7 7 0 1 0 7.2 0Zm4.08 9.88c-.17.48-.84.88-1.38 1-.36.07-.84.13-2.45-.53-2.06-.86-3.38-2.95-3.49-3.08-.1-.14-.83-1.1-.83-2.11 0-1 .51-1.5.72-1.7.17-.18.45-.26.71-.26h.24c.2.02.3.03.44.36l.63 1.51c.05.1.1.24.03.38-.06.14-.12.2-.22.32s-.2.21-.3.34c-.1.1-.21.23-.1.43.13.2.54.88 1.14 1.41.79.7 1.42.92 1.65 1.02.17.07.37.05.49-.08.16-.17.35-.45.55-.73.14-.2.31-.22.5-.15s1.19.56 1.4.66c.2.1.34.16.38.24.05.09.05.5-.12.97Z" />
                    </svg>
                  </button>
                  <button id="ln_login" type="button" title="line">
                    <svg
                      width="14"
                      height="14"
                      className="icon"
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 1024 1024"
                    >
                      <path d="M972.55 409.27h.01l-.29-2.37-.01-.12-.01-.1-1.08-8.91-.74-6.16-.23-1.86-.46.06c-11.29-64.2-42.3-125.13-90.32-177.14-47.8-51.78-109.9-92.65-179.6-118.21-59.7-21.9-123.06-33.01-188.3-33.01-88.07 0-173.6 20.7-247.34 59.9C121.97 196.9 38.1 335.78 50.5 475.16c6.41 72.12 34.67 140.78 81.71 198.55 44.28 54.37 104.18 98.25 173.22 126.89 42.45 17.6 84.42 25.9 128.86 34.69l5.2 1.03c12.23 2.42 15.53 5.75 16.37 7.06 1.57 2.45.75 7.27.12 9.93-.58 2.45-1.18 4.9-1.78 7.34-4.77 19.46-9.7 39.58-5.83 61.77 4.46 25.5 20.39 40.13 43.7 40.13 25.08 0 53.62-16.82 72.5-27.95l2.52-1.48c45.06-26.46 87.5-56.3 119.44-79.34 69.9-50.43 149.12-107.6 208.52-181.54 59.81-74.48 87.98-170.19 77.5-262.97zm-635.07 141.1h-79.84a21.85 21.85 0 0 1-21.84-21.84V360.96a21.85 21.85 0 0 1 43.69 0v145.73h57.99a21.85 21.85 0 0 1 0 43.69zm83.29-22.43a21.85 21.85 0 0 1-43.7 0V360.36a21.85 21.85 0 0 1 43.7 0v167.58zm197.46 0a21.85 21.85 0 0 1-39.52 12.83l-78.67-108.34v95.51a21.85 21.85 0 0 1-43.69 0V365.16a21.85 21.85 0 0 1 39.53-12.84l78.66 108.35v-100.3a21.85 21.85 0 0 1 43.7 0v167.57zm159.19 18.4H669.3a21.85 21.85 0 0 1-21.85-21.84V356.92a21.85 21.85 0 0 1 21.85-21.84h104.76a21.85 21.85 0 0 1 0 43.69h-82.91v40.1h67.29a21.85 21.85 0 0 1 0 43.69h-67.3v40.1h86.28a21.85 21.85 0 0 1 0 43.68z" />
                    </svg>
                  </button>
                  <button id="st_login" type="button" title="steam">
                    <svg
                      width="12"
                      height="12"
                      className="icon"
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 16 16"
                    >
                      <g clipPath={"url(#a)"}>
                        <path d="M16 8A8 8 0 0 1 .17 9.642l3.177 1.335a2.098 2.098 0 0 0 4.154-.396l.004-.002 2.402-1.79a2.727 2.727 0 1 0 .031-5.456A2.728 2.728 0 0 0 7.211 6.01l-1.76 2.462a2.068 2.068 0 0 0-1.194.34L.061 7.048C.533 3.079 3.905 0 8 0a8 8 0 0 1 8 8ZM4.949 11.651l-1.03-.432a1.62 1.62 0 0 0 3.106-.665 1.627 1.627 0 0 0-1.621-1.607c-.191 0-.38.033-.573.106l1.028.432a1.174 1.174 0 0 1-.91 2.166Zm4.989-3.734a1.857 1.857 0 0 1-1.854-1.855c0-1.023.832-1.855 1.854-1.855 1.023 0 1.854.832 1.854 1.855a1.857 1.857 0 0 1-1.854 1.855Zm0-.455a1.401 1.401 0 1 0-.002-2.802 1.401 1.401 0 0 0 .002 2.802Z" />
                      </g>
                      <defs>
                        <clipPath id="a">
                          <path d="M0 0h16v16H0z" />
                        </clipPath>
                      </defs>
                    </svg>
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>

        {validationError &&
          <div className="nfnfs0b">
            <div className="notify-item" style={{ height: "auto" }}>
              <div className="notify-ins">
                <div className="notify-wrap">
                  <div className="notify-cd">
                    <svg viewBox="25 25 50 50">
                      <circle
                        cx="50"
                        cy="50"
                        r="20"
                        fill="none"
                        stroke-width="8"
                        pathLength="1"
                        stroke-dashoffset="0px"
                        stroke-dasharray="0.1px 1px"
                      />
                    </svg>
                  </div>
                  <div className="notify-content">
                    <div className="notify-message">
                      {validationError}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>}

        {error &&
          <div className="nfnfs0b">
            <div className="notify-item" style={{ height: "auto" }}>
              <div className="notify-ins">
                <div className="notify-wrap">
                  <div className="notify-cd">
                    <svg viewBox="25 25 50 50">
                      <circle
                        cx="50"
                        cy="50"
                        r="20"
                        fill="none"
                        stroke-width="8"
                        pathLength="1"
                        stroke-dashoffset="0px"
                        stroke-dasharray="0.1px 1px"
                      />
                    </svg>
                  </div>
                  <div className="notify-content">
                    <div className="notify-message">
                      {error}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>}
        {success &&
          <div className="nfnfs0b">
            <div className="notify-item" style={{ height: "auto" }}>
              <div className="notify-ins">
                <div className="notify-wrap">
                  <div className="notify-cd">
                    <svg viewBox="25 25 50 50">
                      <circle
                        cx="50"
                        cy="50"
                        r="20"
                        fill="none"
                        stroke-width="8"
                        pathLength="1"
                        stroke-dashoffset="0px"
                        stroke-dasharray="0.1px 1px"
                      />
                    </svg>
                  </div>
                  <div className="notify-content">
                    <div className="notify-message">
                      {success}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>}
      </div>
    </Modal>
  );
};

function SignIn() {
  const [showModal, setShowModal] = useState(false);
  const [isLoggedIn, setIsLoggedIn] = useState(!!localStorage.getItem("token"));
  const [isSessionId, setisSessionId] = useState(
    !!localStorage.getItem("sessionid")
  );
  const [isRemoteId, setIsRemoteId] = useState(
    !!localStorage.getItem("remote_id")
  );
  const [balance, setBalance] = useState(!!localStorage.getItem("balance"));

  const fetchBalance = async () => {
    const token = localStorage.getItem("token");
    if (token) {
      try {
        const response = await fetch(`${process.env.REACT_APP_API_URL}/api/balance`, {
          method: "POST",
          headers: {
            Authorization: `Bearer ${token}`
          }
        });

        if (response.ok) {
          const data = await response.json();
          setBalance(data.balance);
        } else {
          console.error(
            "Failed to fetch balance with status:",
            response.status
          );
          // Optionally, read and log the response text to see the error page content
          const text = await response.text();
          console.error("Error page content:", text);
        }
      } catch (error) {
        console.error("Error fetching balance:", error);
      }
    }
  };

  const handleShow = () => {
    setShowModal(true);
  };

  const handleClose = () => {
    setShowModal(false);
  };

  const handleLogOut = () => {
    localStorage.removeItem("token");
    localStorage.removeItem("token");
    window.location.reload();
    setIsLoggedIn(false);
  };
  const handleWalletOpen = () => {
    const bodyElements = document.querySelector(".wallet");
    bodyElements.classList.add("open");
  };
  useEffect(() => {
    const token = localStorage.getItem("token");
    if (token) {
      setIsLoggedIn(true);
      // Initialize balance from local storage
      const storedBalance = localStorage.getItem("balance");
      if (storedBalance) {
        setBalance(storedBalance);
      }
    }
    fetchBalance();
    // Optional: Refresh balance every X milliseconds
    const interval = setInterval(fetchBalance, 30000); // Adjust interval as needed
    return () => clearInterval(interval);
  }, []);

  return (
    <div>
      {!isLoggedIn &&
        <span onClick={handleShow} className="nav-action">
          Sign In
        </span>}
      {isLoggedIn &&
       <>
        <span className=" display-none">
          <button className="ui-button s-conic1 b1roz03j" style={{ marginRight: "1rem"}}>
            <div className="button-inner">
              <svg className="s1ff97qc icon">
                <FontAwesomeIcon icon={faMoneyBill} />
              </svg>
              <span>$100</span>
            </div>
          </button>
        </span>
        <span onClick={handleWalletOpen} className=" display-none">
          <button className="ui-button button-normal s-conic2 b1roz03j">
            <div className="button-inner">
              <svg className="s1ff97qc icon">
                <FontAwesomeIcon icon={faWallet} />
              </svg>
              <span>Deposit</span>
            </div>
          </button>
        </span>
       </>}

      {isLoggedIn &&
        <>
        <button popovertarget="profile-side-bar"  className="profile-btn display-none drop-hover">
          <img src="/assets/avatar.png" className="avatar " alt="Profile Img" />
          </button>
        <ProfileModal id="profile-side-bar" />
        </>
        }

      <MyModal showModal={showModal} handleClose={handleClose} />
    </div>
  );
}

export default SignIn;
 