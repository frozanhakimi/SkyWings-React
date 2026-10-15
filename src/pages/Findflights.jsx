import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import Sidebar from '../components/Sidebar';
import Topbar from '../components/Topbar';
import AirlineLogo from '../components/AirlineLogo';

const flights = [
  { id: 1, airline: 'Qatar Airways', from: 'Kabul', to: 'Dubai', fromCode: 'KBL', toCode: 'DXB', fromTime: '08:00', toTime: '10:30', duration: '2h 30m', stops: 'Direct', price: 450 },
  { id: 2, airline: 'Emirates', from: 'Kabul', to: 'Dubai', fromCode: 'KBL', toCode: 'DXB', fromTime: '14:15', toTime: '17:15', duration: '3h 00m', stops: '1 Stop', price: 380 },
  { id: 3, airline: 'Turkish Airlines', from: 'Kabul', to: 'Istanbul', fromCode: 'KBL', toCode: 'IST', fromTime: '09:30', toTime: '14:50', duration: '5h 20m', stops: '1 Stop', price: 520 },
  { id: 4, airline: 'Lufthansa', from: 'Kabul', to: 'Frankfurt', fromCode: 'KBL', toCode: 'FRA', fromTime: '11:45', toTime: '19:00', duration: '7h 15m', stops: '1 Stop', price: 680 },
  { id: 5, airline: 'Singapore Airlines', from: 'Kabul', to: 'Singapore', fromCode: 'KBL', toCode: 'SIN', fromTime: '23:00', toTime: '09:30', duration: '10h 30m', stops: '2 Stops', price: 890 },
  { id: 6, airline: 'Flydubai', from: 'Kabul', to: 'Dubai', fromCode: 'KBL', toCode: 'DXB', fromTime: '06:30', toTime: '09:15', duration: '2h 45m', stops: 'Direct', price: 340 },
];

function Findflights() {
  const [activeTab, setActiveTab] = useState('list-view');
  const [selectedFlight, setSelectedFlight] = useState(null);
  const [collapsed, setCollapsed] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);

  // ✅ Search states
  const [searchFrom, setSearchFrom] = useState('');
  const [searchTo, setSearchTo] = useState('');
  const [searchDate, setSearchDate] = useState('');

  const navigate = useNavigate();

  // ✅ Filtered flights
  const filteredFlights = flights.filter((flight) => {
    const matchesFrom =
      searchFrom === '' ||
      flight.from.toLowerCase().includes(searchFrom.toLowerCase()) ||
      flight.fromCode.toLowerCase().includes(searchFrom.toLowerCase());

    const matchesTo =
      searchTo === '' ||
      flight.to.toLowerCase().includes(searchTo.toLowerCase()) ||
      flight.toCode.toLowerCase().includes(searchTo.toLowerCase());

    return matchesFrom && matchesTo;
  });

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
        <Topbar pageTitle="Find Flights" onMenuClick={() => setMobileOpen(true)} />

        {/* HERO BANNER */}
        <div className="page-hero">
          <div className="page-hero-content">
            <h2>Find Your Flight</h2>
            <p>Search flights and book your next journey with SkyWings Airlines</p>
            <div className="hero-search-form">
              <input
                type="text"
                placeholder="From (e.g. Kabul)"
                value={searchFrom}
                onChange={(e) => setSearchFrom(e.target.value)}
              />
              <input
                type="text"
                placeholder="To (e.g. Dubai)"
                value={searchTo}
                onChange={(e) => setSearchTo(e.target.value)}
              />
              <input
                type="date"
                value={searchDate}
                onChange={(e) => setSearchDate(e.target.value)}
              />
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

        {/* Empty State */}
        {filteredFlights.length === 0 && (
          <div className="empty-state">
            <h3>No flights found</h3>
            <p>Try changing your search criteria</p>
          </div>
        )}

        {/* LIST VIEW */}
        {activeTab === 'list-view' && filteredFlights.length > 0 && (
          <div className="view-content active">
            {filteredFlights.map((flight) => (
              <div className="flight-card" key={flight.id}>
                <div className="flight-airline">
                  <AirlineLogo airline={flight.airline} size={42} />
                  <span>{flight.airline}</span>
                </div>
                <div className="flight-route">
                  <div className="time">{flight.fromTime}<span>{flight.fromCode}</span></div>
                  <div className="duration">{flight.duration}<div className="line"></div>{flight.stops}</div>
                  <div className="time">{flight.toTime}<span>{flight.toCode}</span></div>
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
        {activeTab === 'grid-view' && filteredFlights.length > 0 && (
          <div className="view-content active">
            <div className="flight-grid">
              {filteredFlights.map((flight) => (
                <div className="flight-card-grid" key={flight.id}>
                  <AirlineLogo airline={flight.airline} size={70} />
                  <h4>{flight.airline}</h4>
                  <p className="route-text">{flight.from} ({flight.fromCode}) → {flight.to} ({flight.toCode})</p>
                  <p className="grid-meta">{flight.fromTime} - {flight.toTime} | {flight.stops}</p>
                  <p className="grid-price">${flight.price}</p>
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
          © 2026, made with ❤️ by SkyWings Airlines for a better travel.
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
                <span className="value">{selectedFlight.airline}</span>
              </div>
              <div className="info-row">
                <span className="label">Route:</span>
                <span className="value">{selectedFlight.fromCode} → {selectedFlight.toCode}</span>
              </div>
              <div className="info-row">
                <span className="label">Time:</span>
                <span className="value">{selectedFlight.fromTime} - {selectedFlight.toTime}</span>
              </div>
              <div className="info-row">
                <span className="label">Class:</span>
                <span className="value">Economy</span>
              </div>
            </div>

            <div className="panel-total">
              <div className="total-label">TOTAL PRICE</div>
              <div className="total-price">${selectedFlight.price}</div>
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
                onClick={() => {
                  setSelectedFlight(null);
                  navigate('/booking');
                }}
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