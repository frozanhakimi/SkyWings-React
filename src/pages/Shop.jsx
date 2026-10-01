import { useState } from 'react';
import Sidebar from '../components/Sidebar';
import Topbar from '../components/Topbar';
import ProductCard from '../components/ProductCard';

const products = [
  {
    id: '243598234',
    name: 'In-Flight Meal',
    category: 'Food',
    vendor: 'SkyWings Catering',
    discount: 0,
    price: 15,
    icon: '🍽️',
    description: 'Fresh gourmet meal served during your flight with vegetarian options.',
  },
  {
    id: '877712',
    name: 'Duty-Free Perfume',
    category: 'Cosmetics',
    vendor: 'SkyWings Duty-Free',
    discount: 5,
    price: 50,
    icon: '💐',
    description: 'Premium designer fragrances at exclusive onboard prices.',
  },
  {
    id: '0134729',
    name: 'Neck Pillow',
    category: 'Comfort',
    vendor: 'SkyWings Comfort',
    discount: 9,
    price: 20,
    icon: '🛋️',
    description: 'Ergonomic memory foam pillow for restful sleep during flights.',
  },
  {
    id: '113213',
    name: 'Wi-Fi Package',
    category: 'Internet',
    vendor: 'SkyWings Connect',
    discount: 5,
    price: 8,
    icon: '📶',
    description: 'Stay connected with high-speed in-flight Wi-Fi for the whole trip.',
  },
  {
    id: '634729',
    name: 'Extra Baggage',
    category: 'Travel',
    vendor: 'SkyWings Cargo',
    discount: 7,
    price: 30,
    icon: '🧳',
    description: 'Add up to 10 kg extra baggage to your ticket with ease.',
  },
  {
    id: '634730',
    name: 'Travel Headphones',
    category: 'Electronics',
    vendor: 'SkyWings Audio',
    discount: 0,
    price: 45,
    icon: '🎧',
    description: 'Noise-cancelling headphones for a peaceful flight experience.',
  },
];

function Shop() {
  const [searchText, setSearchText] = useState('');
  const [selectedProduct, setSelectedProduct] = useState(null);
  const [entriesPerPage] = useState(6);
  const [collapsed, setCollapsed] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);

  const filteredProducts = products.filter((p) =>
    p.name.toLowerCase().includes(searchText.toLowerCase())
  );

  const handleBuyNow = () => {
    alert(`Order placed for ${selectedProduct.name}! Thank you.`);
    setSelectedProduct(null);
  };

  return (
    <>
      <Sidebar collapsed={collapsed} mobileOpen={mobileOpen} />

<button
  className="sidebar-toggle"
  onClick={() => setCollapsed(!collapsed)}
>
  ‹
</button>

<div
  className={`sidebar-overlay ${mobileOpen ? 'show' : ''}`}
  onClick={() => setMobileOpen(false)}
></div>

      <main className="main-content">
       <Topbar pageTitle="Shop" onMenuClick={() => setMobileOpen(true)} />
        {/* Hero Banner */}
        <div className="page-hero">
          <div className="page-hero-content">
            <h2>Search SkyWings Shop and order what you need</h2>
            <p>Discover in-flight meals, duty-free items, and travel essentials</p>
            <div className="hero-search-form">
              <input
                type="text"
                placeholder="Search products..."
                value={searchText}
                onChange={(e) => setSearchText(e.target.value)}
              />
              <button className="btn-search">SEARCH</button>
            </div>
          </div>
        </div>

        {/* Product Cards */}
        <div className="flight-grid">
          {filteredProducts.map((product) => (
            <ProductCard
              key={product.id}
              product={product}
              onClick={() => setSelectedProduct(product)}
            />
          ))}
        </div>

        {/* Data Table */}
        <div className="shop-table-section">
          <h3>Other results for {searchText || 'all products'} search</h3>

          <div className="shop-table-wrapper">
            <table className="shop-table">
              <thead>
                <tr>
                  <th>Name ⇅</th>
                  <th>Category ⇅</th>
                  <th>Service By ⇅</th>
                  <th>Discount ⇅</th>
                  <th>Price ⇅</th>
                  <th>ID ⇅</th>
                </tr>
              </thead>
              <tbody>
                {filteredProducts.map((product) => (
                  <tr
                    key={product.id}
                    onClick={() => setSelectedProduct(product)}
                    style={{ cursor: 'pointer' }}
                  >
                    <td>{product.name}</td>
                    <td>{product.category}</td>
                    <td>{product.vendor}</td>
                    <td>{product.discount}%</td>
                    <td>${product.price}</td>
                    <td>{product.id}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          <div className="shop-table-footer">
            <div>{entriesPerPage} entries per page</div>
            <div>
              Showing {filteredProducts.length === 0 ? 0 : 1} to{' '}
              {filteredProducts.length} of {filteredProducts.length} entries
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

      {/* PRODUCT DETAILS PANEL */}
      {selectedProduct && (
        <>
          <div
            className="booking-overlay show"
            onClick={() => setSelectedProduct(null)}
          ></div>
          <div className="booking-panel show">
            <div className="panel-header">
              <h3>🛍️ PRODUCT DETAILS</h3>
              <button
                className="close-panel"
                onClick={() => setSelectedProduct(null)}
              >
                ✕
              </button>
            </div>

            {/* Product Icon */}
            <div className="product-details-icon">
              <span style={{ fontSize: '60px' }}>
                {selectedProduct.icon}
              </span>
            </div>

            <div className="panel-info">
              <div className="info-row">
                <span className="label">Product:</span>
                <span className="value">{selectedProduct.name}</span>
              </div>
              <div className="info-row">
                <span className="label">Category:</span>
                <span className="value">{selectedProduct.category}</span>
              </div>
              <div className="info-row">
                <span className="label">Vendor:</span>
                <span className="value">{selectedProduct.vendor}</span>
              </div>
              <div className="info-row">
                <span className="label">Discount:</span>
                <span className="value">{selectedProduct.discount}%</span>
              </div>
              <div className="info-row">
                <span className="label">Product ID:</span>
                <span className="value">#{selectedProduct.id}</span>
              </div>
            </div>

            {/* Description */}
            <div className="product-description-box">
              <p>{selectedProduct.description}</p>
            </div>

            {/* Total Price */}
            <div className="panel-total">
              <div className="total-label">TOTAL PRICE</div>
              <div className="total-price">${selectedProduct.price}</div>
            </div>

            {/* Actions */}
            <div className="panel-actions">
              <button
                className="btn-cancel-book"
                onClick={() => setSelectedProduct(null)}
              >
                Cancel
              </button>
              <button className="btn-confirm-book" onClick={handleBuyNow}>
                Buy Now
              </button>
            </div>
          </div>
        </>
      )}
    </>
  );
}

export default Shop;