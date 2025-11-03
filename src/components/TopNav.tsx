import { useState } from 'react'
import { useLocation, useNavigate } from 'react-router-dom'
import './TopNav.css'
import HamburgerMenu from './HamburgerMenu'
import AccountMenu from './AccountMenu'
import LeaderboardModal from './LeaderboardModal'
import BonusProgramModal from './BonusProgramModal'

function TopNav() {
  const navigate = useNavigate()
  const { pathname } = useLocation()
  const [isHamburgerOpen, setIsHamburgerOpen] = useState(false)
  const [isAccountMenuOpen, setIsAccountMenuOpen] = useState(false)
  const [isLeaderboardOpen, setIsLeaderboardOpen] = useState(false)
  const [isBonusProgramOpen, setIsBonusProgramOpen] = useState(false)

  const nameMap: Record<string, string> = {
    '/dashboard': 'Dashboard',
    '/buyer-options': 'Buyer Options',
    '/statistics': 'Statistics',
    '/creative-library': 'Creative Library',
    '/offers': 'Offers',
    '/pwa-generator': 'PWA + Link Generation',
    '/finance': 'Finance',
    '/reviews': 'Reviews',
    '/faq': 'FAQ',
    '/about': 'About Us',
    '/instructions': 'User Instructions',
  }
  const current = nameMap[pathname] ?? ''

  return (
    <>
      <header className="buyer-header">
        <div className="nav-breadcrumbs">
          <button className="crumb-link" onClick={() => navigate('/')}>Traffly</button>
          {current && <span className="crumb-sep">›</span>}
          {current && <span className="crumb-current">{current}</span>}
        </div>
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
    </>
  )
}

export default TopNav
