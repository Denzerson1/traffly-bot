import { useNavigate } from 'react-router-dom'
import { useState } from 'react'
import HamburgerMenu from '../components/HamburgerMenu'
import AccountMenu from '../components/AccountMenu'
import LeaderboardModal from '../components/LeaderboardModal'
import BonusProgramModal from '../components/BonusProgramModal'
import './BuyerOptions.css'

function BuyerOptions() {
  const navigate = useNavigate()
  const [isHamburgerOpen, setIsHamburgerOpen] = useState(false)
  const [isAccountMenuOpen, setIsAccountMenuOpen] = useState(false)
  const [isLeaderboardOpen, setIsLeaderboardOpen] = useState(false)
  const [isBonusProgramOpen, setIsBonusProgramOpen] = useState(false)

  const options = [
    { title: 'Statistics', path: '/statistics' },
    { title: 'Creative Library', path: '/creative-library' },
    { title: 'Offers', path: '/offers' },
    { title: 'Choice of PWA + link generation', path: '/pwa-generator' },
    { title: 'Finance', path: '/finance' },
    { title: 'Reviews', path: '/reviews' }
  ]

  return (
    <div className="buyer-options-container">
      <header className="buyer-header">
        <h1 className="logo-text clickable" onClick={() => navigate('/')}>Traffly</h1>
        <div className="header-icons">
          <button className="icon-btn" onClick={() => setIsAccountMenuOpen(!isAccountMenuOpen)}>🧑</button>
          <button className="icon-btn" onClick={() => setIsHamburgerOpen(true)}>☰</button>
        </div>
      </header>

      <HamburgerMenu isOpen={isHamburgerOpen} onClose={() => setIsHamburgerOpen(false)} />
      <AccountMenu 
        isOpen={isAccountMenuOpen} 
        onClose={() => setIsAccountMenuOpen(false)}
        onOpenLeaderboard={() => setIsLeaderboardOpen(true)}
        onOpenBonusProgram={() => setIsBonusProgramOpen(true)}
      />
      <LeaderboardModal isOpen={isLeaderboardOpen} onClose={() => setIsLeaderboardOpen(false)} />
      <BonusProgramModal isOpen={isBonusProgramOpen} onClose={() => setIsBonusProgramOpen(false)} />

      <div className="buyer-content">
        <h2 className="options-title">Options</h2>
        
        <div className="options-grid">
          {options.map((option, index) => (
            <button 
              key={index} 
              className="option-card"
              onClick={() => navigate(option.path)}
            >
              {option.title}
            </button>
          ))}
        </div>
      </div>

      <footer className="buyer-footer">
        <a href="#" className="footer-link">СОГЛАШЕНИЕ</a>
        <a href="#" className="footer-link">ПОЛИТИКА КОНФИДЕНЦИАЛЬНОСТИ</a>
        <a href="#" className="footer-link">НАШ КАНАЛ</a>
        <a href="#" className="footer-link">ПОДДЕРЖКА</a>
      </footer>
    </div>
  )
}

export default BuyerOptions
