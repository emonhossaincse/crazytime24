import React from 'react'

export default function ContactUs() {
  return (
    <>
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
      <h2 className=" casino-container">Contact</h2>
    </div>
    <div className="casino-container contact-body-content">
      <div className="country-select">
        <label htmlFor="country" className="country-label">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width={800}
            height={800}
            viewBox="0 0 24 24"
            xmlSpace="preserve"
          >
            <path d="M12 24C5.4 24 0 18.6 0 12S5.4 0 12 0s12 5.4 12 12-5.4 12-12 12m0-22C6.5 2 2 6.5 2 12s4.5 10 10 10 10-4.5 10-10S17.5 2 12 2" />
            <path d="M6.5 22.5c-.3 0-.5-.1-.7-.3-.4-.4-.4-1 0-1.4l.4-.4L7 18l-.7-1.4-2.8-1.9c-.3-.1-.5-.4-.5-.7v-3c0-.4.3-.8.7-.9l2.8-.9L7.7 8l-3-4.2c-.3-.5-.2-1.2.2-1.5.5-.3 1.1-.2 1.4.2l3.5 4.9c.3.4.2.9-.1 1.3l-2 2c-.1.1-.2.2-.4.2l-2.3.8v1.7l2.6 1.7c.1.1.3.2.3.4l1 2c.1.3.1.6 0 .8l-1 3c0 .1-.1.3-.2.4l-.5.5c-.2.2-.5.3-.7.3M16 19c-.2 0-.3 0-.4-.1l-2-1c-.2-.1-.4-.3-.4-.4l-1-2q-.15-.45 0-.9l.9-1.8V11c0-.6.4-1 1-1h1.5l2.7-3.6.1-.1L20 4.6c.4-.4 1-.4 1.4 0s.4 1 0 1.4l-1.7 1.7-3 3.9c-.1.3-.4.4-.7.4h-1v1c0 .2 0 .3-.1.4l-.8 1.6.6 1.3 1.1.5 1.4-1.4.9-1.9c.2-.3.5-.5.8-.6.4 0 .7.1.9.4l1.9 2.8.4.2c.5.2.7.9.4 1.3-.2.5-.9.7-1.3.4l-.6-.3c-.2-.1-.3-.2-.4-.3l-1-1.6-.2.5c0 .1-.1.2-.2.3l-2 2c-.3.3-.5.4-.8.4" />
          </svg>
        </label>
        <select name="" id="country">
          <option value="">Bangladesh</option>
          <option value="">Bangladesh</option>
          <option value="">Bangladesh</option>
          <option value="">Bangladesh</option>
          <option value="">Bangladesh</option>
        </select>
      </div>
      <div className="contact-option">
        <div className="live-chat part">
          <h3>Live Chat</h3>
          <ul>
            <li>Chat with us to resolve a query </li>
            <li>24 hours a day, 7 days a week </li>
          </ul>
          <button className="chat-btn">Open Chat</button>
        </div>
        <div className="send-email part">
          <h3>Email</h3>
          <p>Send an email from your private account </p>
          <button className="email-btn">Send Email</button>
        </div>
        <div className="post part">
          <h3>Post</h3>
          <ul>
            <li>Customer Services</li>
            <li>bet365 House</li>
            <li>Media Way</li>
            <li>Stoke-on-Trent</li>
            <li>Staffordshire</li>
            <li>ST1 5SZ</li>
            <li>United Kingdom</li>
          </ul>
        </div>
      </div>
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
</>

  )
}
