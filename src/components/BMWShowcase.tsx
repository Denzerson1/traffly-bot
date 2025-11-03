import './BMWShowcase.css'

interface BMWShowcaseProps {
  depositsPerMonth: number
}

function BMWShowcase({ depositsPerMonth }: BMWShowcaseProps) {
  const getCarLevel = () => {
    if (depositsPerMonth < 15) {
      return {
        level: 'Junior',
        model: 'BMW 1 Series',
        color: '#00f3ff'
      }
    } else if (depositsPerMonth < 40) {
      return {
        level: 'Middle',
        model: 'BMW 3 Series',
        color: '#ff00ff'
      }
    } else {
      return {
        level: 'Senior',
        model: 'BMW M5',
        color: '#ffff00'
      }
    }
  }

  const carInfo = getCarLevel()

  return (
    <div className="bmw-showcase">
      <div className="car-display">
        <div className="car-model" style={{ borderColor: carInfo.color }}>
          <div className="headlights">
            <div className="headlight left" style={{ backgroundColor: carInfo.color }}></div>
            <div className="headlight right" style={{ backgroundColor: carInfo.color }}></div>
          </div>
          <div className="car-body">
            <div className="car-text" style={{ color: carInfo.color }}>
              {carInfo.model}
            </div>
          </div>
        </div>
      </div>
      <div className="level-badge" style={{ color: carInfo.color, borderColor: carInfo.color }}>
        {carInfo.level}
      </div>
      <p className="deposits-count">Deposits: {depositsPerMonth}/month</p>
    </div>
  )
}

export default BMWShowcase
