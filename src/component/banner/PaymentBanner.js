import React from 'react';

const PaymentBanner = () => {
  return (
    <div className='max-width'>
        <div className='container'>
        <div className="payment_bg">

          <div className='payment-list'>
          <div className="payment_getway">
            <a href="#"><img className='dark-mode' src="assets/media/thumbnail/payment-01.png" alt="" />
            <img className='light-mode' src="assets/media/thumbnail/payment-06.png" alt="" /></a>
            <a href="#"><img className='dark-mode' src="assets/media/thumbnail/payment-02.png" alt="" />
            <img className='light-mode' src="assets/media/thumbnail/payment-07.webp" alt="" /></a>
            <a href="#"><img className='dark-mode' src="assets/media/thumbnail/payment-03.png" alt="" />
            <img className='light-mode' src="assets/media/thumbnail/payment-08.webp" alt="" /></a>
            
          </div>
          <div className="payment_getway">
           
            <a href="#"><img  src="assets/media/thumbnail/payment-04.png" alt="" /></a>
            <a href="#"><img className='dark-mode' src="assets/media/thumbnail/payment-05.png" alt="" />
            <img className='light-mode' src="assets/media/thumbnail/payment-09.webp" alt="" />
            </a>
          </div>

          </div>
       
        <div className="payment-opt">
        <div className="payment-cont">
            <div className="payment-title">Fast &amp; Easy Way to get started</div>
            <div className="payment-desc"><span>300%</span> Deposit Bonus</div>
            <div className="btn-wrap">
            <button className="ui-button button-normal s-conic2">
            <div className="button-inner">Deposit</div></button></div></div>
        </div>

      </div>
    </div>
        </div>
   
  );
};
export default PaymentBanner;
