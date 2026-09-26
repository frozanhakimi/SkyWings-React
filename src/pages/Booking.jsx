
import { useState } from 'react';
import Sidebar from '../components/Sidebar';


const initialBookings = [
  { id: 'SKW-12345', from: 'Kabul (KBL)', to: 'Dubai (DXB)', fromCode: 'KBL', toCode: 'DXB', fromCity: 'Kabul', toCity: 'Dubai', date: '15 Oct 2024', time: '08:00 AM', passenger: 'Frozan Hakimi', status: 'confirmed', tab: 'upcoming' },
  { id: 'SKW-12346', from: 'Kabul (KBL)', to: 'Istanbul (IST)', fromCode: 'KBL', toCode: 'IST', fromCity: 'Kabul', toCity: 'Istanbul', date: '22 Oct 2024', time: '09:30 AM', passenger: 'Frozan Hakimi', status: 'confirmed', tab: 'upcoming' },
  { id: 'SKW-12347', from: 'Kabul (KBL)', to: 'Frankfurt (FRA)', fromCode: 'KBL', toCode: 'FRA', fromCity: 'Kabul', toCity: 'Frankfurt', date: '28 Oct 2024', time: '11:45 AM', passenger: 'Frozan Hakimi', status: 'confirmed', tab: 'upcoming' },
  { id: 'SKW-12348', from: 'Kabul (KBL)', to: 'Singapore (SIN)', fromCode: 'KBL', toCode: 'SIN', fromCity: 'Kabul', toCity: 'Singapore', date: '05 Nov 2024', time: '10:00 PM', passenger: 'Frozan Hakimi', status: 'confirmed', tab: 'upcoming' },
  { id: 'SKW-11111', from: 'Kabul (KBL)', to: 'Delhi (DEL)', fromCode: 'KBL', toCode: 'DEL', fromCity: 'Kabul', toCity: 'Delhi', date: '05 Sep 2024', time: '06:00 AM', passenger: 'Frozan Hakimi', status: 'completed', tab: 'completed' },
  { id: 'SKW-99999', from: 'Kabul (KBL)', to: 'Dubai (DXB)', fromCode: 'KBL', toCode: 'DXB', fromCity: 'Kabul', toCity: 'Dubai', date: '10 Aug 2024', time: '14:15 PM', passenger: 'Frozan Hakimi', status: 'cancelled', tab: 'cancelled' },
];

