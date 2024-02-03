import React from 'react';
import Slider from 'react-slick';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowLeft,  faArrowRight} from '@fortawesome/free-solid-svg-icons';
function ExclusiveBanner (){
    const settings = {
        // Slick settings/configuration options go here
        dots: false,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
      };
    return(
        <div className="max-width">
            <div className="container">
            <div className="ffkkwpq">
            <Slider {...settings}>
            
		<div className="c1dy5tr1 register-bonus">
			<img  src="/assets/ball_1_w.a971d3f8.png" className="img-ball ball-grey light-mode" alt="ball"/>
            <img  src="/assets/ball_1.8c16948f.png" className="img-ball ball-grey dark-mode" alt="ball"/>
			<img src="/assets/ball_5_w.07c00d38.png" className="img-ball ball-color light-mode" alt="ball"/>
            <img src="/assets/ball_5.c6bfb29b.png" className="img-ball ball-color dark-mode" alt="ball"/>
            
			<div className="bonus-img">
				<p className="ratio">300%</p>
				<img className="img-ball" src="/assets/bonus.73eef02f.png"/>
			</div>
			<div className="left">
				<div className="wrap">
					<p className="tit">
						<span>Register</span> now to instantly redeem a <span>300%</span> deposit bonus!</p>
						<p className="desc">Deposit bonus up to $20,000</p>
						<div className="img-box"><p className="ratio">300%</p>
							<img alt="bonus" className="m-bonus-img" src="/assets/bonus.73eef02f.png"/>
						</div>
						<button className="ui-button button-normal s-conic4">
							<div className="button-inner">Sign up</div>
						</button>
					</div>
				</div>
			</div>
			<div className="c1dy5tr1 rain-coindrop">
				<img src="/assets/ball_1_w.a971d3f8.png" className="img-ball ball-grey light-mode" alt="ball"/>
                <img  src="/assets/ball_1.8c16948f.png" className="img-ball ball-grey dark-mode" alt="ball"/>
				<img src="/assets/ball_4_w.681d83a9.png" className="img-ball ball-color light-mode" alt="ball"/>
                <img src="/assets/ball_4.6eff1ed4.png" className="img-ball ball-color dark-mode" alt="ball"/>
                
				<img alt="bonus" className="img-ball bonus-img" src="/assets/rain.c10cc3c6.png"/>
				<div className="left"><div className="wrap">
					<p className="tit">Unlock exclusive <span>VIP</span> rewards at BC.GAME!</p>
					<p className="desc">Only in the VIP club</p>
					<img alt="bonus" className="m-bonus-img" src="/assets/rain.c10cc3c6.png"/>
					<button className="ui-button button-normal s-conic">
						<div className="button-inner">Sign up</div>
					</button>
				</div>
			</div>
		</div>
            </Slider>
	
	
            </div>
            </div>
        </div>
    );
}
export default ExclusiveBanner;