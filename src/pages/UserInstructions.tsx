import { useNavigate } from 'react-router-dom'
import './InfoPages.css'
import TopNav from '../components/TopNav'
import SiteFooter from '../components/SiteFooter'

function UserInstructions() {
  const navigate = useNavigate()

  return (
    <div className="info-page-container">
      <TopNav />

      <div className="info-content">
        <button className="back-btn" onClick={() => navigate('/dashboard')}>← Back</button>
        <div className="instructions-intro">
          <p>Follow these simple steps to start earning with Traffly:</p>
        </div>

        <div className="instruction-step">
          <div className="step-number">1</div>
          <div className="step-content">
            <h3>Create Your Account</h3>
            <p>Sign up and complete your profile. Make sure to verify your contact information for payouts.</p>
          </div>
        </div>

        <div className="instruction-step">
          <div className="step-number">2</div>
          <div className="step-content">
            <h3>Become a Buyer</h3>
            <p>Click the "Become a Buyer" button on your dashboard to activate your account and gain access to traffic sources.</p>
          </div>
        </div>

        <div className="instruction-step">
          <div className="step-number">3</div>
          <div className="step-content">
            <h3>Generate Traffic</h3>
            <p>Start directing traffic to your campaigns. Monitor your performance in real-time on the dashboard.</p>
          </div>
        </div>

        <div className="instruction-step">
          <div className="step-number">4</div>
          <div className="step-content">
            <h3>Track Your Progress</h3>
            <p>Your level (Junior, Middle, Senior) depends on your monthly deposits. Higher levels unlock better bonuses and rewards.</p>
          </div>
        </div>

        <div className="instruction-step">
          <div className="step-number">5</div>
          <div className="step-content">
            <h3>Refer Friends</h3>
            <p>Use the referral program to earn extra bonuses. Get 10% bonus when you invite 5 active users.</p>
          </div>
        </div>

        <div className="instruction-step">
          <div className="step-number">6</div>
          <div className="step-content">
            <h3>Withdraw Earnings</h3>
            <p>Payouts are processed weekly. Check your balance and request withdrawals through the dashboard.</p>
          </div>
        </div>

        <div className="tips-section">
          <h3>💡 Pro Tips</h3>
          <ul>
            <li>Maintain consistent activity to reach higher levels faster</li>
            <li>Use the leaderboard to track top performers and learn from them</li>
            <li>Join our Telegram community for updates and strategies</li>
            <li>Contact support if you have any questions - we're here to help!</li>
          </ul>
        </div>
      </div>

      <SiteFooter />
    </div>
  )
}

export default UserInstructions
