import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import Sidebar from '../components/Sidebar';
import Topbar from '../components/Topbar';
import AirlineLogo from '../components/AirlineLogo';
import WorldMap from '../components/WorldMap';

const liveFlights = [
  {
    id: 'SW-101',
    airline: 'Qatar Airways',
    from: 'Kabul',
    fromCode: 'KBL',
    to: 'Dubai',
    toCode: 'DXB',
    altitude: '35,000 ft',
    speed: '540 mph',
    eta: '15 min',
    status: 'In Air',
    departure: '08:00',
    arrival: '10:30',
  },
  {
    id: 'SW-102',
    airline: 'Emirates',
    from: 'Kabul',
    fromCode: 'KBL',
    to: 'Dubai',
    toCode: 'DXB',
    altitude: '38,000 ft',
    speed: '560 mph',
    eta: '45 min',
    status: 'In Air',
    departure: '14:15',
    arrival: '17:15',
  },
  {
    id: 'SW-103',
    airline: 'Turkish Airlines',
    from: 'Kabul',
    fromCode: 'KBL',
    to: 'Istanbul',
    toCode: 'IST',
    altitude: '36,500 ft',
    speed: '550 mph',
    eta: '2h 30m',
    status: 'Delayed',
    departure: '09:30',
    arrival: '14:50',
  },
  {
    id: 'SW-105',
    airline: 'Singapore Airlines',
    from: 'Kabul',
    fromCode: 'KBL',
    to: 'Singapore',
    toCode: 'SIN',
    altitude: '40,000 ft',
    speed: '580 mph',
    eta: '8h 15m',
    status: 'In Air',
    departure: '23:00',
    arrival: '09:30',
  },
  {
    id: 'SW-107',
    airline: 'British Airways',
    from: 'Kabul',
    fromCode: 'KBL',
    to: 'London',
    toCode: 'LHR',
    altitude: '37,000 ft',
    speed: '570 mph',
    eta: '5h 45m',
    status: 'In Air',
    departure: '15:30',
    arrival: '23:45',
  },
  {
    id: 'SW-109',
    airline: 'Emirates',
    from: 'Kabul',
    fromCode: 'KBL',
    to: 'Dubai',
    toCode: 'DXB',
    altitude: '39,000 ft',
    speed: '565 mph',
    eta: '1h 20m',
    status: 'In Air',
    departure: '18:00',
    arrival: '21:00',
  },
];

const flightTableData = [
  { id: 'SW-101', airline: 'Qatar Airways', route: 'KBL → DXB', altitude: '35,000', speed: '540', eta: '15 min', status: 'In Air' },
  { id: 'SW-102', airline: 'Emirates', route: 'KBL → DXB', altitude: '38,000', speed: '560', eta: '45 min', status: 'In Air' },
  { id: 'SW-103', airline: 'Turkish Airlines', route: 'KBL → IST', altitude: '36,500', speed: '550', eta: '2h 30m', status: 'Delayed' },
  { id: 'SW-104', airline: 'Lufthansa', route: 'KBL → FRA', altitude: '—', speed: '—', eta: 'Boarding', status: 'Boarding' },
  { id: 'SW-105', airline: 'Singapore Airlines', route: 'KBL → SIN', altitude: '40,000', speed: '580', eta: '8h 15m', status: 'In Air' },
  { id: 'SW-107', airline: 'British Airways', route: 'KBL → LHR', altitude: '37,000', speed: '570', eta: '5h 45m', status: 'In Air' },
  { id: 'SW-108', airline: 'Air India', route: 'KBL → DEL', altitude: '—', speed: '—', eta: 'Landed', status: 'Landed' },
  { id: 'SW-109', airline: 'Emirates', route: 'KBL → DXB', altitude: '39,000', speed: '565', eta: '1h 20m', status: 'In Air' },
];

const notifications = [
  { id: 1, type: 'info', icon: '🔔', text: 'SW-101 approaching Dubai — landing in 15 min', time: '2 min ago' },
  { id: 2, type: 'warning', icon: '⚠️', text: 'SW-103 delayed by 30 minutes due to weather', time: '10 min ago' },
  { id: 3, type: 'success', icon: '✅', text: 'SW-105 departed from Kabul airport', time: '25 min ago' },
  { id: 4, type: 'info', icon: '📢', text: 'SW-107 gate changed to B12', time: '1 hour ago' },
  { id: 5, type: 'success', icon: '✅', text: 'SW-109 boarding completed at Gate A5', time: '1 hour ago' },
];

