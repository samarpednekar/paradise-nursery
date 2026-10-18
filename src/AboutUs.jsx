import React from "react";

export default function AboutUs() {
  return (
    <section className="about-page page-shell">
      <p className="eyebrow">OUR STORY</p>
      <h1>Growing happier spaces, one plant at a time.</h1>
      <p className="about-lead">
        Paradise Nursery makes it easier to bring the calm and beauty of nature
        into everyday life. We help plant lovers find welcoming greenery for
        apartments, offices, and homes of every size.
      </p>
      <div className="about-grid">
        <article className="about-card">
          <span className="about-icon">🌱</span>
          <h2>Thoughtfully chosen</h2>
          <p>We feature much-loved indoor plants that add life and character to your space.</p>
        </article>
        <article className="about-card">
          <span className="about-icon">💚</span>
          <h2>Plant care made simple</h2>
          <p>Our goal is to make choosing and caring for houseplants feel approachable.</p>
        </article>
        <article className="about-card">
          <span className="about-icon">🏡</span>
          <h2>Greener everyday living</h2>
          <p>From a sunny desk to a cozy corner, a little greenery can make a place feel special.</p>
        </article>
      </div>
    </section>
  );
}