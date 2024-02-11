import React, { useState, useEffect } from 'react';
import AuthService from '../../Auth/AuthService';
import { Modal } from 'react-bootstrap';

const MyModal = ({ showModal, handleClose }) => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const [success, setSuccess] = useState('');
  const [validationError, setValidationError] = useState('');
  const [isLoggedIn, setIsLoggedIn] = useState(!!localStorage.getItem('token'));
  const [isSessionId, setisSessionId] = useState(!!localStorage.getItem('sessionid'));
  const [isRemoteId, setIsRemoteId] = useState(!!localStorage.getItem('sessionid'));


  useEffect(() => {
    const errorTimer = setTimeout(() => {
      setError('');
      setValidationError('');
      setSuccess('');
    }, 5000);
    

    return () => clearTimeout(errorTimer);

    
  }, []);

  const handleUsernameChange = (e) => {
    setUsername(e.target.value);
  };

  const handlePasswordChange = (e) => {
    setPassword(e.target.value);
  };

  
  
  const handleLogin = async () => {
    try {
      const response = await fetch('https://six6.site/api/login', {
        method: 'POST',
        headers: {
          'ACCEPT': 'application/json',
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ username, password }),
      });
  
      const data = await response.json();
  
      if (response.ok) {
        console.log(data);
        localStorage.setItem('token', data.token);
        localStorage.setItem('sessionid', data.response.response.sessionid);
        localStorage.setItem('remote_id', data.response.response.id);
        
        setIsLoggedIn(true);
        handleClose();
      } else {
        setError(data.message || 'An unexpected error occurred');  // Assuming the server sends an error message in the response
      }
    } catch (error) {
      console.error('Error during login:', error);
      setError('An unexpected error occurred');
    }
  };
  
  

  return (
    <Modal show={showModal} onHide={handleClose}>
       <div className="sh1kgj9">
        <div class="s1bscfa1">
                      <div class="ithbrou">
                          <div class="login-left">
                          
                              <img alt="" src="/assets/bg-c80415f6.png" class="common-left-img dark-mode"/>
                              <img alt="" src="/assets/bg_w-9476816a.png" class="common-left-img light-mode"/>
                              <div class="left-text">
                                  <p class="t">Welcome to<span>bc.game</span></p>
                                  <p class="st">Start your game journey now!</p>
                              </div>
                          </div>
                          <div class="login-right">
                          <div id="regist" className="simple-page s15zywit" style={{ opacity: 1, transform: 'none' }}>
                                  <p class="sign-title">Sign In</p>
                                  <form autocomplete="off">
                                  <div class="ui-input first-input">
                                          <div class="input-control">
                                          <input
                                            type="text"
                                            placeholder="Username"
                                            value={username}
                                            onChange={(e) => setUsername(e.target.value)}
                                        />
                                              
                                          </div>
                                      </div>
                                
                                    
                                      <div class="ui-input pjkqlcx">
                                          <div class="input-control">
                                          <input
                                            type="password"
                                            placeholder="Password"
                                            value={password}
                                            onChange={(e) => setPassword(e.target.value)}
                                        />
                                              <svg class="s1ff97qc icon">
                                                  
                                                      
                                                  
                                              </svg>
                                          </div>
                                      </div>
                                     

                                     <div class="buttons">
                                        <button  type="button"  onClick={handleLogin}  class="ui-button button-big s-conic">
                                            <div class="button-inner">Sign in</div>
                                            </button>
                                            </div>

                                  </form>
                                
                              </div>
                              
                              {/* other login */}
                          </div>
                      </div>
                  </div>

                  { validationError &&   
    <div className="nfnfs0b">
        <div className="notify-item" style={{height: 'auto'}}>
            <div className="notify-ins">
                <div className="notify-wrap">
                    <div className="notify-cd">
                        <svg viewBox="25 25 50 50">
                        <circle cx="50" cy="50" r="20" fill="none" stroke-width="8" pathLength="1" stroke-dashoffset="0px" stroke-dasharray="0.1px 1px">
                        </circle>
                        </svg>
                    </div>
                    <div className="notify-content">
                
                    
                    <div className="notify-message">{validationError}</div>
            
                    </div>
                </div>
            </div>
        </div>
    </div>
}

{ error &&   
    <div className="nfnfs0b">
        <div className="notify-item" style={{height: 'auto'}}>
            <div className="notify-ins">
                <div className="notify-wrap">
                    <div className="notify-cd">
                        <svg viewBox="25 25 50 50">
                        <circle cx="50" cy="50" r="20" fill="none" stroke-width="8" pathLength="1" stroke-dashoffset="0px" stroke-dasharray="0.1px 1px">
                        </circle>
                        </svg>
                    </div>
                    <div className="notify-content">
                
                    
                    <div className="notify-message">{error}</div>
            
                    </div>
                </div>
            </div>
        </div>
    </div>
}
{ success &&   
    <div className="nfnfs0b">
        <div className="notify-item" style={{height: 'auto'}}>
            <div className="notify-ins">
                <div className="notify-wrap">
                    <div className="notify-cd">
                        <svg viewBox="25 25 50 50">
                        <circle cx="50" cy="50" r="20" fill="none" stroke-width="8" pathLength="1" stroke-dashoffset="0px" stroke-dasharray="0.1px 1px">
                        </circle>
                        </svg>
                    </div>
                    <div className="notify-content">
                
                    
                    <div className="notify-message">{success}</div>
            
                    </div>
                </div>
            </div>
        </div>
    </div>
}

                
              
          </div>
    </Modal>
  );
};

function SignIn() {
  const [showModal, setShowModal] = useState(false);
  const [isLoggedIn, setIsLoggedIn] = useState(!!localStorage.getItem('token'));

  const handleShow = () => {
    setShowModal(true);
   
  };

  const handleClose = () => {
    setShowModal(false);
    
  };
  const handleLogOut = () =>{
    setIsLoggedIn(false);
  }

  useEffect(() => {
    // Check if a token exists in localStorage when the component mounts
    const token = localStorage.getItem('token');
    if (token) {
      setIsLoggedIn(true);
    }
  }, []);

  return (
    <div>
      {!isLoggedIn && (
        <span onClick={handleShow} className="nav-action">
          Sign In
        </span>
      )}

      {isLoggedIn &&(
        <span onClick={handleLogOut} className="nav-action">
        Log Out
      </span>
      )}
      <MyModal showModal={showModal} handleClose={handleClose} />
    </div>
  );
}

export default SignIn;
