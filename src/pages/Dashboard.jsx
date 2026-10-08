import { useState } from 'react';
import Sidebar from '../components/Sidebar';
import Topbar from '../components/Topbar';
import DonutChart from '../components/DonutChart';

function Dashboard() {
  const [collapsed, setCollapsed] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);

  // Card 1 - Flight Promotions
  const promotionsData = {
    labels: ['Qatar Airways', 'Emirates', 'Turkish Airlines', 'Lufthansa', 'Singapore Airlines'],
    values: [24, 18, 15, 12, 9],
    colors: ['#e11d48', '#3b82f6', '#10b981', '#eab308', '#d946ef'],
  };

  // Card 2 - Booking Overview
  const bookingData = {
    labels: ['Business Class', 'Economy Class', 'First Class', 'Premium Economy'],
    values: [35, 40, 15, 10],
    colors: ['#1e3a8a', '#3b82f6', '#10b981', '#e11d48'],
  };

  // Card 3 - Smart Market Usage
  const marketData = {
    labels: [
      'Seat Occupancy Rate',
      'Customer Satisfaction',
      'Online Check-in Rate',
      'In-flight Wifi Usage',
      'Extra Baggage Sales',
    ],
    values: [87, 94, 76, 68, 42],
    colors: ['#1e3a8a', '#3b82f6', '#10b981', '#eab308', '#e11d48'],
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
        <Topbar
          pageTitle="Dashboard"
          onMenuClick={() => setMobileOpen(true)}
        />

        <h1 className="welcome-title">Welcome to SkyWings Airlines!</h1>

        <div className="dashboard-grid">
          {/* Card 1 - Flight Promotions */}
          <div className="card">
            <div className="card-header">
              <span className="card-title">Flight Promotions</span>
              <span className="info-icon">i</span>
            </div>
            <div className="card-content chart-layout">
              <div className="graph-placeholder">
                <DonutChart
                  labels={promotionsData.labels}
                  values={promotionsData.values}
                  colors={promotionsData.colors}
                />
              </div>
              <div className="chart-legend">
                {promotionsData.labels.map((label, i) => (
                  <div className="legend-item" key={i}>
                    <span
                      className="dot"
                      style={{ background: promotionsData.colors[i] }}
                    ></span>
                    {label}
                    <span className="pct">{promotionsData.values[i]}%</span>
                  </div>
                ))}
              </div>
            </div>
            <button className="btn-blue">More Details</button>
          </div>

          {/* Card 2 - Booking Overview */}
          <div className="card">
            <div className="card-header">
              <span className="card-title">Booking Overview</span>
              <span className="info-icon">i</span>
            </div>
            <div className="card-content chart-layout">
              <div className="graph-placeholder">
                <DonutChart
                  labels={bookingData.labels}
                  values={bookingData.values}
                  colors={bookingData.colors}
                />
              </div>
              <div className="chart-legend">
                {bookingData.labels.map((label, i) => (
                  <div className="legend-item" key={i}>
                    <span
                      className="dot"
                      style={{ background: bookingData.colors[i] }}
                    ></span>
                    {label}
                    <span className="pct">{bookingData.values[i]}%</span>
                  </div>
                ))}
              </div>
            </div>
            <button className="btn-blue">More Details</button>
          </div>

          {/* Card 3 - Smart Market Usage */}
          <div className="card">
            <div className="card-header">
              <span className="card-title">Smart Market Usage</span>
              <span className="info-icon">i</span>
            </div>
            <div className="card-content chart-layout">
              <div className="graph-placeholder">
                <DonutChart
                  labels={marketData.labels}
                  values={marketData.values}
                  colors={marketData.colors}
                />
              </div>
              <div className="chart-legend">
                {marketData.labels.map((label, i) => (
                  <div className="legend-item" key={i}>
                    <span
                      className="dot"
                      style={{ background: marketData.colors[i] }}
                    ></span>
                    {label}
                    <span className="pct">{marketData.values[i]}%</span>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Card 4 - Flight Performance */}
          <div className="card">
            <div className="card-header">
              <span className="card-title">Flight Performance</span>
              <span className="info-icon">i</span>
            </div>
            <div className="card-content">
              <div className="stat-row">
                <span className="stat-name">On Time:</span>
                <span className="percentage">72%</span>
              </div>
              <div className="progress-bar">
                <div className="progress-fill" style={{ width: '72%' }}></div>
              </div>

              <div className="stat-row">
                <span className="stat-name">Delayed:</span>
                <span className="percentage">18%</span>
              </div>
              <div className="progress-bar">
                <div className="progress-fill" style={{ width: '18%' }}></div>
              </div>

              <div className="stat-row">
                <span className="stat-name">Cancelled:</span>
                <span className="percentage">10%</span>
              </div>
              <div className="progress-bar">
                <div className="progress-fill" style={{ width: '10%' }}></div>
              </div>

              <button className="btn-blue" style={{ marginTop: '20px' }}>
                More Details
              </button>
            </div>
          </div>
        </div>

        <div className="footer">
          © 2024 SkyWings Airlines . Privacy Policy | Terms | Contact
        </div>
      </main>
    </>
  );
}

export default Dashboard;