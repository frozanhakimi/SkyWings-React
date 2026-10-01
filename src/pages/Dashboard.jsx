import { useState } from 'react';
import Sidebar from '../components/Sidebar';
import Topbar from '../components/Topbar';

function Dashboard() {
  const [sidebarCollapsed, setSidebarCollapsed] = useState(false);
  const [mobileSidebarOpen, setMobileSidebarOpen] = useState(false);

  return (
    <>
      <Sidebar
        collapsed={sidebarCollapsed}
        mobileOpen={mobileSidebarOpen}
      />

      <div
        className={`sidebar-overlay ${mobileSidebarOpen ? 'show' : ''}`}
        onClick={() => setMobileSidebarOpen(false)}
      ></div>

      <button
        className="sidebar-toggle"
        onClick={() => setSidebarCollapsed(!sidebarCollapsed)}
      >
        ‹
      </button>

      <main className="main-content">
        <Topbar
          pageTitle="Dashboard"
          onMenuClick={() => setMobileSidebarOpen(!mobileSidebarOpen)}
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
                <img src="/images/flight_promotions_donut.png" alt="Promotion Graph" />
              </div>
              <div className="chart-legend">
                <div className="legend-item"><span className="dot" style={{ background: '#e11d48' }}></span> Qatar Airways <span className="pct">24%</span></div>
                <div className="legend-item"><span className="dot" style={{ background: '#3b82f6' }}></span> Emirates <span className="pct">18%</span></div>
                <div className="legend-item"><span className="dot" style={{ background: '#10b981' }}></span> Turkish Airlines <span className="pct">15%</span></div>
                <div className="legend-item"><span className="dot" style={{ background: '#eab308' }}></span> Lufthansa <span className="pct">12%</span></div>
                <div className="legend-item"><span className="dot" style={{ background: '#d946ef' }}></span> Singapore Airlines <span className="pct">9%</span></div>
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
                <img src="/images/booking_overview_donut.png" alt="Booking Graph" />
              </div>
              <div className="chart-legend">
                <div className="legend-item"><span className="dot" style={{ background: '#1e3a8a' }}></span> Business Class <span className="pct">35%</span></div>
                <div className="legend-item"><span className="dot" style={{ background: '#3b82f6' }}></span> Economy Class <span className="pct">40%</span></div>
                <div className="legend-item"><span className="dot" style={{ background: '#10b981' }}></span> First Class <span className="pct">15%</span></div>
                <div className="legend-item"><span className="dot" style={{ background: '#e11d48' }}></span> Premium Economy <span className="pct">10%</span></div>
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
                <img src="/images/smart_market_usage_donut.png" alt="Market Graph" />
              </div>
              <div className="chart-legend">
                <div className="legend-item"><span className="dot" style={{ background: '#1e3a8a' }}></span> Seat Occupancy Rate <span className="pct">87%</span></div>
                <div className="legend-item"><span className="dot" style={{ background: '#3b82f6' }}></span> Customer Satisfaction <span className="pct">94%</span></div>
                <div className="legend-item"><span className="dot" style={{ background: '#10b981' }}></span> Online Check-in Rate <span className="pct">76%</span></div>
                <div className="legend-item"><span className="dot" style={{ background: '#eab308' }}></span> In-flight Wifi Usage <span className="pct">68%</span></div>
                <div className="legend-item"><span className="dot" style={{ background: '#e11d48' }}></span> Extra Baggage Sales <span className="pct">42%</span></div>
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

              <button className="btn-blue" style={{ marginTop: '20px' }}>More Details</button>
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