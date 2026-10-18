import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { addItem } from "./CartSlice.jsx";

const plants = [
  { id: "monstera", name: "Monstera Deliciosa", category: "Statement Plants", price: 24, image: "https://images.unsplash.com/photo-1614594975525-e45190c55d0b?auto=format&fit=crop&w=700&q=80", description: "Bold split leaves for a tropical feel." },
  { id: "rubber", name: "Rubber Plant", category: "Statement Plants", price: 22, image: "https://images.unsplash.com/photo-1597055181300-a8b4be4e8c4b?auto=format&fit=crop&w=700&q=80", description: "Glossy leaves with a sculptural look." },
  { id: "fiddle", name: "Fiddle Leaf Fig", category: "Statement Plants", price: 32, image: "https://images.unsplash.com/photo-1509423350716-97f9360b4e09?auto=format&fit=crop&w=700&q=80", description: "A leafy focal point for bright rooms." },
  { id: "bird", name: "Bird of Paradise", category: "Statement Plants", price: 35, image: "https://images.unsplash.com/photo-1501004318641-b39e6451bec6?auto=format&fit=crop&w=700&q=80", description: "Big leaves with a bold, tropical look." },
  { id: "palm", name: "Areca Palm", category: "Statement Plants", price: 28, image: "https://images.unsplash.com/photo-1518531933037-91b2f5f229cc?auto=format&fit=crop&w=700&q=80", description: "Soft, arching fronds for a lush corner." },
  { id: "dracaena", name: "Dracaena Marginata", category: "Statement Plants", price: 26, image: "https://images.unsplash.com/photo-1485955900006-10f4d324d411?auto=format&fit=crop&w=700&q=80", description: "A tall accent with slender, elegant leaves." },
  { id: "snake", name: "Snake Plant", category: "Easy Care", price: 18, image: "https://images.unsplash.com/photo-1593691509543-c55fb32e5cee?auto=format&fit=crop&w=700&q=80", description: "A resilient favourite for beginners." },
  { id: "zz", name: "ZZ Plant", category: "Easy Care", price: 20, image: "https://images.unsplash.com/photo-1632207691143-643e2c4a3e8d?auto=format&fit=crop&w=700&q=80", description: "Shiny, upright foliage with low-fuss care." },
  { id: "pothos", name: "Golden Pothos", category: "Easy Care", price: 14, image: "https://images.unsplash.com/photo-1616690248373-3a7a9c4e7e1c?auto=format&fit=crop&w=700&q=80", description: "Trailing vines that brighten shelves." },
  { id: "spider", name: "Spider Plant", category: "Easy Care", price: 13, image: "https://images.unsplash.com/photo-1572688484438-313a6e50c333?auto=format&fit=crop&w=700&q=80", description: "A cheerful, adaptable plant with arching leaves." },
  { id: "jade", name: "Jade Plant", category: "Easy Care", price: 16, image: "https://images.unsplash.com/photo-1509423350716-97f9360b4e09?auto=format&fit=crop&w=700&q=80", description: "A compact succulent with plump green leaves." },
  { id: "philodendron", name: "Heartleaf Philodendron", category: "Easy Care", price: 15, image: "https://images.unsplash.com/photo-1497250681960-ef046c08a56e?auto=format&fit=crop&w=700&q=80", description: "Heart-shaped leaves on graceful trailing stems." },
  { id: "peace", name: "Peace Lily", category: "Flowering & Color", price: 19, image: "https://images.unsplash.com/photo-1593691509543-c55fb32e5cee?auto=format&fit=crop&w=700&q=80", description: "Elegant leaves and graceful white blooms." },
  { id: "calathea", name: "Calathea", category: "Flowering & Color", price: 21, image: "https://images.unsplash.com/photo-1597055181300-a8b4be4e8c4b?auto=format&fit=crop&w=700&q=80", description: "Decorative foliage with beautiful patterns." },
  { id: "anthurium", name: "Anthurium", category: "Flowering & Color", price: 23, image: "https://images.unsplash.com/photo-1497250681960-ef046c08a56e?auto=format&fit=crop&w=700&q=80", description: "A vibrant plant for a pop of color." },
  { id: "orchid", name: "Phalaenopsis Orchid", category: "Flowering & Color", price: 27, image: "https://images.unsplash.com/photo-1566920195344-1f8b7b4c6b4b?auto=format&fit=crop&w=700&q=80", description: "Long-lasting blooms with a delicate silhouette." },
  { id: "bromeliad", name: "Bromeliad", category: "Flowering & Color", price: 25, image: "https://images.unsplash.com/photo-1497250681960-ef046c08a56e?auto=format&fit=crop&w=700&q=80", description: "Bright tropical color and architectural leaves." },
  { id: "begonia", name: "Begonia", category: "Flowering & Color", price: 17, image: "https://images.unsplash.com/photo-1501004318641-b39e6451bec6?auto=format&fit=crop&w=700&q=80", description: "Colorful foliage for a lively windowsill." },
];

export default function ProductList({ onNavigate }) {
  const dispatch = useDispatch();
  const cartItems = useSelector((state) => state.cart.items);
  const categories = [...new Set(plants.map((plant) => plant.category))];

  return (
    <main className="page-shell products-page">
      <div className="section-heading">
        <div>
          <p className="eyebrow">FIND YOUR GREEN</p>
          <h1>Plants for every corner</h1>
          <p className="section-subtitle">Bring a little nature home with plants picked for real life.</p>
        </div>
        <button className="text-button" onClick={() => onNavigate("cart")}>View cart →</button>
      </div>

      {categories.map((category) => (
        <section className="plant-category" key={category}>
          <div className="category-heading">
            <h2>{category}</h2>
            <span>{plants.filter((plant) => plant.category === category).length} plants</span>
          </div>
          <div className="product-grid">
            {plants.filter((plant) => plant.category === category).map((plant) => {
              const alreadyAdded = cartItems.some((item) => item.id === plant.id);
              return (
                <article className="product-card" key={plant.id}>
                  <div className="product-image-wrap">
                    <img src={plant.image} alt={plant.name} className="product-image" loading="lazy" />
                    <span className="product-tag">Houseplant</span>
                  </div>
                  <div className="product-info">
                    <p className="product-category">{plant.category}</p>
                    <h3>{plant.name}</h3>
                    <p className="product-description">{plant.description}</p>
                    <div className="product-card-footer">
                      <strong>${plant.price.toFixed(2)}</strong>
                      <button
                        className="button button-small"
                        disabled={alreadyAdded}
                        onClick={() => dispatch(addItem(plant))}
                      >
                        {alreadyAdded ? "Added ✓" : "Add to Cart"}
                      </button>
                    </div>
                  </div>
                </article>
              );
            })}
          </div>
        </section>
      ))}
    </main>
  );
}