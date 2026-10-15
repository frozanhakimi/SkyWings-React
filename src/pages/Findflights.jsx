import { useState } from 'react';
import Sidebar from '../components/Sidebar';
import Topbar from '../components/Topbar';

const flights = [
  { id: 1, airline: 'Qatar Airways', from: 'KBL', to: 'DXB', fromTime: '08:00', toTime: '10:30', duration: '2h 30m', stops: 'Direct', price: 450 },
  { id: 2, airline: 'Emirates', from: 'KBL', to: 'DXB', fromTime: '14:15', toTime: '17:15', duration: '3h 00m', stops: '1 Stop', price: 380 },
  { id: 3, airline: 'Turkish Airlines', from: 'KBL', to: 'IST', fromTime: '09:30', toTime: '14:50', duration: '5h 20m', stops: '1 Stop', price: 520 },
  { id: 4, airline: 'Lufthansa', from: 'KBL', to: 'FRA', fromTime: '11:45', toTime: '19:00', duration: '7h 15m', stops: '1 Stop', price: 680 },
  { id: 5, airline: 'Singapore Airlines', from: 'KBL', to: 'SIN', fromTime: '23:00', toTime: '09:30', duration: '10h 30m', stops: '2 Stops', price: 890 },
  { id: 6, airline: 'Flydubai', from: 'KBL', to: 'DXB', fromTime: '06:30', toTime: '09:15', duration: '2h 45m', stops: 'Direct', price: 340 },
];

function Findflights() {
  const [activeTab, setActiveTab] = useState('list-view');
  const [selectedFlight, setSelectedFlight] = useState(null);
  const [collapsed, setCollapsed] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);

  return (
    <>
      <Sidebar collapsed={collapsed} mobileOpen={mobileOpen} />

<button
  className="sidebar-toggle"
  onClick={() => setCollapsed(!collapsed)}
>
  ‹
</button>

<div
  className={`sidebar-overlay ${mobileOpen ? 'show' : ''}`}
  onClick={() => setMobileOpen(false)}
></div>

      <main className="main-content">
         <Topbar pageTitle="Find Flights" onMenuClick={() => setMobileOpen(true)} />
        {/* HERO BANNER */}
        <div className="page-hero">
          <div className="page-hero-content">
            <h2>Find Your Flight</h2>
            <p>Search flights and book your next journey with SkyWings Airlines</p>

            <div className="hero-search-form">
              <input type="text" placeholder="From (e.g. Kabul)" />
              <input type="text" placeholder="To (e.g. Dubai)" />
              <input type="date" />
              <button className="btn-search">SEARCH</button>
            </div>
          </div>
        </div>

        {/* TABS */}
        <div className="view-tabs">
          <button
            className={`tab-btn ${activeTab === 'list-view' ? 'active' : ''}`}
            onClick={() => setActiveTab('list-view')}
          >
            List
          </button>

          <button
            className={`tab-btn ${activeTab === 'grid-view' ? 'active' : ''}`}
            onClick={() => setActiveTab('grid-view')}
          >
            Grid
          </button>
        </div>

        {/* LIST VIEW */}
        {activeTab === 'list-view' && (
          <div className="view-content active">
            {flights.map((flight) => (
              <div className="flight-card" key={flight.id}>

                <div className="flight-airline">
                  <img
                    src="/images/logo.png"
                    alt={flight.airline}
                    className="airline-logo"
                  />
                  <span>{flight.airline}</span>
                </div>

                <div className="flight-route">
                  <div className="time">
                    {flight.fromTime}
                    <span>{flight.from}</span>
                  </div>

                  <div className="duration">
                    {flight.duration}
                    <div className="line"></div>
                    {flight.stops}
                  </div>

                  <div className="time">
                    {flight.toTime}
                    <span>{flight.to}</span>
                  </div>
                </div>

                <div className="flight-price">
                  <span>${flight.price}</span>

                  <button
                    className="btn-blue book-flight"
                    onClick={() => setSelectedFlight(flight)}
                  >
                    BOOK
                  </button>
                </div>

              </div>
            ))}
          </div>
        )}

        {/* GRID VIEW */}
        {activeTab === 'grid-view' && (
          <div className="view-content active">
            <div className="flight-grid">

              {flights.map((flight) => (
                <div className="flight-card-grid" key={flight.id}>

                  <img
                    src="/images/logo.png"
                    alt={flight.airline}
                    className="grid-logo"
                  />

                  <h4>{flight.airline}</h4>

                  <p className="route-text">
                    {flight.from} → {flight.to}
                  </p>

                  <p className="grid-meta">
                    {flight.fromTime} - {flight.toTime} | {flight.stops}
                  </p>

                  <p className="grid-price">
                    ${flight.price}
                  </p>

                  <button
                    className="btn-blue book-flight"
                    onClick={() => setSelectedFlight(flight)}
                  >
                    BOOK NOW
                  </button>

                </div>
              ))}

            </div>
          </div>
        )}

        <div className="footer">
          © 2024 SkyWings Airlines . Privacy Policy | Terms | Contact
        </div>
      </main>

      {/* BOOKING CONFIRMATION PANEL */}
      {selectedFlight && (
        <>
          <div
            className="booking-overlay show"
            onClick={() => setSelectedFlight(null)}
          ></div>

          <div className="booking-panel show">

            <div className="panel-header">
              <h3>✈ BOOK FLIGHT</h3>

              <button
                className="close-panel"
                onClick={() => setSelectedFlight(null)}
              >
                ✕
              </button>
            </div>

            <div className="panel-info">

              <div className="info-row">
                <span className="label">Airline:</span>
                <span className="value">
                  {selectedFlight.airline}
                </span>
              </div>

              <div className="info-row">
                <span className="label">Route:</span>
                <span className="value">
                  {selectedFlight.from} → {selectedFlight.to}
                </span>
              </div>

              <div className="info-row">
                <span className="label">Time:</span>
                <span className="value">
                  {selectedFlight.fromTime} - {selectedFlight.toTime}
                </span>
              </div>

              <div className="info-row">
                <span className="label">Class:</span>
                <span className="value">Economy</span>
              </div>

            </div>

            <div className="panel-total">
              <div className="total-label">
                TOTAL PRICE
              </div>

              <div className="total-price">
                ${selectedFlight.price}
              </div>
            </div>

            <div className="panel-actions">

              <button
                className="btn-cancel-book"
                onClick={() => setSelectedFlight(null)}
              >
                Cancel
              </button>

              <button
                className="btn-confirm-book"
                onClick={() => window.location.href = '/booking'}
              >
                Confirm
              </button>

            </div>

          </div>
        </>
      )}
    </>
  );
}

export default Findflights;