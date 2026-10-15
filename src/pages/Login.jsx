import { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import '../styles/login.css';

function Login() {
  const navigate = useNavigate();

  const [formData, setFormData] = useState({
    email: '',
    password: '',
    rememberMe: false,
  });

  const [errors, setErrors] = useState({});
  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState(false);

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData({ ...formData, [name]: type === 'checkbox' ? checked : value });
    if (errors[name]) setErrors({ ...errors, [name]: '' });
  };

  // =========================================
  // VALIDATION
  // =========================================
  const validate = () => {
    const newErrors = {};
    const { email, password } = formData;

    // Email
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!email.trim()) {
      newErrors.email = 'Email is required';
    } else if (!emailRegex.test(email.trim())) {
      newErrors.email = 'Please enter a valid email';
    }

    // Password
    if (!password) {
      newErrors.password = 'Password is required';
    } else if (password.length < 6) {
      newErrors.password = 'Min 6 characters';
    } else if (!/[A-Z]/.test(password)) {
      newErrors.password = 'Add an uppercase letter';
    } else if (!/[0-9]/.test(password)) {
      newErrors.password = 'Add a number';
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  // =========================================
  // SUBMIT
  // =========================================
  const handleSubmit = (e) => {
    e.preventDefault();
    if (!validate()) return;

    setLoading(true);

    setTimeout(() => {
      setLoading(false);
      setSuccess(true);

      // Redirect to dashboard
      setTimeout(() => {
        navigate('/dashboard');
      }, 1800);
    }, 1500);
  };

  return (
    <div className="signup-page">

      {/* ============ BACKGROUND ============ */}
      <div className="signup-bg">
        <div className="bg-overlay"></div>
      </div>

      {/* ============ CONTENT ============ */}
      <div className="signup-content">

        {/* ============ LEFT: BRANDING ============ */}
        <div className="signup-branding">
          <div className="branding-logo">
            <div className="branding-icon">
              <svg width="26" height="26" viewBox="0 0 24 24" fill="white">
                <path d="M17.8 19.2L16 11l3.5-3.5C21 6 21.5 4 21 3c-1-.5-3 0-4.5 1.5L13 8 4.8 6.2c-.5-.1-.9.1-1.1.5l-.3.5c-.2.5-.1 1 .3 1.3L9 12l-2 3H4l-1 1 3 2 2 3 1-1v-3l3-2 3.5 5.3c.3.4.8.5 1.3.3l.5-.2c.4-.3.6-.7.5-1.2z"></path>
              </svg>
            </div>
            <span>SKYWINGS</span>
          </div>

          <h1>
            Welcome <br />
            <span className="gradient-text">Back Aboard.</span>
          </h1>
          <p>Sign in to access your flights, bookings, and SkyMiles rewards. Your journey continues here.</p>

          <div className="branding-stats">
            <div className="stat-item">
              <div className="stat-number">50+</div>
              <div className="stat-label">Destinations</div>
            </div>
            <div className="stat-item">
              <div className="stat-number">2M+</div>
              <div className="stat-label">Happy Flyers</div>
            </div>
            <div className="stat-item">
              <div className="stat-number">4.9★</div>
              <div className="stat-label">Rating</div>
            </div>
          </div>
        </div>

        {/* ============ RIGHT: LOGIN FORM ============ */}
        <div className="signup-form-side">
          <div className="signup-form-card">

            {success ? (
              <div className="signup-success">
                <div className="success-circle">
                  <svg width="50" height="50" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3">
                    <path d="M22 11.08V12a10 10 0 1 1-5.93-9.14"></path>
                    <polyline points="22 4 12 14.01 9 11.01"></polyline>
                  </svg>
                </div>
                <h2>Welcome Back! ✈️</h2>
                <p>Signed in successfully.<br />Taking you to your dashboard...</p>
              </div>
            ) : (
              <>
                <div className="form-header">
                  <h2>Sign In</h2>
                  <p>Don't have an account? <Link to="/signup">Sign Up</Link></p>
                </div>

                <form className="signup-form" onSubmit={handleSubmit} noValidate>

                  {/* Email */}
                  <div className="form-field">
                    <label>Email Address</label>
                    <div className="input-wrap">
                      <svg className="field-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                        <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"></path>
                        <polyline points="22,6 12,13 2,6"></polyline>
                      </svg>
                      <input
                        type="email"
                        name="email"
                        placeholder="you@skywings.com"
                        value={formData.email}
                        onChange={handleChange}
                        disabled={loading}
                        className={errors.email ? 'error' : ''}
                      />
                    </div>
                    {errors.email && <span className="field-error">{errors.email}</span>}
                  </div>

                  {/* Password */}
                  <div className="form-field">
                    <label>Password</label>
                    <div className="input-wrap">
                      <svg className="field-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                        <rect x="3" y="11" width="18" height="11" rx="2" ry="2"></rect>
                        <path d="M7 11V7a5 5 0 0 1 10 0v4"></path>
                      </svg>
                      <input
                        type="password"
                        name="password"
                        placeholder="••••••••"
                        value={formData.password}
                        onChange={handleChange}
                        disabled={loading}
                        className={errors.password ? 'error' : ''}
                      />
                    </div>
                    {errors.password && <span className="field-error">{errors.password}</span>}
                  </div>

                  {/* Options */}
                  <div className="login-options">
                    <label className="terms-checkbox">
                      <input
                        type="checkbox"
                        name="rememberMe"
                        checked={formData.rememberMe}
                        onChange={handleChange}
                        disabled={loading}
                      />
                      <span className="checkmark"></span>
                      <span className="terms-text">Remember me</span>
                    </label>

                    <a href="#" className="forgot-link">Forgot password?</a>
                  </div>

                   {/* Submit */}
                  <button type="submit" className="signup-btn" disabled={loading}>
                    {loading ? (
                      <>
                        <span className="spinner"></span>
                        Signing In...
                      </>
                    ) : (
                      <>
                        SIGN IN
                        <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
                          <line x1="5" y1="12" x2="19" y2="12"></line>
                          <polyline points="12 5 19 12 12 19"></polyline>
                        </svg>
                      </>
                    )}
                  </button>

                  {/* Social Divider */}
                  <div className="social-divider">
                    <span>or continue with</span>
                  </div>

                  <div className="social-grid">
                    <button type="button" className="social-btn" disabled={loading}>
                      <svg width="18" height="18" viewBox="0 0 24 24">
                        <path fill="#4285F4" d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z"/>
                        <path fill="#34A853" d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z"/>
                        <path fill="#FBBC05" d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z"/>
                        <path fill="#EA4335" d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z"/>
                      </svg>
                      Google
                    </button>
                    <button type="button" className="social-btn" disabled={loading}>
                      <svg width="18" height="18" viewBox="0 0 24 24" fill="#1877f2">
                        <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/>
                      </svg>
                      Facebook
                    </button>
                  </div>
                </form>
              </>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}

export default Login;