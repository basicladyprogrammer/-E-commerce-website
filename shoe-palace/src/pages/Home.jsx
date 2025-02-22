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
import {
  MdOutlineKeyboardArrowLeft,
  MdOutlineKeyboardArrowRight,
} from "react-icons/md";
import Footer from "../components/Footer";

const Home = () => {
  const trendingProducts = [
    {
      id: 1,
      name: "Nike Running Shoe",
      price: "$25",
      image: shoe1,
    },
    {
      id: 2,
      name: "Jordan Sneaker",
      price: "$25",
      image: shoe2,
    },
    { id: 3, name: "Nike Shoe Arimac", price: "$25", image: shoe3 },
    {
      id: 4,
      name: "Fit Elent Mosan",
      price: "$25",
      image: shoe4,
    },
  ];
  const availableCollections = [
    {
      id: 1,
      name: "Nike Running Shoe",
      price: "$25",
      image: shoe1,
    },
    {
      id: 2,
      name: "Jordan Sneaker",
      price: "$25",
      image: shoe2,
    },
    { id: 3, name: "Nike Shoe Arimac", price: "$25", image: shoe3 },
    {
      id: 4,
      name: "Fit Elent Mosan",
      price: "$25",
      image: shoe4,
    },
    {
      id: 5,
      name: "Nike Running Shoe",
      price: "$25",
      image: shoe3,
    },
    {
      id: 6,
      name: "Jordan Sneaker",
      price: "$25",
      image: shoe4,
    },
    { id: 7, name: "Nike Shoe Arimac", price: "$25", image: shoe1 },
    {
      id: 8,
      name: "Fit Elent Mosan",
      price: "$25",
      image: shoe2,
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
          <button className="brand-nav left">
            {" "}
            <MdOutlineKeyboardArrowLeft />
          </button>
          <div className="brand-logos">
            <img src={adidasLogo} alt="Adidas" />
            <img src={nikeLogo} alt="Nike" />
            <img src={pumaLogo} alt="Puma" />
            <img src={newBalanceLogo} alt="New Balance" />
          </div>
          <button className="brand-nav right">
            <MdOutlineKeyboardArrowRight />
          </button>
        </div>
      </section>

      {/* Trending Products Section */}
      <section className="trending-products">
        <h2>Trending Products</h2>
        <div className="product-grid">
          {trendingProducts.map((product) => (
            <div key={product.id} className="product-card">
              <img src={product.image} alt={product.name} />
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

      {/* Offer Section */}
      <section className="offer-section">
        <h2>Offers</h2>
        <div className="offer-container">
          <h1>The Ultimate Shoe Destination</h1>
          <p>
            Discover the latest trends, exclusive drops, and timeless
            classics—all in one place. Shop now and elevate your sneaker game
            with Shoe Palace! Discover the latest trends, exclusive drops, and
            timeless classics—all in one place.
          </p>
          <div className="offer-buttons">
            <button className="shop-now">Get Offer</button>
            <button className="more-info">More Info</button>
          </div>
        </div>
      </section>

      {/* Available Collection Section */}
      <section className="trending-products">
        <h2>Available Collections</h2>
        <div className="product-grid">
          {availableCollections.map((product) => (
            <div key={product.id} className="product-card">
              <img src={product.image} alt={product.name} />
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

      {/* Review Section */}
      <section className="offer-section">
        <h2>Reviews</h2>
        <div className="offer-container">
          <h1>Give Your Reviews</h1>
          <p>
            Discover the latest trends, exclusive drops, and timeless
            classics—all in one place. <br />
            Shop now and elevate your sneaker game with Shoe Palace!
          </p>
          <div className="review-input">
            <input type="text" placeholder="Type your comment" />
            <button className="submit-btn">Submit</button>
          </div>
        </div>
      </section>

      <Footer />
      <div className="footer2-container"></div>
    </div>
  );
};

export default Home;
