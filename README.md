✈️ SkyWings Airlines — React Application
A modern airline management web application built with React + Vite and Chart.js

📖 About
SkyWings Airlines is a complete frontend simulation of an airline booking system. Users can browse flights, book tickets, explore destinations, shop for travel essentials, manage their profile, and view live analytics — all in a modern, responsive React interface.

This project was built as an educational assignment to practice:

React components and routing

React Hooks (useState, useEffect, useNavigate)

Chart.js integration

Responsive design with CSS

Git & GitHub workflow

🛠️ Tech Stack
Technology	Purpose
React 19	UI components and state management
Vite	Fast development server and bundler
React Router v7	ClienCSSt-side routing
Chart.js + react-chartjs-2	Real interactive doughnut charts
CSS3	Custom styling, Flexbox, Grid, animations
SVG	Inline icons and airline logos
Font Awesome	Social icons on login page
Git & GitHub	Version control
👥 Team
Member	Responsibility
Frozan Hakimi	All HTML/JSX pages, all JavaScript logic,Global.Css React components
Asma Sultani	Login page HTML, styling and all responsive design
📁 Project Structure
text
SkyWingsReact/
├── public/
│   └── images/                 # Logos, backgrounds, city images
│
├── src/
│   ├── components/
│   │   ├── Sidebar.jsx         # Navigation sidebar with collapse
│   │   ├── Topbar.jsx          # Top bar with search, login, user icons
│   │   ├── AirlineLogo.jsx     # SVG-based airline logos (EK, QR, etc.)
│   │   ├── ProductCard.jsx     # Reusable product card (Shop)
│   │   └── DonutChart.jsx      # Reusable Chart.js doughnut chart
│   │
│   ├── pages/
│   │   ├── Dashboard.jsx       # Main dashboard with real charts
│   │   ├── Flights.jsx         # Flight schedule table with filters
│   │   ├── Findflights.jsx     # Flight search with list/grid view
│   │   ├── Booking.jsx         # Booking management with tabs
│   │   ├── Shop.jsx            # In-flight marketplace
│   │   ├── Destinations.jsx    # Explore popular destinations
│   │   ├── Profile.jsx         # Multi-step travel profile form
│   │   └── Login.jsx           # Login page (standalone)
│   │
│   ├── styles/
│   │   ├── global.css          # Main styles (all pages)
│   │   └── login.css           # Login page styles (isolated)
│   │
│   ├── App.jsx                 # Router configuration
│   └── main.jsx                # React entry point
│
├── index.html                  # HTML shell
├── package.json
└── README.md
🚀 Getting Started
Prerequisites
Node.js v16 or higher (Download from nodejs.org)

Installation
bash
# 1. Clone the repository
git clone https://github.com/frozanhakimi/SkyWings-React.git

# 2. Enter the folder
cd SkyWings-React

# 3. Install dependencies
npm install

# 4. Start the development server
npm run dev
Open in browser
http://localhost:5173/

📄 Pages Overview
🏠 Dashboard (/)
4 statistic cards with real Chart.js doughnut charts

Flight Promotions, Booking Overview, Smart Market Usage

Flight Performance progress bars

Animated charts on page load

✈️ Flights (/flights)
4 stat cards: Total, On Time, Delayed, Cancelled

Advanced filters: Status, Class, Sort by, Search

Full table with 10 flights

Airline SVG logos with brand colors

Status badges (On Time, Delayed, Boarding, Cancelled)

Booking panel slides in from the right

🔍 Find Flights (/find-flights)
Hero banner with search form

Toggle between List View and Grid View

6 flight cards (Qatar, Emirates, Turkish, Lufthansa, Singapore, Flydubai)

BOOK panel with total price

📋 Bookings (/booking)
3 tabs: Upcoming (4), Completed (1), Cancelled (1)

6 booking cards with status badges

E-Ticket panel slides in from the left

Cancel booking functionality

🛍️ Shop (/shop)
In-flight marketplace with 6 products

Hero banner with search

Data table with all products

Product details panel with Buy Now button

🌍 Destinations (/destinations)
6 popular destination cards with photos

Search filter by city/country

Data table with all destinations

Details panel with airline info and starting price

👤 My Profile (/profile)
Multi-step form:

Passenger Registration
Travel Preferences
Choose Your Plan (Economy / Business / First Class)
Progress step indicator

