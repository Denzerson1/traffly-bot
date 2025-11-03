import { useNavigate } from 'react-router-dom'
import './Landing.css'

function Landing() {
  const navigate = useNavigate()

  return (
    <div className="landing-container">
      <h1 className="neon-title">TRAFFLY</h1>
      
      <div className="landing-content">
        <p className="neon-text">Hello, {'{{USER}}'}</p>
        <button className="neon-button start" onClick={() => navigate('/dashboard')}>
          Start Work
        </button>
      </div>

      <div className="landing-footer">
        <p className="footer-description">
          Affiliate program for earning off of UGC-Gambling traffic
        </p>
        <div className="button-grid">
          <button className="grid-btn">1</button>
          <button className="grid-btn">2</button>
          <button className="grid-btn wide">3</button>
        </div>
      </div>
    </div>
  )
}

export default Landing
