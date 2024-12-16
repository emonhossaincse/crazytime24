import React from "react";

export default function History() {
  return (
<<<<<<< HEAD
    <div className="profile-container main">
      <input type="radio" id="settled-bets" name="tabs" defaultChecked hidden />
      <input type="radio" id="unsettled-bets" name="tabs" hidden />
      <input type="radio" id="games-bets" name="tabs" hidden />
      <input type="radio" id="deposits-bets" name="tabs" hidden />
      <input type="radio" id="withdraw-bets" name="tabs" hidden />
      <input type="radio" id="adjustments-bets" name="tabs" hidden />
      <input type="checkbox" id="account-toggle" hidden />
=======
    <div className='max-width'>
      <div className="profile-container main">
  <input
    type="radio"
    id="settled-bets"
    name="tabs"
    defaultChecked
    hidden
  />
  <input type="radio" id="unsettled-bets" name="tabs" hidden />
  <input type="radio" id="games-bets" name="tabs" hidden />
  <input type="radio" id="deposits-bets" name="tabs" hidden />
  <input type="radio" id="withdraw-bets" name="tabs" hidden />
  <input type="radio" id="adjustments-bets" name="tabs" hidden />
  <div className="left-sidebar">
    <h2>Bank</h2>
    <div className="left-sidebar-tab">
      <label htmlFor="settled-bets" className="settled-bets-tab tab">
        Settled Bets
      </label>
      <label htmlFor="unsettled-bets" className="unsettled-bets-tab tab">
        Unsettled Bets
      </label>
      <label htmlFor="games-bets" className="games-bets-tab tab">
        Instant Games Bets
      </label>
      <label htmlFor="deposits-bets" className="deposits-bets-tab tab">
        Deposit
      </label>
      <label htmlFor="withdraw-bets" className="withdraw-bets-tab tab">
        Withdrawals
      </label>
      <label htmlFor="adjustments-bets" className="adjustments-bets-tab tab">
        Adjustments
      </label>
    </div>
  </div>
  <div className="right-content">
    <div className="settled-bets-content content">
      <h2>Settled Bets</h2>
      <input
        type="radio"
        id="settled-sports"
        name="settled-history"
        hidden
        defaultChecked
      />
      <input type="radio" id="settled-lotto" name="settled-history" hidden />
      <input type="checkbox" id="settled-show-history" hidden />
      <div className="settled-history-tabs">
        <label htmlFor="settled-sports" className="settled-sports-tab tab-item">
          Sports
        </label>
        <label htmlFor="settled-lotto" className="settled-lotto-tab tab-item">
          Lotto
        </label>
      </div>
      <div className="settled-history-tab-contents">
        <input
          type="radio"
          id="settled-last-24"
          name="settled-hours"
          hidden
          defaultChecked
        />
        <input
          type="radio"
          id="settled-last-48"
          name="settled-hours"
          hidden
        />
        <input
          type="radio"
          id="settled-date-range"
          name="settled-hours"
          hidden
        />
        <div className="settled-hours-tab-contents-btns">
          <label
            htmlFor="settled-last-24"
            className="settled-last-24-tab settled-hours-tab"
          >
            Last 24 Hours
          </label>
          <label
            htmlFor="settled-last-48"
            className="settled-last-48-tab settled-hours-tab"
          >
            Last 48 Hours
          </label>
          <label
            htmlFor="settled-date-range"
            className="settled-date-range-tab settled-hours-tab"
          >
            Date Range
          </label>
        </div>
        <label
          htmlFor="settled-show-history"
          className="settled-show-history-btn button"
        >
          Show History
        </label>
      </div>
      <div className="settled-show-history-content">
        <label
          htmlFor="settled-show-history"
          className="settled-show-history-tab"
        >
          <svg
            width={800}
            height={800}
            viewBox="-78.5 0 512 512"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path d="m257 64 34 34-163 164 163 164-34 34L61 262z" />
          </svg>
          <p>Back</p>
        </label>
        <hr />
        <h4 className="settled-time">From 04/12/2024 To 05/12/2024 </h4>
        <p>Sorry, there is no history information available</p>
      </div>
    </div>
    <div className="unsettled-bets-content content">
      <h2>Unsettled Bets</h2>
      <input
        type="radio"
        id="unsettled-sports"
        name="unsettled-history"
        hidden
        defaultChecked
      />
      <input
        type="radio"
        id="unsettled-lotto"
        name="unsettled-history"
        hidden
      />
      <input type="checkbox" id="unsettled-show-history" hidden />
      <div className="unsettled-history-tabs">
        <label
          htmlFor="unsettled-sports"
          className="unsettled-sports-tab tab-item"
        >
          Sports
        </label>
        <label
          htmlFor="unsettled-lotto"
          className="unsettled-lotto-tab tab-item"
        >
          Lotto
        </label>
      </div>
      <div className="unsettled-history-tab-contents">
        <input
          type="radio"
          id="unsettled-last-24"
          name="unsettled-hours"
          hidden
          defaultChecked
        />
        <input
          type="radio"
          id="unsettled-last-48"
          name="unsettled-hours"
          hidden
        />
        <input
          type="radio"
          id="unsettled-date-range"
          name="unsettled-hours"
          hidden
        />
        <div className="unsettled-hours-tab-contents-btns">
          <label
            htmlFor="unsettled-last-24"
            className="unsettled-last-24-tab unsettled-hours-tab"
          >
            Last 24 Hours
          </label>
          <label
            htmlFor="unsettled-last-48"
            className="unsettled-last-48-tab unsettled-hours-tab"
          >
            Last 48 Hours
          </label>
          <label
            htmlFor="unsettled-date-range"
            className="unsettled-date-range-tab unsettled-hours-tab"
          >
            Date Range
          </label>
        </div>
        <label
          htmlFor="unsettled-show-history"
          className="unsettled-show-history-btn button"
        >
          Show History
        </label>
      </div>
      <div className="unsettled-show-history-content">
        <label
          htmlFor="unsettled-show-history"
          className="unsettled-show-history-tab"
        >
          <svg
            width={800}
            height={800}
            viewBox="-78.5 0 512 512"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path d="m257 64 34 34-163 164 163 164-34 34L61 262z" />
          </svg>
          <p>Back</p>
        </label>
        <hr />
        <h4 className="unsettled-time">From 04/12/2024 To 05/12/2024 </h4>
        <p>Sorry, there is no history information available</p>
      </div>
    </div>
    <div className="games-bets-content content">
      <h2>Instant Games Bets</h2>
      <input type="checkbox" id="games-bets-show-history" hidden />
      <div className="history-tab-contents">
        <input
          type="radio"
          id="games-bets-last-24"
          name="games-bets-hours"
          hidden
          defaultChecked
        />
        <input
          type="radio"
          id="games-bets-last-48"
          name="games-bets-hours"
          hidden
        />
        <input
          type="radio"
          id="games-bets-date-range"
          name="games-bets-hours"
          hidden
        />
        <div className="hours-tab-contents-btns">
          <label htmlFor="games-bets-last-24" className="last-24-tab hours-tab">
            Last 24 Hours
          </label>
          <label htmlFor="games-bets-last-48" className="last-48-tab hours-tab">
            Last 48 Hours
          </label>
          <label
            htmlFor="games-bets-date-range"
            className="date-range-tab hours-tab"
          >
            Date Range
          </label>
        </div>
        <label
          htmlFor="games-bets-show-history"
          className="show-history-btn button"
        >
          Show History
        </label>
      </div>
      <div className="show-history-content">
        <label htmlFor="games-bets-show-history" className="show-history-tab">
          <svg
            width={800}
            height={800}
            viewBox="-78.5 0 512 512"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path d="m257 64 34 34-163 164 163 164-34 34L61 262z" />
          </svg>
          <p>Back</p>
        </label>
        <hr />
        <h4 className="time">From 04/12/2024 To 05/12/2024 </h4>
        <p>Sorry, there is no history information available</p>
      </div>
    </div>
    <div className="deposits-bets-content content">
      <h2>Deposit</h2>
      <input type="checkbox" id="deposits-bets-show-history" hidden />
      <div className="history-tab-contents">
        <input
          type="radio"
          id="deposits-bets-last-24"
          name="deposits-bets-hours"
          hidden
          defaultChecked
        />
        <input
          type="radio"
          id="deposits-bets-last-48"
          name="deposits-bets-hours"
          hidden
        />
        <input
          type="radio"
          id="deposits-bets-date-range"
          name="deposits-bets-hours"
          hidden
        />
        <div className="hours-tab-contents-btns">
          <label
            htmlFor="deposits-bets-last-24"
            className="last-24-tab hours-tab"
          >
            Last 24 Hours
          </label>
          <label
            htmlFor="deposits-bets-last-48"
            className="last-48-tab hours-tab"
          >
            Last 48 Hours
          </label>
          <label
            htmlFor="deposits-bets-date-range"
            className="date-range-tab hours-tab"
          >
            Date Range
          </label>
        </div>
        <label
          htmlFor="deposits-bets-show-history"
          className="show-history-btn button"
        >
          Show History
        </label>
      </div>
      <div className="show-history-content">
        <label
          htmlFor="deposits-bets-show-history"
          className="show-history-tab"
        >
          <svg
            width={800}
            height={800}
            viewBox="-78.5 0 512 512"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path d="m257 64 34 34-163 164 163 164-34 34L61 262z" />
          </svg>
          <p>Back</p>
        </label>
        <hr />
        <h4 className="time">From 04/12/2024 To 05/12/2024 </h4>
        <p>Sorry, there is no history information available</p>
      </div>
    </div>
    <div className="withdraw-bets-content content">
      <h2>Withdrawals</h2>
      <input type="checkbox" id="withdraw-bets-show-history" hidden />
      <div className="history-tab-contents">
        <input
          type="radio"
          id="withdraw-bets-last-24"
          name="withdraw-bets-hours"
          hidden
          defaultChecked
        />
        <input
          type="radio"
          id="withdraw-bets-last-48"
          name="withdraw-bets-hours"
          hidden
        />
        <input
          type="radio"
          id="withdraw-bets-date-range"
          name="withdraw-bets-hours"
          hidden
        />
        <div className="hours-tab-contents-btns">
          <label
            htmlFor="withdraw-bets-last-24"
            className="last-24-tab hours-tab"
          >
            Last 24 Hours
          </label>
          <label
            htmlFor="withdraw-bets-last-48"
            className="last-48-tab hours-tab"
          >
            Last 48 Hours
          </label>
          <label
            htmlFor="withdraw-bets-date-range"
            className="date-range-tab hours-tab"
          >
            Date Range
          </label>
        </div>
        <label
          htmlFor="withdraw-bets-show-history"
          className="show-history-btn button"
        >
          Show History
        </label>
      </div>
      <div className="show-history-content">
        <label
          htmlFor="withdraw-bets-show-history"
          className="show-history-tab"
        >
          <svg
            width={800}
            height={800}
            viewBox="-78.5 0 512 512"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path d="m257 64 34 34-163 164 163 164-34 34L61 262z" />
          </svg>
          <p>Back</p>
        </label>
        <hr />
        <h4 className="time">From 04/12/2024 To 05/12/2024 </h4>
        <p>Sorry, there is no history information available</p>
      </div>
    </div>
    <div className="adjustments-bets-content content">
      <h2>Adjustments</h2>
      <input type="checkbox" id="adjustments-bets-show-history" hidden />
      <div className="history-tab-contents">
        <input
          type="radio"
          id="adjustments-bets-last-24"
          name="adjustments-bets-hours"
          hidden
          defaultChecked
        />
        <input
          type="radio"
          id="adjustments-bets-last-48"
          name="adjustments-bets-hours"
          hidden
        />
        <input
          type="radio"
          id="adjustments-bets-date-range"
          name="adjustments-bets-hours"
          hidden
        />
        <div className="hours-tab-contents-btns">
          <label
            htmlFor="adjustments-bets-last-24"
            className="last-24-tab hours-tab"
          >
            Last 24 Hours
          </label>
          <label
            htmlFor="adjustments-bets-last-48"
            className="last-48-tab hours-tab"
          >
            Last 48 Hours
          </label>
          <label
            htmlFor="adjustments-bets-date-range"
            className="date-range-tab hours-tab"
          >
            Date Range
          </label>
        </div>
        <label
          htmlFor="adjustments-bets-show-history"
          className="show-history-btn button"
        >
          Show History
        </label>
      </div>
      <div className="show-history-content">
        <label
          htmlFor="adjustments-bets-show-history"
          className="show-history-tab"
        >
          <svg
            width={800}
            height={800}
            viewBox="-78.5 0 512 512"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path d="m257 64 34 34-163 164 163 164-34 34L61 262z" />
          </svg>
          <p>Back</p>
        </label>
        <hr />
        <h4 className="time">From 04/12/2024 To 05/12/2024 </h4>
        <p>Sorry, there is no history information available</p>
      </div>
    </div>
  </div>
</div>
    </div>
>>>>>>> 79ecfe6cfd89c972332787f78dd8022ce3cdc343

      <div className="left-sidebar">
        <h2>Bank</h2>
        <div className="left-sidebar-tab">
          <label htmlFor="settled-bets" className="settled-bets-tab tab">
            Settled Bets
          </label>
          <label htmlFor="unsettled-bets" className="unsettled-bets-tab tab">
            Unsettled Bets
          </label>
          <label htmlFor="games-bets" className="games-bets-tab tab">
            Instant Games Bets
          </label>
          <label htmlFor="deposits-bets" className="deposits-bets-tab tab">
            Deposit
          </label>
          <label htmlFor="withdraw-bets" className="withdraw-bets-tab tab">
            Withdrawals
          </label>
          <label
            htmlFor="adjustments-bets"
            className="adjustments-bets-tab tab"
          >
            Adjustments
          </label>
        </div>
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

        <div className="settled-bets-content content">
          <h2>Settled Bets</h2>
          <input
            type="radio"
            id="settled-sports"
            name="settled-history"
            hidden
            defaultChecked
          />
          <input
            type="radio"
            id="settled-lotto"
            name="settled-history"
            hidden
          />
          <input type="checkbox" id="settled-show-history" hidden />
          <div className="settled-history-tabs">
            <label
              htmlFor="settled-sports"
              className="settled-sports-tab tab-item"
            >
              Sports
            </label>
            <label
              htmlFor="settled-lotto"
              className="settled-lotto-tab tab-item"
            >
              Lotto
            </label>
          </div>
          <div className="settled-history-tab-contents">
            <input
              type="radio"
              id="settled-last-24"
              name="settled-hours"
              hidden
              defaultChecked
            />
            <input
              type="radio"
              id="settled-last-48"
              name="settled-hours"
              hidden
            />
            <input
              type="radio"
              id="settled-date-range"
              name="settled-hours"
              hidden
            />
            <div className="settled-hours-tab-contents-btns">
              <label
                htmlFor="settled-last-24"
                className="settled-last-24-tab settled-hours-tab"
              >
                Last 24 Hours
              </label>
              <label
                htmlFor="settled-last-48"
                className="settled-last-48-tab settled-hours-tab"
              >
                Last 48 Hours
              </label>
              <label
                htmlFor="settled-date-range"
                className="settled-date-range-tab settled-hours-tab"
              >
                Date Range
              </label>
            </div>
            <label
              htmlFor="settled-show-history"
              className="settled-show-history-btn button"
            >
              Show History
            </label>
          </div>
          <div className="settled-show-history-content">
            <label
              htmlFor="settled-show-history"
              className="settled-show-history-tab"
            >
              <svg
                width={800}
                height={800}
                viewBox="-78.5 0 512 512"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path d="m257 64 34 34-163 164 163 164-34 34L61 262z" />
              </svg>
              <p>Back</p>
            </label>
            <hr />
            <h4 className="settled-time">From 04/12/2024 To 05/12/2024 </h4>
            <p>Sorry, there is no history information available</p>
          </div>
        </div>
        <div className="unsettled-bets-content content">
          <h2>Unsettled Bets</h2>
          <input
            type="radio"
            id="unsettled-sports"
            name="unsettled-history"
            hidden
            defaultChecked
          />
          <input
            type="radio"
            id="unsettled-lotto"
            name="unsettled-history"
            hidden
          />
          <input type="checkbox" id="unsettled-show-history" hidden />
          <div className="unsettled-history-tabs">
            <label
              htmlFor="unsettled-sports"
              className="unsettled-sports-tab tab-item"
            >
              Sports
            </label>
            <label
              htmlFor="unsettled-lotto"
              className="unsettled-lotto-tab tab-item"
            >
              Lotto
            </label>
          </div>
          <div className="unsettled-history-tab-contents">
            <input
              type="radio"
              id="unsettled-last-24"
              name="unsettled-hours"
              hidden
              defaultChecked
            />
            <input
              type="radio"
              id="unsettled-last-48"
              name="unsettled-hours"
              hidden
            />
            <input
              type="radio"
              id="unsettled-date-range"
              name="unsettled-hours"
              hidden
            />
            <div className="unsettled-hours-tab-contents-btns">
              <label
                htmlFor="unsettled-last-24"
                className="unsettled-last-24-tab unsettled-hours-tab"
              >
                Last 24 Hours
              </label>
              <label
                htmlFor="unsettled-last-48"
                className="unsettled-last-48-tab unsettled-hours-tab"
              >
                Last 48 Hours
              </label>
              <label
                htmlFor="unsettled-date-range"
                className="unsettled-date-range-tab unsettled-hours-tab"
              >
                Date Range
              </label>
            </div>
            <label
              htmlFor="unsettled-show-history"
              className="unsettled-show-history-btn button"
            >
              Show History
            </label>
          </div>
          <div className="unsettled-show-history-content">
            <label
              htmlFor="unsettled-show-history"
              className="unsettled-show-history-tab"
            >
              <svg
                width={800}
                height={800}
                viewBox="-78.5 0 512 512"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path d="m257 64 34 34-163 164 163 164-34 34L61 262z" />
              </svg>
              <p>Back</p>
            </label>
            <hr />
            <h4 className="unsettled-time">From 04/12/2024 To 05/12/2024 </h4>
            <p>Sorry, there is no history information available</p>
          </div>
        </div>
        <div className="games-bets-content content">
          <h2>Instant Games Bets</h2>
          <input type="checkbox" id="games-bets-show-history" hidden />
          <div className="history-tab-contents">
            <input
              type="radio"
              id="games-bets-last-24"
              name="games-bets-hours"
              hidden
              defaultChecked
            />
            <input
              type="radio"
              id="games-bets-last-48"
              name="games-bets-hours"
              hidden
            />
            <input
              type="radio"
              id="games-bets-date-range"
              name="games-bets-hours"
              hidden
            />
            <div className="hours-tab-contents-btns">
              <label
                htmlFor="games-bets-last-24"
                className="last-24-tab hours-tab"
              >
                Last 24 Hours
              </label>
              <label
                htmlFor="games-bets-last-48"
                className="last-48-tab hours-tab"
              >
                Last 48 Hours
              </label>
              <label
                htmlFor="games-bets-date-range"
                className="date-range-tab hours-tab"
              >
                Date Range
              </label>
            </div>
            <label
              htmlFor="games-bets-show-history"
              className="show-history-btn button"
            >
              Show History
            </label>
          </div>
          <div className="show-history-content">
            <label
              htmlFor="games-bets-show-history"
              className="show-history-tab"
            >
              <svg
                width={800}
                height={800}
                viewBox="-78.5 0 512 512"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path d="m257 64 34 34-163 164 163 164-34 34L61 262z" />
              </svg>
              <p>Back</p>
            </label>
            <hr />
            <h4 className="time">From 04/12/2024 To 05/12/2024 </h4>
            <p>Sorry, there is no history information available</p>
          </div>
        </div>
        <div className="deposits-bets-content content">
          <h2>Deposit</h2>
          <input type="checkbox" id="deposits-bets-show-history" hidden />
          <div className="history-tab-contents">
            <input
              type="radio"
              id="deposits-bets-last-24"
              name="deposits-bets-hours"
              hidden
              defaultChecked
            />
            <input
              type="radio"
              id="deposits-bets-last-48"
              name="deposits-bets-hours"
              hidden
            />
            <input
              type="radio"
              id="deposits-bets-date-range"
              name="deposits-bets-hours"
              hidden
            />
            <div className="hours-tab-contents-btns">
              <label
                htmlFor="deposits-bets-last-24"
                className="last-24-tab hours-tab"
              >
                Last 24 Hours
              </label>
              <label
                htmlFor="deposits-bets-last-48"
                className="last-48-tab hours-tab"
              >
                Last 48 Hours
              </label>
              <label
                htmlFor="deposits-bets-date-range"
                className="date-range-tab hours-tab"
              >
                Date Range
              </label>
            </div>
            <label
              htmlFor="deposits-bets-show-history"
              className="show-history-btn button"
            >
              Show History
            </label>
          </div>
          <div className="show-history-content">
            <label
              htmlFor="deposits-bets-show-history"
              className="show-history-tab"
            >
              <svg
                width={800}
                height={800}
                viewBox="-78.5 0 512 512"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path d="m257 64 34 34-163 164 163 164-34 34L61 262z" />
              </svg>
              <p>Back</p>
            </label>
            <hr />
            <h4 className="time">From 04/12/2024 To 05/12/2024 </h4>
            <p>Sorry, there is no history information available</p>
          </div>
        </div>
        <div className="withdraw-bets-content content">
          <h2>Withdrawals</h2>
          <input type="checkbox" id="withdraw-bets-show-history" hidden />
          <div className="history-tab-contents">
            <input
              type="radio"
              id="withdraw-bets-last-24"
              name="withdraw-bets-hours"
              hidden
              defaultChecked
            />
            <input
              type="radio"
              id="withdraw-bets-last-48"
              name="withdraw-bets-hours"
              hidden
            />
            <input
              type="radio"
              id="withdraw-bets-date-range"
              name="withdraw-bets-hours"
              hidden
            />
            <div className="hours-tab-contents-btns">
              <label
                htmlFor="withdraw-bets-last-24"
                className="last-24-tab hours-tab"
              >
                Last 24 Hours
              </label>
              <label
                htmlFor="withdraw-bets-last-48"
                className="last-48-tab hours-tab"
              >
                Last 48 Hours
              </label>
              <label
                htmlFor="withdraw-bets-date-range"
                className="date-range-tab hours-tab"
              >
                Date Range
              </label>
            </div>
            <label
              htmlFor="withdraw-bets-show-history"
              className="show-history-btn button"
            >
              Show History
            </label>
          </div>
          <div className="show-history-content">
            <label
              htmlFor="withdraw-bets-show-history"
              className="show-history-tab"
            >
              <svg
                width={800}
                height={800}
                viewBox="-78.5 0 512 512"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path d="m257 64 34 34-163 164 163 164-34 34L61 262z" />
              </svg>
              <p>Back</p>
            </label>
            <hr />
            <h4 className="time">From 04/12/2024 To 05/12/2024 </h4>
            <p>Sorry, there is no history information available</p>
          </div>
        </div>
        <div className="adjustments-bets-content content">
          <h2>Adjustments</h2>
          <input type="checkbox" id="adjustments-bets-show-history" hidden />
          <div className="history-tab-contents">
            <input
              type="radio"
              id="adjustments-bets-last-24"
              name="adjustments-bets-hours"
              hidden
              defaultChecked
            />
            <input
              type="radio"
              id="adjustments-bets-last-48"
              name="adjustments-bets-hours"
              hidden
            />
            <input
              type="radio"
              id="adjustments-bets-date-range"
              name="adjustments-bets-hours"
              hidden
            />
            <div className="hours-tab-contents-btns">
              <label
                htmlFor="adjustments-bets-last-24"
                className="last-24-tab hours-tab"
              >
                Last 24 Hours
              </label>
              <label
                htmlFor="adjustments-bets-last-48"
                className="last-48-tab hours-tab"
              >
                Last 48 Hours
              </label>
              <label
                htmlFor="adjustments-bets-date-range"
                className="date-range-tab hours-tab"
              >
                Date Range
              </label>
            </div>
            <label
              htmlFor="adjustments-bets-show-history"
              className="show-history-btn button"
            >
              Show History
            </label>
          </div>
          <div className="show-history-content">
            <label
              htmlFor="adjustments-bets-show-history"
              className="show-history-tab"
            >
              <svg
                width={800}
                height={800}
                viewBox="-78.5 0 512 512"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path d="m257 64 34 34-163 164 163 164-34 34L61 262z" />
              </svg>
              <p>Back</p>
            </label>
            <hr />
            <h4 className="time">From 04/12/2024 To 05/12/2024 </h4>
            <p>Sorry, there is no history information available</p>
          </div>
        </div>
      </div>
    </div>
  );
}
