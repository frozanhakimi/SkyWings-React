import { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';


function Topbar({ pageTitle, onMenuClick, cartCount, onCartClick }) {
  const [showHamburger, setShowHamburger] = useState(false);
  const [searchText, setSearchText] = useState('');
  const [showSearch, setShowSearch] = useState(false);
  const [isDarkMode, setIsDarkMode] = useState(false);
  
  const navigate = useNavigate();

  useEffect(() => {
    const savedTheme = localStorage.getItem('theme');
    if (savedTheme === 'dark') {
      setIsDarkMode(true);
      document.body.classList.add('dark-mode');
    }
  }, []);

  const toggleTheme = () => {
    if (isDarkMode) {
      document.body.classList.remove('dark-mode');
      localStorage.setItem('theme', 'light');
      setIsDarkMode(false);
    } else {
      document.body.classList.add('dark-mode');
      localStorage.setItem('theme', 'dark');
      setIsDarkMode(true);
    }
  };

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

        {/* Dark Mode Button */}
        <button
          onClick={toggleTheme}
          className="theme-toggle-btn"
          title={isDarkMode ? 'Switch to Light Mode' : 'Switch to Dark Mode'}
          type="button"
        >
          {isDarkMode ? (
            <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              <circle cx="12" cy="12" r="5"></circle>
              <line x1="12" y1="1" x2="12" y2="3"></line>
              <line x1="12" y1="21" x2="12" y2="23"></line>
              <line x1="4.22" y1="4.22" x2="5.64" y2="5.64"></line>
              <line x1="18.36" y1="18.36" x2="19.78" y2="19.78"></line>
              <line x1="1" y1="12" x2="3" y2="12"></line>
              <line x1="21" y1="12" x2="23" y2="12"></line>
              <line x1="4.22" y1="19.78" x2="5.64" y2="18.36"></line>
              <line x1="18.36" y1="5.64" x2="19.78" y2="4.22"></line>
            </svg>
          ) : (
            <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              <path d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z"></path>
            </svg>
          )}
        </button>

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
              <a href="#" onClick={(e) => { e.preventDefault(); navigate('/dashboard'); }}>Dashboard</a>
            </div>
          )}
        </div>

        <button className="login-btn" onClick={() => navigate('/login')}>Login</button>

        <div className="user-actions">
          
         
          {onCartClick && (
            <div className="cart-icon-wrapper" onClick={onCartClick} style={{ marginRight: '5px' }}>
              <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <circle cx="9" cy="21" r="1"></circle>
                <circle cx="20" cy="21" r="1"></circle>
                <path d="M1 1h4l2.68 13.39a2 2 0 0 0 2 1.61h9.72a2 2 0 0 0 2-1.61L23 6H6"></path>
              </svg>
              {cartCount > 0 && <span className="cart-badge">{cartCount}</span>}
            </div>
          )}

         
          <svg
            width="20"
            height="20"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            onClick={() => navigate('/signup')}
            style={{ cursor: 'pointer' }}
            title="Sign Up"
          >
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