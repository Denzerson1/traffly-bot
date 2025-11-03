import { useNavigate } from 'react-router-dom'
import './InfoPages.css'

function PWAGenerator() {
  const navigate = useNavigate()

  return (
    <div className="info-page-container">
      <header className="info-header">
        <h1 className="info-title">PWA + Link Generation</h1>
      </header>

      <div className="info-content">
        <button className="back-btn" onClick={() => navigate('/buyer-options')}>← Back</button>
        <div className="about-section">
          <h2>Coming Soon</h2>
          <p style={{ textAlign: 'center', fontSize: '1.2rem', color: '#a0a0a0' }}>
            Generate Progressive Web Apps and custom tracking links for your campaigns.
          </p>
          <p style={{ textAlign: 'center', color: '#00f3ff', marginTop: '2rem', fontSize: '3rem' }}>
            🔗
          </p>
        </div>
      </div>
    </div>
  )
}

export default PWAGenerator
