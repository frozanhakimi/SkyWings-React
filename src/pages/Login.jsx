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