function Booking() {
  const [activeTab, setActiveTab] = useState('upcoming');
  const [bookings, setBookings] = useState(initialBookings);
  const [selectedBooking, setSelectedBooking] = useState(null);

  const filteredBookings = bookings.filter((b) => b.tab === activeTab);

  const handleCancel = (id) => {
    if (window.confirm('Are you sure you want to cancel this booking?')) {
      setBookings((prev) =>
        prev.map((b) =>
          b.id === id ? { ...b, status: 'cancelled', tab: 'cancelled' } : b
        )
      );
    }
  };

  return (
    <>
      <Sidebar />

      <main className="main-content">
        {/* HERO */}
        <div className="page-hero">
          <div className="page-hero-content">
            <h2>My Bookings</h2>
            <p>View and manage all your flight reservations in one place</p>

            <div className="hero-search-form">
              <input
                type="text"
                placeholder="Search by Booking ID or Passenger Name"
              />

              <button className="btn-search">
                SEARCH
              </button>
            </div>
          </div>
        </div>

        {/* TABS */}
        <div className="view-tabs">
          <button
            className={`tab-btn ${activeTab === 'upcoming' ? 'active' : ''}`}
            onClick={() => setActiveTab('upcoming')}
          >
            Upcoming ({bookings.filter((b) => b.tab === 'upcoming').length})
          </button>

          <button
            className={`tab-btn ${activeTab === 'completed' ? 'active' : ''}`}
            onClick={() => setActiveTab('completed')}
          >
            Completed ({bookings.filter((b) => b.tab === 'completed').length})
          </button>

          <button
            className={`tab-btn ${activeTab === 'cancelled' ? 'active' : ''}`}
            onClick={() => setActiveTab('cancelled')}
          >
            Cancelled ({bookings.filter((b) => b.tab === 'cancelled').length})
          </button>
        </div>

        {/* BOOKING CARDS */}
        <div className="view-content active">
          {filteredBookings.map((booking) => (
            <div
              className="booking-card"
              key={booking.id}
              style={
                booking.status === 'cancelled'
                  ? { opacity: 0.85 }
                  : {}
              }
            >
              <div className="booking-header">
                <span>
                  Booking ID: #{booking.id}
                </span>

                <span className={`status ${booking.status}`}>
                  {booking.status === 'confirmed' && 'Confirmed'}
                  {booking.status === 'completed' && 'Completed'}
                  {booking.status === 'cancelled' && 'Cancelled'}
                </span>
              </div>

              <div className="booking-body">
                <div className="booking-route">
                  <h4>
                    {booking.from} → {booking.to}
                  </h4>

                  <p>
                    Date: {booking.date} | Time: {booking.time}
                  </p>

                  <p>
                    Passenger: {booking.passenger}
                  </p>
                </div>

                <div className="booking-actions">
                  <button
                    className="btn-blue"
                    onClick={() => setSelectedBooking(booking)}
                  >
                    View Ticket
                  </button>

                  {booking.tab === 'upcoming' && (
                    <button
                      className="btn-cancel"
                      onClick={() => handleCancel(booking.id)}
                    >
                      Cancel
                    </button>
                  )}
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="footer">
          © 2024 SkyWings Airlines . Privacy Policy | Terms | Contact
        </div>
      </main>

      {/* TICKET PANEL */}
      {selectedBooking && (
        <>
          <div
            className="ticket-overlay show"
            onClick={() => setSelectedBooking(null)}
          ></div>

          <div className="ticket-panel show">

            <div className="ticket-header">
              <h3>✈ E-TICKET</h3>

              <button
                className="close-ticket"
                onClick={() => setSelectedBooking(null)}
              >
                ✕
              </button>
            </div>

            <div className="ticket-route">

              <div className="city">
                <div className="code">
                  {selectedBooking.fromCode}
                </div>

                <div className="name">
                  {selectedBooking.fromCity}
                </div>
              </div>

              <div className="plane-icon">
                ✈
              </div>

              <div className="city">
                <div className="code">
                  {selectedBooking.toCode}
                </div>

                <div className="name">
                  {selectedBooking.toCity}
                </div>
              </div>

            </div>

            <div className="ticket-info">

              <div className="ticket-row">
                <span className="label">
                  Booking ID:
                </span>

                <span className="value">
                  #{selectedBooking.id}
                </span>
              </div>

              <div className="ticket-row">
                <span className="label">
                  Passenger:
                </span>

                <span className="value">
                  {selectedBooking.passenger}
                </span>
              </div>

              <div className="ticket-row">
                <span className="label">
                  Date:
                </span>

                <span className="value">
                  {selectedBooking.date}
                </span>
              </div>

              <div className="ticket-row">
                <span className="label">
                  Time:
                </span>

                <span className="value">
                  {selectedBooking.time}
                </span>
              </div>

            </div>

            <div className="ticket-footer">

              <span className="status-badge">
                Confirmed
              </span>

              <div className="barcode">
                <span style={{ height: '20px' }}></span>
                <span style={{ height: '14px' }}></span>
                <span style={{ height: '22px' }}></span>
                <span style={{ height: '10px' }}></span>
                <span style={{ height: '18px' }}></span>
                <span style={{ height: '22px' }}></span>
                <span style={{ height: '12px' }}></span>
                <span style={{ height: '20px' }}></span>
                <span style={{ height: '16px' }}></span>
                <span style={{ height: '22px' }}></span>
                <span style={{ height: '14px' }}></span>
                <span style={{ height: '18px' }}></span>
              </div>

            </div>

          </div>
        </>
      )}
    </>
  );
}

export default Booking;
