import React from 'react';

function App() {
  return (
    <div>
      {/* Navigation */}
      <nav className="navbar">
        <div className="container">
          <h1 className="logo">Patsat</h1>
          <ul className="nav-links">
            <li><a href="#" className="nav-link">Home</a></li>
            <li><a href="#" className="nav-link">Shop</a></li>
            <li><a href="#" className="nav-link">About</a></li>
            <li><a href="#" className="nav-link">Contact</a></li>
          </ul>
          <div className="search-box">
            <input type="text" placeholder="Search" className="search-input" />
            <button className="search-btn">Search</button>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="hero">
        <div className="container">
          <h1>Welcome to Pet Emporium</h1>
          <p>Your One-Stop Shop for Pet Supplies!</p>
          <a href="#" className="btn-primary">Shop Now</a>
        </div>
      </section>

      {/* Offers Section */}
      <section className="offers">
        <div className="container">
          <h2 className="section-title">Current Offers</h2>
          <div className="offer-cards">
            {/* Offer Card 1 */}
            <div className="offer-card">
              <h3 className="offer-title">10% Off on all Pet Food</h3>
              <p className="offer-description">
                Limited time offer. Use code: PETFOOD10. Valid until [date].
              </p>
              <button className="btn-primary">Shop Now</button>
            </div>
            {/* Add more offer cards as needed */}
          </div>
        </div>
      </section>

      {/* Brands Section */}
      <section className="brands">
        <div className="container">
          <h2 className="section-title">Featured Brands</h2>
          <div className="brand-logos">
            {/* Brand Logo 1 */}
            <div className="brand-logo">
              <img src="assets/img/brand.logo-1.png" alt="Brand 1" />
              <p>Description of Brand 1 and what sets it apart.</p>
              <a href="#" className="btn-secondary">Explore Brand</a>
            </div>
            {/* Add more brand logos as needed */}
          </div>
        </div>
      </section>

      {/* Products Section */}
      <section className="products">
        <div className="container">
          <h2 className="section-title">Featured Products</h2>
          <div className="product-cards">
            {/* Product Card 1 */}
            <div className="product-card">
              <img src="assets/img/product.1.jpeg" alt="Product 1" />
              <h3 className="product-title">Product 1</h3>
              <p className="product-description">
                Pedigree pet food offers premium nutrition for dogs, ensuring
                health, energy, and happiness with high-quality ingredients and
                tailored formulas.
              </p>
              <p className="product-price">$19.99</p>
              <button className="btn-primary">Add to Cart</button>
            </div>
            {/* Add more product cards as needed */}
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="footer">
        <div className="container">
          <div className="footer-content">
            <div className="about-us">
              <h3>About Us</h3>
              <p>
                Pet Emporium is dedicated to providing high-quality products for
                all your pet needs. We aim to create a better life for pets and
                their owners by offering a wide range of products and excellent
                customer service.
              </p>
            </div>
            <div className="quick-links">
              <h3>Quick Links</h3>
              <ul>
                <li><a href="#">Home</a></li>
                <li><a href="#">Shop</a></li>
                <li><a href="#">About</a></li>
                <li><a href="#">Contact</a></li>
              </ul>
            </div>
            <div className="contact-us">
              <h3>Contact Us</h3>
              <p>123 Pet Street, Cityville, ABC 12345</p>
              <p>Phone: +1 (123) 456-7890</p>
              <p>Email: info@petemporium.com</p>
            </div>
          </div>
          <div className="social-media">
            <h3>Follow Us</h3>
            <div className="social-icons">
              <a href="#"><i className="fab fa-facebook-f"></i></a>
              <a href="#"><i className="fab fa-twitter"></i></a>
              <a href="#"><i className="fab fa-instagram"></i></a>
              <a href="#"><i className="fab fa-pinterest"></i></a>
            </div>
          </div>
          <div className="newsletter">
            <h3>Subscribe to Our Newsletter</h3>
            <form>
              <input type="email" placeholder="Enter your email" />
              <button type="submit" className="btn-primary">Subscribe</button>
            </form>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default App;