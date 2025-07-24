import React from 'react';
import { motion } from 'framer-motion';
import './About.scss';

const About = () => {
  const stats = [
    { icon: '/images/You.png', count: '6,500,000+', label: 'YouTube Subscribers' },
    { icon: '/images/Instaga.png', count: '2,700,000+', label: 'Instagram Followers' },
    { icon: '/images/Spotify.png', count: 'Top 1%', label: 'Spotify Podcasts Global' },
  ];

  return (
    <motion.div className="about-page" initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 0.8 }}>
      <motion.h2 className="about-title" initial={{ y: -30, opacity: 0 }} animate={{ y: 0, opacity: 1 }} transition={{ duration: 0.6 }}>
        About Ranveer Allahbadia
      </motion.h2>

      <div className="about-wrapper">
        <motion.div className="about-text" initial={{ x: -50, opacity: 0 }} animate={{ x: 0, opacity: 1 }} transition={{ duration: 0.6, delay: 0.2 }}>
          <p><strong>Ranveer Allahbadia</strong>, also known as <strong>BeerBiceps</strong>, is one of India’s most influential content creators, entrepreneurs, and public speakers. With over a decade of experience, he has built a thriving digital empire centered on personal growth, fitness, and entrepreneurship.</p>

          <p>He began his career by launching the <strong>BeerBiceps YouTube channel</strong> in 2015. Initially focused on fitness and grooming, it quickly evolved into a hub for holistic development, including spirituality, wealth-building, career advice, and mental well-being.</p>

          <h3>The Ranveer Show 🎙</h3>
          <p><strong>India’s #1 podcast</strong> — The Ranveer Show — showcases transformative conversations with icons like <em>Sadhguru, Jay Shetty, Gary Vee, Priyanka Chopra, Arnold Schwarzenegger</em> and more. Available on YouTube and Spotify, the show has redefined podcasting in India.</p>

          <h3>Monk Entertainment 📈</h3>
          <p>Ranveer co-founded <strong>Monk Entertainment</strong>, a 360° media company that handles influencer marketing, talent management, and production. Monk-E empowers creators and brands alike in India’s fast-growing digital economy.</p>

          <h3>BeerBiceps Pvt. Ltd. 🧠</h3>
          <p>This is his parent company that focuses on self-growth tools, premium online education, and digital IPs. It aims to be India's largest self-improvement platform.</p>

          <h3>Philosophy & Vision 🌟</h3>
          <p>Ranveer strongly believes in <em>“constant self-reinvention”</em>. He integrates <strong>ancient Indian wisdom</strong> with modern strategies to help youth excel physically, emotionally, spiritually, and professionally.</p>

          <h3>Community Impact 🌍</h3>
          <p>With over <strong>10M+ followers</strong> across YouTube, Instagram, Spotify, and LinkedIn, Ranveer’s influence reaches a global audience of students, professionals, and creators striving to grow every day.</p>
        </motion.div>

        <motion.div className="about-image" initial={{ x: 50, opacity: 0 }} animate={{ x: 0, opacity: 1 }} transition={{ duration: 0.6, delay: 0.3 }}>
          <img src="/images/Ranveer.jpg.png" alt="Ranveer Allahbadia" />
        </motion.div>
      </div>

      <div className="follower-stats">
        {stats.map((stat, i) => (
          <motion.div
            className="follower-card"
            key={i}
            initial={{ scale: 0.8, opacity: 0 }}
            whileInView={{ scale: 1, opacity: 1 }}
            transition={{ delay: i * 0.2 }}
          >
            <img src={stat.icon} alt={stat.label} />
            <div className="count">{stat.count}</div>
            <p>{stat.label}</p>
          </motion.div>
        ))}
      </div>

      <p className="closing-text">
        From being a YouTuber to running multiple businesses, Ranveer’s mission is simple: <strong>Empower India’s youth to become world-class versions of themselves</strong>.
      </p>
    </motion.div>
  );
};

export default About;
