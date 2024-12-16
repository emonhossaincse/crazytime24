import React from "react";

export default function CasinoFooter() {
  return (
    <footer className="casino-footer">
      <h1 className="footer-logo">bet365</h1>

      <div className="footer-body">
        <div className="footer-body-left">
          <p>
            Registered Office Hillside (International Gaming) LP (registration
            number 121), Unit 1.1, First Floor, Waterport Place, 2 Europort
            Avenue, Gibraltar.
          </p>
          <p>
            Hillside (International Gaming) LP is licensed by the Government of
            Gibraltar and regulated by the Gibraltar Gambling Commissioner (RGL
            number 078).
          </p>
          <p>© 2001-2024 bet365. All rights reserved.</p>
          <p>Server Time: 05:13:27 GMT+6</p>
        </div>
        <div className="footer-body-right">
            <a href="#">Help</a>
            <a href="/banking">Banking</a>
            <a href="/termsConditions">Terms & Conditions</a>
            <a href="/cookiePolicy">Cookie Policy</a>
            <a href="/complaints">Complaints Procedure</a>
            <a href="/contactUs">Contact Us</a>
            <a href="/privacyPolicy">Privacy Policy</a>
            <a href="/fairPayouts">Fair Payouts</a>
            <a href="/gamesList">Games List</a>
        </div>
      </div>
      <p className="footer-para">
        By accessing, continuing to use or navigating throughout this site you
        accept that we will use certain browser cookies to improve your customer
        experience with us. bet365 only uses cookies which will improve your
        experience with us and will not interfere with your privacy. Please
        refer to our Cookie Policy for further information on our use of cookies
        and how you can disable or manage their use should you wish.
      </p>
      <div className="footer-nav">
        <a href="">Sports</a>
        <a href="">Casino</a>
        <a href="">Live Casino</a>
        <a href="">Poker</a>
        <a href="">Partners</a>
        <a href="">Careers</a>
      </div>
    </footer>
  );
}
