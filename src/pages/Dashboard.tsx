import { useState, useEffect } from 'react'
import { useNavigate } from 'react-router-dom'
import BMWShowcase from '../components/BMWShowcase'
import HamburgerMenu from '../components/HamburgerMenu'
import AccountMenu from '../components/AccountMenu'
import LeaderboardModal from '../components/LeaderboardModal'
import BonusProgramModal from '../components/BonusProgramModal'
import './Dashboard.css'

// TODO: Replace with actual API call
interface UserData {
  username: string
  balance: number
  depositsPerMonth: number
}

function Dashboard() {
  const navigate = useNavigate()
  // TODO: Fetch from database/API
  const [userData] = useState<UserData>({
    username: 'USER', // Will come from database
    balance: 0.00, // Will come from database
    depositsPerMonth: 0 // Will come from database - Change this to test different levels
  })
  
  const [isHamburgerOpen, setIsHamburgerOpen] = useState(false)
  const [isAccountMenuOpen, setIsAccountMenuOpen] = useState(false)
  const [isLeaderboardOpen, setIsLeaderboardOpen] = useState(false)
  const [isBonusProgramOpen, setIsBonusProgramOpen] = useState(false)

  // TODO: Fetch user data from API on component mount
  useEffect(() => {
    // Example API call structure:
    // fetchUserData().then(data => setUserData(data))
  }, [])

  return (
    <div className="dashboard-container">
      <header className="dashboard-header">
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

      <div className="dashboard-content">
        <p className="greeting-text">Hello, {userData.username}</p>
        <p className="balance-text">Balance: ${userData.balance.toFixed(2)}</p>
        
        <BMWShowcase depositsPerMonth={userData.depositsPerMonth} />

        <p className="affiliate-text">
          Affiliate program for earning off of UGC-Gambling traffic
        </p>

        <button className="become-buyer-btn" onClick={() => navigate('/buyer-options')}>
          Become a Buyer
        </button>
      </div>

      <footer className="dashboard-footer">
        <a href="#" className="footer-link">СОГЛАШЕНИЕ</a>
        <a href="#" className="footer-link">ПОЛИТИКА КОНФИДЕНЦИАЛЬНОСТИ</a>
        <a href="#" className="footer-link">НАШ КАНАЛ</a>
        <a href="#" className="footer-link">ПОДДЕРЖКА</a>
      </footer>
    </div>
  )
}

export default Dashboard
