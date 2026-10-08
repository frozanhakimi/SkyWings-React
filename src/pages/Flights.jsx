import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import Sidebar from '../components/Sidebar';
import Topbar from '../components/Topbar';
import AirlineLogo from '../components/AirlineLogo';

const allFlights = [
  { id: 'SW-101', airline: 'Qatar Airways', from: 'Kabul', fromCode: 'KBL', to: 'Dubai', toCode: 'DXB', departure: '08:00', arrival: '10:30', duration: '2h 30m', class: 'Economy', stops: 'Direct', price: 320, status: 'On Time' },
  { id: 'SW-102', airline: 'Emirates', from: 'Kabul', fromCode: 'KBL', to: 'Dubai', toCode: 'DXB', departure: '14:15', arrival: '17:15', duration: '3h 00m', class: 'Business', stops: '1 Stop', price: 580, status: 'On Time' },
  { id: 'SW-103', airline: 'Turkish Airlines', from: 'Kabul', fromCode: 'KBL', to: 'Istanbul', toCode: 'IST', departure: '09:30', arrival: '14:50', duration: '5h 20m', class: 'Economy', stops: '1 Stop', price: 520, status: 'Delayed' },
  { id: 'SW-104', airline: 'Lufthansa', from: 'Kabul', fromCode: 'KBL', to: 'Frankfurt', toCode: 'FRA', departure: '11:45', arrival: '19:00', duration: '7h 15m', class: 'First Class', stops: '1 Stop', price: 980, status: 'On Time' },
  { id: 'SW-105', airline: 'Singapore Airlines', from: 'Kabul', fromCode: 'KBL', to: 'Singapore', toCode: 'SIN', departure: '23:00', arrival: '09:30', duration: '10h 30m', class: 'Business', stops: '2 Stops', price: 890, status: 'On Time' },
  { id: 'SW-106', airline: 'Flydubai', from: 'Kabul', fromCode: 'KBL', to: 'Dubai', toCode: 'DXB', departure: '06:30', arrival: '09:15', duration: '2h 45m', class: 'Economy', stops: 'Direct', price: 290, status: 'Boarding' },
  { id: 'SW-107', airline: 'British Airways', from: 'Kabul', fromCode: 'KBL', to: 'London', toCode: 'LHR', departure: '15:30', arrival: '23:45', duration: '8h 15m', class: 'Business', stops: 'Direct', price: 720, status: 'On Time' },
  { id: 'SW-108', airline: 'Air India', from: 'Kabul', fromCode: 'KBL', to: 'Delhi', toCode: 'DEL', departure: '13:00', arrival: '17:45', duration: '4h 45m', class: 'Economy', stops: 'Direct', price: 450, status: 'Cancelled' },
  { id: 'SW-109', airline: 'Emirates', from: 'Kabul', fromCode: 'KBL', to: 'Dubai', toCode: 'DXB', departure: '18:00', arrival: '21:00', duration: '3h 00m', class: 'First Class', stops: 'Direct', price: 1150, status: 'On Time' },
  { id: 'SW-110', airline: 'Turkish Airlines', from: 'Kabul', fromCode: 'KBL', to: 'Istanbul', toCode: 'IST', departure: '20:30', arrival: '01:50', duration: '5h 20m', class: 'Business', stops: 'Direct', price: 680, status: 'On Time' },
];

