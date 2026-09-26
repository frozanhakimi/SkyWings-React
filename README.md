# SkyWings Airlines

SkyWings Airlines is a responsive airline web application built with React and Vite.

The project provides a complete airline website interface with flight searching, booking management, user login, navigation, responsive layouts, and reusable React components.

## Project Overview

SkyWings Airlines is designed to provide users with an easy-to-use interface for exploring flights, managing bookings, and accessing airline-related services.

The project is built using React with reusable components and React Router for navigation between different pages.

## Technologies Used

- React
- React DOM
- React Router DOM
- Vite
- JavaScript (JSX)
- HTML5
- CSS3
- Git
- GitHub

## Features

- Responsive airline website
- User login page
- Flight search
- Flight information
- Booking management
- Booking details
- E-ticket view
- Upcoming bookings
- Completed bookings
- Cancelled bookings
- Sidebar navigation
- Top navigation bar
- Search functionality
- Hamburger menu
- Responsive mobile navigation
- Active navigation states
- Responsive design for different screen sizes
- Reusable React components

## Pages

### Home

The main page provides an overview of SkyWings Airlines and its available features and services.

### Find Flights

Users can search and explore available flights using the flight search interface.

### Bookings

Users can view and manage their bookings.

The booking section includes:

- Upcoming bookings
- Completed bookings
- Cancelled bookings
- Booking IDs
- Passenger information
- Flight information
- Ticket details
- Booking cancellation

### Login

The Login page provides the authentication interface for SkyWings Airlines users.

It includes:

- Login form
- Social login buttons
- Remember me option
- Forgot password option
- Sign-in button
- Sign-up option

## Navigation

The project includes a reusable Sidebar and Topbar.

### Sidebar

The Sidebar contains navigation links for:

- Home
- Flights
- Bookings
- Find Flights
- Destinations
- Messages
- Payments
- My Account
- Settings

### Topbar

The Topbar includes:

- Hamburger menu
- Page title
- Search box
- Login button
- User actions

## Responsive Design

The website is designed to work on:

- Desktop
- Laptop
- Tablet
- Mobile devices

On smaller screens, the navigation changes to a mobile-friendly hamburger menu and the content adjusts to the available screen size.

## Project Structure

```text
SkyWingsReact/
│
├── public/
│   └── images/
│       ├── logo.png
│       └── other project images
│
├── src/
│   │
│   ├── components/
│   │   ├── Sidebar.jsx
│   │   └── Topbar.jsx
│   │
│   ├── pages/
│   │   ├── Home.jsx
│   │   ├── Findflights.jsx
│   │   ├── Booking.jsx
│   │   └── Login.jsx
│   │
│   ├── styles/
│   │   ├── global.css
│   │   ├── pages.css
│   │   └── login.css
│   │
│   ├── App.jsx
│   └── main.jsx
│
├── index.html
├── package.json
├── vite.config.js
├── eslint.config.js
└── README.md