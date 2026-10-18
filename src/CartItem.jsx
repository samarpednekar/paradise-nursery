import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { removeItem, updateQuantity } from "./CartSlice.jsx";

export default function CartItem({ onNavigate }) {
  const dispatch = useDispatch();
  const items = useSelector((state) => state.cart.items);
  const total = items.reduce((sum, item) => sum + item.price * item.quantity, 0);

  if (items.length === 0) {
    return (
      <main className="page-shell cart-page">
        <p className="eyebrow">YOUR BAG</p>
        <h1>Your cart is taking a little nap.</h1>
        <p className="section-subtitle">Add a plant you love and it will show up here.</p>
        <button className="button" onClick={() => onNavigate("plants")}>Continue Shopping</button>
      </main>
    );
  }

  return (
    <main className="page-shell cart-page">
      <div className="section-heading">
        <div>
          <p className="eyebrow">YOUR BAG</p>
          <h1>Shopping Cart</h1>
          <p className="section-subtitle">{items.reduce((sum, item) => sum + item.quantity, 0)} plant(s) ready for a new home.</p>
        </div>
        <button className="text-button" onClick={() => onNavigate("plants")}>← Continue Shopping</button>
      </div>

      <div className="cart-layout">
        <section className="cart-items-list">
          {items.map((item) => (
            <article className="cart-row" key={item.id}>
              <img src={item.image} alt={item.name} className="cart-thumb" />
              <div className="cart-item-details">
                <h2>{item.name}</h2>
                <p>${item.price.toFixed(2)} each</p>
                <div className="quantity-control" aria-label={`Quantity for ${item.name}`}>
                  <button aria-label="Decrease quantity" onClick={() => dispatch(updateQuantity({ id: item.id, quantity: item.quantity - 1 }))}>−</button>
                  <span>{item.quantity}</span>
                  <button aria-label="Increase quantity" onClick={() => dispatch(updateQuantity({ id: item.id, quantity: item.quantity + 1 }))}>+</button>
                </div>
              </div>
              <div className="cart-line-total">
                <strong>${(item.price * item.quantity).toFixed(2)}</strong>
                <button className="remove-button" onClick={() => dispatch(removeItem(item.id))}>Remove</button>
              </div>
            </article>
          ))}
        </section>

        <aside className="order-summary">
          <p className="eyebrow">ORDER SUMMARY</p>
          <div className="summary-line"><span>Subtotal</span><strong>${total.toFixed(2)}</strong></div>
          <div className="summary-line"><span>Delivery</span><span>Calculated at checkout</span></div>
          <div className="summary-total"><span>Total</span><strong>${total.toFixed(2)}</strong></div>
          <button className="button checkout-button" onClick={() => window.alert("Coming Soon!")}>Checkout</button>
          <p className="summary-note">Plants and good vibes, packed with care.</p>
        </aside>
      </div>
    </main>
  );
}