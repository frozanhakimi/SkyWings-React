import { useState } from 'react';
import { useNavigate } from 'react-router-dom';

function Topbar({ pageTitle, onMenuClick }) {
  const [showHamburger, setShowHamburger] = useState(false);
  const [searchText, setSearchText] = useState('');
  const [showSearch, setShowSearch] = useState(false);
  const navigate = useNavigate();

  const handleSearchChange = (e) => {
    setSearchText(e.target.value);
    setShowSearch(e.target.value.trim().length > 0);
  };

  const handleSelectOption = (option) => {
    setShowHamburger(false);
    if (option === 'Log out') {
      if (window.confirm('Are you sure you want to log out?')) {
        navigate('/login');
      }
    } else {
      alert(option + ' selected.');
    }
  };

  return (
    <header className="topbar">
      <div className="topbar-left">
        <button
          className="hamburger"
          onClick={(e) => {
            e.stopPropagation();

            if (window.innerWidth <= 768) {
              onMenuClick?.();
            } else {
              setShowHamburger(!showHamburger);
            }
          }}
        >
          <div className="line"></div>
          <div className="line"></div>
          <div className="line"></div>
        </button>

        <div className="page-title">
          <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
            <path d="M3 9l9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z"></path>
          </svg>
          <span>{pageTitle}</span>
        </div>

        {showHamburger && (
          <div className="hamburger-dropdown show">
            <a href="#" onClick={(e) => { e.preventDefault(); handleSelectOption('Profile'); }}>Profile</a>
            <a href="#" onClick={(e) => { e.preventDefault(); handleSelectOption('Settings'); }}>Settings</a>
            <a href="#" onClick={(e) => { e.preventDefault(); handleSelectOption('Help'); }}>Help</a>
            <a href="#" onClick={(e) => { e.preventDefault(); handleSelectOption('Log out'); }}>Log out</a>
          </div>
        )}
      </div>

      <div className="topbar-right">
        <div className="search-box">
          <input
            type="text"
            placeholder="Type here..."
            value={searchText}
            onChange={handleSearchChange}
          />
          <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
            <circle cx="11" cy="11" r="8"></circle>
            <line x1="21" y1="21" x2="16.65" y2="16.65"></line>
          </svg>

          {showSearch && (
            <div className="search-dropdown show">
              <a href="#" onClick={(e) => { e.preventDefault(); navigate('/find-flights'); }}>Find Flights</a>
              <a href="#" onClick={(e) => { e.preventDefault(); navigate('/booking'); }}>Bookings</a>
              <a href="#" onClick={(e) => { e.preventDefault(); navigate('/'); }}>Dashboard</a>
            </div>
          )}
        </div>

        <button className="login-btn" onClick={() => navigate('/login')}>Login</button>

        <div className="user-actions">
          <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
            <path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2"></path>
            <circle cx="12" cy="7" r="4"></circle>
          </svg>
          <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
            <circle cx="12" cy="12" r="3"></circle>
            <path d="M19.4 15a1.65 1.65 0 0 0 .33 1.82l.06.06a2 2 0 0 1 0 2.83 2 2 0 0 1-2.83 0l-.06-.06a1.65 1.65 0 0 0-1.82-.33 1.65 1.65 0 0 0-1 1.51V21a2 2 0 0 1-2 2 2 2 0 0 1-2-2v-.09A1.65 1.65 0 0 0 9 19.4a1.65 1.65 0 0 0-1.82.33l-.06.06a2 2 0 0 1-2.83 0 2 2 0 0 1 0-2.83l.06-.06a1.65 1.65 0 0 0 .33-1.82 1.65 1.65 0 0 0-1.51-1H3a2 2 0 0 1-2-2 2 2 0 0 1 2-2h.09A1.65 1.65 0 0 0 4.6 9a1.65 1.65 0 0 0-.33-1.82l-.06-.06a2 2 0 0 1 0-2.83 2 2 0 0 1 2.83 0l.06.06a1.65 1.65 0 0 0 1.82.33H9a1.65 1.65 0 0 0 1-1.51V3a2 2 0 0 1 2-2 2 2 0 0 1 2 2v.09a1.65 1.65 0 0 0 1 1.51 1.65 1.65 0 0 0 1.82-.33l.06-.06a2 2 0 0 1 2.83 0 2 2 0 0 1 0 2.83l-.06.06a1.65 1.65 0 0 0-.33 1.82V9a1.65 1.65 0 0 0 1.51 1H21a2 2 0 0 1 2 2 2 2 0 0 1-2 2h-.09a1.65 1.65 0 0 0-1.51 1z"></path>
          </svg>
        </div>
      </div>
    </header>
  );
}

export default Topbar;