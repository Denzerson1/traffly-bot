import './Modal.css'

interface BonusProgramModalProps {
  isOpen: boolean
  onClose: () => void
}

function BonusProgramModal({ isOpen, onClose }: BonusProgramModalProps) {
  if (!isOpen) return null

  return (
    <>
      <div className="modal-overlay" onClick={onClose}></div>
      <div className="modal-container bonus-modal">
        <button className="modal-close" onClick={onClose}>✕</button>
        <h2 className="modal-title">🎁 Referral Bonus Program</h2>
        <div className="bonus-content">
          <div className="bonus-card">
            <div className="bonus-icon">👥</div>
            <h3>Invite Friends</h3>
            <p className="bonus-description">
              Invite people to join our app and start earning together!
            </p>
          </div>
          
          <div className="bonus-reward">
            <div className="reward-badge">
              <span className="reward-number">5</span>
              <span className="reward-text">People</span>
            </div>
            <div className="arrow">→</div>
            <div className="reward-badge highlight">
              <span className="reward-number">10%</span>
              <span className="reward-text">Bonus</span>
            </div>
          </div>

          <div className="bonus-requirements">
            <h4>Requirements:</h4>
            <ul>
              <li>Invite 5 people to the app</li>
              <li>Each person must complete minimum 5 deposits</li>
              <li>Get 10% bonus added to your payout</li>
            </ul>
          </div>

          <div className="bonus-cta">
            <button className="bonus-button">Get Your Referral Link</button>
          </div>
        </div>
      </div>
    </>
  )
}

export default BonusProgramModal
