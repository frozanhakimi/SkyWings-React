import { useState } from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Dashboard from './pages/Dashboard';
import Flights from './pages/Flights';
import Findflights from './pages/Findflights';
import Booking from './pages/Booking';
import Shop from './pages/Shop';
import Destinations from './pages/Destinations';
import Profile from './pages/Profile';
import Safety from './pages/Safety';
import Skymiles from './pages/Skymiles';
import LiveFlights from './pages/LiveFlights';
import Signup from './pages/Signup';
import Login from './pages/Login';

function App() {
  // ✅ State برای نگهداری محصولات سبد خرید
  const [cartItems, setCartItems] = useState([]);

  // ✅ تابع اضافه کردن به سبد خرید
  const addToCart = (product) => {
    setCartItems((prev) => {
      const existing = prev.find((item) => item.id === product.id);
      if (existing) {
        return prev.map((item) =>
          item.id === product.id ? { ...item, quantity: item.quantity + 1 } : item
        );
      }
      return [...prev, { ...product, quantity: 1 }];
    });
  };

  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="/flights" element={<Flights />} />
        <Route path="/find-flights" element={<Findflights />} />
        <Route path="/booking" element={<Booking />} />
        {/* ارسال cartItems و addToCart به صفحه Shop */}
        <Route path="/shop" element={<Shop cartItems={cartItems} addToCart={addToCart} setCartItems={setCartItems} />} />
        <Route path="/destinations" element={<Destinations />} />
        <Route path="/profile" element={<Profile />} />
        <Route path="/safety" element={<Safety />} />
        <Route path="/skymiles" element={<Skymiles />} />
        <Route path="/live-flights" element={<LiveFlights />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;