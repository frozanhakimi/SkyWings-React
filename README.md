✈️ SkyWings Airlines — React Application
A modern airline management web application built with React + Vite and Chart.js

📖 About
SkyWings Airlines is a complete frontend simulation of an airline booking system. Users can browse flights, book tickets, explore destinations, shop for travel essentials, manage their profile, and view live analytics — all in a modern, responsive React interface.     


## 🛠️ Tech Stack

- **React 19** — UI components and state management
- **Vite** — Build tool
- **React Router v7** — Client-side routing
- **Chart.js + react-chartjs-2** — Real interactive doughnut charts
- **CSS3** — Custom styling (Flexbox, Grid, animations)
- **SVG** — Inline icons and airline logos
- **Font Awesome** — Social icons on login page
- **Git & GitHub** — Version control

---

## 👥 Team

| Member | Responsibility |
|--------|----------------|
| **Frozan Hakimi** | All HTML/JSX pages, all JavaScript logic, React components |
| **Asma Sultani** | Login page styling and all responsive design |

---

## 📁 Project Structure
SkyWingsReact/
├── public/
│ └── images/ # Logos, backgrounds, city images
│
├── src/
│ ├── components/
│ │ ├── Sidebar.jsx # Navigation sidebar with collapse
│ │ ├── Topbar.jsx # Top bar with search, login, user icons
│ │ ├── AirlineLogo.jsx # SVG-based airline logos
│ │ ├── ProductCard.jsx # Reusable product card (Shop)
│ │ └── DonutChart.jsx # Reusable Chart.js doughnut chart
│ │
│ ├── pages/
│ │ ├── Dashboard.jsx # Main dashboard with real charts
│ │ ├── Flights.jsx # Flight schedule table with filters
│ │ ├── Findflights.jsx # Flight search with list/grid view
│ │ ├── Booking.jsx # Booking management with tabs
│ │ ├── Shop.jsx # In-flight marketplace
│ │ ├── Destinations.jsx # Explore popular destinations
│ │ ├── Profile.jsx # Multi-step travel profile form
│ │ └── Login.jsx # Login page (standalone)
│ │
│ ├── styles/
│ │ ├── global.css # Main styles (all pages)
│ │ └── login.css # Login page styles
│ │
│ ├── App.jsx # Router configuration
│ └── main.jsx # React entry point
│
├── index.html
├── package.json
└── README.md

text

---

## 🚀 Getting Started

### Prerequisites

- **Node.js** v16 or higher — [Download](https://nodejs.org)

### Installation

```bash
# Clone the repository
git clone https://github.com/frozanhakimi/SkyWings-React.git

# Enter the folder
cd SkyWings-React

# Install dependencies
npm install

# Start the development server
npm run dev
Open: http://localhost:5173/

📄 Pages
Route	Page
/	Dashboard with real charts
/flights	Flight schedule with filters
/find-flights	Flight search (List/Grid)
/booking	Bookings (Upcoming, Completed, Cancelled)
/shop	In-flight marketplace
/destinations	Popular destinations
/profile	Multi-step profile form
/login	Login page
🎨 Color Palette
Color	Hex	Usage
Navy Blue	#1e3a8a	Primary brand color, buttons
Medium Blue	#2563eb	Gradients, hover states
Light Blue	#3b82f6	Accents, progress bars
Green	#10b981	Confirmed, On Time
Yellow	#eab308	Delayed, Warnings
Red	#e11d48	Cancelled, Errors
🎯 Key Features
✅ Real Chart.js doughnut charts (not images)

✅ SVG-based airline logos with brand colors

✅ Responsive (desktop, tablet, mobile)

✅ Interactive panels (slide in from left/right)

✅ Collapsible sidebar with mobile mode

✅ Search, filters, and sorting on tables

🎯 Available Scripts
bash
npm run dev       # Start dev server (localhost:5173)
npm run build     # Build for production
npm run preview   # Preview production build
📄 License
This project was created for educational purposes only.

👩‍💻 Authors
Frozan Hakimi — GitHub
Asma Sultani — Login page styling and responsive design

© 2026 SkyWings Airlines — Built with ❤️ using React