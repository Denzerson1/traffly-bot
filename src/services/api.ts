// API service for database integration
// TODO: Replace with your actual API endpoint

export const API_BASE_URL = import.meta.env.VITE_API_URL ?? 'http://localhost:3000/api'

export interface UserData {
  username: string
  balance: number
  depositsPerMonth: number
}

export interface LeaderboardEntry {
  rank: number
  name: string
  deposits: number
  bonus: string
}

/**
 * Fetch user data from database
 * @returns User data object
 */
export async function fetchUserData(): Promise<UserData> {
  try {
    // TODO: Replace with actual API call
    // const response = await fetch(`${API_BASE_URL}/user/${userId}`)
    // const data = await response.json()
    // return data
    
    // Mock data for now
    return {
      username: 'USER',
      balance: 0.00,
      depositsPerMonth: 0
    }
  } catch (error) {
    console.error('Error fetching user data:', error)
    throw error
  }
}

/**
 * Fetch leaderboard data from database
 * @returns Array of top buyers
 */
export async function fetchLeaderboard(): Promise<LeaderboardEntry[]> {
  try {
    // TODO: Replace with actual API call
    // const response = await fetch(`${API_BASE_URL}/leaderboard`)
    // const data = await response.json()
    // return data
    
    // Mock data for now
    return [
      { rank: 1, name: 'CryptoKing', deposits: 127, bonus: '25%' },
      { rank: 2, name: 'TrafficMaster', deposits: 98, bonus: '20%' },
      { rank: 3, name: 'DiamondHands', deposits: 76, bonus: '15%' },
      { rank: 4, name: 'MoonWalker', deposits: 54, bonus: '12%' },
      { rank: 5, name: 'ProTrader', deposits: 43, bonus: '10%' }
    ]
  } catch (error) {
    console.error('Error fetching leaderboard:', error)
    throw error
  }
}

/**
 * Update user balance
 * @param userId - User ID
 * @param newBalance - New balance amount
 */
export async function updateBalance(userId: string, newBalance: number): Promise<void> {
  try {
    // TODO: Replace with actual API call
    // await fetch(`${API_BASE_URL}/user/${userId}/balance`, {
    //   method: 'PUT',
    //   headers: { 'Content-Type': 'application/json' },
    //   body: JSON.stringify({ balance: newBalance })
    // })
    
    console.log('Balance updated for user', userId, newBalance)
  } catch (error) {
    console.error('Error updating balance:', error)
    throw error
  }
}

// Statistics types and API
export interface StatRow {
  date: string // ISO date string or label for the row
  clicks: number
  uniqueClicks: number
  registrations: number
  deposits: number
}

/**
 * Fetch statistics rows from PWA service via our API proxy.
 * Expected response: Array<StatRow>
 */
export async function fetchStatistics(): Promise<StatRow[]> {
  try {
    const res = await fetch(`${API_BASE_URL}/stats`)
    if (!res.ok) throw new Error(`Failed to fetch stats: ${res.status}`)
    const data = await res.json()
    return data as StatRow[]
  } catch (error) {
    console.error('Error fetching statistics:', error)
    // Fallback mock data (last 7 entries)
    const today = new Date()
    const mock: StatRow[] = Array.from({ length: 7 }).map((_, i) => {
      const d = new Date(today)
      d.setDate(today.getDate() - (6 - i))
      return {
        date: d.toISOString().slice(0, 10),
        clicks: 100 + Math.floor(Math.random() * 200),
        uniqueClicks: 60 + Math.floor(Math.random() * 120),
        registrations: 10 + Math.floor(Math.random() * 30),
        deposits: 5 + Math.floor(Math.random() * 20),
      }
    })
    return mock
  }
}
