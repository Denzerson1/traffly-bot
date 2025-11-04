import { useEffect, useMemo, useState } from 'react'
import { useNavigate } from 'react-router-dom'
import './InfoPages.css'
import './Reviews.css'
import TopNav from '../components/TopNav'
import SiteFooter from '../components/SiteFooter'
import { fetchReviews, type Review } from '../services/api'

const WINDOW_MS = 6 * 60 * 60 * 1000 // 6 hours

function Reviews() {
  const navigate = useNavigate()

  const [allReviews, setAllReviews] = useState<Review[]>([])
  const [now, setNow] = useState(() => Date.now())

  const load = async () => {
    const data = await fetchReviews()
    setAllReviews(data)
  }

  useEffect(() => {
    load()
    // Schedule refresh exactly at 6h boundaries so a new set appears
    const msToNext = WINDOW_MS - (Date.now() % WINDOW_MS)
    const t = setTimeout(() => {
      setNow(Date.now())
      load()
      const i = setInterval(() => {
        setNow(Date.now())
        load()
      }, WINDOW_MS)
      // store interval id on window to clear on cleanup
      ;(window as any).__reviewsInt = i
    }, msToNext)
    return () => {
      clearTimeout(t)
      const i = (window as any).__reviewsInt
      if (i) clearInterval(i)
    }
  }, [])

  const windowIndex = Math.floor(now / WINDOW_MS)

  const currentFive = useMemo(() => {
    if (allReviews.length === 0) return []
    const result: Review[] = []
    const n = allReviews.length
    const stride = 7
    let idx = windowIndex % n
    const used = new Set<number>()
    while (result.length < 5 && used.size < n) {
      if (!used.has(idx)) {
        used.add(idx)
        result.push(allReviews[idx])
      }
      idx = (idx + stride) % n
    }
    return result
  }, [allReviews, windowIndex])

  const adminMode = import.meta.env.VITE_ADMIN_MODE === 'true'

  return (
    <div className="info-page-container">
      <TopNav />

      <div className="info-content">
        <button className="back-btn" onClick={() => navigate('/buyer-options')}>← Back</button>

        <section className="reviews-flow">
          <div className="flow-box main">See for Yourself</div>
          <span className="vline top" aria-hidden></span>
        </section>

        {adminMode && (
          <div style={{ marginBottom: '0.75rem' }}>
            <button className="account-menu-item" onClick={load}>Refresh reviews now</button>
          </div>
        )}

        <section className="reviews-list">
          {currentFive.map((r) => (
            <div key={r.id ?? r.text} className="review-card">{r.text}</div>
          ))}
        </section>
      </div>

      <SiteFooter />
    </div>
  )
}

export default Reviews