🔐 Login (/login)
Standalone page (no sidebar/topbar)

Social login buttons (Facebook, Google)

Email + password validation

Remember Me checkbox

🎨 Color Palette
Color	Hex	Usage
Navy Blue	#1e3a8a	Primary brand color, buttons
Medium Blue	#2563eb	Gradients, hover states
Light Blue	#3b82f6	Accents, progress bars
White	#ffffff	Cards, backgrounds
Gray	#6b7280	Secondary text
Green	#10b981	Confirmed, On Time
Yellow	#eab308	Delayed, Warnings
Red	#e11d48	Cancelled, Errors
🎯 Key Features
✨ Real Interactive Charts
Uses Chart.js with react-chartjs-2

Animated doughnut charts (1.2s rotation)

Custom tooltips with navy-blue background

Hover effects with 10px offset

🎨 SVG-Based Airline Logos
No PNG downloads needed

Each airline has brand-specific gradient colors

Letter initials (QR, EK, TK, LH, SQ, FZ, BA, AI)

Auto-sized based on context

📱 Responsive Design
Desktop: Full layout with sidebar visible

Tablet (≤1024px): Compact layout

Mobile (≤768px): Sidebar as floating window, hamburger opens it

🎭 Interactive Panels
Booking Panel: Slides from right

E-Ticket Panel: Slides from left

Product Panel: Slides from right

Destination Panel: Slides from right

Close via X, overlay click, or Escape key

🧭 Sidebar Features
Collapse/expand on desktop (circular button)

Mobile mode with floating window

Active link highlighting

Support card at bottom

🔗 Navigation Flow
text
Dashboard (/)
    ├── Flights        → /flights
    ├── Bookings       → /booking
    ├── Find Flights   → /find-flights
    ├── Destinations   → /destinations
    ├── Shop           → /shop
    ├── My Profile     → /profile
    └── Login          → /login
🎯 Key React Concepts Used
Hooks
useState — Manage dropdowns, panels, tabs, filters

useNavigate — Programmatic navigation

useLocation — Active link detection in Sidebar

useEffect — Cleanup and window resize handling

Patterns
Component Composition — Sidebar + Topbar reusable

Props — pageTitle, onMenuClick, airline, etc.

Conditional Rendering — {selectedFlight && <Panel />}

Array Mapping — flights.map(f => <Row />)

State Lifting — Parent passes state to children

Controlled Inputs — value={searchText} onChange={...}

Routing
BrowserRouter — Wraps the app

Routes — Contains all route definitions

Route — Maps URL to component

Link — Client-side navigation

📦 Dependencies
json
{
  "dependencies": {
    "react": "^19.x",
    "react-dom": "^19.x",
    "react-router-dom": "^7.x",
    "chart.js": "^4.x",
    "react-chartjs-2": "^5.x"
  },
  "devDependencies": {
    "vite": "^8.x",
    "@vitejs/plugin-react": "^4.x"
  }
}
🎯 Available Scripts
bash
npm run dev       # Start dev server (localhost:5173)
npm run build     # Build for production
npm run preview   # Preview production build
📱 Responsive Breakpoints
Breakpoint	Layout
> 1024px	Full desktop (2-column dashboard, wide sidebar)
768px – 1024px	Tablet (1-column, narrower search)
< 768px	Mobile (floating sidebar, stacked cards)
🎯 What Was Converted from HTML
Original HTML	React Version
4 HTML pages	8 React pages with routes
style.css	global.css
responsive.css	Merged into global.css
pages.css	Merged into global.css
script.js	React state + hooks
dashboard.js	useNavigate in Topbar
pages.js	Component logic in pages
Static PNG charts	Real Chart.js donuts
PNG airline logos	SVG-based AirlineLogo component
🚧 Future Improvements
Add real backend API

Implement Firebase authentication

Add SkyMiles loyalty program

Add live flight tracker with map

Add smart boarding assistant

Save bookings in localStorage

Add dark mode toggle

📄 License
This project was created for educational purposes only.

👩‍💻 Authors
Frozan Hakimi — GitHub: https://github.com/frozanhakimi

Asma Sultani — Login and responsive design

🙏 Acknowledgements
Chart.js for chart library

Vite for the build tool

React Router for routing

Font Awesome for login icons

Our instructor for guidance

© 2026 SkyWings Airlines — Educational Project

Built with ❤️ using React

