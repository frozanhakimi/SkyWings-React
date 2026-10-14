import { useState } from 'react';
import Sidebar from '../components/Sidebar';
import Topbar from '../components/topbar';

function Skymiles() {
  const [collapsed, setCollapsed] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);

  const member = {
    name: 'FROZAN HAKIMI',
    memberId: 'SW-2026-8750-KBL',
    currentMiles: 8750,
    nextTierMiles: 10000,
    tier: 'Gold Member',
    nextTier: 'Platinum',
    expiry: '12/28',
    progress: 87,
  };

  const summaryCards = [
    { icon: '✈️', label: 'Total Miles', value: '8,750', color: 'blue' },
    { icon: '💵', label: 'SkyCash Balance', value: '$455.00', color: 'green' },
    { icon: '🎫', label: 'Flights This Year', value: '24', color: 'purple' },
  ];

  const savedCards = [
    { id: 1, brand: 'VISA', number: '**** **** **** 7852', expires: '11/28', color: 'visa' },
    { id: 2, brand: 'MASTERCARD', number: '**** **** **** 5248', expires: '06/27', color: 'master' },
  ];

  const invoices = [
    { id: 1, date: 'March 01, 2024', number: '#SW-415646', amount: 180 },
    { id: 2, date: 'February 10, 2024', number: '#SW-126749', amount: 250 },
    { id: 3, date: 'April 05, 2024', number: '#SW-103578', amount: 120 },
    { id: 4, date: 'June 25, 2023', number: '#SW-415646', amount: 180 },
    { id: 5, date: 'March 01, 2023', number: '#SW-803481', amount: 300 },
  ];

  const billingProfiles = [
    { id: 1, name: 'Frozan Hakimi', type: 'Personal', email: 'hakimifrozan0@gmail.com', passport: 'AF1234567', icon: '👤' },
    { id: 2, name: 'Ahmad Hakimi', type: 'Father', email: 'ahmad@example.com', passport: 'AF7654321', icon: '👨' },
    { id: 3, name: 'Fatima Hakimi', type: 'Mother', email: 'fatima@example.com', passport: 'AF2468135', icon: '👩' },
  ];

  const transactions = [
    { id: 1, icon: '✈️', category: 'Flight to Dubai', time: 'March 27, 12:30 PM', amount: '+500 miles', type: 'credit' },
    { id: 2, icon: '🛍️', category: 'Shop Purchase', time: 'March 26, 04:30 AM', amount: '-$25', type: 'debit' },
    { id: 3, icon: '🎫', category: 'Bonus Miles', time: 'March 26, 01:45 PM', amount: '+1000 miles', type: 'credit' },
    { id: 4, icon: '🍽️', category: 'In-Flight Meal', time: 'March 26, 12:30 PM', amount: '-$15', type: 'debit' },
    { id: 5, icon: '🎁', category: 'Referral Bonus', time: 'March 26, 08:30 AM', amount: '+250 miles', type: 'credit' },
    { id: 6, icon: '🛒', category: 'Duty-Free Shopping', time: 'March 26, 05:00 AM', amount: 'Pending', type: 'pending' },
  ];

  const handleRemoveCard = (id) => {
    if (window.confirm('Remove this card?')) {
      alert('Card removed');
    }
  };

  const handleAddCard = () => {
    alert('Add New Card');
  };

  const handleDownloadInvoice = (id) => {
    alert(`Downloading invoice ${id}...`);
  };

  const handleEditProfile = (id) => {
    alert('Edit profile');
  };

  const handleDeleteProfile = (id) => {
    if (window.confirm('Delete this profile?')) {
      alert('Profile deleted');
    }
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
        <Topbar pageTitle="SkyMiles" onMenuClick={() => setMobileOpen(true)} />

        {/* Hero Section */}
        <div className="skymiles-hero-grid">
          {/* Loyalty Card */}
          <div className="loyalty-card">
            <div className="loyalty-card-bg-pattern"></div>

            <div className="loyalty-card-top">
              <div className="loyalty-logo">
                <svg width="20" height="20" viewBox="0 0 24 24" fill="white">
                  <path d="M17.8 19.2L16 11l3.5-3.5C21 6 21.5 4 21 3c-1-.5-3 0-4.5 1.5L13 8 4.8 6.2c-.5-.1-.9.1-1.1.5l-.3.5c-.2.5-.1 1 .3 1.3L9 12l-2 3H4l-1 1 3 2 2 3 1-1v-3l3-2 3.5 5.3c.3.4.8.5 1.3.3l.5-.2c.4-.3.6-.7.5-1.2z"></path>
                </svg>
                <span>SKYWINGS</span>
              </div>
              <div className="loyalty-tier-badge">
                <span>🏆</span> {member.tier}
              </div>
            </div>

            <div className="loyalty-card-middle">
              <div className="loyalty-miles">
                <span className="miles-number">{member.currentMiles.toLocaleString()}</span>
                <span className="miles-label">Miles</span>
              </div>
            </div>

            <div className="loyalty-card-bottom">
              <div className="loyalty-holder">
                <span className="loyalty-label">CARD HOLDER</span>
                <span className="loyalty-value">{member.name}</span>
              </div>
              <div className="loyalty-expires">
                <span className="loyalty-label">EXPIRES</span>
                <span className="loyalty-value">{member.expiry}</span>
              </div>
            </div>

            <div className="loyalty-progress">
              <div className="progress-labels">
                <span>{member.currentMiles.toLocaleString()} / {member.nextTierMiles.toLocaleString()}</span>
                <span>{member.progress}% to {member.nextTier}</span>
              </div>
              <div className="loyalty-progress-bar">
                <div className="loyalty-progress-fill" style={{ width: `${member.progress}%` }}></div>
              </div>
            </div>
          </div>

          {/* Summary Cards */}
          <div className="skymiles-summary">
            {summaryCards.map((card, i) => (
              <div className={`summary-card ${card.color}`} key={i}>
                <div className={`summary-icon ${card.color}`}>
                  <span>{card.icon}</span>
                </div>
                <div className="summary-info">
                  <span className="summary-label">{card.label}</span>
                  <span className="summary-value">{card.value}</span>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Saved Cards */}
        <div className="skymiles-section">
          <div className="section-header-row">
            <h3 className="section-title">Saved Payment Methods</h3>
            <button className="btn-blue" onClick={handleAddCard}>+ Add New Card</button>
          </div>

          <div className="saved-cards-grid">
            {savedCards.map((card) => (
              <div className={`saved-card ${card.color}`} key={card.id}>
                <div className="saved-card-brand">{card.brand}</div>
                <div className="saved-card-number">{card.number}</div>
                <div className="saved-card-bottom">
                  <div>
                    <span className="saved-card-label">EXPIRES</span>
                    <span className="saved-card-value">{card.expires}</span>
                  </div>
                  <button className="btn-card-action" onClick={() => handleRemoveCard(card.id)}>
                    Remove
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Invoices */}
        <div className="pharmacy-table-container">
          <div className="section-header-row">
            <h2 className="pharmacy-section-title">SkyMiles Invoices</h2>
            <button className="btn-link">View All →</button>
          </div>

          <div className="pharmacy-table-wrapper">
            <table className="pharmacy-table">
              <thead>
                <tr>
                  <th>DATE</th>
                  <th>INVOICE</th>
                  <th>AMOUNT</th>
                  <th>DOWNLOAD</th>
                </tr>
              </thead>
              <tbody>
                {invoices.map((inv) => (
                  <tr key={inv.id}>
                    <td>{inv.date}</td>
                    <td>
                      <span className="invoice-number">{inv.number}</span>
                    </td>
                    <td>
                      <span className="invoice-amount">${inv.amount}</span>
                    </td>
                    <td>
                      <button className="btn-pdf" onClick={() => handleDownloadInvoice(inv.id)}>
                        📄 PDF
                      </button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>

        {/* Billing Profiles */}
        <div className="pharmacy-table-container">
          <h2 className="pharmacy-section-title">Billing Profiles</h2>

          <div className="billing-profiles-grid">
            {billingProfiles.map((profile) => (
              <div className="billing-profile-card" key={profile.id}>
                <div className="billing-profile-header">
                  <div className="billing-avatar">{profile.icon}</div>
                  <div>
                    <h4>{profile.name}</h4>
                    <span className="billing-type-badge">{profile.type}</span>
                  </div>
                </div>

                <div className="billing-profile-body">
                  <div className="billing-row">
                    <span className="billing-label">Email:</span>
                    <span className="billing-value">{profile.email}</span>
                  </div>
                  <div className="billing-row">
                    <span className="billing-label">Passport:</span>
                    <span className="billing-value">{profile.passport}</span>
                  </div>
                </div>

                <div className="billing-profile-actions">
                  <button className="btn-edit" onClick={() => handleEditProfile(profile.id)}>Edit</button>
                  <button className="btn-remove-small" onClick={() => handleDeleteProfile(profile.id)}>Delete</button>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Recent Activity */}
        <div className="pharmacy-table-container">
          <div className="section-header-row">
            <h2 className="pharmacy-section-title">Recent SkyMiles Activity</h2>
            <button className="btn-link">View All →</button>
          </div>

          <div className="activity-list">
            {transactions.map((tx) => (
              <div className="activity-row" key={tx.id}>
                <div className="activity-icon">{tx.icon}</div>

                <div className="activity-info">
                  <h4>{tx.category}</h4>
                  <span>{tx.time}</span>
                </div>

                <div className={`activity-amount ${tx.type}`}>
                  {tx.amount}
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="footer">
          © 2026, made with ❤️ by SkyWings Airlines for a better travel.
        </div>
      </main>
    </>
  );
}

export default Skymiles;