import React, { useState } from "react";
import AboutUs from "./AboutUs.jsx";
import ProductList from "./ProductList.jsx";
import CartItem from "./CartItem.jsx";
import { useSelector } from "react-redux";

export default function App() {
  const [page, setPage] = useState("home");
  const cartItems = useSelector((state) => state.cart.items);
  const cartCount = cartItems.reduce((sum, item) => sum + item.quantity, 0);

  const navigate = (nextPage) => {
    setPage(nextPage);
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <div className="app">
      <header className="site-header">
        <button className="brand" onClick={() => navigate("home")} aria-label="Paradise Nursery home">
          <span className="brand-mark">✿</span>
          <span>paradise<span className="brand-light">nursery</span></span>
        </button>
        <nav className="main-nav" aria-label="Main navigation">
          <button className={page === "home" ? "nav-link active" : "nav-link"} onClick={() => navigate("home")}>Home</button>
          <button className={page === "plants" ? "nav-link active" : "nav-link"} onClick={() => navigate("plants")}>Plants</button>
          <button className={page === "about" ? "nav-link active" : "nav-link"} onClick={() => navigate("about")}>About Us</button>
          <button className={page === "cart" ? "cart-nav active" : "cart-nav"} onClick={() => navigate("cart")} aria-label={`Cart with ${cartCount} items`}>
            <span aria-hidden="true">🛒</span><span>Cart</span><span className="cart-count">{cartCount}</span>
          </button>
        </nav>
      </header>

      {page === "home" && (
        <main className="hero">
          <div className="hero-image" role="img" aria-label="Sunlit indoor plants in a peaceful home" />
          <div className="hero-overlay" />
          <div className="hero-content">
            <p className="eyebrow hero-eyebrow">A LITTLE MORE GREEN</p>
            <h1>Make room<br />for <em>nature.</em></h1>
            <p className="hero-copy">Thoughtful houseplants for slower mornings, brighter corners, and spaces that feel like you.</p>
            <button className="button hero-button" onClick={() => navigate("plants")}>Get Started <span>→</span></button>
            <div className="hero-note"><span>✳</span> Find your new favourite green friend.</div>
          </div>
          <div className="hero-bottom-label">GROW SOMETHING GOOD</div>
        </main>
      )}

      {page === "plants" && <ProductList onNavigate={navigate} />}
      {page === "cart" && <CartItem onNavigate={navigate} />}
      {page === "about" && <AboutUs />}

      <footer className="site-footer">
        <span>✿ paradise nursery</span>
        <span>Make room for nature.</span>
      </footer>
    </div>
  );
}