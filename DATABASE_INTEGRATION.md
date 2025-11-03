# Database Integration Guide

This document explains how the application is structured for database integration.

## API Service (`src/services/api.ts`)

All database interactions should be handled through the API service. This centralizes data fetching and makes it easy to switch between mock data and real API calls.

### Key Functions:

#### `fetchUserData(userId?: string): Promise<UserData>`
Fetches user information from the database.

**Returns:**
```typescript
{
  username: string,      // User's display name
  balance: number,       // User's current balance
  depositsPerMonth: number  // Number of deposits this month
}
```

**Example Implementation:**
```typescript
const response = await fetch(`${API_BASE_URL}/user/${userId}`)
const data = await response.json()
return data
```

#### `fetchLeaderboard(): Promise<LeaderboardEntry[]>`
Fetches top 5 buyers for the leaderboard.

**Returns:**
```typescript
[
  {
    rank: number,      // Position (1-5)
    name: string,      // Buyer name
    deposits: number,  // Total deposits
    bonus: string      // Bonus percentage (e.g., "25%")
  }
]
```

#### `updateBalance(userId: string, newBalance: number): Promise<void>`
Updates a user's balance in the database.

## Components Ready for Database Integration

### Dashboard (`src/pages/Dashboard.tsx`)

The Dashboard component is structured to receive user data from the API:

```typescript
const [userData, setUserData] = useState<UserData>({
  username: 'USER',
  balance: 0.00,
  depositsPerMonth: 0
})

useEffect(() => {
  // Uncomment and implement when backend is ready:
  // fetchUserData().then(data => setUserData(data))
}, [])
```

**Database Fields Used:**
- `userData.username` - Displayed in greeting
- `userData.balance` - Shown as "Balance: $X.XX"
- `userData.depositsPerMonth` - Used for BMW level calculation

### BMW Showcase (`src/components/BMWShowcase.tsx`)

Automatically updates based on `depositsPerMonth`:
- **Junior** (< 15 deposits): BMW 1 Series - Cyan color
- **Middle** (15-40 deposits): BMW 3 Series - Magenta color
- **Senior** (40+ deposits): BMW M5 - Yellow color

### Leaderboard Modal (`src/components/LeaderboardModal.tsx`)

Fetches data when opened:
```typescript
useEffect(() => {
  if (isOpen) {
    fetchLeaderboard()
      .then(data => setTopBuyers(data))
      .catch(err => console.error(err))
  }
}, [isOpen])
```

## Environment Variables

Create a `.env` file in the root directory:

```env
REACT_APP_API_URL=http://your-backend-url.com/api
```

## Backend API Endpoints Expected

### User Data
```
GET /api/user/:userId
Response: { username: string, balance: number, depositsPerMonth: number }
```

### Leaderboard
```
GET /api/leaderboard
Response: [{ rank: number, name: string, deposits: number, bonus: string }]
```

### Update Balance
```
PUT /api/user/:userId/balance
Body: { balance: number }
Response: { success: boolean }
```

## Testing with Mock Data

The app currently uses mock data. To test different scenarios:

1. **Change deposit level** in `Dashboard.tsx`:
   ```typescript
   depositsPerMonth: 0   // Junior
   depositsPerMonth: 20  // Middle
   depositsPerMonth: 50  // Senior
   ```

2. **Change balance**:
   ```typescript
   balance: 150.50
   ```

3. **Change username**:
   ```typescript
   username: 'JohnDoe'
   ```

## Integration Steps

1. Set up your backend API with the endpoints listed above
2. Update `API_BASE_URL` in `src/services/api.ts`
3. Uncomment the actual API calls in the service functions
4. Uncomment the `fetchUserData()` call in Dashboard's `useEffect`
5. Test with real data

## Notes

- All monetary values are stored as numbers (e.g., 100.50)
- The app formats them for display using `.toFixed(2)`
- Username can contain special characters and spaces
- Deposit counts are integers
- Bonus percentages in leaderboard are stored as strings (e.g., "25%")
