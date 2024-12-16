import React from 'react'
import FootersBottom from './FootersBottom'

export default function PaymentMethod() {
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
      <h2 className=" casino-container">Payment Methods</h2>
    </div>
    <input
      name="payment-tab"
      type="radio"
      id="deposits-label"
      hidden
      defaultChecked
    />
    <input name="payment-tab" type="radio" id="withdrawals-label" hidden />
    <div className="casino-container payment-body-content">
      <div className="switcher">
        <label htmlFor="deposits-label" className="deposits-tab">
          {" "}
          Deposits
        </label>
        <label htmlFor="withdrawals-label" className="withdrawals-tab">
          Withdrawals
        </label>
      </div>
      <div className="deposits-tab-content tab-content">
        <div className="select-option">
          <div className="option">
            <label htmlFor="country">
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
              <span> Country</span>
            </label>
            <select id="country" name="country">
              <option value="">-- Select a country --</option>
              <option value="AF">Afghanistan</option>
              <option value="AL">Albania</option>
              <option value="DZ">Algeria</option>
              <option value="AS">American Samoa</option>
              <option value="AD">Andorra</option>
              <option value="AO">Angola</option>
              <option value="AI">Anguilla</option>
              <option value="AQ">Antarctica</option>
              <option value="AG">Antigua and Barbuda</option>
              <option value="AR">Argentina</option>
              <option value="AM">Armenia</option>
              <option value="AW">Aruba</option>
              <option value="AU">Australia</option>
              <option value="AT">Austria</option>
              <option value="AZ">Azerbaijan</option>
              <option value="BS">Bahamas</option>
              <option value="BH">Bahrain</option>
              <option value="BD">Bangladesh</option>
              <option value="BB">Barbados</option>
              <option value="BY">Belarus</option>
              <option value="BE">Belgium</option>
              <option value="BZ">Belize</option>
              <option value="BJ">Benin</option>
              <option value="BM">Bermuda</option>
              <option value="BT">Bhutan</option>
              <option value="BO">Bolivia</option>
              <option value="BA">Bosnia and Herzegovina</option>
              <option value="BW">Botswana</option>
              <option value="BR">Brazil</option>
              <option value="BN">Brunei</option>
              <option value="BG">Bulgaria</option>
              <option value="BF">Burkina Faso</option>
              <option value="BI">Burundi</option>
              <option value="KH">Cambodia</option>
              <option value="CM">Cameroon</option>
              <option value="CA">Canada</option>
              <option value="CV">Cape Verde</option>
              <option value="KY">Cayman Islands</option>
              <option value="CF">Central African Republic</option>
              <option value="TD">Chad</option>
              <option value="CL">Chile</option>
              <option value="CN">China</option>
              <option value="CO">Colombia</option>
              <option value="KM">Comoros</option>
              <option value="CG">Congo</option>
              <option value="CR">Costa Rica</option>
              <option value="HR">Croatia</option>
              <option value="CU">Cuba</option>
              <option value="CY">Cyprus</option>
              <option value="CZ">Czech Republic</option>
              <option value="DK">Denmark</option>
              <option value="DJ">Djibouti</option>
              <option value="DM">Dominica</option>
              <option value="DO">Dominican Republic</option>
              <option value="EC">Ecuador</option>
              <option value="EG">Egypt</option>
              <option value="SV">El Salvador</option>
              <option value="GQ">Equatorial Guinea</option>
              <option value="ER">Eritrea</option>
              <option value="EE">Estonia</option>
              <option value="ET">Ethiopia</option>
              <option value="FJ">Fiji</option>
              <option value="FI">Finland</option>
              <option value="FR">France</option>
              <option value="GA">Gabon</option>
              <option value="GM">Gambia</option>
              <option value="GE">Georgia</option>
              <option value="DE">Germany</option>
              <option value="GH">Ghana</option>
              <option value="GR">Greece</option>
              <option value="GD">Grenada</option>
              <option value="GT">Guatemala</option>
              <option value="GN">Guinea</option>
              <option value="GW">Guinea-Bissau</option>
              <option value="GY">Guyana</option>
              <option value="HT">Haiti</option>
              <option value="HN">Honduras</option>
              <option value="HU">Hungary</option>
              <option value="IS">Iceland</option>
              <option value="IN">India</option>
              <option value="ID">Indonesia</option>
              <option value="IR">Iran</option>
              <option value="IQ">Iraq</option>
              <option value="IE">Ireland</option>
              <option value="IL">Israel</option>
              <option value="IT">Italy</option>
              <option value="JM">Jamaica</option>
              <option value="JP">Japan</option>
              <option value="JO">Jordan</option>
              <option value="KZ">Kazakhstan</option>
              <option value="KE">Kenya</option>
              <option value="KI">Kiribati</option>
              <option value="KP">North Korea</option>
              <option value="KR">South Korea</option>
              <option value="KW">Kuwait</option>
              <option value="KG">Kyrgyzstan</option>
              <option value="LA">Laos</option>
              <option value="LV">Latvia</option>
              <option value="LB">Lebanon</option>
              <option value="LS">Lesotho</option>
              <option value="LR">Liberia</option>
              <option value="LY">Libya</option>
              <option value="LI">Liechtenstein</option>
              <option value="LT">Lithuania</option>
              <option value="LU">Luxembourg</option>
              <option value="MG">Madagascar</option>
              <option value="MW">Malawi</option>
              <option value="MY">Malaysia</option>
              <option value="MV">Maldives</option>
              <option value="ML">Mali</option>
              <option value="MT">Malta</option>
              <option value="MH">Marshall Islands</option>
              <option value="MR">Mauritania</option>
              <option value="MU">Mauritius</option>
              <option value="MX">Mexico</option>
              <option value="FM">Micronesia</option>
              <option value="MD">Moldova</option>
              <option value="MC">Monaco</option>
              <option value="MN">Mongolia</option>
              <option value="ME">Montenegro</option>
              <option value="MA">Morocco</option>
              <option value="MZ">Mozambique</option>
              <option value="MM">Myanmar</option>
              <option value="NA">Namibia</option>
              <option value="NR">Nauru</option>
              <option value="NP">Nepal</option>
              <option value="NL">Netherlands</option>
              <option value="NZ">New Zealand</option>
              <option value="NI">Nicaragua</option>
              <option value="NE">Niger</option>
              <option value="NG">Nigeria</option>
              <option value="NO">Norway</option>
              <option value="OM">Oman</option>
              <option value="PK">Pakistan</option>
              <option value="PW">Palau</option>
              <option value="PS">Palestine</option>
              <option value="PA">Panama</option>
              <option value="PG">Papua New Guinea</option>
              <option value="PY">Paraguay</option>
              <option value="PE">Peru</option>
              <option value="PH">Philippines</option>
              <option value="PL">Poland</option>
              <option value="PT">Portugal</option>
              <option value="QA">Qatar</option>
              <option value="RO">Romania</option>
              <option value="RU">Russia</option>
              <option value="RW">Rwanda</option>
              <option value="KN">Saint Kitts and Nevis</option>
              <option value="LC">Saint Lucia</option>
              <option value="VC">Saint Vincent and the Grenadines</option>
              <option value="WS">Samoa</option>
              <option value="SM">San Marino</option>
              <option value="ST">Sao Tome and Principe</option>
              <option value="SA">Saudi Arabia</option>
              <option value="SN">Senegal</option>
              <option value="RS">Serbia</option>
              <option value="SC">Seychelles</option>
              <option value="SL">Sierra Leone</option>
              <option value="SG">Singapore</option>
              <option value="SK">Slovakia</option>
              <option value="SI">Slovenia</option>
              <option value="SB">Solomon Islands</option>
              <option value="SO">Somalia</option>
              <option value="ZA">South Africa</option>
              <option value="ES">Spain</option>
              <option value="LK">Sri Lanka</option>
              <option value="SD">Sudan</option>
              <option value="SR">Suriname</option>
              <option value="SZ">Eswatini</option>
              <option value="SE">Sweden</option>
              <option value="CH">Switzerland</option>
              <option value="SY">Syria</option>
              <option value="TW">Taiwan</option>
              <option value="TJ">Tajikistan</option>
              <option value="TZ">Tanzania</option>
              <option value="TH">Thailand</option>
              <option value="TL">Timor-Leste</option>
              <option value="TG">Togo</option>
              <option value="TO">Tonga</option>
              <option value="TT">Trinidad and Tobago</option>
              <option value="TN">Tunisia</option>
              <option value="TR">Turkey</option>
              <option value="TM">Turkmenistan</option>
              <option value="TV">Tuvalu</option>
              <option value="UG">Uganda</option>
              <option value="UA">Ukraine</option>
              <option value="AE">United Arab Emirates</option>
              <option value="GB">United Kingdom</option>
              <option value="US">United States</option>
              <option value="UY">Uruguay</option>
              <option value="UZ">Uzbekistan</option>
              <option value="VU">Vanuatu</option>
              <option value="VE">Venezuela</option>
              <option value="VN">Vietnam</option>
              <option value="YE">Yemen</option>
              <option value="ZM">Zambia</option>
              <option value="ZW">Zimbabwe</option>
            </select>
          </div>
          <div className="option">
            <label htmlFor="currency">
              <svg
                width={800}
                height={800}
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path d="M8.5 23a9.1 9.1 0 0 0 3.5-.68 8.9 8.9 0 0 0 3.5.68c3.645 0 6.5-1.945 6.5-4.429v-4.142C22 11.945 19.145 10 15.5 10q-.253.002-.5.017V5.333C15 2.9 12.145 1 8.5 1S2 2.9 2 5.333v13.334C2 21.1 4.855 23 8.5 23M20 18.571C20 19.72 18.152 21 15.5 21S11 19.72 11 18.571v-.925a8.33 8.33 0 0 0 4.5 1.211 8.33 8.33 0 0 0 4.5-1.211ZM15.5 12c2.652 0 4.5 1.28 4.5 2.429s-1.848 2.428-4.5 2.428-4.5-1.28-4.5-2.428S12.848 12 15.5 12m-7-9C11.152 3 13 4.23 13 5.333s-1.848 2.334-4.5 2.334S4 6.437 4 5.333 5.848 3 8.5 3M4 8.482a8.47 8.47 0 0 0 4.5 1.185A8.47 8.47 0 0 0 13 8.482v1.848a6.47 6.47 0 0 0-2.9 1.607 7.7 7.7 0 0 1-1.6.174c-2.652 0-4.5-1.23-4.5-2.333Zm0 4.445a8.5 8.5 0 0 0 4.5 1.184c.178 0 .35-.022.525-.031a3 3 0 0 0-.025.349v2.085c-.168.01-.33.042-.5.042-2.652 0-4.5-1.23-4.5-2.334Zm0 4.444a8.47 8.47 0 0 0 4.5 1.185c.168 0 .333-.013.5-.021v.036a3.47 3.47 0 0 0 .919 2.293A8 8 0 0 1 8.5 21C5.848 21 4 19.77 4 18.667Z" />
              </svg>
              <span>Currency</span>
            </label>
            <select name="currency" id="currency">
              <option value="">USD</option>
              <option value="">EUR</option>
              <option value="">GBP</option>
              <option value="">INR</option>
            </select>
          </div>
        </div>
        <div className="table-head">
          <p>Payment Method</p>
          <p>Free</p>
          <p>Process Time</p>
          <p>Min</p>
          <p>Max</p>
          <p>Details</p>
        </div>
        <details className="table-content">
          <summary>
            <h1>Logo</h1>
            <div className="table-middle">
              <p>Free</p>
              <p>Instant</p>
              <p>$10.00</p>
              <p>$10000.00</p>
            </div>
            <p className="table-last-item">Prepaid Voucher / eWallet</p>
          </summary>
          <div className="table-middle-middle">
            <div>
              <p>Free</p>
              <p>Process Time</p>
              <p>Min</p>
              <p>Max</p>
            </div>
            <div>
              <p>Free</p>
              <p>Instant</p>
              <p>$10.00</p>
              <p>$10000.00</p>
            </div>
          </div>
        </details>
        <details className="table-content">
          <summary>
            <h1>Logo</h1>
            <div className="table-middle">
              <p>Free</p>
              <p>Instant</p>
              <p>$10.00</p>
              <p>$10000.00</p>
            </div>
            <p className="table-last-item">Prepaid Voucher / eWallet</p>
          </summary>
          <div className="table-middle-middle">
            <div>
              <p>Free</p>
              <p>Process Time</p>
              <p>Min</p>
              <p>Max</p>
            </div>
            <div>
              <p>Free</p>
              <p>Instant</p>
              <p>$10.00</p>
              <p>$10000.00</p>
            </div>
          </div>
        </details>
        <details className="table-content">
          <summary>
            <h1>Logo</h1>
            <div className="table-middle">
              <p>Free</p>
              <p>Instant</p>
              <p>$10.00</p>
              <p>$10000.00</p>
            </div>
            <p className="table-last-item">Prepaid Voucher / eWallet</p>
          </summary>
          <div className="table-middle-middle">
            <div>
              <p>Free</p>
              <p>Process Time</p>
              <p>Min</p>
              <p>Max</p>
            </div>
            <div>
              <p>Free</p>
              <p>Instant</p>
              <p>$10.00</p>
              <p>$10000.00</p>
            </div>
          </div>
        </details>
        <details className="table-content">
          <summary>
            <h1>Logo</h1>
            <div className="table-middle">
              <p>Free</p>
              <p>Instant</p>
              <p>$10.00</p>
              <p>$10000.00</p>
            </div>
            <p className="table-last-item">Prepaid Voucher / eWallet</p>
          </summary>
          <div className="table-middle-middle">
            <div>
              <p>Free</p>
              <p>Process Time</p>
              <p>Min</p>
              <p>Max</p>
            </div>
            <div>
              <p>Free</p>
              <p>Instant</p>
              <p>$10.00</p>
              <p>$10000.00</p>
            </div>
          </div>
        </details>
        <details className="table-content">
          <summary>
            <h1>Logo</h1>
            <div className="table-middle">
              <p>Free</p>
              <p>Instant</p>
              <p>$10.00</p>
              <p>$10000.00</p>
            </div>
            <p className="table-last-item">Prepaid Voucher / eWallet</p>
          </summary>
          <div className="table-middle-middle">
            <div>
              <p>Free</p>
              <p>Process Time</p>
              <p>Min</p>
              <p>Max</p>
            </div>
            <div>
              <p>Free</p>
              <p>Instant</p>
              <p>$10.00</p>
              <p>$10000.00</p>
            </div>
          </div>
        </details>
      </div>
      <div className="withdrawals-tab-content tab-content">
        <div className="select-option">
          <div className="option">
            <label htmlFor="country">
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
              <span> Country</span>
            </label>
            <select id="country" name="country">
              <option value="">-- Select a country --</option>
              <option value="AF">Afghanistan</option>
              <option value="AL">Albania</option>
              <option value="DZ">Algeria</option>
              <option value="AS">American Samoa</option>
              <option value="AD">Andorra</option>
              <option value="AO">Angola</option>
              <option value="AI">Anguilla</option>
              <option value="AQ">Antarctica</option>
              <option value="AG">Antigua and Barbuda</option>
              <option value="AR">Argentina</option>
              <option value="AM">Armenia</option>
              <option value="AW">Aruba</option>
              <option value="AU">Australia</option>
              <option value="AT">Austria</option>
              <option value="AZ">Azerbaijan</option>
              <option value="BS">Bahamas</option>
              <option value="BH">Bahrain</option>
              <option value="BD">Bangladesh</option>
              <option value="BB">Barbados</option>
              <option value="BY">Belarus</option>
              <option value="BE">Belgium</option>
              <option value="BZ">Belize</option>
              <option value="BJ">Benin</option>
              <option value="BM">Bermuda</option>
              <option value="BT">Bhutan</option>
              <option value="BO">Bolivia</option>
              <option value="BA">Bosnia and Herzegovina</option>
              <option value="BW">Botswana</option>
              <option value="BR">Brazil</option>
              <option value="BN">Brunei</option>
              <option value="BG">Bulgaria</option>
              <option value="BF">Burkina Faso</option>
              <option value="BI">Burundi</option>
              <option value="KH">Cambodia</option>
              <option value="CM">Cameroon</option>
              <option value="CA">Canada</option>
              <option value="CV">Cape Verde</option>
              <option value="KY">Cayman Islands</option>
              <option value="CF">Central African Republic</option>
              <option value="TD">Chad</option>
              <option value="CL">Chile</option>
              <option value="CN">China</option>
              <option value="CO">Colombia</option>
              <option value="KM">Comoros</option>
              <option value="CG">Congo</option>
              <option value="CR">Costa Rica</option>
              <option value="HR">Croatia</option>
              <option value="CU">Cuba</option>
              <option value="CY">Cyprus</option>
              <option value="CZ">Czech Republic</option>
              <option value="DK">Denmark</option>
              <option value="DJ">Djibouti</option>
              <option value="DM">Dominica</option>
              <option value="DO">Dominican Republic</option>
              <option value="EC">Ecuador</option>
              <option value="EG">Egypt</option>
              <option value="SV">El Salvador</option>
              <option value="GQ">Equatorial Guinea</option>
              <option value="ER">Eritrea</option>
              <option value="EE">Estonia</option>
              <option value="ET">Ethiopia</option>
              <option value="FJ">Fiji</option>
              <option value="FI">Finland</option>
              <option value="FR">France</option>
              <option value="GA">Gabon</option>
              <option value="GM">Gambia</option>
              <option value="GE">Georgia</option>
              <option value="DE">Germany</option>
              <option value="GH">Ghana</option>
              <option value="GR">Greece</option>
              <option value="GD">Grenada</option>
              <option value="GT">Guatemala</option>
              <option value="GN">Guinea</option>
              <option value="GW">Guinea-Bissau</option>
              <option value="GY">Guyana</option>
              <option value="HT">Haiti</option>
              <option value="HN">Honduras</option>
              <option value="HU">Hungary</option>
              <option value="IS">Iceland</option>
              <option value="IN">India</option>
              <option value="ID">Indonesia</option>
              <option value="IR">Iran</option>
              <option value="IQ">Iraq</option>
              <option value="IE">Ireland</option>
              <option value="IL">Israel</option>
              <option value="IT">Italy</option>
              <option value="JM">Jamaica</option>
              <option value="JP">Japan</option>
              <option value="JO">Jordan</option>
              <option value="KZ">Kazakhstan</option>
              <option value="KE">Kenya</option>
              <option value="KI">Kiribati</option>
              <option value="KP">North Korea</option>
              <option value="KR">South Korea</option>
              <option value="KW">Kuwait</option>
              <option value="KG">Kyrgyzstan</option>
              <option value="LA">Laos</option>
              <option value="LV">Latvia</option>
              <option value="LB">Lebanon</option>
              <option value="LS">Lesotho</option>
              <option value="LR">Liberia</option>
              <option value="LY">Libya</option>
              <option value="LI">Liechtenstein</option>
              <option value="LT">Lithuania</option>
              <option value="LU">Luxembourg</option>
              <option value="MG">Madagascar</option>
              <option value="MW">Malawi</option>
              <option value="MY">Malaysia</option>
              <option value="MV">Maldives</option>
              <option value="ML">Mali</option>
              <option value="MT">Malta</option>
              <option value="MH">Marshall Islands</option>
              <option value="MR">Mauritania</option>
              <option value="MU">Mauritius</option>
              <option value="MX">Mexico</option>
              <option value="FM">Micronesia</option>
              <option value="MD">Moldova</option>
              <option value="MC">Monaco</option>
              <option value="MN">Mongolia</option>
              <option value="ME">Montenegro</option>
              <option value="MA">Morocco</option>
              <option value="MZ">Mozambique</option>
              <option value="MM">Myanmar</option>
              <option value="NA">Namibia</option>
              <option value="NR">Nauru</option>
              <option value="NP">Nepal</option>
              <option value="NL">Netherlands</option>
              <option value="NZ">New Zealand</option>
              <option value="NI">Nicaragua</option>
              <option value="NE">Niger</option>
              <option value="NG">Nigeria</option>
              <option value="NO">Norway</option>
              <option value="OM">Oman</option>
              <option value="PK">Pakistan</option>
              <option value="PW">Palau</option>
              <option value="PS">Palestine</option>
              <option value="PA">Panama</option>
              <option value="PG">Papua New Guinea</option>
              <option value="PY">Paraguay</option>
              <option value="PE">Peru</option>
              <option value="PH">Philippines</option>
              <option value="PL">Poland</option>
              <option value="PT">Portugal</option>
              <option value="QA">Qatar</option>
              <option value="RO">Romania</option>
              <option value="RU">Russia</option>
              <option value="RW">Rwanda</option>
              <option value="KN">Saint Kitts and Nevis</option>
              <option value="LC">Saint Lucia</option>
              <option value="VC">Saint Vincent and the Grenadines</option>
              <option value="WS">Samoa</option>
              <option value="SM">San Marino</option>
              <option value="ST">Sao Tome and Principe</option>
              <option value="SA">Saudi Arabia</option>
              <option value="SN">Senegal</option>
              <option value="RS">Serbia</option>
              <option value="SC">Seychelles</option>
              <option value="SL">Sierra Leone</option>
              <option value="SG">Singapore</option>
              <option value="SK">Slovakia</option>
              <option value="SI">Slovenia</option>
              <option value="SB">Solomon Islands</option>
              <option value="SO">Somalia</option>
              <option value="ZA">South Africa</option>
              <option value="ES">Spain</option>
              <option value="LK">Sri Lanka</option>
              <option value="SD">Sudan</option>
              <option value="SR">Suriname</option>
              <option value="SZ">Eswatini</option>
              <option value="SE">Sweden</option>
              <option value="CH">Switzerland</option>
              <option value="SY">Syria</option>
              <option value="TW">Taiwan</option>
              <option value="TJ">Tajikistan</option>
              <option value="TZ">Tanzania</option>
              <option value="TH">Thailand</option>
              <option value="TL">Timor-Leste</option>
              <option value="TG">Togo</option>
              <option value="TO">Tonga</option>
              <option value="TT">Trinidad and Tobago</option>
              <option value="TN">Tunisia</option>
              <option value="TR">Turkey</option>
              <option value="TM">Turkmenistan</option>
              <option value="TV">Tuvalu</option>
              <option value="UG">Uganda</option>
              <option value="UA">Ukraine</option>
              <option value="AE">United Arab Emirates</option>
              <option value="GB">United Kingdom</option>
              <option value="US">United States</option>
              <option value="UY">Uruguay</option>
              <option value="UZ">Uzbekistan</option>
              <option value="VU">Vanuatu</option>
              <option value="VE">Venezuela</option>
              <option value="VN">Vietnam</option>
              <option value="YE">Yemen</option>
              <option value="ZM">Zambia</option>
              <option value="ZW">Zimbabwe</option>
            </select>
          </div>
          <div className="option">
            <label htmlFor="currency">
              <svg
                width={800}
                height={800}
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path d="M8.5 23a9.1 9.1 0 0 0 3.5-.68 8.9 8.9 0 0 0 3.5.68c3.645 0 6.5-1.945 6.5-4.429v-4.142C22 11.945 19.145 10 15.5 10q-.253.002-.5.017V5.333C15 2.9 12.145 1 8.5 1S2 2.9 2 5.333v13.334C2 21.1 4.855 23 8.5 23M20 18.571C20 19.72 18.152 21 15.5 21S11 19.72 11 18.571v-.925a8.33 8.33 0 0 0 4.5 1.211 8.33 8.33 0 0 0 4.5-1.211ZM15.5 12c2.652 0 4.5 1.28 4.5 2.429s-1.848 2.428-4.5 2.428-4.5-1.28-4.5-2.428S12.848 12 15.5 12m-7-9C11.152 3 13 4.23 13 5.333s-1.848 2.334-4.5 2.334S4 6.437 4 5.333 5.848 3 8.5 3M4 8.482a8.47 8.47 0 0 0 4.5 1.185A8.47 8.47 0 0 0 13 8.482v1.848a6.47 6.47 0 0 0-2.9 1.607 7.7 7.7 0 0 1-1.6.174c-2.652 0-4.5-1.23-4.5-2.333Zm0 4.445a8.5 8.5 0 0 0 4.5 1.184c.178 0 .35-.022.525-.031a3 3 0 0 0-.025.349v2.085c-.168.01-.33.042-.5.042-2.652 0-4.5-1.23-4.5-2.334Zm0 4.444a8.47 8.47 0 0 0 4.5 1.185c.168 0 .333-.013.5-.021v.036a3.47 3.47 0 0 0 .919 2.293A8 8 0 0 1 8.5 21C5.848 21 4 19.77 4 18.667Z" />
              </svg>
              <span>Currency</span>
            </label>
            <select name="currency" id="currency">
              <option value="">USD</option>
              <option value="">EUR</option>
              <option value="">GBP</option>
              <option value="">INR</option>
            </select>
          </div>
        </div>
        <div className="table-head">
          <p>Payment Method</p>
          <p>Free</p>
          <p>Process Time</p>
          <p>Min</p>
          <p>Max</p>
          <p>Details</p>
        </div>
        <details className="table-content">
          <summary>
            <h1>Logo</h1>
            <div className="table-middle">
              <p>Free</p>
              <p>Instant</p>
              <p>$10.00</p>
              <p>$10000.00</p>
            </div>
            <p className="table-last-item">Prepaid Voucher / eWallet</p>
          </summary>
          <div className="table-middle-middle">
            <div>
              <p>Free</p>
              <p>Process Time</p>
              <p>Min</p>
              <p>Max</p>
            </div>
            <div>
              <p>Free</p>
              <p>Instant</p>
              <p>$10.00</p>
              <p>$10000.00</p>
            </div>
          </div>
        </details>
        <details className="table-content">
          <summary>
            <h1>Logo</h1>
            <div className="table-middle">
              <p>Free</p>
              <p>Instant</p>
              <p>$10.00</p>
              <p>$10000.00</p>
            </div>
            <p className="table-last-item">Prepaid Voucher / eWallet</p>
          </summary>
          <div className="table-middle-middle">
            <div>
              <p>Free</p>
              <p>Process Time</p>
              <p>Min</p>
              <p>Max</p>
            </div>
            <div>
              <p>Free</p>
              <p>Instant</p>
              <p>$10.00</p>
              <p>$10000.00</p>
            </div>
          </div>
        </details>
        <details className="table-content">
          <summary>
            <h1>Logo</h1>
            <div className="table-middle">
              <p>Free</p>
              <p>Instant</p>
              <p>$10.00</p>
              <p>$10000.00</p>
            </div>
            <p className="table-last-item">Prepaid Voucher / eWallet</p>
          </summary>
          <div className="table-middle-middle">
            <div>
              <p>Free</p>
              <p>Process Time</p>
              <p>Min</p>
              <p>Max</p>
            </div>
            <div>
              <p>Free</p>
              <p>Instant</p>
              <p>$10.00</p>
              <p>$10000.00</p>
            </div>
          </div>
        </details>
      </div>
    </div>
  </main>

 <FootersBottom />
</>

  )
}
