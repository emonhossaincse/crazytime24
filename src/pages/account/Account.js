import React from "react";

export default function Account() {
  return (
<<<<<<< HEAD
    <div className="profile-container main">
      <input type="radio" id="contact" name="tabs" defaultChecked hidden />
      <input type="radio" id="residential" name="tabs" hidden />
      <input type="radio" id="preferences" name="tabs" hidden />
      <input type="radio" id="password" name="tabs" hidden />
      <input type="radio" id="verification" name="tabs" hidden />
      <input type="checkbox" id="account-toggle" hidden />

      <div className="left-sidebar">
        <h2>My Account</h2>
        <div className="left-sidebar-tab">
          <label htmlFor="contact" className="contact-tab tab">
            Contact Details
          </label>
          <label htmlFor="residential" className="residential-tab tab">
            Residential Address
          </label>
          <label htmlFor="preferences" className="preferences-tab tab">
            Preferences
          </label>
          <label htmlFor="password" className="password-tab tab">
            Password
          </label>
          <label htmlFor="verification" className="verification-tab tab">
            Verification
          </label>
        </div>
=======
   <div className='max-width'>
     <div className="profile-container main">
    <input type="radio" id="contact" name="tabs" defaultChecked hidden />
    <input type="radio" id="residential" name="tabs" hidden />
    <input type="radio" id="preferences" name="tabs" hidden />
    <input type="radio" id="password" name="tabs" hidden />
    <input type="radio" id="verification" name="tabs" hidden />
    <div className="left-sidebar">
      <h2>My Account</h2>
      <div className="left-sidebar-tab">
        <label htmlFor="contact" className="contact-tab tab">
          Contact Details
        </label>
        <label htmlFor="residential" className="residential-tab tab">
          Residential Address
        </label>
        <label htmlFor="preferences" className="preferences-tab tab">
          Preferences
        </label>
        <label htmlFor="password" className="password-tab tab">
          Password
        </label>
        <label htmlFor="verification" className="verification-tab tab">
          Verification
        </label>
>>>>>>> 79ecfe6cfd89c972332787f78dd8022ce3cdc343
      </div>

      <div className="right-content">
      
        <label for="account-toggle" class="account-toggle-open">
          <svg
            width="24"
            height="24"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M3 16h18v2H3zm0-5h18v2H3zm0-5h18v2H3z"
              fill-rule="evenodd"
            />
          </svg>
        </label>

        <div className="contact-content content">
          <h2>Contact Details</h2>
          <form action="" className="contact-content-form">
            <label htmlFor="contact-number">Contact Number</label>
            <input type="tel" id="contact-number" />
            <label htmlFor="email">Email Address</label>
            <input type="email" id="email" />
            <label htmlFor="password">Password</label>
            <input type="password" id="password" />
            <button className="button update-btn">Update</button>
            <button className="button cancel-btn">Cancel</button>
          </form>
        </div>
        <div className="residential-content content">
          <h2>Residential Address</h2>
          <ul type="none">
            <li>Zirani Bazar Monida Market level Tiens Nuruzzaman</li>
            <li>Savar</li>
            <li>1345</li>
            <li>Bangladesh</li>
          </ul>
          <button className="change-address-btn button">Change Address</button>
        </div>
        <div className="preferences-content content">
          <h2>Preferences</h2>
          <label htmlFor="Language">Language</label>
          <select id="Language">
            <option value="">English</option>
            <option value="">Español</option>
            <option value="">Français</option>
            <option value="">Deutsch</option>
            <option value="">Italiano</option>
            <option value="">Dansk</option>
            <option value="">Svenska</option>
            <option value="">繁體中文</option>
            <option value="">简体中文</option>
            <option value="">Български</option>
            <option value="">Ελληνικά</option>
            <option value="">Polski</option>
            <option value="">Português</option>
            <option value="">Română</option>
            <option value="">Česky</option>
            <option value="">Magyar</option>
            <option value="">Slovenčina</option>
            <option value="">Nederlands</option>
            <option value="">Eesti</option>
            <option value="">Русcкий</option>
            <option value="">日本語</option>
          </select>
          <label htmlFor="time-zone">Time Zone</label>
          <select id="time-zone">
            <option value="">UK</option>
            <option value="">ET</option>
            <option value="">PT</option>
            <option value="">CET</option>
            <option value="">CT</option>
            <option value="">MT</option>
            <option value="">GMT-12</option>
            <option value="">GMT-11</option>
            <option value="">GMT-10</option>
            <option value="">GMT-9</option>
            <option value="">GMT-8</option>
            <option value="">GMT-7</option>
            <option value="">GMT-6</option>
            <option value="">GMT-5</option>
            <option value="">GMT-4</option>
            <option value="">GMT-3</option>
            <option value="">GMT-2</option>
            <option value="">GMT-1</option>
            <option value="">GMT</option>
            <option value="">GMT+1</option>
            <option value="">GMT+2</option>
            <option value="">GMT+3</option>
            <option value="">GMT+4</option>
            <option value="">GMT+5</option>
            <option value="">GMT+6</option>
            <option value="">GMT+7</option>
            <option value="">GMT+8</option>
            <option value="">GMT+9</option>
            <option value="">GMT+10</option>
            <option value="">GMT+11</option>
            <option value="">GMT+12</option>
            <option value="">GMT+13</option>
            <option value="">EET</option>
            <option value="">POR</option>
            <option value="">GMT+9.5</option>
            <option value="">GMT+10.5</option>
          </select>
          <label htmlFor="odds">Odds Display</label>
          <select id="odds">
            <option value="">Decimal</option>
            <option value="">Fractional</option>
            <option value="">American</option>
            <option value="">American/Fractional</option>
          </select>
          <label htmlFor="inactivity">Maximum Inactivity Period</label>
          <select id="inactivity">
            <option value="">20 minutes</option>
            <option value="">1 hour</option>
            <option value="">2 hours</option>
            <option value="" selected="">
              3 hours
            </option>
            <option value="">6 hours</option>
            <option value="">12 hours</option>
          </select>
          <h3>Choose how you receive your offers</h3>
          <h4>External Communication</h4>
          <div className="text-message">
            <span>Text Message</span>
            <div className="radio-buttons">
              <input type="radio" name="message" id="yes" hidden />
              <label htmlFor="yes" className="Yes">
                Yes
              </label>
              <input
                type="radio"
                id="no"
                name="message"
                hidden
                defaultChecked
              />
              <label htmlFor="no" className="No">
                No
              </label>
            </div>
          </div>
          <div className="emails">
            <span>Email</span>
            <div className="radio-buttons">
              <input type="radio" name="email" id="email-yes" hidden />
              <label htmlFor="email-yes" className="EmailYes">
                Yes
              </label>
              <input
                type="radio"
                id="email-no"
                name="email"
                hidden
                defaultChecked
              />
              <label htmlFor="email-no" className="EmailNo">
                No
              </label>
            </div>
          </div>
          <h4 className="bet-title">In bet365</h4>
          <div className="message-bet">
            <span>Message in bet365</span>
            <div className="radio-buttons">
              <input type="radio" name="message-bet" id="bet-yes" hidden />
              <label htmlFor="bet-yes" className="BetYes">
                Yes
              </label>
              <input
                type="radio"
                id="bet-no"
                name="message-bet"
                hidden
                defaultChecked
              />
              <label htmlFor="bet-no" className="BetNo">
                No
              </label>
            </div>
          </div>
          <label htmlFor="preferences-password">Password</label>
          <input type="password" id="preferences-password" />
          <button className="button update-btn">Update</button>
        </div>
        <div className="password-content content">
          <h2>Password</h2>
          <h4>Change Password</h4>
          <p>
            Please use letters, numbers and accepted symbols only, with no
            spaces, minimum 6, maximum 32 characters.
          </p>
          <p>
            Your password should not contain your username, name, email address
            or year of birth. You can increase the strength of your password by
            using a mixture of letters, numbers and symbols. Please remember
            that passwords are case-sensitive.
          </p>
          <p>The following symbols may be used as part of your password:</p>
          <p>
            ! " # $ % &amp; ' ( ) * + , - . / : ; &lt; = &gt; ? _ @ [ \ ] ^ `{" "}
            {"{"} | {"}"} ~
          </p>
          <label htmlFor="current-password">Current Password</label>
          <input type="password" id="current-password" required="" />
          <label htmlFor="new-password">New Password</label>
          <input type="password" id="new-password" required="" />
          <button className="button update-btn">Update</button>
        </div>
        <div className="verification-content content">
          <h2>Verification</h2>
          <h4>Verification of Your Account</h4>
          <p>Before you can withdraw, we need to verify your identity.</p>
          <p>Please complete one of the verification options below.</p>
          <p>
            If you have one, please submit a document that displays your
            residential address as registered on your bet365 account as this may
            save you time in the future.
          </p>
          <details>
            <summary>Upload Identity Document</summary>
            <div className="details-identity-content">
              <p>
                Upload a copy or take a photo of your identity document by
                selecting one of the options below.
              </p>
              <h4>Choose a document type to upload</h4>
              <h4>Driving Licence</h4>
              <h4>Passport</h4>
              <h4>ID Card</h4>
              <h4>Residency Permit or Visa</h4>
            </div>
          </details>
        </div>
      </div>
    </div>
<<<<<<< HEAD
  );
=======
  </div>  
   </div>
  )
>>>>>>> 79ecfe6cfd89c972332787f78dd8022ce3cdc343
}
