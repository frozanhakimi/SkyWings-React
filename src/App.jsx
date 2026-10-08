import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Dashboard from './pages/Dashboard';
import Flights from './pages/Flights';
import Findflights from './pages/Findflights';
import Booking from './pages/Booking';
import Shop from './pages/Shop';
import Destinations from './pages/Destinations';
import Profile from './pages/Profile';
import Login from './pages/Login';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Dashboard />} />
        <Route path="/flights" element={<Flights />} />
        <Route path="/find-flights" element={<Findflights />} />
        <Route path="/booking" element={<Booking />} />
        <Route path="/shop" element={<Shop />} />
        <Route path="/destinations" element={<Destinations />} />
        <Route path="/profile" element={<Profile />} />
        <Route path="/login" element={<Login />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;