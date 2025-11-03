import { useNavigate } from 'react-router-dom'
import './InfoPages.css'

function FAQ() {
  const navigate = useNavigate()

  const faqs = [
    {
      question: 'What is Traffly?',
      answer: 'Traffly is an affiliate platform for earning through UGC-Gambling traffic. We connect buyers with traffic sources to maximize revenue.'
    },
    {
      question: 'How do I get started?',
      answer: 'Click "Start Work" on the main page to access your dashboard. From there, you can become a buyer and start generating traffic.'
    },
    {
      question: 'What are the deposit levels?',
      answer: 'There are three levels: Junior (<15 deposits/month), Middle (15-40 deposits/month), and Senior (40+ deposits/month). Each level unlocks better rewards.'
    },
    {
      question: 'How does the referral program work?',
      answer: 'Invite 5 people who each make at least 5 deposits, and you\'ll receive a 10% bonus on your payouts.'
    },
    {
      question: 'When do I receive my payouts?',
      answer: 'Payouts are processed weekly. Check your balance on the dashboard to track your earnings.'
    },
    {
      question: 'How can I contact support?',
      answer: 'Click the Support link in the menu to reach our Telegram support channel. We\'re here to help 24/7.'
    }
  ]

  return (
    <div className="info-page-container">
      <header className="info-header">
        <h1 className="info-title">FAQ</h1>
      </header>

      <div className="info-content">
        <button className="back-btn" onClick={() => navigate('/dashboard')}>← Back</button>
        <div className="faq-list">
          {faqs.map((faq, index) => (
            <div key={index} className="faq-item">
              <h3 className="faq-question">{faq.question}</h3>
              <p className="faq-answer">{faq.answer}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}

export default FAQ
