function ProductCard({ product, onClick }) {
  return (
    <div
      className="flight-card-grid"
      onClick={onClick}
      style={{ cursor: 'pointer' }}
    >
      <div className="product-image-placeholder">
        <span className="product-icon">{product.icon}</span>
      </div>
      <h4>{product.name}</h4>
      <p className="grid-price">${product.price}</p>
      <p className="route-text">{product.vendor}</p>
      <p className="grid-meta">{product.description}</p>
      <button className="btn-blue">View Details</button>
    </div>
  );
}

export default ProductCard;