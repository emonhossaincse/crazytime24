import React from 'react'

export default function Bank() {
  return (
    <div className="profile-container main">
    <input type="radio" id="balance" name="tabs" defaultChecked="true" hidden="true" />
    <input type="radio" id="deposit" name="tabs" hidden="true" />
    <input type="radio" id="withdraw" name="tabs" hidden="true" />
    <div className="left-sidebar">
      <h2>Bank</h2>
      <div className="left-sidebar-tab">
        <label htmlFor="balance" className="balance-tab tab">
          Balance
        </label>
        <label htmlFor="deposit" className="deposit-tab tab">
          Deposit
        </label>
        <label htmlFor="withdraw" className="withdraw-tab tab">
          Withdraw
        </label>
      </div>
    </div>
    <div className="right-content">
      <div className="balance-content content">
        <h2>Balances</h2>
        <div className="balance-content-top">
          <p className="balance-content-title">Withdrawable</p>
          <p className="balance-content-top-amount">$0.00</p>
        </div>
        <div className="balance-content-buttons">
          <button className="balance-deposit-btn button">
            <svg
              width={800}
              height={800}
              viewBox="0 0 24 24"
              data-name="Flat Color"
              xmlns="http://www.w3.org/2000/svg"
              className="icon flat-color"
            >
              <path
                d="M19.71 13.29a1 1 0 0 0-1.42 0L13 18.59V3a1 1 0 0 0-2 0v15.59l-5.29-5.3a1 1 0 0 0-1.42 1.42l7 7a1 1 0 0 0 1.42 0l7-7a1 1 0 0 0 0-1.42"
                style={{ fill: "#000" }}
              />
            </svg>
            <span>Deposit</span>
          </button>
          <button className="balance-withdraw-btn button">
            <svg
              width={800}
              height={800}
              viewBox="0 0 24 24"
              data-name="Flat Color"
              xmlns="http://www.w3.org/2000/svg"
              className="icon flat-color"
            >
              <path
                d="m19.71 9.29-7-7a1 1 0 0 0-1.42 0l-7 7a1 1 0 0 0 1.42 1.42L11 5.41V21a1 1 0 0 0 2 0V5.41l5.29 5.3a1 1 0 0 0 1.42 0 1 1 0 0 0 0-1.42"
                style={{ fill: "#000" }}
              />
            </svg>
            <span>Withdraw</span>
          </button>
        </div>
        <hr />
        <h3>Bonuses and Bet Credits</h3>
        <ul type="none">
          <li>
            <span>Sports Bet Credits</span> <span>$0.00</span>
          </li>
          <li>
            <span>Games bonus</span> <span>$0.00</span>
          </li>
          <li>
            <span>Casino bonus</span> <span>$0.00</span>
          </li>
          <li>
            <span>Live casino bonus</span> <span>$0.00</span>
          </li>
        </ul>
      </div>
      <div className="deposit-content content">
        <h2>Deposit</h2>
        <div className="deposit-option-content">
          <input
            type="radio"
            id="cashout"
            name="deposit-option"
            hidden
            defaultChecked
          />
          <input type="radio" id="sendmoney" name="deposit-option" hidden />
          <div className="du-tabs">
            <label htmlFor="cashout" className="cashout-radio radio">
              Cash Out
            </label>
            <label htmlFor="sendmoney" className="sendmoney-radio radio">
              Send Money
            </label>
          </div>
          <div className="tab-content">
            <div className="cashout-tab-content du-content">
              <form action="" className="cashout-form">
                <label htmlFor="phone-no">Phone Number</label>
                <input
                  type="tel"
                  id="phone-no"
                  placeholder="Input your Phone number"
                />
                <label htmlFor="amount">Amount</label>
                <input
                  type="number"
                  id="amount"
                  placeholder="Input your Amount"
                />
                <label htmlFor="trx-number">Transaction Number</label>
                <input
                  type="tel"
                  id="trx-number"
                  placeholder="Input your trx number"
                />
                <button className="submit-btn button">Submit</button>
              </form>
            </div>
            <div className="sendmoney-tab-content du-content">
              <form action="" className="sendmoney-form">
                <label htmlFor="phone-no">Phone Number</label>
                <input
                  type="tel"
                  id="phone-no"
                  placeholder="Input your Phone number"
                />
                <label htmlFor="amount">Amount</label>
                <input
                  type="number"
                  id="amount"
                  placeholder="Input your Amount"
                />
                <label htmlFor="trx-number">Transaction Number</label>
                <input
                  type="tel"
                  id="trx-number"
                  placeholder="Input your trx number"
                />
                <button className="submit-btn button">Submit</button>
              </form>
            </div>
          </div>
        </div>
      </div>
      <div className="withdraw-content content">
        <h2>Sent Message</h2>
        <div className="sent-message-content">
          <p>Welcome to bet365</p>
          <p>22/10/2024 12:25</p>
        </div>
      </div>
    </div>
  </div>
  
  )
}
