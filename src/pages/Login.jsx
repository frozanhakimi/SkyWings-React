import { useState } from 'react';
import '../styles/login.css';

function Login() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [rememberMe, setRememberMe] = useState(false);

  const handleSubmit = (event) => {
    event.preventDefault();

    const emailValue = email.trim();
    const passwordValue = password.trim();

    // Check Email
    if (emailValue === '') {
      alert('Please enter your email or phone number.');
      return;
    }

    // Check Password
    if (passwordValue === '') {
      alert('Please enter your password.');
      return;
    }

    // Login successful
    alert('Login successful');
  };

  const handleLogInBtn = () => {
    alert('Log In button clicked.');
  };

  const handleForgotPassword = (event) => {
    event.preventDefault();
    alert('Password recovery page will open.');
  };

  const handleRememberMe = (event) => {
    const isChecked = event.target.checked;
    setRememberMe(isChecked);

    if (isChecked) {
      alert('Remember me is enabled.');
    } else {
      alert('Remember me is disabled.');
    }
  };

  const handleFacebook = () => {
    alert('Facebook login selected.');
  };

  const handleGoogle = () => {
    alert('Google login selected.');
  };

  return (
    <>
      {/* Hero Section */}
      <section className="hero">
        <div className="hero-content">
          <h1>Welcome to Sky Wings!</h1>
          <p>We provide safe, comfortable, and memorable journeys with Sky Wings.</p>
        </div>

        {/* Login Card */}
        <div className="login-card">
          <h2>Sign in to Sky Wings</h2>

          {/* Social Login */}
          <div className="social-buttons">
            <button
              type="button"
              className="social-btn facebook"
              onClick={handleFacebook}
            >
              <i className="fa-brands fa-facebook-f"></i>
            </button>
            <button
              type="button"
              className="social-btn google"
              onClick={handleGoogle}
            >
              <i className="fa-brands fa-google"></i>
            </button>
          </div>

          {/* Login Form */}
          <form onSubmit={handleSubmit}>
            <input
              type="text"
              placeholder="Email or Phone number"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
            <input
              type="password"
              placeholder="Please enter your password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
            <button type="submit" className="sign-in">
              SIGN IN
            </button>
          </form>

          {/* Options */}
          <div className="options">
            <a href="#" onClick={handleForgotPassword}>
              Forgot password?
            </a>
            <label>
              <input
                type="checkbox"
                checked={rememberMe}
                onChange={handleRememberMe}
              />
              Remember me
            </label>
          </div>

          {/* OR */}
          <div className="or">
            <span>or</span>
          </div>

          {/* Log In */}
          <button
            type="button"
            className="sign-up"
            onClick={handleLogInBtn}
          >
            LOG IN
          </button>
        </div>
      </section>

      {/* Footer */}
      <footer>
        <a href="#">Google Play Store APP</a>
        <a href="#">App Store APP</a>
        <a href="#">About Sky Wings</a>
        <a href="#">About Us</a>
        <a href="#">Our Blog</a>
      </footer>
    </>
  );
}

export default Login;