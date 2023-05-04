import React, { useState } from 'react';
import './LoginForm.scss';

const LoginForm = () => {
  const [isSignup, setIsSignup] = useState(false);

  const handleSignupClick = () => {
    setIsSignup(true);
  };

  const handleSigninClick = () => {
    setIsSignup(false);
  };

  const pinkboxStyle = {
    transform: isSignup ? 'translateX(80%)' : 'translateX(0%)'
  };

  const signupClass = isSignup ? '' : 'nodisplay';
  const signinClass = isSignup ? 'nodisplay' : '';

  return (
    <div className="container">
      <div className="welcome">
        <div className="pinkbox" style={pinkboxStyle}>
          <div className={`signup ${signupClass}`}>
            <h1>register</h1>
            <form autoComplete="off">
              <input type="text" placeholder="username" />
              <input type="email" placeholder="email" />
              <input type="password" placeholder="password" />
              <input type="password" placeholder="confirm password" />
              <button className="button submit">create account</button>
            </form>
          </div>
          <div className={`signin ${signinClass}`}>
            <h1>sign in</h1>
            <form className="more-padding" autoComplete="off">
              <input type="text" placeholder="username" />
              <input type="password" placeholder="password" />
              <div className="checkbox">
                <input type="checkbox" id="remember" />
                <label htmlFor="remember">remember me</label>
              </div>
              <button className="button submit">login</button>
            </form>
          </div>
        </div>
        <div className="leftbox">
          <h2 className="title">
            <span>BLOOMING</span>'<br />
            BOUQUETS
          </h2>
          <p className="desc">A Bouquet is a perfect <span>Gift</span></p>
          <img
            className="flower smaller"
            src="https://image.ibb.co/d5X6pn/1357d638624297b.jpg"
            alt="1357d638624297b"
            border="0"
          />
          <p className="account">have an account?</p>
          <button className="button" onClick={handleSigninClick}>
            login
          </button>
        </div>
        <div className="rightbox">
          <h2 className="title">
            <span>BLOOMING</span>'<br />
            BOUQUETS
          </h2>
          <p className="desc">A Bouquet is a perfect <span>Gift</span></p>
          <img
            className="flower"
            src="https://preview.ibb.co/jvu2Un/0057c1c1bab51a0.jpg"
            alt="0057c1c1bab51a0"
          />
          <p className="account">don't have an account?</p>
          <button className="button" onClick={handleSignupClick}>
            sign up
          </button>
        </div>
      </div>
    </div>
  );
};

export default LoginForm;