import { useState, useEffect } from 'react'
import { fetchLeaderboard, type LeaderboardEntry } from '../services/api'
import './Modal.css'

interface LeaderboardModalProps {
  isOpen: boolean
  onClose: () => void
}

// Fallback data if API fails
const defaultTopBuyers: LeaderboardEntry[] = [
  { rank: 1, name: 'CryptoKing', deposits: 127, bonus: '25%' },
  { rank: 2, name: 'TrafficMaster', deposits: 98, bonus: '20%' },
  { rank: 3, name: 'DiamondHands', deposits: 76, bonus: '15%' },
  { rank: 4, name: 'MoonWalker', deposits: 54, bonus: '12%' },
  { rank: 5, name: 'ProTrader', deposits: 43, bonus: '10%' }
]

function LeaderboardModal({ isOpen, onClose }: LeaderboardModalProps) {
  const [topBuyers, setTopBuyers] = useState<LeaderboardEntry[]>(defaultTopBuyers)
  const [loading, setLoading] = useState(false)

  // TODO: Fetch leaderboard data from database when modal opens
  useEffect(() => {
    if (isOpen) {
      setLoading(true)
      fetchLeaderboard()
        .then(data => setTopBuyers(data))
        .catch(err => {
          console.error('Failed to fetch leaderboard:', err)
          setTopBuyers(defaultTopBuyers)
        })
        .finally(() => setLoading(false))
    }
  }, [isOpen])

  if (!isOpen) return null

  return (
    <>
      <div className="modal-overlay" onClick={onClose}></div>
      <div className="modal-container leaderboard-modal">
        <button className="modal-close" onClick={onClose}>✕</button>
        <h2 className="modal-title">🏆 Top Buyers Leaderboard</h2>
        {loading ? (
          <p className="loading-text">Loading...</p>
        ) : (
          <div className="leaderboard-list">
            {topBuyers.map((buyer) => (
              <div key={buyer.rank} className="leaderboard-item">
                <div className="rank-badge">{buyer.rank}</div>
                <div className="buyer-info">
                  <div className="buyer-name">{buyer.name}</div>
                  <div className="buyer-deposits">{buyer.deposits} deposits</div>
                </div>
                <div className="buyer-bonus">{buyer.bonus}</div>
              </div>
            ))}
          </div>
        )}
        <p className="modal-note">
          Top performers receive extra payout bonuses!
        </p>
      </div>
    </>
  )
}

export default LeaderboardModal
