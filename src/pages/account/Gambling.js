import React from "react";

export default function Gambling() {
  return (
    <div className="profile-container main">
      <input
        type="radio"
        id="my-activity"
        name="activity-tabs"
        defaultChecked
        hidden
      />
      <input type="radio" id="deposit-limits" name="activity-tabs" hidden />
      <input type="radio" id="time-out" name="activity-tabs" hidden />
      <input type="radio" id="self-exclusion" name="activity-tabs" hidden />
      <input type="radio" id="account-closure" name="activity-tabs" hidden />
      <input type="radio" id="reality-checks" name="activity-tabs" hidden />
      <div className="left-sidebar">
        <h2>Account Activity</h2>
        <div className="left-sidebar-tab">
          <label htmlFor="my-activity" className="my-activity-tab tab">
            My Activity
          </label>
          <label htmlFor="deposit-limits" className="deposit-limits-tab tab">
            Deposit Limits
          </label>
          <label htmlFor="time-out" className="time-out-tab tab">
            Time Out
          </label>
          <label htmlFor="self-exclusion" className="self-exclusion-tab tab">
            Self Exclusion
          </label>
          <label htmlFor="account-closure" className="account-closure-tab tab">
            Account Closure
          </label>
          <label htmlFor="reality-checks" className="reality-checks-tab tab">
            Reality Checks
          </label>
        </div>
      </div>
      <div className="right-content">
        <div className="my-activity-content content">
          <h2>My Activity</h2>
          <input
            type="radio"
            id="day-7"
            name="my-activity"
            hidden
            defaultChecked
          />
          <input type="radio" id="day-30" name="my-activity" hidden />
          <input type="radio" id="months-12" name="my-activity" hidden />
          <div className="my-activity-tabs">
            <label htmlFor="day-7" className="day-7-tab my-activity-tab">
              7 Day
            </label>
            <label htmlFor="day-30" className="day-30-tab my-activity-tab">
              30 Day
            </label>
            <label
              htmlFor="months-12"
              className="months-12-tab my-activity-tab"
            >
              12 Months
            </label>
          </div>
          <p>
            The figures displayed here include transactions made up to midnight
            on 02/12/2024 GMT+6, with the exception of Deposit Limit data which
            is real-time.
          </p>
          <div className="my-activity-card">
            <h3>Deposit Llimits</h3>
            <p>Limit the amount you are able to deposit</p>
            <p className="bottom-message">No limits</p>
          </div>
          <div className="my-activity-card">
            <div className="my-activity-card-top">
              <div className="my-activity-card-left">
                <h3>Amount Staked</h3>
                <svg
                  className="info-icon"
                  xmlns="http://www.w3.org/2000/svg"
                  width={800}
                  height={800}
                  viewBox="0 0 24 24"
                  xmlSpace="preserve"
                >
                  <path d="M12 24C5.4 24 0 18.6 0 12S5.4 0 12 0s12 5.4 12 12-5.4 12-12 12m0-22C6.5 2 2 6.5 2 12s4.5 10 10 10 10-4.5 10-10S17.5 2 12 2" />
                  <path d="M11 18c-.4 0-.7-.2-1-.5-.5-.7-.1-1.7 1-4.4.2-.4.4-.9.6-1.3-.4.3-1 .3-1.4-.1s-.4-1 0-1.4c.2-.1 1.4-1.3 2.8-1.3.4 0 .7.2 1 .5.5.7.1 1.7-1 4.4-.2.4-.4.9-.6 1.3.4-.3 1-.3 1.4.1s.4 1 0 1.4c-.2.1-1.4 1.3-2.8 1.3" />
                  <circle cx="13.5" cy="6.5" r="1.5" />
                  <path d="M13.5 8.5c-1.1 0-2-.9-2-2s.9-2 2-2 2 .9 2 2-.9 2-2 2m0-3c-.6 0-1 .4-1 1s.4 1 1 1 1-.4 1-1-.4-1-1-1" />
                </svg>
              </div>
              <p className="my-activity-time">26th Nov - 2nd Dec</p>
            </div>
            <p className="bottom-message">
              There is no data available for the selected period.
            </p>
          </div>
          <div className="my-activity-card">
            <div className="my-activity-card-top">
              <div className="my-activity-card-left">
                <h3>Time Spent Playing</h3>{" "}
                <svg
                  className="info-icon"
                  xmlns="http://www.w3.org/2000/svg"
                  width={800}
                  height={800}
                  viewBox="0 0 24 24"
                  xmlSpace="preserve"
                >
                  <path d="M12 24C5.4 24 0 18.6 0 12S5.4 0 12 0s12 5.4 12 12-5.4 12-12 12m0-22C6.5 2 2 6.5 2 12s4.5 10 10 10 10-4.5 10-10S17.5 2 12 2" />
                  <path d="M11 18c-.4 0-.7-.2-1-.5-.5-.7-.1-1.7 1-4.4.2-.4.4-.9.6-1.3-.4.3-1 .3-1.4-.1s-.4-1 0-1.4c.2-.1 1.4-1.3 2.8-1.3.4 0 .7.2 1 .5.5.7.1 1.7-1 4.4-.2.4-.4.9-.6 1.3.4-.3 1-.3 1.4.1s.4 1 0 1.4c-.2.1-1.4 1.3-2.8 1.3" />
                  <circle cx="13.5" cy="6.5" r="1.5" />
                  <path d="M13.5 8.5c-1.1 0-2-.9-2-2s.9-2 2-2 2 .9 2 2-.9 2-2 2m0-3c-.6 0-1 .4-1 1s.4 1 1 1 1-.4 1-1-.4-1-1-1" />
                </svg>
              </div>
              <div className="my-activity-time">
                <p className="my-activity-remaining-time">0d 0h 0m</p>
                <p>26th Nov - 2nd Dec</p>
              </div>
            </div>
            <p className="bottom-message">
              There is no data available for the selected period.
            </p>
          </div>
          <div className="my-activity-card">
            <h3>Reality Checks</h3>
            <p>A reminder of the time you have spent logged in</p>
            <p className="bottom-message">Cheks every:</p>
            <h2>No check</h2>
          </div>
          <div className="my-activity-card">
            <div className="my-activity-card-top">
              <div className="my-activity-card-left">
                <h3>Time of Bet Placement</h3>
                <svg
                  className="info-icon"
                  xmlns="http://www.w3.org/2000/svg"
                  width={800}
                  height={800}
                  viewBox="0 0 24 24"
                  xmlSpace="preserve"
                >
                  <path d="M12 24C5.4 24 0 18.6 0 12S5.4 0 12 0s12 5.4 12 12-5.4 12-12 12m0-22C6.5 2 2 6.5 2 12s4.5 10 10 10 10-4.5 10-10S17.5 2 12 2" />
                  <path d="M11 18c-.4 0-.7-.2-1-.5-.5-.7-.1-1.7 1-4.4.2-.4.4-.9.6-1.3-.4.3-1 .3-1.4-.1s-.4-1 0-1.4c.2-.1 1.4-1.3 2.8-1.3.4 0 .7.2 1 .5.5.7.1 1.7-1 4.4-.2.4-.4.9-.6 1.3.4-.3 1-.3 1.4.1s.4 1 0 1.4c-.2.1-1.4 1.3-2.8 1.3" />
                  <circle cx="13.5" cy="6.5" r="1.5" />
                  <path d="M13.5 8.5c-1.1 0-2-.9-2-2s.9-2 2-2 2 .9 2 2-.9 2-2 2m0-3c-.6 0-1 .4-1 1s.4 1 1 1 1-.4 1-1-.4-1-1-1" />
                </svg>
              </div>
              <p className="my-activity-time">26th Nov - 2nd Dec</p>
            </div>
            <p className="bottom-message">
              There is no data available for the selected period.
            </p>
          </div>
          <div className="my-activity-content-bottom">
            <p>Visit our dedicated Responsible Gambling</p>
            <p>site for helpful tools and advice</p>
            <button className="button find-more-btn">Find Out More</button>
          </div>
        </div>
        <div className="deposit-limits-content content">
          <h2>Deposit Limits</h2>
          <p>
            This facility enables you to limit the amount of money that you are
            able to deposit online into your account on either a 24 hour, 7 day
            and/or 30 day basis.
          </p>
          <p>
            These amounts may be revised downwards at any time but any increase
            will only be implemented 24 hours after the request. Our Customer
            Services staff will be available to provide any further information
            required but are unable to override limits set by you.
          </p>
          <h4>Your existing deposit limits are:</h4>
          <div className="deposit-content-bottom">
            <p>Deposit Limit</p>
            <h4>No Deposit Limit Set</h4>
          </div>
          <button className="button change-btn">Change</button>
        </div>
        <div className="time-out-content content">
          <h2>Time Out</h2>
          <input
            type="radio"
            id="create"
            name="create-radio"
            hidden
            defaultChecked
          />
          <input type="radio" id="existing" name="create-radio" hidden />
          <div className="time-out-tab-contents-btns">
            <label htmlFor="create" className="create-tab timeout-tab">
              Create a Time-Out
            </label>
            <label htmlFor="existing" className="existing-tab timeout-tab">
              Existing Time-Outs
            </label>
          </div>
          <div className="timeout-create-tab-content timeout-content-tab">
            <p>
              If you want to take a short break from playing with us, you may do
              so by taking a Time-Out for a specified period of time.
            </p>
            <p>
              You can also restrict access to gambling at specific times and/or
              on specific days by selecting 'Custom' from the menu below.
            </p>
            <p>
              Once you begin your Time-Out, you will no longer be able to
              deposit funds or play in any of our products. However, you will be
              able to withdraw any balance you may have.
            </p>
            <p>
              If you feel you are at risk of developing a gambling problem or
              believe you currently have a gambling problem, please visit our{" "}
              <span>Self-Exuclusion</span> page.
            </p>
            <label htmlFor="time-period">Time-Out Period</label>
            <select name="" id="time-period">
              <option value="">Please select</option>
              <option value="">24 Hours</option>
              <option value="">48 Hours</option>
              <option value="">7 days</option>
              <option value="">30 days</option>
              <option value="">Customs</option>
            </select>
            <button className="button continue-btn">Continue</button>
          </div>
          <div className="timeout-existing-tab-content timeout-content-tab">
            <p>You have no Time-Outs set up on your account.</p>
          </div>
        </div>
        <div className="self-exclusion-content content">
          <h2>Self Exclusion</h2>
          <div className="self-exclusion-tab-content timeout-content-tab">
            <p>
              If you feel you are at risk of developing a gambling problem or
              believe you currently have a gambling problem, please consider
              Self-Exclusion.
            </p>
            <p>
              If you want to stop playing for any other reason, please visit our
              Time-Out and Account Closure pages.
            </p>
            <p>
              bet365 provides the facility to allow a customer to self-exclude
              themselves from their account or specific products for a set
              period of time. Once this change has been made, it will not be
              possible for the selected products to be re-activated for any
              reason until after the set period has expired.
            </p>
            <p>
              During the period of self-exclusion bet365 will do all it can to
              prevent new accounts being opened.
            </p>
            <p>
              If you would like further information regarding self-exclusion,
              please contact us and one of our highly trained Customer Service
              team will be pleased to assist you.
            </p>
            <p>
              If you wish to self-exclude yourself now, you can do so by
              selecting the period of self-exclusion and the products you wish
              to be self-excluded from below. You will be asked to confirm the
              details, at which point the self-exclusion will become effective
              immediately.
            </p>
            <p>
              Please note that the Sports and Poker products may be
              self-excluded independently. However, should you wish to
              self-exclude from the Casino/Live Casino or the Games/Bingo
              products, this will result in the self-exclusion of the
              Casino/Live Casino, Games/Bingo and Poker products collectively.
            </p>
            <label htmlFor="self-exclusion">Time-Out Period</label>
            <select name="" id="self-exclusion">
              <option value="">Please select</option>
              <option value="">6 Months</option>
              <option value="">1 Year</option>
              <option value="">2 Year</option>
              <option value="">5 Year</option>
            </select>
            <h3>Please select at least one Product</h3>
            <div>
              <input type="checkbox" id="all" />
              <label htmlFor="all">All Products</label>
            </div>
            <div>
              <input type="checkbox" id="sports" />
              <label htmlFor="sports">Sports</label>
            </div>
            <div>
              <input type="checkbox" id="poker" />
              <label htmlFor="poker">Poker</label>
            </div>
            <div>
              <input type="checkbox" id="casino" />
              <label htmlFor="casino">Casino/Live Casino</label>
            </div>
            <div>
              <input type="checkbox" id="games" />
              <label htmlFor="games">Games/Bingo</label>
            </div>
            <button className="button continue-btn">Continue</button>
          </div>
        </div>
        <div className="account-closure-content content">
          <h2>Account Closure</h2>
          <div className="account-closure-tab-content timeout-content-tab">
            <p>
              If you want to stop playing with us, you may do so by closing your
              account.
            </p>
            <p>
              If you feel you are at risk of developing a gambling problem or
              believe you currently have a gambling problem, please visit our
              Self-Exclusion page.
            </p>
            <p>
              Once you close your account, you will no longer be able to deposit
              funds or play in any of our products. Should you wish to re-open
              your account during this period, you will be required to answer
              additional security questions to safeguard your account.
            </p>
            <p>
              Please note that verification of your account is still
              outstanding. Until we have successfully verified your account, it
              will not be possible to withdraw any remaining balance you may
              have. You can verify your account by visiting the
            </p>
            <p>
              In order to finalise the closure of your account, please select
              the closure period and the main reason for closure.
            </p>
            <h3>Closure Period</h3>
            <div className="closure-period">
              <input
                type="radio"
                id="duration"
                name="setting-time"
                hidden
                defaultChecked
              />
              <input type="radio" id="until" name="setting-time" hidden />
              <div className="du-tabs">
                <label htmlFor="duration" className="duration-radio radio">
                  Duration
                </label>
                <label htmlFor="until" className="until-radio radio">
                  Until
                </label>
              </div>
              <div className="tab-content">
                <div className="duration-tab-content du-content">
                  <select name="" id="">
                    <option value="">Please select</option>
                    <option value="">1 week</option>
                    <option value="">1 Month</option>
                    <option value="">3 Months</option>
                    <option value="">6 Months</option>
                    <option value="">12 Months</option>
                    <option value="">Indefinitely</option>
                  </select>
                </div>
                <div className="until-tab-content du-content">
                  <select name="" id="">
                    <option value="">DD</option>
                    <option value="">1</option>
                    <option value="">2</option>
                    <option value="">3</option>
                    <option value="">4</option>
                    <option value="">5</option>
                    <option value="">6</option>
                    <option value="">7</option>
                    <option value="">8</option>
                    <option value="">9</option>
                    <option value="">10</option>
                    <option value="">11</option>
                    <option value="">12</option>
                    <option value="">13</option>
                    <option value="">14</option>
                    <option value="">15</option>
                    <option value="">16</option>
                    <option value="">17</option>
                    <option value="">18</option>
                    <option value="">19</option>
                    <option value="">20</option>
                    <option value="">21</option>
                    <option value="">22</option>
                    <option value="">23</option>
                    <option value="">24</option>
                    <option value="">25</option>
                    <option value="">26</option>
                    <option value="">27</option>
                    <option value="">28</option>
                    <option value="">29</option>
                    <option value="">30</option>
                    <option value="">31</option>
                  </select>
                  <select name="" id="">
                    <option value="">MM</option>
                    <option value="">1</option>
                    <option value="">2</option>
                    <option value="">3</option>
                    <option value="">4</option>
                    <option value="">5</option>
                    <option value="">6</option>
                    <option value="">7</option>
                    <option value="">8</option>
                    <option value="">9</option>
                    <option value="">10</option>
                    <option value="">11</option>
                    <option value="">12</option>
                  </select>
                  <select name="" id="">
                    <option value="">Year</option>
                    <option value="">2024</option>
                    <option value="">2025</option>
                  </select>
                </div>
              </div>
            </div>
            <h3>Please select the main reason for closure:</h3>
            <select name="" id="">
              <option value="">Please select</option>
              <option value="">Not happy with your offer.</option>
              <option value="">Not happy with your Service/Product.</option>
              <option value="">Not interested online Gambling anymore</option>
            </select>
            <button className="button continue-btn">Continue</button>
          </div>
        </div>
        <div className="reality-checks-content content">
          <h2>Reality Checks</h2>
          <div className="reality-checks-tab-content">
            <p>
              To support you in managing the amount of time you spend playing,
              you can set up a Reality Check on your account. Once this is set,
              a pop-up alert will be displayed as a reminder that you have been
              logged into your account for the specified period of time
              (excludes poker game play).
            </p>
            <p>
              The Reality Check timer starts when you log in. If you make any
              changes to this, the new setting will only take effect the next
              time you log in.
            </p>
            <p>
              If you wish to reduce your Reality Check setting, the changes
              selected will be applied straight away. Any increases to this
              setting will be applied 24 hours after the request.
            </p>
            <p>
              When the Reality Check alert is received you can choose to remain
              logged in, view your account history or log out of your account.
              If you choose to remain logged in then you will receive another
              alert after the same length of time so that you can keep track of
              your total time spent playing.
            </p>
            <h3>Your existing Reality Check setting is:</h3>
            <button className="button change-btn">Change</button>
          </div>
        </div>
      </div>
    </div>
  );
}
