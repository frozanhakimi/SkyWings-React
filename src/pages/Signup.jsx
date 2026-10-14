import { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import '../styles/signup.css';

function Signup() {
  const navigate = useNavigate();

  const [formData, setFormData] = useState({
    fullName: '',
    email: '',
    phone: '',
    password: '',
    confirmPassword: '',
    agreeTerms: false,
  });

  const [errors, setErrors] = useState({});
  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState(false);

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData({ ...formData, [name]: type === 'checkbox' ? checked : value });
    if (errors[name]) setErrors({ ...errors, [name]: '' });
  };

  const validate = () => {
    const newErrors = {};
    const { fullName, email, phone, password, confirmPassword, agreeTerms } = formData;

    if (!fullName.trim()) newErrors.fullName = 'Full name is required';
    else if (fullName.trim().length < 3) newErrors.fullName = 'Name too short';

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!email.trim()) newErrors.email = 'Email is required';
    else if (!emailRegex.test(email.trim())) newErrors.email = 'Invalid email';

    if (phone && !/^\d{10,15}$/.test(phone.replace(/\s/g, '')))
      newErrors.phone = 'Phone must be 10-15 digits';

    if (!password) newErrors.password = 'Password is required';
    else if (password.length < 6) newErrors.password = 'Min 6 characters';
    else if (!/[A-Z]/.test(password)) newErrors.password = 'Add uppercase';
    else if (!/[0-9]/.test(password)) newErrors.password = 'Add a number';

    if (!confirmPassword) newErrors.confirmPassword = 'Confirm required';
    else if (password !== confirmPassword) newErrors.confirmPassword = 'Passwords differ';

    if (!agreeTerms) newErrors.agreeTerms = 'You must accept terms';

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!validate()) return;
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
      setSuccess(true);
      setTimeout(() => navigate('/'), 2500);
    }, 1500);
  };

  const getPasswordStrength = () => {
    const p = formData.password;
    if (!p) return { level: 0, label: '', color: '' };
    if (p.length >= 6 && /[A-Z]/.test(p) && /[0-9]/.test(p))
      return { level: 3, label: 'Strong', color: '#10b981' };
    if (p.length >= 4) return { level: 2, label: 'Medium', color: '#f59e0b' };
    return { level: 1, label: 'Weak', color: '#ef4444' };
  };

  const strength = getPasswordStrength();

  return (
    <div className="signup-page">

      {/* ============ BACKGROUND ============ */}
      <div className="signup-bg">
        <div className="bg-overlay"></div>
      </div>

      {/* ============ CONTENT ============ */}
      <div className="signup-content">

        {/* Left side — Branding */}
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
            The Sky is <br />
            <span className="gradient-text">Not the Limit.</span>
          </h1>
          <p>Join thousands of travelers flying with SkyWings. Earn miles, unlock rewards, and enjoy priority service.</p>

          {/* Stats */}
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

        {/* Right side — Form */}
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
                <h2>Welcome Aboard! ✈️</h2>
                <p>Your SkyWings account is ready.<br />Redirecting to dashboard...</p>
              </div>
            ) : (
              <>
                <div className="form-header">
                  <h2>Create Account</h2>
                  <p>Already a member? <Link to="/login">Sign in</Link></p>
                </div>

                <form className="signup-form" onSubmit={handleSubmit} noValidate>

                  {/* Full Name */}
                  <div className="form-field">
                    <label>Full Name</label>
                    <div className="input-wrap">
                      <svg className="field-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                        <path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2"></path>
                        <circle cx="12" cy="7" r="4"></circle>
                      </svg>
                      <input
                        type="text"
                        name="fullName"
                        placeholder="Frozan Hakimi"
                        value={formData.fullName}
                        onChange={handleChange}
                        disabled={loading}
                        className={errors.fullName ? 'error' : ''}
                      />
                    </div>
                    {errors.fullName && <span className="field-error">{errors.fullName}</span>}
                  </div>

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

                  {/* Phone */}
                  <div className="form-field">
                    <label>Phone <span className="optional">(optional)</span></label>
                    <div className="input-wrap">
                      <svg className="field-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                        <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"></path>
                      </svg>
                      <input
                        type="tel"
                        name="phone"
                        placeholder="+93 700 000 000"
                        value={formData.phone}
                        onChange={handleChange}
                        disabled={loading}
                        className={errors.phone ? 'error' : ''}
                      />
                    </div>
                    {errors.phone && <span className="field-error">{errors.phone}</span>}
                  </div>

                  {/* Password Row */}
                  <div className="form-row">
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

                    <div className="form-field">
                      <label>Confirm</label>
                      <div className="input-wrap">
                        <svg className="field-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                          <rect x="3" y="11" width="18" height="11" rx="2" ry="2"></rect>
                          <path d="M7 11V7a5 5 0 0 1 10 0v4"></path>
                        </svg>
                        <input
                          type="password"
                          name="confirmPassword"
                          placeholder="••••••••"
                          value={formData.confirmPassword}
                          onChange={handleChange}
                          disabled={loading}
                          className={errors.confirmPassword ? 'error' : ''}
                        />
                      </div>
                      {errors.confirmPassword && <span className="field-error">{errors.confirmPassword}</span>}
                    </div>
                  </div>

                  {/* Password Strength */}
                  {formData.password && (
                    <div className="password-strength-wrap">
                      <div className="strength-bars">
                        <div className={`bar ${strength.level >= 1 ? 'active' : ''}`} style={{ background: strength.level >= 1 ? strength.color : '#e5e7eb' }}></div>
                        <div className={`bar ${strength.level >= 2 ? 'active' : ''}`} style={{ background: strength.level >= 2 ? strength.color : '#e5e7eb' }}></div>
                        <div className={`bar ${strength.level >= 3 ? 'active' : ''}`} style={{ background: strength.level >= 3 ? strength.color : '#e5e7eb' }}></div>
                      </div>
                      <span className="strength-label" style={{ color: strength.color }}>{strength.label}</span>
                    </div>
                  )}

                  {/* Terms */}
                  <div className="form-field">
                    <label className="terms-checkbox">
                      <input
                        type="checkbox"
                        name="agreeTerms"
                        checked={formData.agreeTerms}
                        onChange={handleChange}
                        disabled={loading}
                      />
                      <span className="checkmark"></span>
                      <span className="terms-text">
                        I agree to <a href="#">Terms</a> & <a href="#">Privacy Policy</a>
                      </span>
                    </label>
                    {errors.agreeTerms && <span className="field-error">{errors.agreeTerms}</span>}
                  </div>

                  {/* Submit */}
                  <button type="submit" className="signup-btn" disabled={loading}>
                    {loading ? (
                      <>
                        <span className="spinner"></span>
                        Creating Account...
                      </>
                    ) : (
                      <>
                        CREATE ACCOUNT
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

export default Signup;