import React from "react";

export default function ProfileModal({ id }) {
  return (
    <dialog popover="" id={id}>
      <div className="profile-data-top">
        <div className="profile-data-top-left">
          <p>Username</p>
          <div className="profile-data-top-left-bottom">
            <p className="profile-data-top-amount">$0.00</p>
            <div className="profile-data-refresh-icon">
              <svg
                width={800}
                height={800}
                viewBox="0 -4 32 32"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="m1167.53 396.073-3.79 2.563c-.03.033-.05.076-.08.1-.02.085-.03.174-.05.259h-2.07a6 6 0 0 0 .17-.736l-3.24-2.191a1.215 1.215 0 0 1-.35-1.517.88.88 0 0 1 1.3-.407l2.57 1.739a9.992 9.992 0 0 0-17.13-6.883h-2.59a11.982 11.982 0 0 1 21.72 6.9l2.59-1.747a.88.88 0 0 1 1.3.407 1.215 1.215 0 0 1-.35 1.513m-21.65-.628a.88.88 0 0 1-1.3.406l-2.41-1.626A10.4 10.4 0 0 0 1142 396a10 10 0 0 0 17.14 7h2.59a11.989 11.989 0 0 1-21.73-7 11.3 11.3 0 0 1 .2-2.028l-2.78 1.879a.88.88 0 0 1-1.3-.406 1.216 1.216 0 0 1 .35-1.518l3.79-2.562a.88.88 0 0 1 .65-.344.5.5 0 0 1 .18 0 .88.88 0 0 1 .65.344l3.79 2.562a1.216 1.216 0 0 1 .35 1.518"
                  transform="translate(-1136 -384)"
                  style={{
                    fillRule: "evenodd"
                  }}
                />
              </svg>
            </div>
          </div>
        </div>
        <button className=" deposit-btn profile-data-top-right">
          <svg
            viewBox="0 0 24 24"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <g id="SVGRepo_bgCarrier" strokeWidth={0} />
            <g
              id="SVGRepo_tracerCarrier"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
            <g id="SVGRepo_iconCarrier">
              <path
                d="M5.625 15C5.625 14.5858 5.28921 14.25 4.875 14.25C4.46079 14.25 4.125 14.5858 4.125 15H5.625ZM4.875 16H4.125H4.875ZM19.275 15C19.275 14.5858 18.9392 14.25 18.525 14.25C18.1108 14.25 17.775 14.5858 17.775 15H19.275ZM11.1086 15.5387C10.8539 15.8653 10.9121 16.3366 11.2387 16.5914C11.5653 16.8461 12.0366 16.7879 12.2914 16.4613L11.1086 15.5387ZM16.1914 11.4613C16.4461 11.1347 16.3879 10.6634 16.0613 10.4086C15.7347 10.1539 15.2634 10.2121 15.0086 10.5387L16.1914 11.4613ZM11.1086 16.4613C11.3634 16.7879 11.8347 16.8461 12.1613 16.5914C12.4879 16.3366 12.5461 15.8653 12.2914 15.5387L11.1086 16.4613ZM8.39138 10.5387C8.13662 10.2121 7.66533 10.1539 7.33873 10.4086C7.01212 10.6634 6.95387 11.1347 7.20862 11.4613L8.39138 10.5387ZM10.95 16C10.95 16.4142 11.2858 16.75 11.7 16.75C12.1142 16.75 12.45 16.4142 12.45 16H10.95ZM12.45 5C12.45 4.58579 12.1142 4.25 11.7 4.25C11.2858 4.25 10.95 4.58579 10.95 5H12.45ZM4.125 15V16H5.625V15H4.125ZM4.125 16C4.125 18.0531 5.75257 19.75 7.8 19.75V18.25C6.61657 18.25 5.625 17.2607 5.625 16H4.125ZM7.8 19.75H15.6V18.25H7.8V19.75ZM15.6 19.75C17.6474 19.75 19.275 18.0531 19.275 16H17.775C17.775 17.2607 16.7834 18.25 15.6 18.25V19.75ZM19.275 16V15H17.775V16H19.275ZM12.2914 16.4613L16.1914 11.4613L15.0086 10.5387L11.1086 15.5387L12.2914 16.4613ZM12.2914 15.5387L8.39138 10.5387L7.20862 11.4613L11.1086 16.4613L12.2914 15.5387ZM12.45 16V5H10.95V16H12.45Z"
                fill="#ffffff"
              />
            </g>
          </svg>
          <p>Deposit</p>
        </button>
      </div>
      <div className="profile-data-top-bottom">
        <div>
          <p>Withdrawable</p>
          <h3>$0.00</h3>
        </div>
        <div>
          <p>Bet Credits</p>
          <h3>$0.00</h3>
        </div>
      </div>
      <div className="profile-tabs">
        <input
          type="radio"
          id="profile-tab-account"
          defaultChecked="true"
          name="tab"
          hidden="true"
        />
        <input type="radio" id="profile-tab-offers" name="tab" hidden="true" />
        <input
          type="radio"
          id="profile-tab-preferences"
          name="tab"
          hidden="true"
        />
        <div className="tab-items">
          <label htmlFor="profile-tab-account" className="tab-account tab-item">
            Account
          </label>
          <label htmlFor="profile-tab-offers" className="tab-offers tab-item">
            My Offers
          </label>
          <label
            htmlFor="profile-tab-preferences"
            className="tab-preferences tab-item"
          >
            Preferences
          </label>
        </div>
        <div className="profile-tab-content-account tab-content">
          <div className="tab-content-cards">
            <a href="/account/bank" className="tab-content-card">
              <svg
                fill="#000000bb"
                viewBox="0 0 32 32"
                version="1.1"
                xmlns="http://www.w3.org/2000/svg"
              >
                <g id="SVGRepo_bgCarrier" strokeWidth={0} />
                <g
                  id="SVGRepo_tracerCarrier"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
                <g id="SVGRepo_iconCarrier">
                  <path d="M31.989 9.078c0.015-0.739-0.184-2.464-2.433-3.064l-22.576-4.519c-1.655 0-3 1.345-3 3v4.022l-1-0.002c-1.649 0.007-2.989 1.348-2.989 2.999v15.994c0 1.654 1.345 3 3 3h26.014c1.654 0 3-1.346 3-3zM5.981 4.494c0-0.522 0.402-0.952 0.913-0.996l22.063 4.465c0.008 0.004-0.164 0.56-0.965 0.55h-22.011zM30.008 27.507c0 0.552-0.448 1-1 1h-26.015c-0.552 0-1-0.448-1-1v-15.995c0-0.552 0.448-1 1-1h25.002c0.982 0 2.012-0.335 2.012-0.996v17.991h0zM5.995 17.516c-1.104 0-2 0.895-2 2s0.896 2 2 2 2-0.895 2-2-0.896-2-2-2z" />
                </g>
              </svg>
              <h5>Bank</h5>
            </a>
            <a href="/account/message" className="tab-content-card">
              <svg
                fill="#000000bb"
                viewBox="0 0 1920 1920"
                xmlns="http://www.w3.org/2000/svg"
              >
                <g id="SVGRepo_bgCarrier" strokeWidth={0} />
                <g
                  id="SVGRepo_tracerCarrier"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
                <g id="SVGRepo_iconCarrier">
                  <path
                    d="M0 1694.235h1920V226H0v1468.235ZM112.941 376.664V338.94H1807.06v37.723L960 1111.233l-847.059-734.57ZM1807.06 526.198v950.513l-351.134-438.89-88.32 70.475 378.353 472.998H174.042l378.353-472.998-88.32-70.475-351.134 438.89V526.198L960 1260.768l847.059-734.57Z"
                    fillRule="evenodd"
                  />
                </g>
              </svg>
              <h5>Messages</h5>
            </a>
            <a href="/account/profile" className="tab-content-card">
              <svg
                viewBox="0 0 24 24"
                id="Layer_1"
                data-name="Layer 1"
                xmlns="http://www.w3.org/2000/svg"
                fill="#000000bb"
              >
                <g id="SVGRepo_bgCarrier" strokeWidth={0} />
                <g
                  id="SVGRepo_tracerCarrier"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
                <g id="SVGRepo_iconCarrier">
                  <defs>
                    <style
                      dangerouslySetInnerHTML={{
                        __html:
                          "\n                                                .cls-1 {\n                                                    fill: none;\n                                                    stroke: #000000bb;\n                                                    stroke-miterlimit: 10;\n                                                    stroke-width: 1.91px;\n                                                }\n                                            "
                      }}
                    />
                  </defs>
                  <circle className="cls-1" cx={12} cy="7.25" r="5.73" />
                  <path
                    className="cls-1"
                    d="M1.5,23.48l.37-2.05A10.3,10.3,0,0,1,12,13h0a10.3,10.3,0,0,1,10.13,8.45l.37,2.05"
                  />
                </g>
              </svg>
              <h5>My Account</h5>
            </a>
            <a href="/account/gambling" className="tab-content-card">
              <svg
                viewBox="0 0 24 24"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <g id="SVGRepo_bgCarrier" strokeWidth={0} />
                <g
                  id="SVGRepo_tracerCarrier"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
                <g id="SVGRepo_iconCarrier">
                  <path
                    d="M3 10.4167C3 7.21907 3 5.62028 3.37752 5.08241C3.75503 4.54454 5.25832 4.02996 8.26491 3.00079L8.83772 2.80472C10.405 2.26824 11.1886 2 12 2C12.8114 2 13.595 2.26824 15.1623 2.80472L15.7351 3.00079C18.7417 4.02996 20.245 4.54454 20.6225 5.08241C21 5.62028 21 7.21907 21 10.4167C21 10.8996 21 11.4234 21 11.9914C21 17.6294 16.761 20.3655 14.1014 21.5273C13.38 21.8424 13.0193 22 12 22C10.9807 22 10.62 21.8424 9.89856 21.5273C7.23896 20.3655 3 17.6294 3 11.9914C3 11.4234 3 10.8996 3 10.4167Z"
                    stroke="#000000bb"
                    strokeWidth="1.5"
                  />
                  <path
                    d="M16 11.55L12.6 9C12.2444 8.73333 11.7556 8.73333 11.4 9L8 11.55M14 14.05L12 12.55L10 14.05"
                    stroke="#000000bb"
                    strokeWidth="1.5"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </g>
              </svg>
              <h5>Gambling Controls</h5>
            </a>
            <a href="/account/activity" className="tab-content-card">
              <svg
                viewBox="0 0 24 24"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <g id="SVGRepo_bgCarrier" strokeWidth={0} />
                <g
                  id="SVGRepo_tracerCarrier"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
                <g id="SVGRepo_iconCarrier">
                  <g id="Iconly/Curved/Activity">
                    <g id="Activity">
                      <path
                        id="Stroke 1"
                        d="M6.91699 14.854L9.90999 10.965L13.324 13.645L16.253 9.86499"
                        stroke="#000000bb"
                        strokeWidth="1.5"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                      <path
                        id="Stroke 2"
                        fillRule="evenodd"
                        clipRule="evenodd"
                        d="M19.6671 2.3501C20.7291 2.3501 21.5891 3.2101 21.5891 4.2721C21.5891 5.3331 20.7291 6.1941 19.6671 6.1941C18.6051 6.1941 17.7451 5.3331 17.7451 4.2721C17.7451 3.2101 18.6051 2.3501 19.6671 2.3501Z"
                        stroke="#000000bb"
                        strokeWidth="1.5"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                      <path
                        id="Stroke 4"
                        d="M20.7555 9.26898C20.8885 10.164 20.9495 11.172 20.9495 12.303C20.9495 19.241 18.6375 21.553 11.6995 21.553C4.76246 21.553 2.44946 19.241 2.44946 12.303C2.44946 5.36598 4.76246 3.05298 11.6995 3.05298C12.8095 3.05298 13.8005 3.11198 14.6825 3.23998"
                        stroke="#000000bb"
                        strokeWidth="1.5"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                    </g>
                  </g>
                </g>
              </svg>
              <h5>My Activity</h5>
            </a>
            <a href="/account/hisory" className="tab-content-card">
              <svg
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
                fill="#000000bb"
              >
                <g id="SVGRepo_bgCarrier" strokeWidth={0} />
                <g
                  id="SVGRepo_tracerCarrier"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
                <g id="SVGRepo_iconCarrier">
                  <path
                    fill="none"
                    stroke="#000000bb"
                    strokeWidth={2}
                    d="M1,12 C1,18.075 5.925,23 12,23 C18.075,23 23,18.075 23,12 C23,5.925 18.075,1 12,1 C7.563,1 4,4 2,7.5 M1,1 L1,8 L8,8 M16,17 L12,13 L12,6"
                  />
                </g>
              </svg>
              <h5>History</h5>
            </a>
          </div>

          <h3>Help</h3>
          <h3>Responsible Gambling</h3>
          <h3 className="logout">Log Out</h3>
        </div>
        <div className="profile-tab-content-offers tab-content">
          <h4>Open Account Offer - get up to $60 in Bet Credits</h4>
          <p>
            We will give you 15% of your qualifying deposit in Bet Credits (up
            to $60 ) when you meet the qualifying settled bet requirement on
            your qualifying deposit (capped at $400 )
          </p>
          <p>
            Claim By 23 Dec 13:27. Min deposit $10 . Min odds, bet and payment
            method restrictions apply. Returns exclude Bet Credits stake.
          </p>
          <p>Time limits and T&amp;C's apply.</p>
          <button className="button">Deposit Now</button>
        </div>
        <div className="profile-tab-content-preferences tab-content">
          <details>
            <summary>
              <p>Language</p>
              <h4>English</h4>
            </summary>
            <ul type="none" className="data">
              <li>English</li>
              <li>Español</li>
              <li>Deutsch</li>
              <li>Dansk</li>
              <li>简体中文</li>
              <li>Ελληνικά</li>
              <li>Portugues</li>
              <li>Cesky</li>
              <li> Slovencina</li>
              <li>Esti</li>
              <li>日本語</li>
              <li>繁體中文</li>
              <li>Francais</li>
              <li>Italiano</li>
              <li>Svenska</li>
              <li>Български</li>
              <li>Polski</li>
              <li>Romana</li>
              <li>Magyar</li>
              <li>Nederlands</li>
              <li>Русский</li>
            </ul>
          </details>
          <details>
            <summary>
              <p>Language</p>
              <h4>GMT+6</h4>
            </summary>
            <ul type="none" className="data">
              <li>UK</li>
              <li>ET</li>
              <li>PT</li>
              <li>CET</li>
              <li>CT</li>
              <li>MT</li>
              <li>GMT-12</li>
              <li>GMT-11</li>
              <li> GMT-10</li>
              <li>GMT-9</li>
              <li>GMT-8</li>
              <li>GMT-7</li>
              <li>GMT-6</li>
              <li>GMT-5</li>
              <li>GMT-4</li>
              <li>GMT-3</li>
              <li>GMT-2</li>
              <li>GMT-1</li>
              <li>GMT-0</li>
              <li>GMT+1</li>
              <li>GMT+2</li>
              <li>GMT+3</li>
              <li>GMT+4</li>
              <li>GMT+5</li>
              <li>GMT+6</li>
              <li>GMT+7</li>
              <li>GMT+8</li>
              <li>GMT+9</li>
              <li>GMT+10</li>
              <li>GMT+11</li>
              <li>GMT+12</li>
              <li>GMT+13</li>
              <li>EET</li>
              <li>POR</li>
            </ul>
          </details>
          <details>
            <summary>
              <p>Odds Display</p>
              <h4>Decimal</h4>
            </summary>
            <ul type="none" className="data">
              <li>Fractional</li>
              <li>Decimal</li>
              <li>Aerican</li>
              <li>American/Fractional</li>
            </ul>
          </details>
          <details>
            <summary>
              <p>Max Inactivity Time</p>
              <h4>3 Hours</h4>
            </summary>
            <ul type="none" className="data">
              <li>20 Minutes</li>
              <li>1 Hour</li>
              <li>2 Hours</li>
              <li>3 Hours</li>
              <li>6 Hours</li>
              <li>12 Hours</li>
            </ul>
          </details>
          <label className="toggle-label" htmlFor="showBallance">
            <span>Show Balance</span>
            <input type="checkbox" id="showBallance" />
            <span className="toggle-switch" />
          </label>
          <label htmlFor="showGaming" className="toggle-label">
            <span>Show Gaming Quick Link on Home</span>
            <input type="checkbox" id="showGaming" />
            <span className="toggle-switch" />
          </label>
        </div>
      </div>
    </dialog>
  );
}
