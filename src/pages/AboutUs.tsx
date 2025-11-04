import { useNavigate } from 'react-router-dom'
import './InfoPages.css'
import TopNav from '../components/TopNav'
import SiteFooter from '../components/SiteFooter'

function AboutUs() {
  const navigate = useNavigate()

  return (
    <div className="info-page-container">
      <TopNav />

      <div className="info-content">
        <button className="back-btn" onClick={() => navigate('/dashboard')}>← Back</button>
        <div className="about-section">
          <h2>Who We Are</h2>
          <p>
            Traffly is a cutting-edge affiliate platform designed for the modern digital economy. 
            We connect traffic sources with buyers in the UGC-Gambling space, creating opportunities 
            for mutual growth and success.
          </p>
        </div>

        <div className="about-section">
          <h2>Our Mission</h2>
          <p>
            To provide the most efficient and transparent platform for traffic monetization. 
            We believe in rewarding performance and building long-term partnerships with our users.
          </p>
        </div>

        <div className="about-section">
          <h2>Why Choose Us</h2>
          <ul className="benefits-list">
            <li>Competitive payout rates with performance bonuses</li>
            <li>Transparent tracking and real-time analytics</li>
            <li>24/7 dedicated support team</li>
            <li>Tiered reward system for top performers</li>
            <li>Lucrative referral program</li>
          </ul>
        </div>

        <div className="about-section">
          <h2>Join Our Community</h2>
          <p>
            Thousands of users trust Traffly for their traffic monetization needs. 
            Join our growing community and start maximizing your earnings today.
          </p>
        </div>
      </div>

      <SiteFooter />
    </div>
  )
}

export default AboutUs
