import { useState } from 'react';
import { Radar } from 'react-chartjs-2';
import {
  Chart as ChartJS,
  RadialLinearScale,
  PointElement,
  LineElement,
  Filler,
  Tooltip,
  Legend,
} from 'chart.js';
import Sidebar from '../components/Sidebar';
import Topbar from '../components/Topbar';

ChartJS.register(RadialLinearScale, PointElement, LineElement, Filler, Tooltip, Legend);

function Safety() {
  const [collapsed, setCollapsed] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const [twoFA, setTwoFA] = useState(true);
  const [dataSharing, setDataSharing] = useState(true);
  const [personalizedAds, setPersonalizedAds] = useState(false);
  const [marketingEmails, setMarketingEmails] = useState(true);
  const [locationAccess, setLocationAccess] = useState(true);
  const [verifyCode, setVerifyCode] = useState('');

  // Security Score
  const securityScore = 92;
  const scoreColor = '#10b981';

  // Radar Chart Data
  const radarData = {
    labels: ['Password', 'Email', '2FA', 'Devices', 'Sessions'],
    datasets: [
      {
        label: 'Security Level',
        data: [95, 90, 100, 85, 90],
        backgroundColor: 'rgba(30, 58, 138, 0.2)',
        borderColor: '#1e3a8a',
        borderWidth: 2,
        pointBackgroundColor: '#1e3a8a',
        pointBorderColor: '#fff',
        pointRadius: 5,
        pointHoverRadius: 7,
      },
    ],
  };

  const radarOptions = {
    responsive: true,
    maintainAspectRatio: false,
    scales: {
      r: {
        beginAtZero: true,
        max: 100,
        ticks: { display: false, stepSize: 25 },
        grid: { color: '#e5e7eb' },
        angleLines: { color: '#e5e7eb' },
        pointLabels: {
          color: '#1e3a8a',
          font: { size: 12, weight: 'bold' },
        },
      },
    },
    plugins: {
      legend: { display: false },
      tooltip: {
        backgroundColor: '#1e3a8a',
        padding: 10,
        cornerRadius: 8,
      },
    },
    animation: {
      duration: 1500,
    },
  };

  const sessions = [
    {
      id: 1,
      device: 'Chrome on Windows',
      icon: '💻',
      location: 'Kabul, Afghanistan',
      ip: '192.168.1.1',
      time: 'Just now',
      status: 'Current',
      statusColor: 'success',
    },
    {
      id: 2,
      device: 'Safari on iPhone 15',
      icon: '📱',
      location: 'Kabul, Afghanistan',
      ip: '192.168.1.2',
      time: '2 days ago',
      status: 'Active',
      statusColor: 'success',
    },
    {
      id: 3,
      device: 'Unknown Device',
      icon: '⚠️',
      location: 'Dubai, UAE',
      ip: '10.0.0.5',
      time: '1 week ago',
      status: 'Warning',
      statusColor: 'warning',
    },
  ];

  const securityKeys = [
    { id: 1, icon: '💻', device: 'Chrome on Windows', location: 'Kabul, AF', lastUsed: '2 days ago', status: 'Active' },
    { id: 2, icon: '📱', device: 'Safari on iPhone', location: 'Kabul, AF', lastUsed: '5 days ago', status: 'Active' },
    { id: 3, icon: '🔐', device: 'Authenticator App', location: '—', lastUsed: '1 week ago', status: 'Verified' },
    { id: 4, icon: '📧', device: 'Email', location: 'hakimifrozan0@...', lastUsed: '1 month ago', status: 'Verified' },
    { id: 5, icon: '📞', device: 'SMS', location: '+93 700 XXX XXXX', lastUsed: '3 weeks ago', status: 'Verify' },
  ];

  const handleRemoveKey = (id) => {
    if (window.confirm('Remove this security key?')) {
      alert('Security key removed');
    }
  };

  const handleLogoutSession = (id) => {
    if (window.confirm('Log out this session?')) {
      alert('Session logged out');
    }
  };

  const handleVerify = () => {
    if (verifyCode.length === 6) {
      alert('2FA verification successful!');
      setVerifyCode('');
    } else {
      alert('Please enter a 6-digit code');
    }
  };

  const handleLockAccount = () => {
    if (window.confirm('Lock your account? You will need to verify to unlock.')) {
      alert('Account locked for security');
    }
  };

  const handleLogoutAll = () => {
    if (window.confirm('Log out from ALL devices?')) {
      alert('All other sessions logged out');
    }
  };

  const getStatusClass = (status) => {
    if (status === 'Active') return 'status on-time';
    if (status === 'Verified') return 'status boarding';
    if (status === 'Verify') return 'status delayed';
    if (status === 'Current') return 'status on-time';
    if (status === 'Warning') return 'status delayed';
    return 'status';
  };

  return (
    <>
      <Sidebar collapsed={collapsed} mobileOpen={mobileOpen} />

      <button
        className="sidebar-toggle"
        onClick={() => setCollapsed(!collapsed)}
        aria-label="Toggle sidebar"
      >
        ‹
      </button>

      <div
        className={`sidebar-overlay ${mobileOpen ? 'show' : ''}`}
        onClick={() => setMobileOpen(false)}
      ></div>

      <main className="main-content">
        <Topbar pageTitle="Safety & Privacy" onMenuClick={() => setMobileOpen(true)} />

        {/* Hero + Score Gauge */}
        <div className="safety-hero-new">
          <div className="safety-hero-left">
            <h1>Safety & Privacy</h1>
            <p>Manage your account security and privacy settings</p>

            <div className="safety-badges-row">
              <span className="safety-badge-item">
                <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
                  <rect x="3" y="11" width="18" height="11" rx="2" ry="2"></rect>
                  <path d="M7 11V7a5 5 0 0 1 10 0v4"></path>
                </svg>
                2FA Enabled
              </span>
              <span className="safety-badge-item">
                <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
                  <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"></path>
                </svg>
                Account Secured
              </span>
              <span className="safety-badge-item">
                <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
                  <path d="M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8z"></path>
                  <circle cx="12" cy="12" r="3"></circle>
                </svg>
                Protected
              </span>
            </div>
          </div>

          <div className="score-gauge-wrapper">
            <svg width="180" height="180" viewBox="0 0 180 180">
              <circle
                cx="90"
                cy="90"
                r="75"
                fill="none"
                stroke="#e5e7eb"
                strokeWidth="12"
              />
              <circle
                cx="90"
                cy="90"
                r="75"
                fill="none"
                stroke={scoreColor}
                strokeWidth="12"
                strokeDasharray={`${(securityScore / 100) * 471} 471`}
                strokeLinecap="round"
                transform="rotate(-90 90 90)"
                style={{ transition: 'stroke-dasharray 1.5s ease' }}
              />
              <text
                x="90"
                y="85"
                textAnchor="middle"
                fill="#1e3a8a"
                fontSize="36"
                fontWeight="800"
              >
                {securityScore}
              </text>
              <text
                x="90"
                y="110"
                textAnchor="middle"
                fill="#6b7280"
                fontSize="12"
                fontWeight="600"
              >
                / 100
              </text>
              <text
                x="90"
                y="130"
                textAnchor="middle"
                fill={scoreColor}
                fontSize="13"
                fontWeight="700"
              >
                Excellent
              </text>
            </svg>
          </div>
        </div>

        {/* Metrics Grid + Radar Chart */}
        <div className="safety-metrics-row">
          <div className="radar-chart-card">
            <h3>Security Analysis</h3>
            <div className="radar-chart-wrapper">
              <Radar data={radarData} options={radarOptions} />
            </div>
          </div>

          <div className="metrics-cards-grid">
            <div className="metric-card">
              <div className="metric-icon blue">🔐</div>
              <h4>Password</h4>
              <p>Strong</p>
            </div>

            <div className="metric-card">
              <div className="metric-icon green">📧</div>
              <h4>Email</h4>
              <p>Verified</p>
            </div>

            <div className="metric-card">
              <div className="metric-icon purple">📱</div>
              <h4>2FA</h4>
              <p>Enabled</p>
            </div>

            <div className="metric-card">
              <div className="metric-icon orange">💻</div>
              <h4>Devices</h4>
              <p>3 Active</p>
            </div>

            <div className="metric-card">
              <div className="metric-icon red">🌐</div>
              <h4>Sessions</h4>
              <p>2 Online</p>
            </div>

            <div className="metric-card">
              <div className="metric-icon teal">⚡</div>
              <h4>Last Scan</h4>
              <p>2h ago</p>
            </div>
          </div>
        </div>

        {/* Active Sessions Timeline */}
        <div className="pharmacy-table-container">
          <h2 className="pharmacy-section-title">Active Sessions</h2>

          <div className="sessions-timeline">
            {sessions.map((session) => (
              <div className="session-timeline-item" key={session.id}>
                <div className="session-timeline-line">
                  <div className={`session-dot ${session.statusColor}`}></div>
                </div>

                <div className="session-card">
                  <div className="session-icon">{session.icon}</div>

                  <div className="session-info">
                    <h4>{session.device}</h4>
                    <p>{session.location} • {session.ip}</p>
                    <span className="session-time">{session.time}</span>
                  </div>

                  <span className={getStatusClass(session.status)}>{session.status}</span>

                  {session.status !== 'Current' && (
                    <button
                      className="btn-remove-small"
                      onClick={() => handleLogoutSession(session.id)}
                    >
                      Log Out
                    </button>
                  )}
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* 2FA Setup Wizard + Quick Actions */}
        <div className="safety-two-col">
          {/* 2FA Wizard */}
          <div className="twofa-wizard">
            <h3>Set Up Two-Factor Auth</h3>
            <p>Scan this QR code with your authenticator app</p>

            <div className="qr-code-wrapper">
              <svg width="140" height="140" viewBox="0 0 140 140">
                {/* Fake QR pattern */}
                <rect width="140" height="140" fill="white" />
                {[...Array(12)].map((_, i) =>
                  [...Array(12)].map((_, j) => (
                    (i + j) % 3 === 0 || (i * j) % 5 === 0 ? (
                      <rect
                        key={`${i}-${j}`}
                        x={i * 11 + 4}
                        y={j * 11 + 4}
                        width="10"
                        height="10"
                        fill="#1e3a8a"
                      />
                    ) : null
                  ))
                )}
                <rect x="4" y="4" width="30" height="30" fill="white" stroke="#1e3a8a" strokeWidth="3" />
                <rect x="10" y="10" width="18" height="18" fill="#1e3a8a" />
                <rect x="106" y="4" width="30" height="30" fill="white" stroke="#1e3a8a" strokeWidth="3" />
                <rect x="112" y="10" width="18" height="18" fill="#1e3a8a" />
                <rect x="4" y="106" width="30" height="30" fill="white" stroke="#1e3a8a" strokeWidth="3" />
                <rect x="10" y="112" width="18" height="18" fill="#1e3a8a" />
              </svg>
            </div>

            <div className="verify-code-row">
              <input
                type="text"
                placeholder="Enter 6-digit code"
                value={verifyCode}
                onChange={(e) => setVerifyCode(e.target.value.replace(/\D/g, '').slice(0, 6))}
                maxLength={6}
              />
              <button className="btn-blue" onClick={handleVerify}>
                Verify
              </button>
            </div>
          </div>

          {/* Quick Actions */}
          <div className="quick-actions-card">
            <h3>Quick Actions</h3>

            <button className="quick-action-btn danger" onClick={handleLockAccount}>
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <rect x="3" y="11" width="18" height="11" rx="2" ry="2"></rect>
                <path d="M7 11V7a5 5 0 0 1 10 0v4"></path>
              </svg>
              <div>
                <strong>Lock Account</strong>
                <span>Freeze access temporarily</span>
              </div>
            </button>

            <button className="quick-action-btn warning" onClick={handleLogoutAll}>
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <path d="M9 21H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h4"></path>
                <polyline points="16 17 21 12 16 7"></polyline>
                <line x1="21" y1="12" x2="9" y2="12"></line>
              </svg>
              <div>
                <strong>Log Out All Devices</strong>
                <span>Sign out from everywhere</span>
              </div>
            </button>

            <button className="quick-action-btn primary">
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <path d="M21 2l-2 2m-7.61 7.61a5.5 5.5 0 1 1-7.778 7.778 5.5 5.5 0 0 1 7.777-7.777zm0 0L15.5 7.5m0 0l3 3L22 7l-3-3m-3.5 3.5L19 4"></path>
              </svg>
              <div>
                <strong>Change Password</strong>
                <span>Update your login password</span>
              </div>
            </button>

            <button className="quick-action-btn success">
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"></path>
                <polyline points="7 10 12 15 17 10"></polyline>
                <line x1="12" y1="15" x2="12" y2="3"></line>
              </svg>
              <div>
                <strong>Download My Data</strong>
                <span>Get a copy of your data</span>
              </div>
            </button>
          </div>
        </div>

        {/* Security Keys Table */}
        <div className="pharmacy-table-container">
          <div className="security-keys-header">
            <h2 className="pharmacy-section-title">Security Keys</h2>
            <button className="btn-blue" onClick={() => alert('Add Security Key')}>
              + Add Security Key
            </button>
          </div>

          <div className="pharmacy-table-wrapper">
            <table className="pharmacy-table">
              <thead>
                <tr>
                  <th>DEVICE</th>
                  <th>LOCATION</th>
                  <th>LAST USED</th>
                  <th>STATUS</th>
                  <th>ACTION</th>
                </tr>
              </thead>
              <tbody>
                {securityKeys.map((key) => (
                  <tr key={key.id}>
                    <td>
                      <div className="security-key-device">
                        <span className="security-key-icon">{key.icon}</span>
                        <span>{key.device}</span>
                      </div>
                    </td>
                    <td>{key.location}</td>
                    <td>{key.lastUsed}</td>
                    <td>
                      <span className={getStatusClass(key.status)}>{key.status}</span>
                    </td>
                    <td>
                      <button
                        className="btn-remove-small"
                        onClick={() => handleRemoveKey(key.id)}
                      >
                        Remove
                      </button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>

        {/* Privacy Controls */}
        <div className="safety-card full-width">
          <div className="safety-card-header">
            <span className="safety-card-title">Privacy Controls</span>
          </div>

          <div className="privacy-list">
            <div className="privacy-row">
              <div>
                <h4>Data Sharing</h4>
                <p>Share anonymous usage data to improve SkyWings</p>
              </div>
              <button
                className={`switch ${dataSharing ? 'on' : ''}`}
                onClick={() => setDataSharing(!dataSharing)}
              >
                <span className="switch-slider"></span>
              </button>
            </div>

            <div className="privacy-row">
              <div>
                <h4>Personalized Ads</h4>
                <p>Show ads tailored to your interests</p>
              </div>
              <button
                className={`switch ${personalizedAds ? 'on' : ''}`}
                onClick={() => setPersonalizedAds(!personalizedAds)}
              >
                <span className="switch-slider"></span>
              </button>
            </div>

            <div className="privacy-row">
              <div>
                <h4>Marketing Emails</h4>
                <p>Receive promotional offers and updates</p>
              </div>
              <button
                className={`switch ${marketingEmails ? 'on' : ''}`}
                onClick={() => setMarketingEmails(!marketingEmails)}
              >
                <span className="switch-slider"></span>
              </button>
            </div>

            <div className="privacy-row">
              <div>
                <h4>Location Access</h4>
                <p>Allow SkyWings to access your location</p>
              </div>
              <button
                className={`switch ${locationAccess ? 'on' : ''}`}
                onClick={() => setLocationAccess(!locationAccess)}
              >
                <span className="switch-slider"></span>
              </button>
            </div>
          </div>
        </div>

        <div className="footer">
          © 2026, made with ❤️ by SkyWings Airlines for a better travel.
        </div>
      </main>
    </>
  );
}

export default Safety;