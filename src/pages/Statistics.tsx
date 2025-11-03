import { useEffect, useMemo, useState } from 'react'
import { useNavigate } from 'react-router-dom'
import './InfoPages.css'
import './Statistics.css'
import TopNav from '../components/TopNav'
import SiteFooter from '../components/SiteFooter'
import { fetchStatistics, type StatRow } from '../services/api'

function Statistics() {
  const navigate = useNavigate()
  const [rows, setRows] = useState<StatRow[]>([])
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState<string | null>(null)

  useEffect(() => {
    let isMounted = true
    const load = async () => {
      setLoading(true)
      setError(null)
      try {
        const data = await fetchStatistics()
        if (isMounted) setRows(data)
      } catch (e: any) {
        if (isMounted) setError(e?.message ?? 'Failed to load statistics')
      } finally {
        if (isMounted) setLoading(false)
      }
    }

    // Initial load and refresh every 15 minutes
    load()
    const id = setInterval(load, 15 * 60 * 1000)
    return () => {
      isMounted = false
      clearInterval(id)
    }
  }, [])

  const totals = useMemo(() => {
    return rows.reduce(
      (acc, r) => ({
        clicks: acc.clicks + r.clicks,
        uniqueClicks: acc.uniqueClicks + r.uniqueClicks,
        registrations: acc.registrations + r.registrations,
        deposits: acc.deposits + r.deposits,
      }),
      { clicks: 0, uniqueClicks: 0, registrations: 0, deposits: 0 },
    )
  }, [rows])

  return (
    <div className="info-page-container">
      <TopNav />

      <div className="info-content">
        <button className="back-btn" onClick={() => navigate('/buyer-options')}>← Back</button>

        <section className="stats-notes">
          <div className="note-box">
            This page displays your performance metrics fetched from the PWA service and refreshed every 15 minutes.
          </div>
        </section>

        <section className="stats-table-wrap">
          {loading && <div className="stats-loading">Loading statistics…</div>}
          {error && <div className="stats-error">{error}</div>}
          {!loading && (
            <div className="table-scroll">
              <table className="stats-table">
                <thead>
                  <tr>
                    <th>Date</th>
                    <th>Clicks</th>
                    <th>Unique Clicks</th>
                    <th>Registrations</th>
                    <th>Deposits</th>
                  </tr>
                </thead>
                <tbody>
                  {rows.map((r, i) => (
                    <tr key={i}>
                      <td>{r.date}</td>
                      <td>{r.clicks.toLocaleString()}</td>
                      <td>{r.uniqueClicks.toLocaleString()}</td>
                      <td>{r.registrations.toLocaleString()}</td>
                      <td>{r.deposits.toLocaleString()}</td>
                    </tr>
                  ))}
                </tbody>
                {rows.length > 0 && (
                  <tfoot>
                    <tr>
                      <th>Total</th>
                      <th>{totals.clicks.toLocaleString()}</th>
                      <th>{totals.uniqueClicks.toLocaleString()}</th>
                      <th>{totals.registrations.toLocaleString()}</th>
                      <th>{totals.deposits.toLocaleString()}</th>
                    </tr>
                  </tfoot>
                )}
              </table>
            </div>
          )}
        </section>
      </div>

      <SiteFooter />
    </div>
  )
}

export default Statistics
