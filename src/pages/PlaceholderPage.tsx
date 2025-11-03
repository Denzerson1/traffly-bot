import { useNavigate } from 'react-router-dom'
import './InfoPages.css'

interface PlaceholderPageProps {
  title: string
}

function PlaceholderPage({ title }: PlaceholderPageProps) {
  const navigate = useNavigate()

  return (
    <div className="info-page-container">
      <header className="info-header">
        <h1 className="info-title">{title}</h1>
      </header>

      <div className="info-content">
        <button className="back-btn" onClick={() => navigate('/buyer-options')}>← Back</button>
        <div className="about-section">
          <p style={{ textAlign: 'center', fontSize: '1.2rem', color: '#a0a0a0' }}>
            This page is under development.
          </p>
          <p style={{ textAlign: 'center', color: '#00f3ff', marginTop: '1rem' }}>
            Coming soon! 🚀
          </p>
        </div>
      </div>
    </div>
  )
}

export default PlaceholderPage
