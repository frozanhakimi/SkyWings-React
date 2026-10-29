import { useState } from 'react';
import Sidebar from '../components/Sidebar';
import Topbar from '../components/Topbar';

const products = [
  { id: '243598234', name: 'In-Flight Meal', category: 'Food', vendor: 'SkyWings Catering', discount: 0, price: 15, icon: '🍽️', description: 'Fresh gourmet meal served during your flight.' },
  { id: '877712', name: 'Duty-Free Perfume', category: 'Cosmetics', vendor: 'SkyWings Duty-Free', discount: 5, price: 50, icon: '💐', description: 'Premium designer fragrances at exclusive prices.' },
  { id: '0134729', name: 'Neck Pillow', category: 'Comfort', vendor: 'SkyWings Comfort', discount: 9, price: 20, icon: '🛋️', description: 'Ergonomic memory foam pillow for restful sleep.' },
  { id: '113213', name: 'Wi-Fi Package', category: 'Internet', vendor: 'SkyWings Connect', discount: 5, price: 8, icon: '📶', description: 'Stay connected with high-speed in-flight Wi-Fi.' },
  { id: '634729', name: 'Extra Baggage', category: 'Travel', vendor: 'SkyWings Cargo', discount: 7, price: 30, icon: '🧳', description: 'Add up to 10 kg extra baggage to your ticket.' },
  { id: '634730', name: 'Travel Headphones', category: 'Electronics', vendor: 'SkyWings Audio', discount: 0, price: 45, icon: '🎧', description: 'Noise-cancelling headphones for a peaceful flight.' },
];

function Shop({ cartItems, addToCart, setCartItems }) {
  const [searchText, setSearchText] = useState('');
  const [selectedProduct, setSelectedProduct] = useState(null);
  const [collapsed, setCollapsed] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  
 
  const [isCartOpen, setIsCartOpen] = useState(false);

  const filteredProducts = products.filter((p) =>
    p.name.toLowerCase().includes(searchText.toLowerCase())
  );

 
  const totalPrice = cartItems.reduce((sum, item) => sum + item.price * item.quantity, 0);

  const handleBuyNow = (product) => {
    addToCart(product);
    setSelectedProduct(null); 
    setIsCartOpen(true); 
  };

  return (
    <>
      <Sidebar collapsed={collapsed} mobileOpen={mobileOpen} />
      <button className="sidebar-toggle" onClick={() => setCollapsed(!collapsed)}>‹</button>
      <div className={`sidebar-overlay ${mobileOpen ? 'show' : ''}`} onClick={() => setMobileOpen(false)}></div>

      <main className="main-content">
        <Topbar pageTitle="Shop" onMenuClick={() => setMobileOpen(true)} 
          cartCount={cartItems.length} 
          onCartClick={() => setIsCartOpen(true)} 
        />

        <div className="page-hero">
          <div className="page-hero-content">
            <h2>SkyWings Shop</h2>
            <p>Discover in-flight meals, duty-free items, and travel essentials</p>
            <div className="hero-search-form">
              <input
                type="text"
                placeholder="Search products..."
                value={searchText}
                onChange={(e) => setSearchText(e.target.value)}
              />
            </div>
          </div>
        </div>

        <div className="flight-grid">
          {filteredProducts.map((product) => (
            <div className="flight-card-grid" key={product.id}>
              <div className="product-image-placeholder"><span className="product-icon">{product.icon}</span></div>
              <h4>{product.name}</h4>
              <p className="grid-price">${product.price}</p>
              <p className="route-text">{product.vendor}</p>
              <p className="grid-meta">{product.description}</p>
              <button className="btn-blue" onClick={() => setSelectedProduct(product)}>View Details</button>
            </div>
          ))}
        </div>
      </main>

      {/* Product Details Panel */}
      {selectedProduct && (
        <>
          <div className="booking-overlay show" onClick={() => setSelectedProduct(null)}></div>
          <div className="booking-panel show">
            <div className="panel-header">
              <h3>🛍️ PRODUCT DETAILS</h3>
              <button className="close-panel" onClick={() => setSelectedProduct(null)}>✕</button>
            </div>
            <div className="product-details-icon"><span style={{ fontSize: '60px' }}>{selectedProduct.icon}</span></div>
            <div className="panel-info">
              <div className="info-row"><span className="label">Product:</span><span className="value">{selectedProduct.name}</span></div>
              <div className="info-row"><span className="label">Vendor:</span><span className="value">{selectedProduct.vendor}</span></div>
            </div>
            <div className="product-description-box"><p>{selectedProduct.description}</p></div>
            <div className="panel-total">
              <div className="total-label">TOTAL PRICE</div>
              <div className="total-price">${selectedProduct.price}</div>
            </div>
            <div className="panel-actions">
              <button className="btn-cancel-book" onClick={() => setSelectedProduct(null)}>Cancel</button>
              <button className="btn-confirm-book" onClick={() => handleBuyNow(selectedProduct)}>Buy Now</button>
            </div>
          </div>
        </>
      )}

      {/* =========================================
          SHOPPING CART PANEL 
          ========================================= */}
      <div className={`cart-overlay ${isCartOpen ? 'show' : ''}`} onClick={() => setIsCartOpen(false)}></div>
      
      <div className={`cart-panel ${isCartOpen ? 'show' : ''}`}>
        <div className="cart-header">
          <h2>🛒 Your Cart</h2>
          <button className="cart-close-btn" onClick={() => setIsCartOpen(false)}>✕</button>
        </div>

        <div className="cart-items-list">
          {cartItems.length === 0 ? (
            <div className="cart-empty"><p>Your cart is empty.</p></div>
          ) : (
            cartItems.map((item) => (
              <div className="cart-item" key={item.id}>
                <div className="cart-item-icon">{item.icon}</div>
                <div className="cart-item-info">
                  <h4>{item.name}</h4>
                  <p>Qty: {item.quantity}</p>
                </div>
                <div className="cart-item-price">${item.price * item.quantity}</div>
              </div>
            ))
          )}
        </div>

        {cartItems.length > 0 && (
          <div className="cart-footer">
            <div className="cart-total-row">
              <span>Total Amount:</span>
              <span>${totalPrice}</span>
            </div>
            <button className="cart-checkout-btn" onClick={() => alert('Checkout Successful!')}>
              CHECKOUT
            </button>
          </div>
        )}
      </div>
    </>
  );
}

export default Shop;