function LiveFlights() {
  const [collapsed, setCollapsed] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const navigate = useNavigate();

  const getStatusClass = (status) => {
    if (status === 'In Air') return 'status boarding';
    if (status === 'Delayed') return 'status delayed';
    if (status === 'Boarding') return 'status boarding';
    if (status === 'Landed') return 'status on-time';
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
        <Topbar pageTitle="Live Flights" onMenuClick={() => setMobileOpen(true)} />

        {/* Hero Header */}
        <div className="live-hero">
          <div className="live-hero-content">
            <h1>Live Flight Tracker</h1>
            <p>Track SkyWings flights in real-time across the globe</p>
          </div>

          <div className="live-stats-row">
            <div className="live-stat-badge in-air">
              <span className="live-stat-dot"></span>
              <div>
                <strong>12</strong>
                <span>In Air</span>
              </div>
            </div>
            <div className="live-stat-badge scheduled">
              <span className="live-stat-dot"></span>
              <div>
                <strong>8</strong>
                <span>Scheduled</span>
              </div>
            </div>
            <div className="live-stat-badge landed">
              <span className="live-stat-dot"></span>
              <div>
                <strong>4</strong>
                <span>Landed</span>
              </div>
            </div>
          </div>
        </div>

        {/* World Map */}
        <div className="live-map-container">
          <div className="live-map-header">
            <h3>Global Flight Network</h3>
            <div className="live-map-legend">
              <span><span className="legend-line active"></span> Active Flight</span>
              <span><span className="legend-line scheduled"></span> Scheduled</span>
            </div>
          </div>
          <WorldMap />
        </div>

        {/* Live Flight Cards */}
        <div className="live-cards-grid">
          {liveFlights.map((flight) => (
            <div className="live-flight-card" key={flight.id}>
              <div className="live-flight-header">
                <AirlineLogo airline={flight.airline} size={38} />
                <span className="live-flight-id">{flight.id}</span>
                <span className={getStatusClass(flight.status)}>{flight.status}</span>
              </div>

              <div className="live-flight-route">
                <div className="live-route-end">
                  <span className="live-code">{flight.fromCode}</span>
                  <span className="live-time">{flight.departure}</span>
                </div>
                <div className="live-route-middle">
                  <svg width="24" height="24" viewBox="0 0 24 24" fill="#2563eb">
                    <path d="M21 16v-2l-8-5V3.5c0-.83-.67-1.5-1.5-1.5S10 2.67 10 3.5V9l-8 5v2l8-2.5V19l-2 1.5V22l3.5-1 3.5 1v-1.5L13 19v-5.5l8 2.5z" />
                  </svg>
                </div>
                <div className="live-route-end">
                  <span className="live-code">{flight.toCode}</span>
                  <span className="live-time">{flight.arrival}</span>
                </div>
              </div>

              <div className="live-flight-stats">
                <div className="live-stat">
                  <span className="live-stat-label">ALTITUDE</span>
                  <span className="live-stat-value">{flight.altitude}</span>
                </div>
                <div className="live-stat">
                  <span className="live-stat-label">SPEED</span>
                  <span className="live-stat-value">{flight.speed}</span>
                </div>
                <div className="live-stat">
                  <span className="live-stat-label">ETA</span>
                  <span className="live-stat-value">{flight.eta}</span>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Live Table */}
        <div className="pharmacy-table-container">
          <h2 className="pharmacy-section-title">All Active Flights</h2>

          <div className="pharmacy-table-wrapper">
            <table className="pharmacy-table">
              <thead>
                <tr>
                  <th>FLIGHT</th>
                  <th>AIRLINE</th>
                  <th>ROUTE</th>
                  <th>ALTITUDE (FT)</th>
                  <th>SPEED (MPH)</th>
                  <th>ETA</th>
                  <th>STATUS</th>
                </tr>
              </thead>
              <tbody>
                {flightTableData.map((f) => (
                  <tr key={f.id}>
                    <td><span className="flight-id-cell">{f.id}</span></td>
                    <td>{f.airline}</td>
                    <td>{f.route}</td>
                    <td>{f.altitude}</td>
                    <td>{f.speed}</td>
                    <td>{f.eta}</td>
                    <td><span className={getStatusClass(f.status)}>{f.status}</span></td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>

        {/* Notifications */}
        <div className="pharmacy-table-container">
          <h2 className="pharmacy-section-title">Flight Notifications</h2>

          <div className="notifications-list">
            {notifications.map((n) => (
              <div className={`notification-row ${n.type}`} key={n.id}>
                <span className="notification-icon">{n.icon}</span>
                <div className="notification-content">
                  <p>{n.text}</p>
                  <span className="notification-time">{n.time}</span>
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

export default LiveFlights;