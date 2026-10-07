import { useState } from 'react';
import Sidebar from '../components/Sidebar';
import Topbar from '../components/Topbar';
import { useNavigate } from 'react-router-dom';

const destinations = [
  {
    id: '634729',
    city: 'Dubai',
    country: 'United Arab Emirates',
    category: 'City',
    airline: 'Emirates',
    discount: 0,
    price: 320,
    image: '/images/dubai.jpg',
    description: 'Modern city with stunning skyscrapers and luxury shopping.',
    flightTime: '2h 30m',
    type: 'Direct',
  },
  {
    id: '8234',
    city: 'Istanbul',
    country: 'Turkey',
    category: 'Historic',
    airline: 'Turkish Airlines',
    discount: 5,
    price: 520,
    image: '/images/istanbul.jpg',
    description: 'Historic city bridging Europe and Asia with rich culture.',
    flightTime: '5h 20m',
    type: '1 Stop',
  },
  {
    id: '872',
    city: 'London',
    country: 'United Kingdom',
    category: 'Metropolis',
    airline: 'British Airways',
    discount: 3,
    price: 680,
    image: '/images/london.jpg',
    description: 'Global capital with iconic landmarks and museums.',
    flightTime: '8h 15m',
    type: 'Direct',
  },
  {
    id: '0134',
    city: 'Singapore',
    country: 'Singapore',
    category: 'Tropical',
    airline: 'Singapore Airlines',
    discount: 7,
    price: 890,
    image: '/images/singapore.jpg',
    description: 'Garden city with futuristic architecture and great food.',
    flightTime: '10h 30m',
    type: '1 Stop',
  },
  {
    id: '113',
    city: 'Frankfurt',
    country: 'Germany',
    category: 'Business',
    airline: 'Lufthansa',
    discount: 5,
    price: 720,
    image: '/images/frankfurt.jpg',
    description: 'Financial hub with historic architecture and vibrant scene.',
    flightTime: '7h 15m',
    type: 'Direct',
  },
  {
    id: '629',
    city: 'Delhi',
    country: 'India',
    category: 'Cultural',
    airline: 'Air India',
    discount: 0,
    price: 450,
    image: '/images/delhi.jpg',
    description: 'Historic capital blending ancient traditions with modern life.',
    flightTime: '4h 45m',
    type: 'Direct',
  },
];

function Destinations() {
  const [searchText, setSearchText] = useState('');
  const [entriesPerPage, setEntriesPerPage] = useState(7);
  const [collapsed, setCollapsed] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const [selectedDestination, setSelectedDestination] = useState(null);

  const navigate = useNavigate();

  const filtered = destinations.filter(
    (d) =>
      d.city.toLowerCase().includes(searchText.toLowerCase()) ||
      d.country.toLowerCase().includes(searchText.toLowerCase())
  );

  const handleBookNow = (destination) => {
    setSelectedDestination(destination);
  };

  const handleConfirm = () => {
    setSelectedDestination(null);
    navigate('/find-flights');
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
          pageTitle="Destinations"
          onMenuClick={() => setMobileOpen(true)}
        />

        {/* Product Cards */}
        <div className="pharmacy-page-section">
          <h2 className="pharmacy-section-heading">
            Search Flight Destinations
          </h2>

          <div className="pharmacy-cards-grid">
            {filtered.slice(0, 4).map((d) => (
              <div className="pharmacy-product-card" key={d.id}>
                <div className="pharmacy-product-image">
                  <img src={d.image} alt={d.city} />
                </div>

                <div className="pharmacy-product-details">
                  <div className="pharmacy-product-top">
                    <span className="pharmacy-product-name">{d.city}</span>
                    <span className="pharmacy-product-price">${d.price}</span>
                  </div>

                  <div className="pharmacy-product-vendor">
                    <span className="pharmacy-vendor-icon">✈️</span>
                    <span>{d.airline}</span>
                  </div>

                  <p className="pharmacy-product-desc">{d.description}</p>

                  <button
                    className="btn-buy-purple"
                    onClick={() => handleBookNow(d)}
                  >
                    BOOK NOW
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Table */}
        <div className="pharmacy-table-container">
          <h2 className="pharmacy-section-title">
            {filtered.length} Destinations returned for the keyword{' '}
            {searchText || 'all'}
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

            <div className="search-control">
              <input
                type="text"
                placeholder="Search..."
                value={searchText}
                onChange={(e) => setSearchText(e.target.value)}
              />
            </div>
          </div>

          <div className="pharmacy-table-wrapper">
            <table className="pharmacy-table">
              <thead>
                <tr>
                  <th>DESTINATION</th>
                  <th>CATEGORY</th>
                  <th>AIRLINE</th>
                  <th>DISCOUNT</th>
                  <th>PRICE</th>
                  <th>ID</th>
                </tr>
              </thead>
              <tbody>
                {filtered.map((d) => (
                  <tr
                    key={d.id}
                    onClick={() => setSelectedDestination(d)}
                    style={{ cursor: 'pointer' }}
                  >
                    <td>
                      <div className="pharmacy-table-product">
                        <img
                          src={d.image}
                          alt={d.city}
                          className="pharmacy-table-img"
                        />
                        <div>
                          <div className="pharmacy-table-name">{d.city}</div>
                          <div className="pharmacy-table-sub">{d.country}</div>
                        </div>
                      </div>
                    </td>
                    <td>{d.category}</td>
                    <td>{d.airline}</td>
                    <td>{d.discount}</td>
                    <td>${d.price}</td>
                    <td>{d.id}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          <div className="pharmacy-table-pagination">
            <div>
              Showing 1 to {filtered.length} of {filtered.length} entries
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

      {/* DESTINATION DETAILS PANEL */}
      {selectedDestination && (
        <>
          <div
            className="booking-overlay show"
            onClick={() => setSelectedDestination(null)}
          ></div>

          <div className="booking-panel show">
            <div className="panel-header">
              <h3>✈ DESTINATION</h3>
              <button
                className="close-panel"
                onClick={() => setSelectedDestination(null)}
              >
                ✕
              </button>
            </div>

            <div className="destination-panel-image">
              <img
                src={selectedDestination.image}
                alt={selectedDestination.city}
              />
            </div>

            <div className="panel-info">
              <div className="info-row">
                <span className="label">City:</span>
                <span className="value">{selectedDestination.city}</span>
              </div>
              <div className="info-row">
                <span className="label">Country:</span>
                <span className="value">{selectedDestination.country}</span>
              </div>
              <div className="info-row">
                <span className="label">Airline:</span>
                <span className="value">{selectedDestination.airline}</span>
              </div>
              <div className="info-row">
                <span className="label">Flight Time:</span>
                <span className="value">{selectedDestination.flightTime}</span>
              </div>
              <div className="info-row">
                <span className="label">Type:</span>
                <span className="value">{selectedDestination.type}</span>
              </div>
              <div className="info-row">
                <span className="label">Discount:</span>
                <span className="value">{selectedDestination.discount}%</span>
              </div>
            </div>

            <div className="product-description-box">
              <p>{selectedDestination.description}</p>
            </div>

            <div className="panel-total">
              <div className="total-label">STARTING FROM</div>
              <div className="total-price">${selectedDestination.price}</div>
            </div>

            <div className="panel-actions">
              <button
                className="btn-cancel-book"
                onClick={() => setSelectedDestination(null)}
              >
                Cancel
              </button>
              <button className="btn-confirm-book" onClick={handleConfirm}>
                Book Flight
              </button>
            </div>
          </div>
        </>
      )}
    </>
  );
}

export default Destinations;