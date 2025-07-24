import React from 'react';
import { motion } from 'framer-motion';
import './Home.scss';

const bannerImage = "Beerbiceps.png";

const sponsors = [
  '/images/Ajio.jpg.png',
  '/images/PrimeVideo.png',
  '/images/MountainDew.png',
  '/images/Godrej.png',
  '/images/Cred.png',
  '/images/Wow.png',
];

const banners = [
  {
    title: "The Ranveer Show 🎙️",
    desc: "India's #1 podcast featuring inspiring leaders & legends.",
    img: "/images/RanveerShow.png"
  },
  {
    title: "Join Monk Entertainment 💼",
    desc: "Our media company empowering Indian creators.",
    img: "/images/JoinMonk.png"
  },
  {
    title: "Explore Our Self-Improvement Tools 📚",
    desc: "From ebooks to coaching plans — grow every day.",
    img: "/images/Ranveeer.png"
  }
];

const Home = () => {
  return (
    <motion.div className="home" initial={{ opacity: 0 }} animate={{ opacity: 1 }}>
      {}
      <section className="hero">
        <div className="hero-text">
          <h1>Welcome to BeerBiceps</h1>
          <p>Your one-stop destination for self-improvement, fitness & entrepreneurship gear.</p>
          <p className="sub-info">
            Join the movement empowering India's youth with premium content, impactful interviews, and purpose-driven products.
          </p>
          <a href="/products" className="hero-button">Explore Products</a>
        </div>
        <div className="hero-image">
          <img src='/images/Beerbiceps.png' alt="BeerBiceps Banner" className="banner-img" />
        </div>
      </section>

      {}
      <section className="sponsor-section">
        <h2 className="section-title">Our Sponsors 🤝</h2>
        <div className="logo-marquee">
          <div className="logo-track">
            {sponsors.concat(sponsors).map((src, index) => (
              <img key={index} src={src} alt={`Sponsor ${index}`} />
            ))}
          </div>
        </div>
      </section>

      {}
      <section className="banners">
        {banners.map((banner, i) => (
          <div className="banner-box" key={i}>
            <img src={banner.img} alt={banner.title} />
            <div className="banner-info">
              <h3>{banner.title}</h3>
              <p>{banner.desc}</p>
            </div>
          </div>
        ))}
      </section>
    </motion.div>
  );
};

export default Home;
