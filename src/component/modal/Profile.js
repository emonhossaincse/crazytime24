import React, { useState, useEffect } from 'react';
import { Modal, Button, Tabs, Tab, Nav } from 'react-bootstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faXmark, faUser, faPen, faHeart, faChevronRight, faMedal, faChartLine, faCoins, faBitcoinSign, faUserGroup, faDollarSign, faCircleInfo} from '@fortawesome/free-solid-svg-icons';

const MyModal = ({ showModal, handleClose }) => {
	const [activeKey, setActive] = useState('bronze');
    const backgroundImg = {
        backgroundImage: `url('data:image/png;base64,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')`,
      };

      const handleStatisticsOpen = () =>{
        const bodyElements = document.querySelector('.sxohmew');
    bodyElements.classList.add('open');
    };
    const handleStatisticsmedals = () =>{
        const bodyElements = document.querySelector('.medals');
    bodyElements.classList.add('open');
    };
    const handleStatisticsmedalsClose = () =>{
        const bodyElements = document.querySelector('.medals');
    bodyElements.classList.remove('open');
    };

    const handleStatisticsClose = () =>{
        const chatElement = document.querySelector('.sxohmew');
        chatElement.classList.remove('open');
    };
      
   
  
    return (
      <Modal show={showModal} onHide={handleClose}>
        <div className="ui-dialog pw4ap0w">
    <div className="dialog-head has-close">
    <div className="dialog-title">User Information</div>
    <div className="v6cr95f vip-level">
        <div className="vip-box" style={backgroundImg}>V0</div>
    </div>
</div>
<button className="i1gm0mn8 dialog-close">
   
    <FontAwesomeIcon onClick={handleClose} icon={faXmark} />
    
</button>
<div className="ui-scrollview" id="user-profile">
    <div className="b1lt7xbx">
        <div className="user-info">
            <button className="like button">
                <svg className="s1ff97qc icon">
                <FontAwesomeIcon icon={faHeart} />
                </svg> 0
            </button>
            <button className="button edit">
    <svg className="s1ff97qc icon">
    <FontAwesomeIcon icon={faPen} />
    </svg>
</button>
<div className="avatar-box">
    <img className="avatar " src="//img2.bc.game/avatar/21016203/s?t=1709008914700"/>
</div>
<div className="name-box">
    <div className="user-name">Sgbjpvgxnyb</div>
</div>
<div className="user-id">User ID:&nbsp;21016203</div>
</div>
</div>
<div className="m161dta1 mpja2t6 self">
    <div className="module-name">
        <svg className="s1ff97qc icon icon-name">
        <FontAwesomeIcon icon={faMedal} />
        </svg> Medals
        <div className="total">0
        </div>
        <button onClick={handleStatisticsmedals} className="detail-button">Details
            <svg className="s1ff97qc icon">
            <FontAwesomeIcon icon={faChevronRight} />
        </svg>
    </button>
</div>
<div className="content">
    <div className="scroll">
        <div className="item ">
            <img src="data:image/png;base64,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" className="img locked"/>
        </div>
        <div className="item ">
            <img src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAGgAAACUCAMAAABIkpzxAAADAFBMVEUAAADIbw//1gf/5w3/3Sjwlin+0gfIbxDUhwzJbxL4xQj8mRX/5UzviBf3mRX1dAb/40X7nB38mh3fhBz+4knzlhbyXgb0dAb2jwv1gwjglQz9nyPIcRH8kxr3kgz0cwb/4DL0ZQT/4Tv/3SrzaAT5mBb5kRT/3i31eAf/3iT/2xj8yyL2jwv0ZwP8zgf3lRL/3ir3lBH3yBL/3invtwnsbwj/6Bb/4j/9oCP7ywf/2yL+oyj0ZAT8oCP0ZAT0gAj90xb80hj/4Dr7zQf4lxX6ywn+1hz/3y7wSx7ypQH/0wf/6WD19vekKfX6mxv/6Fz1kgz+pCr3lA/9oij8nyP9oSX3lRL/2R74lhT+0Qf5mBb/pS3/51j7niD6nR/5mRjTQBn1jwn/g1j/3Cv92Tr/pi76nB7/1Av1iwn/2Bn9zAb3tgL/40j1hwjfQTD0gwf1sQT/5lX/1Q//2yX/1hL/40P/1xbvix/0fAbzagP2uhH0eAb+3j7zbwXzqQHuSh/0dAX8yQb/5VD0gAf/4UDmewj+zgf0rQH1swzzYwL/3zbpRyX7xgb5wAX+gVX5bUDyUybVQRnpfwvzrQf91SftiBr5vQTlRCrogwjxnAT7c0f3ZTj6myfxjSLeRRz7fUT7zSfpSRzvhwzyogH9fVD/4Dv4whjVRhjshBX80y7kRhvZQhrzfwf8eUvbWRPCc/b9gVj81DP/3jH1XC/5xyL1kh7zfhbtlQT4ugP06un4txDhahCsPPbx09D12p/ngHb3gir7nyn6yh/XSxb1pxH2uAzsjQnv5ve2Vvb04t/676zroZnmdGjiVEX7ijb91zD3ryD1iB7wnhDrghDjdAzctPX18/DpjoTwdFX4sBP9wg3n0/fixffWp/fLivbz7fP28N3wxL3vsqfxp47xgWXzxWDlX0/7lUrhSjn4fDX2dDTeYxHdYBHQmPbz4c737LrxvbT97IfymoP743LlbmH+3lr+01T0diXhVyHhp8zvxcH26r//6mj0wT3maCX/yxb8mkgDAAAASHRSTlMARHcU9AbzH1M4tRv+C2RK9nw3FP389L+9rF5MLCbg1sVf492jopeFg2JLPe3h3s2wraCZijQk7ePSzsy7tnTr6dvZ18/KtpH8FUTSAAAMTElEQVRo3uzYSWhTQRgHcHdRqhQUD+JB9CAqiKgoenLBZeZVnggSHvQQkkBoEkKaRg8hRAyxDWmzuNDapJjUJkqVaBdxF4u7WOuCOy6I4IYHEfeD+n3zXpyniYkhz4Pg/9CGDMyP75uZ96Yd9D//8z//889kxuQFlRW1ougbXzll7tBBfynTpvgEdcTKyTO1NpCp4AS3pszXmJleKbD40j1GXU1NnTGY9snUUi07OHwqm3O90UmpJNVbLPWSRKnLaBPh6+ohmjnzTcj0mCm1NHuJEkcTWM4gUrO12moeYIJOKjXD/IGDyW6TqTO5G8SGTUClQZo6XAtniF8QbMCECHF3830nepJe0mCBDsIuGTZUA2e9IAShaV4S8Ag/pzpJiFWiZj9KGjhiHaVNhHQq+86WDgb9Nrm0WjdpgKXqQalsp7qG0iPEi+WI/jozxY0HP5zynjtNSD2lOhGkcp0NlFqJw4YbwkzrQ1a27xqOwKZz+UGC9lm4pIWTdlKLlfB4QxLdAN9v55IWDi5UM/k5uOeC5UtqBxdKspKcNFFaJ6qlcp1aF5UaSJ6EEFBL2jtcqilLQseZ4xSRarhUotOU4xSWNqBUugMJcaeY5AWISyU5mDR3CkvVZkq5VLJDXdwpLOko5VLpjtPJnSKSUy2V7kjH1hyC7Gr9DdEhD5+9X7Kkdr61JcIGJamX13OU1j7V+MA1s1oqwakfgFm6MrFIPB6JpWCuDKM485KNRyLxiDyeuJZHKu60pQzhWDy6KpveWJchsZY7fWFDONL7Yzgaz8D4/RypqDNgMESYwhONdIWzRXUkgPl1PGZI3Ssq8ecbxpIwZPg0fKpMV5/ctowhlme8NxVukyUdSkUcK9yiEobIqryJGFDqyBji+cdjXetweblUwCHWDQNdME/+xLF7iXDv78Yj4WPUyp/lhd8Lzw3cyZVSrX0G7uRKKVPBt8YM/w/nfRj6VmCmRDheaDz2XOBS7v3aw99zzzOrCiYVKzL+gUuLfnGGm7jzIRwtPFG0yHhvQuTS3J+hqYKI90R0agdiq8pMrIZJuPcEcbramS4IdT/ep4louVBvmw4lL7stj1dDleweT7zobIKCys0rbNpp4qCU+tXNmybYKJUI8YBD2+LlQ3EJpd2kmVKzz8ehCtFJaYh0CtUuKvVFy4d6b1CUAgSaVyPM5gUFsaAA2xDWl6s0yHF4jBmF8eQINq8iC03Bgpqhcex+/UoL6JMXtlxacGNJLmGmAvl6wCVuIU1pPdEIIlaYs2I8CVEAJysPH9GMW65bZDdT8lELaCchm/AUbfMC5KqUocnrKbbMF8SCNIL2tLKSbAeJhJWNYdACI3z2BrCuEEDXNXA26lsJ23Ee0gSTB6fLp9WJS3TQDz8dAK0pcc7GlpaWxl++bNd3EEbY4CiBt5JBKEgkWYd1EUhJTqPdbu8/1f/iZ2rnHkIYESTnKEQ+SUGKi9NtxrowE0qpx24/dbQK8uWu+ut9+wlhZ0i3zYGQvO1wc28i3YzD7CoBarHfqVLyVt254zCPGwm3l0KmMsjIiCRrIEv7n0P2F1CPkru8IP15mGY3EgEGLUJnuA4v2eQ0ZWuEOV7CCmFBSt5kv92rxyVSZjyHS7ICoTEjcF/IvptBh3f+eeeecOhodt226G8SSCfr0W4X/JrDKlqMkLw7koTldfsfQ485dCm75fRwXCF+tvZJhOT/HS7Bp4SbHWGTDLWe2Vj45DRuVPbcuyqek9nG6bcSiBuhZmLC1s1k0Bz4ZO6Uz1dAlnZs2Vjw5Dy7YgcMPl5WQU+zzn6C6Q6yJ4APGzicQYMpEuzZ1GMiSvO2tP/euXypqur2kztXQDypgu7KfVMa5xB1IBA3QssGsUwagZCD1OPb8JjSvP0o5T+hb3706nK/yrkdVZzzBGMSzdi5q9jAeTI0cjSrhZ1kn88rSx379e35CzpVxXPhwIkDty7In58ozmGCOSiAIHm3VeOTbZJyeZzI/qAJYEl1goco0mv93rz7TN2th6sxFx89YE+Gjfv0+jOy4xYFF94TrwpQ16xxoGBGLQSp1kQcWJJgIkqO55NarlSpcgAdzIkDD581cidQi69rC9km2mDOsYiw3mFJRpHdjlwil27qc0+uvV8NnUBEoT7feWbfeT7r1Jrx/wYeQQcFTcpCYwYvx5KqA6QJm8elzblSi3qJHqxW5RYc2cv9XzuYI7qo5ID7WwVMPBE6p2TSd07t76WpMIwDeOfGrEbQDyGKuqurKIi66E84LXJumptsy0gmmURrM0FEUfwRuqC2Jl4oqNE8IhSCo7RaZFNUEMUVpIaKPyAQFZGuKuh5zs7O8569k3j7IriNIx/evc/77JlbtgMFU42MUxJJcJ76a9Oqjj2iiyyUrImh1Tg6hTh+RMxmmN+uHmDeS0iXscKhENKlsd50qXWIoHHGGU89uJWrOVVOrLwsCRZES5KgxB96M0hvetObxBoVN7ugTf3hbd2ph406iQuiSNIF/BdVJumzdnRJmqDipizQyfVpjtMPZ1VKTkBUD1KWWgi8xDeJp2srQ1pxU9Fdp5QkHVzYJWn/PmOOSdlZAPASNoln/IH6tvrBAL1moOe6c1DC0jZmv1HysdJGMUnU9D4uvGeLmzJKDm1QRumeg6S9moT6ErGwmSq8JXK2OWcv6Q44JFGTyNj0lr4vjhufuXXeySzhKE4SNYlaYy+aYpr419iyfufXPxySCkt5iZoEbdF1SkyW/0wmrUm/jxxhiZoEbdEK+2yp/e3Oz93daezP5IhJdHRrmS2aYKAZdKCvqSm9yzniUrcO/WCc5T0ccYlvEq1T7BaB80jMIekaK1GT0A5Ubf/9IYJ2xNfDS9SNqEng1Fu8Ql30N78eYcnBSph3cHS7wXk1u5WCJnlHWCpr1jssNYl+cDZeyDOxlFPIOKFscASkk2Uo+VtkmZOCxcXwRgszsx6LTe6gU6c7jZKAA1J2O0r8ay6mvfeLrEWfD+qSzoPGoOAH9FcaQQIgo6R/IjLs1ecDn+ZY9onlUA8nHQ/JaRmkOQRvoHP7vChk4SXvoIEJlZh5xyIOGaSAesNcP6ivanggV3UcrGOxWM4IQ0YJP9l1miHHB/oGu/pKvGZ0H8E8yjr/CZFUEcKXd3+52ZCGUjhncoQczEVRyGqxWFFqUqX6Ubk5AIsiKrcBxuu3+H0KcqwAnRCGrFZWco7IKlXqe1lhKm9ogfbuaKuRQ9XkWNUIQzeT6Qm24/AFG2+KyHLNvUCTQ22BZW0PoO6mtYIIBRM3tZwVhYrs9iJ7UZG9Jxhsg2kZN7+8C2oOtOYaGVM17cSCgGdwNpiw47XwN/ZzotCtVKKJRAjeAcDuoNU3Enksh0YjXdVevSDGEsotPUdEoRt6oooyix8z1Ju5mGB7nihK+AZFFDrt8nhcHpfL7XK7QVLiOLyajEw5MIEcRamEa90etxsudrkOi0L5TDzhsBKeg1U99FV4c9Xi9uI3dxyBnHA4HM1nc0oQOlrAJj8ahuQMl6kvO34/jC6gxPHBzo4CW4ENfrRLhaG8vDxbng1+kr8/RSvVzMbnqubnh+fiOerdzg4bXYexHRWE/rZbLqsJA1EYziYrSYKKl1RUAiqBVsSFIFjtpuugsQ3FUEIXlm5Kl1YkUHDVd0jewK0PkDfryZBmTGYCOVn7cfDEmT98uTBDblc2YWWvoGwgOPu7JP7Zg/FUro0UtbYsduD5/s4nwL0Ets0JVbGi6CoBaPEVw2/geV6wpneR7FsBiUzfUTaczBQrKq+LMUOLnosxx4r6T8UYYEXzV7L9QMU9hv5n58pY0ew9hOxhUHEH6DgALZmRsaKpUYwKVmQYDsFwDAYYhGI6oYT0VDcRzsaB2vBhMzUBSeWlGI9Y0Y2VyUhujTMn++j1anKwTMsyxyJMyzVm3CKHZfR6NWPI9x0BDogHqHToGBTpIS2sqLnkEy/80og7X8WKOm88ljJNSE1OoIP1iB887pREpskmVKyo/cmhWUpdjcpE0BuQ8sWis/etpjNtrEg/hpyOJ6gjoVthU2AK52nuQcCifqcYSPx32UikVLSoe0jQVbKCUuMyp2A94k8CHRZptonmDhJWNHEvaNA3zDfFyZ6ARXPdvbsnsE+NNf1nFbRI30cMtTwPuheFBTT3v4ShJubL90h8UVDU1YTcLCBfl/AipV7vTbBnaEIBxCKnXLmSjz901KZXeIl6gAAAAABJRU5ErkJggg==" className="img locked"/>
        </div>
        <div className="item ">
            <img src="data:image/png;base64,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" className="img locked"/>
        </div>
        <div className="item ">
            <img src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAGgAAACUCAMAAABIkpzxAAAC91BMVEUAAADHbg//5xT/3Sj/1wrGbxPHcBD+0gb1pCXViwv5lhTtgRvqrgz/40n3oh7QeBf3lBH1hgn/3CT+0wj+2h/sagj4gwz5mib/5EX/4j7/3y70eAb3lRH3kQ/6mhn5lRPKcRD92h7vfwj2kgz90Av0YAL0aQT5yxf6nB3/2yTydAf1cAb7lxb/4Tj0dwb7zAf0XgL5yAv/3Sn1kQr0bAT0ZwP1dgfmfwr0ZATenQ3/2xP9oSX6lxT80g/5lxX/2yT+oif/1wr+oyf3wwn9oij8ixP/nyD0YAP0cAXyYQL/pS/1kgz/4Sb/2bnypQH/0wcAev//6WD2xqf/pS35mBb1kgz7nSD2kw/5mRn9oij8nyL6mxv/6Vz+oyr8oCX7nB73lRH/1Ar/0gf/51X/1Q/+2Lf9oSb1jwkPLP/ypwH3lhP3yan81LT1hwj6z7D5y6z/5lH5wQYMN//70bL/2R70gwf8yQb5za3zqgH1zKr/40j/2iL0fwf0rQL0ign+zwf9zQYkh/X/3Cn/1hL0ewb5xyH0dwbvix//3S38ywf/6Fn/4D392Tz/2Bv/1xf/5E30cwXouJT6x3rzcAT7ziT/4kT/4DnuhgvnewjzawT/5U/91SfxjSL+1rb6wwT3tgPzaAPTlSTshRjtlQn/1RXzrwfltI/0sCnuiBzqgBH3tQ/1sgL7y4r/3jP6yyLogwn930T1iwn7xgb1xZ/4vQX5xXD92DL70jH4whb3vRHzqg/ypwf/2K33vmPevCr0kyPzrBfzZAMFW//8z5bezW74wmf81zn80ib3whzxjBPyYwPzYAIWfuj+2LT+2pX+1Hrurkjoxx70kxrfoRX0pRMBcf8siN1TV7VKh7D916f5yZL7yoP/3G71tD3EljL81C3csSYSce8tjOwjN+j93oWCbH6Rg2r/1lz3uk+pmEz3ukv+3DjbyTLymxhdneUiXuQyP9hbnLerradji5ZsXZa2qXbJt2fbvlH3u0zt0krew0jqowj0bAQdTZqeAAAATXRSTlMARBT0xicf8wZSPwt7/W8RyK+h900sGP3268XAon1fTjwk6ubl3bWVjn9VRC3W1tLKvLu6qJiEdW9jX1MyMPPl2cS3raEiHPz18+nVPPTxNy8AAAtMSURBVGje7NdNiBJhGAfw2r4JC6pD26kgiA4RdSuIiK7N+/R6nsuoA8mKuik6rYhmCK66K0l6MFQCbaFdZYm27Zvo+9AnQd9fl767dSjq0vvM6O6OM2MO2q0/y87u6cfzPs+877zz/ud//ud/epK+NRvm/eP0req3eJOUUt5eWLt937x/kw3r1vJUlcKWnb1n+rYkqU761/SWWbrOTjH2VCI0UhEco/5YbYhi+P5eNmyXRV6p2giALTocKJ0ejtoAhFAKq0xu7pmzs0ApzfgBIqUwaUYajDKrhm3b3iNnFVs2bwhgmCnOO9PpSctkejpeZf+cBnDkGbV7aS+cPcypAUTHibM+OWfuMtNVIgUYlaF0QV/3zkI75f0Ag4TEmagKPy2RMoCQQqkHjrcCtjIJWyjGm8onYrFafkiuLXmehCMACZS6doYcYAuTMpaTSVRw7gLDEXnm0IoTZxTAz6PUpSOATSJnkmy8QwCnyxLBOMslmzIIt51kuCl17wwmKR8DmJ1utAYZlaP0uErq2rFXIDJO1JEYUFNJXTvYqGGJtMZZAgjxKqlLJwcQQEeTQYARldSlUzlev3qB/BMJHWg4lvsc5lJ27C/SqCKZrwfOyPV85JqZuthGipqXlHowAezPA24mE8bSuA0akmkHk88BQrM1EQMpA5iGZN6BEVZVlpsToz4dAY1k1pFUUJboS6MOjWTWISroEjEhmXPUEHfVUBLMSOgIKqcVGiM9kNDJgdrRQiYkM/VoIbOSsRN59OjRt2+P0DEBoVRpSn6U2ju2N08PXtuPufv9cRvo6tiXy1PZly8nMC+zU5c/vY4LSk2RqEbSOpH3B2RGoT7rQRfHfk5dv8fpRLz/Ki2AEG67l+9R6kFnTt5ooInrYuOvoi/oCQY9LMGgm8Xnc7mK4qWP3ranxqrGuh04uH9unvxGSC8ujzWIpDaX6Iy0W+PsVBzpKStIlQ8GUNBq9XAGeT4rrWu9LxQUhxw4sF+dZ7qQ6LFarUXOKK9QUiZik/r+Y6FeB0CYvMOVU6/dw7EJThN0BjhjiEcpAhCivOqqto7yFYAyOXNDAx0+dPIQ1xqftT30AE9CItnwc2ztHKfPTuXv+HJSF3JzrbH+DQIm1ck4AOTo5lloC00AREnYTnUhH9eS4t+gm4DSOdwrBK9l9r6d9DJ6nFjo0BU9SNRMtlWOaAhdZYKf8lViw+em2Q7hfY7Eqd2hC3EGUNDIeUFIACBG0+QMAAzNdGltBgDCTjsbCD3oqC6EcevXdP0iIVIUIE9PYUmjfF9jFHi8B5M6jQG8MwN5rAOeoDYvCKYMAN40KeE8rGpsPgUAKJFJfJzoCBKVYRBdA1a9ZGUpihcAJw7eSL8C9ddw5SQe71mdQZwMuJjIttWWBH2ieKFZUuYOseFDgSyjADZyBxtV7hDytB+6TwhJePzdwqmAlNIkFCJkOsEeUoeQGyHOMJebaweTcpNCyjaUBxzudAXr6hByWdvuqa/RkYmv+M6CsFkeOiwlQNIAEO0UEhHyGTniRXRkIkTOA4s8dmtCwKaAnEWuU4gbkKfOaAMiM9AR6RRC2xHaNSIv3W38bQAZTINHVxIniJI4EnMqWon3gAqp40h0DLnRCVrdvqKrJe6B1w3oGDZD4TbL0Gp8p8g5AHBUO4V8uHLIaTPgVlrUaMZthNbMQH65RCHeIYRj58Zlcvla42pOdxWnuSRzsAGh5RsRqoaBJW0CcnFGUZpUrwEe2jksYJ6cbfitfEx+hQsmoKIhpOyqlhiAzVnF7WCjAu3A7qTkoyP/o3PIh0/j8b5DHdiiY1jRXgVaj03KhPFTInSj82HwGDkiXtWcmYJ8ak/idrBMgRZvxVreYknCDRPj7WtX0C2awILO0wrAksUKtHIFTkMy7IwA/OoQCsoHrB5TlGeuTu0CFpTzAsC2pcjg2rG5E5Jn8QS50vkWhD9Bd2s8WXTiFI/rQXKO5gFWr0cEswjHIcGfY4tn+HGi/d4quqy6mZKdFC5cuMA72CgsakIr52/FkuxVcloXcum0CNdNdHsGWuJxu8QLzMkIEJVITi5o/vJ5zfxp11xjWwrDANz+QBmz/Zj9MCZbsMyCxD1ERNwlp2nYutbWdt2MFnG/X7Nhs5JK2MZSIxOiFcwwM6REjJnJMnP75RoJ4hokEj+8787p+c7Nyd7+8sOzk57bmz57v/P2+77TnoQJeZCSpY/H80JLtETdcnofo0sWnMhv38rVWzChoZiQQIxxKKTkt/i4hyrRq40nVRdpte5A/kDwHLRg5Y0wmgyMbkboHgrywfR68SO56NPGk8pZ/hH98fWN6PFBaRshIYZpkBEqbx+c+q68Eft2va2t7Zmy4fQ6hrKIxw8XqOcgTEjaeMYeOIm1/FKk9JRDbtySfPDBoze+Poh4IDF3rFgJrPJ68qYfsqt0/yHXydXbrez68CzXNj0rFjz5xWZ3b2Nfg5LuEdPPL6seifmAR6Dx/a1rra2rMZ0LAuuXLlRw5NqbAplH6Hy0TXvfPvn88uX9V4+/vuNI7ILmknmwEPRMa8zIZlCSPXDDLffomaD4mYnqgR5O18NMIMijmpgHKWIeionoQUqZh2Iie4oLdDxEE91DN9E9+qY1ZpmJ7qGbSsFE95BN29UmfY+ZeSimas86ZtLpd1g+x9FDMI3bgabNPo6Z9Pq3OtGTAh6Kadw5MEEhMJN+P1ogeA6lGGikH0JTkdTkUXvOsv66iPdUziWKelWqTP4TCo2nSTou8J7MOKooU20qOyhL6q5fMf6gJwqRzFSHG/C+l0OC5cSuPrBfVWDeIfdkjiKLZCZuJd4HWICq2qbLTXv9FsSXB7+TSD1APFkkNZWf4I66zcU+i5T8znk8V888SBJVZEVE04or3IZquAP1lUU0VaWQzmlua63osWZaoxYxUw48t7C1Gr8iLa3wVZwpghoDDdewgnl40qgiF09z8Nw6/IYPkjoLNXB65bodbnxIo/ooVOCVckjND4V3PFjpdbm8Lq/XO4Aqmi/QHAxehDbLx7d8ztech6+7g7VCQeypDDbP9/Lh3liqKDsCmBrN+CwGsuLD87MNoYZdd+r5usvBgggGm7NFBlJFC3icC5ztwZrje+AWYJNFSU4FNFtjsKbd6YRAnmSiKDmLkV1TU9OBv2iU58jKGzTuEJxrz5LQiyiaaLfbHXZHJ/asU6iCrPLWVGyqKoPn+Pzl+OTO9hCcOOW0S8mgigqlOMKngJLGOrdZZE+oHQ+GHYW2QhssQugMomhgrhxHuITnY0coFOr4KOyFbTZFYAxRFDtPSW5iIFAiEigJBAKJtnkqDNGI1K5wIEI4MVcrZE7UIrXN5rChQ5spVFEatL0t12aDF4Bta6wBFjeVKppmQ8RqghXbhxcF7Pg0qmiqg1HoKITF0SXSqKI4e3TEUkVTsqJjIlWU6IyOSURPzIIo6UsUTc+OjskG8gAbHXFU0UDvfK8Xh2dhLaI+LttOoooGuACcbCCwISEtY1ISfw5elAygipKsGris8FaxnQlPFvZhYWsgmfx5tQIwIYSFXyO4Lcw9MlLFYywOmEEVpWZqI/7H/eK0TqdSPTGLNEmdJAkZpREwiirK2HZ+23lYtsmI6yeNMcXDeUUcuRaSl2kw1sQCeJMqpBe5uteqSBmmiEGTMshEFcVvURIPzaY2KeL6G6gM3yknJV07ztRfFjaO6jHtljO631/Ls780bjpVlLBfynB2dbRMkkADlfQDjFlYbLomMXQ8WTT2sMgYbDV90xAh9DeEEhlyTGBIQleu6Ggh2EBm8M2b9+BvNNPoM+Yehg+LQtTS0jJ7DGi6yviZLS0jDXTSB48cT7v9GDZ4ZILhP//5t/gD0R80DrYvEasAAAAASUVORK5CYII=" className="img locked"/>
            </div>
            <div className="item "><img src="/assets/achieve_5-7e08d516.png" className="img locked"/>
            </div>
            <div className="item ">
                <img src="/assets/achieve_6.png" className="img locked"/>
            </div>
            <div className="item ">
                <img src="/assets/achieve_7.png" className="img locked"/>
            </div>
            <div className="item ">
                    <img src="/assets/achieve_8-65991297.png" className="img locked"/>
            </div>
            <div className="item ">
                <img src="data:image/png;base64,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" className="img locked"/>
                </div>
                <div className="item ">
                    <img src="/assets/achieve_10-19cd9ddc.png" className="img locked"/>
                </div>
                <div className="item ">
                    <img src="/assets//achieve_11.png" className="img locked"/>
                </div>
                <div className="item ">
                    <img src="/assets/achieve_12-7f2dc23f.png" className="img locked"/>
                </div>
                    <div className="item ">
                        <img src="/assets/achieve_13.png" className="img locked"/>
                    </div>
                    <div className="item ">
                        <img src="data:image/png;base64,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" className="img locked"/>
                    </div>
                    <div className="item ">
                        <img src="/assets/achieve_15-53c0901a.png" className="img locked"/>
                        </div>
                        <div className="item ">
                            <img src="/assets/achieve_16.png" className="img locked"/>
                        </div>
                        <div className="item ">
                            <img src="/assets/achieve_17_ETH-4684f7c4.png" className="img locked"/>
                        </div>
                        <div className="item ">
                            <img src="/assets/achieve_17_BTC-a5992a94.png" className="img locked"/>
                        </div>
                        <div className="item ">
                            <img src="/assets/achieve_17_DOGE-894cb117.png" className="img locked"/>
                        </div>
                        <div className="item ">
                            <img src="/assets/achieve_17_EOS-902b23db.png" className="img locked"/>
                        </div>
                    </div>
                </div>
            </div>
            <div className="m161dta1 s1to9seu">
                <div className="module-name">
                    <svg className="s1ff97qc icon icon-name">
                     
                    <FontAwesomeIcon icon={faChartLine} />
                     
                    </svg>Statistics<a className="detail-link" href="#">
                        <button onClick={handleStatisticsOpen} className="detail-btn">Details
                            <svg className="s1ff97qc icon icon-right">
                            <FontAwesomeIcon icon={faChevronRight} />
                            </svg>
                        </button>
                    </a>
                </div>
                <div className="content">
                    <div className="s6linil">
                        <div className="item">
                            <div className="item-type darken">
                                <svg className="s1ff97qc icon wins-icon">
                                <FontAwesomeIcon icon={faCoins} />
                                </svg>Total Wins</div>
                                <div className="item-value">0</div>
                            </div>
                            <div className="item">
                                <div className="item-type darken">
                            <svg className="s1ff97qc icon bets-icon">
                            <FontAwesomeIcon icon={faBitcoinSign} />
                            </svg>Total Bets
                        </div>
                            <div className="item-value">0</div>
                        </div>
                        <div className="item">
                            <div className="item-type darken">
                                <svg className="s1ff97qc icon wagered-icon">
                                <FontAwesomeIcon icon={faDollarSign} />
                                </svg>Total Wagered</div>
                                <div className="item-value">BDT&nbsp;0.00</div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="m161dta1 fz635xc">
                    <div className="module-name">Top 3 Favorite Games</div>
                    <div className="empty sowd61n ">
                    <img className='light-mode' src="/assets/empty_w.png"/>
                        <img className='dark-mode' src="/assets/empty.png"/>
                        <div className="msg">Oops! There is no data yet!</div>
                    </div>
                </div>
                <div className="m161dta1 cf89dnv">
                    <div className="module-name">Wager contest</div>
                    <div className="empty sowd61n ">
                        <img className='light-mode' src="/assets/empty_w.png"/>
                        <img className='dark-mode' src="/assets/empty.png"/>
                        <div className="msg">Oops! There is no data yet!</div>
                    </div>
                </div>
                <div className="joined">
                    <div>Joined on&nbsp;9/30/2023</div>
                </div>
            </div>
        </div>
        <div className="ui-dialog sxohmew" >
    <button className="dialog-back">
        <svg className="s1ff97qc icon">
        <FontAwesomeIcon onClick={handleStatisticsClose} icon={faChevronRight} />
        </svg>
    </button>
    <div className="dialog-head has-back has-close">
        <div className="dialog-title">Details</div>
    </div>
    <button className="i1gm0mn8 dialog-close">
        <svg className="s1ff97qc icon">
        <FontAwesomeIcon onClick={handleStatisticsClose} icon={faXmark} />
          </svg>
        </button>
        <div className="ui-scrollview" id="user-stat">
            <div className="fc head">
                <div className="title">Statistics</div>
                <div className="ui-select">
                    <div className="select-trigger">Global<div className="arrow ">
                        <svg className="s1ff97qc icon">
                           
                        </svg>
                    </div>
                </div>
            </div>
            <div className="user-info flex-center">
                <img className="avatar " src="//img2.bc.game/avatar/22517602/s"/>
                <div className="flex-column">
                    <div className="user-name">Nwhftekjoyb</div>
                </div>
            </div>
        </div>
        <div className="m161dta1">
            <div className="s6linil">
                <div className="item">
                    <div className="item-type darken">
                        <svg className="s1ff97qc icon wins-icon">
                            
                        </svg>Total Wins
                    </div>
                    <div className="item-value">16047</div>
                </div>
                <div className="item">
                    <div className="item-type darken">
                        <svg className="s1ff97qc icon bets-icon">
                            
                        </svg>Total Bets</div>
                        <div className="item-value">46905</div>
                    </div>
                    <div className="item">
                        <div className="item-type darken">
                            <svg className="s1ff97qc icon wagered-icon">
                                
                            </svg>Total Wagered</div>
                            <div className="item-value">BDT&nbsp;1,650,306.89</div>
                        </div>
                    </div>
                </div>
                <div className="m161dta1 statistics__list">
                    <div className="thead darken"><div className="th">Currency</div>
                    <div className="th">Win</div>
                    <div className="th">Bet</div>
                    <div className="th">Wagered</div>
                </div>
                <div className="tbody">
                    <div className="tr">
                        <div className="td fc bold">
                            <img className="coin-icon" src="/assets/BDT.black.png"/>BDT
                            </div>
                            <div className="td">1</div>
                            <div className="td">0</div>
                            <div className="td bold">
                                <div className="cq8kbks coin notranslate monospace">
                                    <div className="amount amount-str">0.00</div>
                                </div>
                            </div>
                    </div>
                    <div className="tr">
                        <div className="td fc bold">
                            <img className="coin-icon" src="/assets/BDT.black.png"/>BDT
                            </div>
                            <div className="td">1</div>
                            <div className="td">0</div>
                            <div className="td bold">
                                <div className="cq8kbks coin notranslate monospace">
                                    <div className="amount amount-str">0.00</div>
                                </div>
                            </div>
                    </div>
                    <div className="tr">
                        <div className="td fc bold">
                            <img className="coin-icon" src="/assets/BDT.black.png"/>BDT
                            </div>
                            <div className="td">1</div>
                            <div className="td">0</div>
                            <div className="td bold">
                                <div className="cq8kbks coin notranslate monospace">
                                    <div className="amount amount-str">0.00</div>
                                </div>
                            </div>
                    </div>
                    <div className="tr">
                        <div className="td fc bold">
                            <img className="coin-icon" src="/assets/BDT.black.png"/>BDT
                            </div>
                            <div className="td">1</div>
                            <div className="td">0</div>
                            <div className="td bold">
                                <div className="cq8kbks coin notranslate monospace">
                                    <div className="amount amount-str">0.00</div>
                                </div>
                            </div>
                    </div>
                    <div className="tr">
                        <div className="td fc bold">
                            <img className="coin-icon" src="/assets/BDT.black.png"/>BDT
                            </div>
                            <div className="td">1</div>
                            <div className="td">0</div>
                            <div className="td bold">
                                <div className="cq8kbks coin notranslate monospace">
                                    <div className="amount amount-str">0.00</div>
                                </div>
                            </div>
                    </div>
                    <div className="tr">
                        <div className="td fc bold">
                            <img className="coin-icon" src="/assets/BDT.black.png"/>BDT
                            </div>
                            <div className="td">1</div>
                            <div className="td">0</div>
                            <div className="td bold">
                                <div className="cq8kbks coin notranslate monospace">
                                    <div className="amount amount-str">0.00</div>
                                </div>
                            </div>
                    </div>
                    <div className="tr">
                        <div className="td fc bold">
                            <img className="coin-icon" src="/assets/BDT.black.png"/>BDT
                            </div>
                            <div className="td">1</div>
                            <div className="td">0</div>
                            <div className="td bold">
                                <div className="cq8kbks coin notranslate monospace">
                                    <div className="amount amount-str">0.00</div>
                                </div>
                            </div>
                    </div>
                    <div className="tr">
                        <div className="td fc bold">
                            <img className="coin-icon" src="/assets/BDT.black.png"/>BDT
                            </div>
                            <div className="td">1</div>
                            <div className="td">0</div>
                            <div className="td bold">
                                <div className="cq8kbks coin notranslate monospace">
                                    <div className="amount amount-str">0.00</div>
                                </div>
                            </div>
                    </div>
                    
                        
                        </div>
                        <div className="ui-pagination">
                            <div className="total">Total 10</div>
                            <div className="pages-box pages-wrap">
                                <button className="active" disabled="">1</button>
                                <button className="">2</button>
                                <button className="">3</button>
                            </div>
                            <div className="pages-box page-pn pageConic2">
                                <button disabled="" className="disabled previous-btn">
                                    <svg className="s1ff97qc icon prev">
                                    <FontAwesomeIcon icon={faChevronRight} />
                                    </svg>
                                </button>
                                <button className="next-page">
                                    <svg className="s1ff97qc icon next">
                                    <FontAwesomeIcon icon={faChevronRight} />
                                    
                                    </svg>
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="ui-dialog medals">
    <button onClick={handleStatisticsmedalsClose} className="dialog-back">
        <svg className="s1ff97qc icon">
                <FontAwesomeIcon icon={faChevronRight} />
        </svg>
    </button>
    <div className="dialog-head has-back has-close">
        <div className="dialog-title">Master Medals</div>
    </div>
    <button onClick={handleStatisticsmedalsClose} className="i1gm0mn8 dialog-close">
        <svg className="s1ff97qc icon">
             <FontAwesomeIcon  icon={faXmark} />
        </svg>
    </button>
    <div className="ui-scrollview">
        <div className="a1h19buy">
            <div className="top">
                <div className="flex-box">
                    <div className="p">
                        <div className="text">0</div>
                        <img className="box" src="data:image/png;base64,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"/>
                    </div>
                    <div className="p ">
                            <div className="text">5</div>
                            <img src="/assets/box-24e5e087.png" className="box"/>
                    </div>
                    <div className="p ">
                        <div className="text">10</div>
                        <img src="/assets/box-24e5e087.png" className="box"/>
                    </div><div className="p ">
                        <div className="text">15</div>
                        <img src="/assets/box-24e5e087.png" className="box"/>
                    </div>
                    <div className="p ">
                        <div className="text">max</div>
                        <img src="/assets/box-24e5e087.png" className="box"/>
                    </div>
                </div>
                <div className="progress-box">
                    <div className="progress">
                        <div className="pointer active">
                        </div>
                        <div className="pointer ">
                        </div>
                        <div className="pointer ">
                        </div>
                        <div className="pointer ">
                        </div>
                        <div className="pointer ">
                        </div>
                        <div className="pro " style={{width: '6.2%'}}>
                        </div>
                    </div>
                </div>
            </div>
            <div className="xtips">
                <p>Achieve<span className="cl-primary"> 5 </span>medals: Get 20 BCD</p>
                <p>Achieve<span className="cl-primary"> 10 </span>medals: Get 800 BCD</p>
                <p>Achieve<span className="cl-primary"> 15 </span>medals: Get 2400 BCD</p>
                <p>Achieve<span className="cl-primary"> 20 </span>medals: Get 10000 BCD</p>
            </div>
            <div className="active-list achieve-list">
                <div className="title">Unlocked</div>
                <div className="achieve-content">
                </div>
            </div>
            <div className="achieve-list">
                <div className="title">Awaiting unlocking</div>
                <div className="achieve-content"><div className="achieve_item ">
                    <img className="achieve-icon" src="data:image/png;base64,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"/>
                    <div className="name">Talkative</div>
                    <div className="nums">
                        <svg className="s1ff97qc icon">
                          <FontAwesomeIcon icon={faUserGroup} />
                        </svg>
                        <span>9212</span>
                    </div>
                </div>
                <div className="achieve_item ">
                    <img className="achieve-icon" src="data:image/png;base64,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"/>
                    <div className="name">Fearless One</div>
                    <div className="nums"><svg className="s1ff97qc icon">
                      <FontAwesomeIcon icon={faUserGroup} />
                    </svg>
                    <span>6</span>
                </div>
            </div>
            <div className="achieve_item ">
                <img className="achieve-icon" src="data:image/png;base64,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"/>
                        <div className="name">The Loaded King</div>
                        <div className="nums">
                            <svg className="s1ff97qc icon">
                                <FontAwesomeIcon icon={faUserGroup} />
                                    
                               
                            </svg>
                            <span>1</span>
                        </div>
                    </div>
                    <div className="achieve_item ">
                        <img className="achieve-icon" src="data:image/png;base64,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"/>
                        <div className="name">Highest Contributor</div>
                        <div className="nums">
                            <svg className="s1ff97qc icon">
                               <FontAwesomeIcon icon={faUserGroup} />
                            </svg>
                            <span>9</span>
                        </div>
                    </div>
                    <div className="achieve_item ">
                        <img className="achieve-icon" src="/assets/achieve_5-7e08d516.png"/>
                        <div className="name">The Top Gun</div>
                        <div className="nums">
                            <svg className="s1ff97qc icon">
                              <FontAwesomeIcon icon={faUserGroup} />
                            </svg>
                            <span>23</span>
                        </div>
                    </div>
                    <div className="achieve_item ">
                        <img className="achieve-icon" src="/assets/achieve/achieve_6.png"/>
                        <div className="name">The Rain Master</div>
                        <div className="nums">
                            <svg className="s1ff97qc icon">
                             <FontAwesomeIcon icon={faUserGroup} />
                                    
                              
                            </svg>
                            <span>13364</span>
                        </div>
                    </div>
                    <div className="achieve_item ">
                        <img className="achieve-icon" src="/assets//achieve_7.png"/>
                        <div className="name">COCO Lover</div>
                        <div className="nums">
                            <svg className="s1ff97qc icon">
                                <FontAwesomeIcon icon={faUserGroup} />
                            </svg>
                            <span>7021</span>
                        </div>
                    </div>
                    <div className="achieve_item ">
                        <img className="achieve-icon" src="/assets/achieve_8-65991297.png"/>
                        <div className="name">Invincible Lucky Dog</div>
                        <div className="nums">
                            <svg className="s1ff97qc icon">
                              <FontAwesomeIcon icon={faUserGroup} />
                            </svg>
                            <span>8155</span>
                        </div>
                    </div>
                    <div className="achieve_item ">
                        <img className="achieve-icon" src="data:image/png;base64,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"/>
                        <div className="name">Contest Master</div>
                        <div className="nums">
                            <svg className="s1ff97qc icon">
                              <FontAwesomeIcon icon={faUserGroup} />
                                    
                              
                            </svg>
                            <span>47</span>
                        </div>
                    </div>
                    <div className="achieve_item ">
                        <img className="achieve-icon" src="/assets/achieve_10-19cd9ddc.png"/>
                        <div className="name">Roll King</div>
                        <div className="nums">
                            <svg className="s1ff97qc icon">
                             <FontAwesomeIcon icon={faUserGroup} />
                            </svg>
                            <span>1464</span>
                        </div>
                    </div>
                    <div className="achieve_item ">
                        <img className="achieve-icon" src="/assets/achieve_11.png"/>
                        <div className="name">The Rain Stormer</div>
                        <div className="nums">
                            <svg className="s1ff97qc icon">
                               <FontAwesomeIcon icon={faUserGroup} />
                            </svg>
                            <span>2382</span>
                        </div>
                    </div>
                    <div className="achieve_item ">
                        <img className="achieve-icon" src="/assets/achieve_12-7f2dc23f.png"/>
                        <div className="name">Chicken Dinner</div>
                        <div className="nums">
                            <svg className="s1ff97qc icon">
                                <FontAwesomeIcon icon={faUserGroup} />
                                    
                                
                            </svg>
                            <span>14010</span>
                        </div>
                    </div>
                    <div className="achieve_item ">
                        <img className="achieve-icon" src="/assets/achieve_13.png"/>
                        <div className="name">Loyal Player</div>
                        <div className="nums">
                            <svg className="s1ff97qc icon">
                            <FontAwesomeIcon icon={faUserGroup} />
                                    
                                
                            </svg>
                            <span>2302</span>
                        </div>
                    </div>
                    <div className="achieve_item ">
                        <img className="achieve-icon" src="data:image/png;base64,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"/>
                        <div className="name">Call Me ‘Richman’</div>
                        <div className="nums"><svg className="s1ff97qc icon">
                           <FontAwesomeIcon icon={faUserGroup} />
                        </svg>
                        <span>5850</span>
                    </div>
                </div>
                <div className="achieve_item ">
                    <img className="achieve-icon" src="/assets/achieve_15-53c0901a.png"/>
                    <div className="name">The Old-Timer</div>
                    <div className="nums">
                        <svg className="s1ff97qc icon">
                          <FontAwesomeIcon icon={faUserGroup} />
                        </svg>
                        <span>9358642</span>
                    </div>
                </div>
                <div className="achieve_item ">
                    <img className="achieve-icon" src="/assets/achieve_16.png"/>
                    <div className="name">The Boss</div>
                    <div className="nums">
                        <svg className="s1ff97qc icon">
                        <FontAwesomeIcon icon={faUserGroup} />
                        </svg>
                        <span>4653</span>
                    </div>
                </div>
                <div className="achieve_item ">
                    <img className="achieve-icon" src="/assets/achieve_17_ETH-4684f7c4.png"/>
                    <div className="name">ETHTOP 1</div>
                    <div className="nums">
                        <svg className="s1ff97qc icon">
                          <FontAwesomeIcon icon={faUserGroup} />
                                
                          
                        </svg>
                        <span>2</span>
                    </div>
                </div>
                <div className="achieve_item ">
                    <img className="achieve-icon" src="/assets/achieve_17_BTC-a5992a94.png"/>
                    <div className="name">BTCTOP 1</div>
                    <div className="nums">
                        <svg className="s1ff97qc icon">
                         <FontAwesomeIcon icon={faUserGroup} />
                        </svg>
                        <span>9</span>
                    </div>
                </div>
                <div className="achieve_item ">
                    <img className="achieve-icon" src="/assets/achieve_17_DOGE-894cb117.png"/>
                    <div className="name">DOGETOP 1</div>
                    <div className="nums">
                        <svg className="s1ff97qc icon">
                            <FontAwesomeIcon icon={faUserGroup} />
                                
                          
                        </svg>
                        <span>3</span>
                    </div>
                </div>
                <div className="achieve_item ">
                    <img className="achieve-icon" src="/assets/achieve_17_EOS-902b23db.png"/>
                    <div className="name">EOSTOP 1</div>
                    <div className="nums">
                        <svg className="s1ff97qc icon">
                            <FontAwesomeIcon icon={faUserGroup} />
                                
                            
                        </svg>
                        <span>11</span>
                    </div>
                </div>
            </div>
        </div>
        <div className="foot cl-primary">
            <svg className="s1ff97qc icon">
                <FontAwesomeIcon icon={faCircleInfo} />
            </svg>TIP JB is not included in medal calculation <br/>Stats Updated every 24 hours</div>
        </div>
    </div>
</div>

      </Modal>
    );
  };
function Profile() {
    const [showModal, setShowModal] = useState(false);
    const [isLoggedIn, setIsLoggedIn] = useState(!!localStorage.getItem('token'));
    useEffect(() => {
        // Check if a token exists in localStorage when the component mounts
        const token = localStorage.getItem('token');
        if (token) {
          setIsLoggedIn(true);
        }
      }, []);

    const handleShow = () => setShowModal(true);
	const handleClose = () => {
		console.log('handleClose called');
		setShowModal(false);
	  };
	  
  
    return (
      <div>
       <li onClick={handleShow} className='nav-item'>
            <span className='nav-icon'>
            <FontAwesomeIcon onClick={handleClose} icon={faUser} />
            </span>
            <a className='nav-link'>
            Profile
            </a>
          </li>
        
        <MyModal showModal={showModal} handleClose={handleClose} />

      </div>
    );
  };

export default Profile;