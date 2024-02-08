import React, { useState, useEffect } from 'react';
import AuthService from '../../Auth/AuthService';
import { Modal } from 'react-bootstrap';

const MyModal = ({ showModal, handleClose }) => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const [success, setSuccess] = useState('');
  const [validationError, setValidationError] = useState('');

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
      if (!username.trim() || !password.trim()) {
        setValidationError('Username and password are required.');
        return;
      }

      const response = await fetch('http://127.0.0.1:8000/api/login', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          username: username,
          password: password,
        }),
      });

      const data = await response.json();

      if (response.ok) {
        setSuccess(data.success);
        handleClose(); // Close the modal
      } else {
        setError(data.error || 'Failed to log in');
      }
    } catch (error) {
      setError('Error during login');
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
  const [showSignInLink, setShowSignInLink] = useState(true);

  const handleShow = () => {
    setShowModal(true);
    setShowSignInLink(false); // Hide the "Sign In" link
  };

  const handleClose = () => {
    setShowModal(false);
    setShowSignInLink(!showSignInLink); // Show the "Sign In" link if the user is not logged in
  };

  return (
    <div>
      {showSignInLink && (
        <span onClick={handleShow} className="nav-action">
          Sign In
        </span>
      )}
      <MyModal showModal={showModal} handleClose={handleClose} />
    </div>
  );
}

export default SignIn;
