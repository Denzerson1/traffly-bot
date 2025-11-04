import { useNavigate } from 'react-router-dom'
import './InfoPages.css'
import './Offers.css'
import TopNav from '../components/TopNav'
import SiteFooter from '../components/SiteFooter'

const links = {
  Parik24: import.meta.env.VITE_OFFER_PARIK24 ?? '#',
  SuperGra: import.meta.env.VITE_OFFER_SUPERGRA ?? '#',
  SlotCity: import.meta.env.VITE_OFFER_SLOTCITY ?? '#',
  Gorila: import.meta.env.VITE_OFFER_GORILA ?? '#',
  Betking: import.meta.env.VITE_OFFER_BETKING ?? '#',
  Beton: import.meta.env.VITE_OFFER_BETON ?? '#',
  FirstCasino: import.meta.env.VITE_OFFER_FIRSTCASINO ?? '#',
  '777Casino': import.meta.env.VITE_OFFER_777CASINO ?? '#',
} as const

type OfferName = keyof typeof links

function Offers() {
  const navigate = useNavigate()

  const open = (name: OfferName) => {
    const url = links[name]
    if (!url || url === '#') return
    window.open(url, '_blank')
  }

  const items: OfferName[] = [
    'Parik24', 'SuperGra',
    'SlotCity', 'Gorila',
    'Betking', 'Beton',
    'FirstCasino', '777Casino',
  ]

  return (
    <div className="info-page-container">
      <TopNav />

      <div className="info-content">
        <button className="back-btn" onClick={() => navigate('/buyer-options')}>← Back</button>

        <section className="offers-flow">
          <div className="flow-box main">Offers</div>

          <div className="flow-lines">
            <span className="line row1 left" aria-hidden></span>
            <span className="line row1 right" aria-hidden></span>
            <span className="line row2 left" aria-hidden></span>
            <span className="line row2 right" aria-hidden></span>
            <span className="line row3 left" aria-hidden></span>
            <span className="line row3 right" aria-hidden></span>
            <span className="line row4 left" aria-hidden></span>
            <span className="line row4 right" aria-hidden></span>
          </div>

          <div className="offers-grid">
            {items.map((name) => (
              <button key={name} className="flow-box offer fancy" onClick={() => open(name)}>
                {name}
              </button>
            ))}
          </div>
        </section>

        <p className="page-explainer">
          Explore active offers and jump directly to their destinations. Buttons open the configured links (set via VITE_OFFER_*).
        </p>
      </div>

      <SiteFooter />
    </div>
  )
}

export default Offers
