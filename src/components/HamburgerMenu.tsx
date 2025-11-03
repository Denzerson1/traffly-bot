import { useNavigate } from 'react-router-dom'
import './HamburgerMenu.css'

interface HamburgerMenuProps {
  isOpen: boolean
  onClose: () => void
}

function HamburgerMenu({ isOpen, onClose }: HamburgerMenuProps) {
  const navigate = useNavigate()

  const handleNavigation = (path: string) => {
    navigate(path)
    onClose()
  }

  const handleSupport = () => {
    window.open('https://t.me/your_support_bot', '_blank')
    onClose()
  }

  if (!isOpen) return null

  return (
    <>
      <div className="menu-overlay" onClick={onClose}></div>
      <div className={`hamburger-menu ${isOpen ? 'open' : ''}`}>
        <button className="close-btn" onClick={onClose}>✕</button>
        <nav className="menu-nav">
          <button className="menu-item" onClick={() => handleNavigation('/about')}>
            About Us
          </button>
          <button className="menu-item" onClick={handleSupport}>
            Support
          </button>
          <button className="menu-item" onClick={() => handleNavigation('/faq')}>
            FAQ
          </button>
          <button className="menu-item" onClick={() => handleNavigation('/instructions')}>
            User Instructions
          </button>
        </nav>
      </div>
    </>
  )
}

export default HamburgerMenu