function Flights() {
  const [searchText, setSearchText] = useState('');
  const [statusFilter, setStatusFilter] = useState('All');
  const [classFilter, setClassFilter] = useState('All');
  const [sortBy, setSortBy] = useState('default');
  const [entriesPerPage, setEntriesPerPage] = useState(7);
  const [selectedFlight, setSelectedFlight] = useState(null);
  const [collapsed, setCollapsed] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);

  const navigate = useNavigate();

  let filtered = allFlights.filter((f) => {
    const matchesSearch =
      f.airline.toLowerCase().includes(searchText.toLowerCase()) ||
      f.from.toLowerCase().includes(searchText.toLowerCase()) ||
      f.to.toLowerCase().includes(searchText.toLowerCase()) ||
      f.id.toLowerCase().includes(searchText.toLowerCase());

    const matchesStatus = statusFilter === 'All' || f.status === statusFilter;
    const matchesClass = classFilter === 'All' || f.class === classFilter;

    return matchesSearch && matchesStatus && matchesClass;
  });

  if (sortBy === 'price-low') filtered = [...filtered].sort((a, b) => a.price - b.price);
  if (sortBy === 'price-high') filtered = [...filtered].sort((a, b) => b.price - a.price);
  if (sortBy === 'duration') filtered = [...filtered].sort((a, b) => a.duration.localeCompare(b.duration));

  const totalFlights = allFlights.length;
  const onTime = allFlights.filter((f) => f.status === 'On Time').length;
  const delayed = allFlights.filter((f) => f.status === 'Delayed').length;
  const cancelled = allFlights.filter((f) => f.status === 'Cancelled').length;

  const getStatusClass = (status) => {
    if (status === 'On Time') return 'status on-time';
    if (status === 'Delayed') return 'status delayed';
    if (status === 'Cancelled') return 'status cancelled-flight';
    if (status === 'Boarding') return 'status boarding';
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
        <Topbar pageTitle="Flights" onMenuClick={() => setMobileOpen(true)} />

        {/* Section 1: Stats Cards */}
        <div className="flight-stats-grid">
          <div className="flight-stat-card">
            <div className="stat-icon-wrap total">
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <path d="M17.8 19.2L16 11l3.5-3.5C21 6 21.5 4 21 3c-1-.5-3 0-4.5 1.5L13 8 4.8 6.2c-.5-.1-.9.1-1.1.5l-.3.5c-.2.5-.1 1 .3 1.3L9 12l-2 3H4l-1 1 3 2 2 3 1-1v-3l3-2 3.5 5.3c.3.4.8.5 1.3.3l.5-.2c.4-.3.6-.7.5-1.2z"></path>
              </svg>
            </div>
            <div>
              <h4>{totalFlights}</h4>
              <p>Total Flights</p>
            </div>
          </div>

          <div className="flight-stat-card">
            <div className="stat-icon-wrap on-time">
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <circle cx="12" cy="12" r="10"></circle>
                <polyline points="12 6 12 12 16 14"></polyline>
              </svg>
            </div>
            <div>
              <h4>{onTime}</h4>
              <p>On Time</p>
            </div>
          </div>

          <div className="flight-stat-card">
            <div className="stat-icon-wrap delayed">
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <circle cx="12" cy="12" r="10"></circle>
                <line x1="12" y1="8" x2="12" y2="12"></line>
                <line x1="12" y1="16" x2="12.01" y2="16"></line>
              </svg>
            </div>
            <div>
              <h4>{delayed}</h4>
              <p>Delayed</p>
            </div>
          </div>

          <div className="flight-stat-card">
            <div className="stat-icon-wrap cancelled">
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <circle cx="12" cy="12" r="10"></circle>
                <line x1="15" y1="9" x2="9" y2="15"></line>
                <line x1="9" y1="9" x2="15" y2="15"></line>
              </svg>
            </div>
            <div>
              <h4>{cancelled}</h4>
              <p>Cancelled</p>
            </div>
          </div>
        </div>

        {/* Section 2: Filters */}
        <div className="flight-filters">
          <div className="filter-group">
            <label>Status</label>
            <select value={statusFilter} onChange={(e) => setStatusFilter(e.target.value)}>
              <option>All</option>
              <option>On Time</option>
              <option>Delayed</option>
              <option>Boarding</option>
              <option>Cancelled</option>
            </select>
          </div>

          <div className="filter-group">
            <label>Class</label>
            <select value={classFilter} onChange={(e) => setClassFilter(e.target.value)}>
              <option>All</option>
              <option>Economy</option>
              <option>Business</option>
              <option>First Class</option>
            </select>
          </div>

          <div className="filter-group">
            <label>Sort By</label>
            <select value={sortBy} onChange={(e) => setSortBy(e.target.value)}>
              <option value="default">Default</option>
              <option value="price-low">Price: Low to High</option>
              <option value="price-high">Price: High to Low</option>
              <option value="duration">Duration</option>
            </select>
          </div>

          <div className="filter-group search-group">
            <label>Search</label>
            <input
              type="text"
              placeholder="Airline, city, flight no..."
              value={searchText}
              onChange={(e) => setSearchText(e.target.value)}
            />
          </div>
        </div>

        {/* Section 3: Table */}
        <div className="pharmacy-table-container">
          <h2 className="pharmacy-section-title">
            {filtered.length} Flights available
          </h2>

          <div className="pharmacy-table-controls">
            <div className="entries-control">
              <select
                value={entriesPerPage}
                onChange={(e) => setEntriesPerPage(Number(e.target.value))}
              >
                <option value={7}>7</option>
                <option value={10}>10</option>
                <option value={25}>25</option>
                <option value={50}>50</option>
              </select>
              <span>entries per page</span>
            </div>
          </div>

          <div className="pharmacy-table-wrapper">
            <table className="pharmacy-table">
              <thead>
                <tr>
                  <th>FLIGHT</th>
                  <th>AIRLINE</th>
                  <th>ROUTE</th>
                  <th>DEPART</th>
                  <th>ARRIVE</th>
                  <th>DURATION</th>
                  <th>CLASS</th>
                  <th>PRICE</th>
                  <th>STATUS</th>
                  <th>ACTION</th>
                </tr>
              </thead>
              <tbody>
                {filtered.slice(0, entriesPerPage).map((flight) => (
                  <tr key={flight.id}>
                    <td>
                      <div className="flight-id-cell">{flight.id}</div>
                    </td>
                    <td>
                      <div className="flight-airline-cell">
                        <AirlineLogo airline={flight.airline} size={34} />
                        <span>{flight.airline}</span>
                      </div>
                    </td>
                    <td>
                      <div className="flight-route-cell">
                        <span className="route-code">{flight.fromCode}</span>
                        <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                          <line x1="5" y1="12" x2="19" y2="12"></line>
                          <polyline points="12 5 19 12 12 19"></polyline>
                        </svg>
                        <span className="route-code">{flight.toCode}</span>
                      </div>
                    </td>
                    <td>{flight.departure}</td>
                    <td>{flight.arrival}</td>
                    <td>{flight.duration}</td>
                    <td>{flight.class}</td>
                    <td>
                      <span className="flight-price-cell">${flight.price}</span>
                    </td>
                    <td>
                      <span className={getStatusClass(flight.status)}>{flight.status}</span>
                    </td>
                    <td>
                      <button
                        className="btn-book-small"
                        onClick={() => setSelectedFlight(flight)}
                      >
                        BOOK
                      </button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          <div className="pharmacy-table-pagination">
            <div>
              Showing 1 to {Math.min(filtered.length, entriesPerPage)} of {filtered.length} entries
            </div>
            <div className="pagination">
              <button className="page-btn active">1</button>
            </div>
          </div>
        </div>

        <div className="footer">
          © 2026, made with ❤️ by SkyWings Airlines for a better travel.
        </div>
      </main>

      {/* Flight Details Panel */}
      {selectedFlight && (
        <>
          <div
            className="booking-overlay show"
            onClick={() => setSelectedFlight(null)}
          ></div>

          <div className="booking-panel show">
            <div className="panel-header">
              <h3>✈ FLIGHT DETAILS</h3>
              <button
                className="close-panel"
                onClick={() => setSelectedFlight(null)}
              >
                ✕
              </button>
            </div>

            <div className="flight-panel-header">
              <AirlineLogo airline={selectedFlight.airline} size={55} />
              <div>
                <h4>{selectedFlight.airline}</h4>
                <p>{selectedFlight.id}</p>
              </div>
            </div>

            <div className="flight-panel-route">
              <div className="route-endpoint">
                <div className="route-time">{selectedFlight.departure}</div>
                <div className="route-code-big">{selectedFlight.fromCode}</div>
                <div className="route-city">{selectedFlight.from}</div>
              </div>

              <div className="route-middle">
                <div className="route-line">
                  <div className="route-line-dot"></div>
                  <div className="route-line-dash"></div>
                  <svg width="18" height="18" viewBox="0 0 24 24" fill="#2563eb">
                    <path d="M21 16v-2l-8-5V3.5c0-.83-.67-1.5-1.5-1.5S10 2.67 10 3.5V9l-8 5v2l8-2.5V19l-2 1.5V22l3.5-1 3.5 1v-1.5L13 19v-5.5l8 2.5z" />
                  </svg>
                  <div className="route-line-dash"></div>
                  <div className="route-line-dot"></div>
                </div>
                <div className="route-duration">{selectedFlight.duration}</div>
                <div className="route-stops">{selectedFlight.stops}</div>
              </div>

              <div className="route-endpoint">
                <div className="route-time">{selectedFlight.arrival}</div>
                <div className="route-code-big">{selectedFlight.toCode}</div>
                <div className="route-city">{selectedFlight.to}</div>
              </div>
            </div>

            <div className="panel-info">
              <div className="info-row">
                <span className="label">Class:</span>
                <span className="value">{selectedFlight.class}</span>
              </div>
              <div className="info-row">
                <span className="label">Status:</span>
                <span className="value">
                  <span className={getStatusClass(selectedFlight.status)}>
                    {selectedFlight.status}
                  </span>
                </span>
              </div>
              <div className="info-row">
                <span className="label">Stops:</span>
                <span className="value">{selectedFlight.stops}</span>
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
                Close
              </button>
              <button
                className="btn-confirm-book"
                onClick={() => {
                  setSelectedFlight(null);
                  navigate('/booking');
                }}
              >
                Book Now
              </button>
            </div>
          </div>
        </>
      )}
    </>
  );
}

export default Flights;