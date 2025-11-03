import './AccountMenu.css'

interface AccountMenuProps {
  isOpen: boolean
  onClose: () => void
  onOpenLeaderboard: () => void
  onOpenBonusProgram: () => void
}

function AccountMenu({ isOpen, onClose, onOpenLeaderboard, onOpenBonusProgram }: AccountMenuProps) {
  if (!isOpen) return null

  const handleLeaderboard = () => {
    onOpenLeaderboard()
    onClose()
  }

  const handleBonusProgram = () => {
    onOpenBonusProgram()
    onClose()
  }

  return (
    <>
      <div className="menu-overlay" onClick={onClose}></div>
      <div className="account-menu">
        <button className="account-menu-item" onClick={handleLeaderboard}>
          🏆 Leaderboard
        </button>
        <button className="account-menu-item" onClick={handleBonusProgram}>
          🎁 Bonus Program
        </button>
      </div>
    </>
  )
}

export default AccountMenu
