import { useNavigate } from 'react-router-dom'
import './InfoPages.css'
import './CreativeLibrary.css'
import TopNav from '../components/TopNav'
import SiteFooter from '../components/SiteFooter'

const CHICKEN_URL = import.meta.env.VITE_GDRIVE_CHICKEN ?? '#'
const OTHER_URL = import.meta.env.VITE_GDRIVE_OTHER ?? '#'
const PLINKO_URL = import.meta.env.VITE_GDRIVE_PLINKO ?? '#'

function CreativeLibrary() {
  const navigate = useNavigate()

  const open = (url: string) => {
    if (!url || url === '#') return
    window.open(url, '_blank')
  }

  return (
    <div className="info-page-container">
      <TopNav />

      <div className="info-content">
        <button className="back-btn" onClick={() => navigate('/buyer-options')}>← Back</button>

        <section className="creative-flow">
          <div className="flow-box main">Creative<br/>Library</div>

          <div className="conn v1" aria-hidden></div>

          <div className="flow-branches">
            <button className="flow-box small small-left" onClick={() => open(CHICKEN_URL)}>
              Chicken<br/>Road
            </button>
            <button className="flow-box small small-right" onClick={() => open(OTHER_URL)}>
              Other
            </button>
          </div>

          <div className="conn v2" aria-hidden></div>

          <button className="flow-box mid" onClick={() => open(PLINKO_URL)}>
            Plinko
          </button>
        </section>

        <section className="note-grid">
          <div className="note-box">
            Choose a branch to open the corresponding Google Drive folder with creatives.
          </div>
        </section>
      </div>

      <SiteFooter />
    </div>
  )
}

export default CreativeLibrary
