import React from 'react'

export default function Complaints() {
  return (
    <div className="section-main">
  <header className="casino-header ">
    <nav className="casino-nav casino-container">
      <h2>Help</h2>
      <h2>bet365</h2>
      <svg
        className="search-icon"
        width={800}
        height={800}
        viewBox="0 0 16 16"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          fill="currentcolor"
          d="m15.7 14.3-4.2-4.2c-.2-.2-.5-.3-.8-.3.8-1 1.3-2.4 1.3-3.8 0-3.3-2.7-6-6-6S0 2.7 0 6s2.7 6 6 6c1.4 0 2.8-.5 3.8-1.4 0 .3 0 .6.3.8l4.2 4.2c.2.2.5.3.7.3s.5-.1.7-.3c.4-.3.4-.9 0-1.3M6 10.5c-2.5 0-4.5-2-4.5-4.5s2-4.5 4.5-4.5 4.5 2 4.5 4.5-2 4.5-4.5 4.5"
        />
      </svg>
    </nav>
  </header>
  <main className="body">
    <div className="body-header">
      <h2 className=" casino-container">Complaints Procedure</h2>
    </div>
    <div className="casino-container faq-body-content">
      <details name="faq">
        <summary>Making a complaint</summary>
        <div className="data">
          <p>
            bet365 treats all complaints and disputes seriously and is fully
            committed to ensuring that any received are dealt with in a fair,
            open and timely manner.
          </p>
          <p>
            If you wish to raise a complaint, please view our Complaints
            Procedure for further information.
          </p>
        </div>
      </details>
      <details name="faq">
        <summary>About eCOGRA</summary>
        <div className="data">
          <p>
            eCOGRA (eCommerce and Online Gaming Regulation and Assurance) is an
            authoritative, independent third party offering adjudication for
            customers who have an unresolved dispute with an operator.
          </p>
          <p>For further information please see our eCOGRA page.</p>
          <p>
            If you have an unresolved complaint, please Contact Us. Prior to
            adjudication, customers are required to fully exhaust our internal
            Complaints Procedure.
          </p>
          <button className="button">Can't find an answer? Contact Us</button>
        </div>
      </details>
    </div>
  </main>
  <footer className="footer-options-footer">
    <div className="empty-div" />
    <div className="footer-options casino-container">
      <ul className="footer-nav-items">
        <li>
          <a href="">Contact Us</a>
        </li>
        <li>
          <a href="">Responsible Gambling</a>
        </li>
        <li>
          <a href="">Privacy Policy</a>
        </li>
        <li>
          <a href="">About Us</a>
        </li>
        <li>
          <a href="">Sports Rules </a>
        </li>
        <li>
          <a href="">Terms and Conditions </a>
        </li>
        <li>
          <a href="">Cookies Policy </a>
        </li>
        <li>
          <a href="">Fair Payouts</a>
        </li>
        <li>
          <a href="">Complaints Procedure</a>
        </li>
      </ul>
      <img src="../img/GordonMoody-GT-x2_Grey99.png" alt="" />
      <p className="footer-rights">
        Gambling can be addictive, please play responsibly. For information on
        support measures, please visit our Responsible Gambling Help page. ©
        2001-2024 bet365. All rights reserved.
      </p>
    </div>
  </footer>
</div>

  )
}
