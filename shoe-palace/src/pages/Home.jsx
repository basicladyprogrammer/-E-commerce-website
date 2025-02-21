import "../styles/Home.css";
import adidasLogo from "../assets/adidas.png";
import nikeLogo from "../assets/nike.png";
import pumaLogo from "../assets/puma.png";
import newBalanceLogo from "../assets/th.jpg";
import shoeImage from "../assets/Home banner.png";
import shoe1 from "../assets/shoe1.png";
import shoe2 from "../assets/shoe2.png";
import shoe3 from "../assets/shoe3.png";
import shoe4 from "../assets/shoe4.png";
import { FaHeart, FaShoppingCart, FaStar } from "react-icons/fa";

const Home = () => {
  const trendingProducts = [
    {
      id: 1,
      name: "Nike Running Shoe",
      price: "$25",
      image: { shoe1 },
    },
    {
      id: 2,
      name: "Jordan Sneaker",
      price: "$25",
      image: { shoe2 },
    },
    { id: 3, name: "Nike Shoe Arimac", price: "$25", image: { shoe3 } },
    {
      id: 4,
      name: "Fit Elent Mosan",
      price: "$25",
      image: { shoe4 },
    },
  ];

  return (
    <div className="home">
      <div className="hero">
        <section className="hero-section">
          <div
            className="bgded-overlay"
            style={{
              backgroundImage: `url(${shoeImage})`,
            }}>
            <div className="hero-content">
              <h1>The Ultimate Shoe Destination</h1>
              <p>
                Discover the latest trends, exclusive drops, and timeless
                classics—all in one place. Shop now and elevate your sneaker
                game with Shoe Palace!
              </p>
              <div className="hero-buttons">
                <button className="shop-now">Shop Now</button>
                <button className="more-info">More Info</button>
              </div>
            </div>
          </div>
        </section>
      </div>

      {/* Brand Section */}
      <section className="brand-section">
        <h2>Brand</h2>
        <div className="brand-slider">
          <button className="brand-nav left">&lt;</button>
          <div className="brand-logos">
            <img src={adidasLogo} alt="Adidas" />
            <img src={nikeLogo} alt="Nike" />
            <img src={pumaLogo} alt="Puma" />
            <img src={newBalanceLogo} alt="New Balance" />
          </div>
          <button className="brand-nav right">&gt;</button>
        </div>
      </section>

      {/* Trending Products Section */}
      <section className="trending-products">
        <h2>Trending Products</h2>
        <div className="product-grid">
          {trendingProducts.map((product) => (
            <div key={product.id} className="product-card">
              <img src={`../assets/${product.image}`} alt={product.name} />
              <div className="product-info">
                <span className="product-rating">
                  <FaStar className="star-icon" /> (11.4K Reviews)
                </span>
                <h3>{product.name}</h3>
                <p className="product-price">
                  {product.price} <span className="sold-out">Sold out 85%</span>
                </p>
                <div className="product-icons">
                  <FaHeart className="heart-icon" />
                  <FaShoppingCart className="cart-icon" />
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
};

export default Home;
