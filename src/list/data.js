import date from 'date-and-time'

const getText = (name, data) => {
  switch (name) {
    case 'temperature': return data / 10
    case 'date': return date.format(new Date(data), 'HH:mm DD/MM')
    default: return data
  }
}

const getUnit = (name) => {
  switch (name) {
    case 'light': return '\nLUX'
    case 'temperature': return '°C'
    case 'moisture': return '%'
    case 'conductivity': return '\nµS/cm'
    case 'battery': return '%'
    default: return ''
  }
}

export default ({ name, data, onSelect }) => (
  <div className='data' onClick={() => onSelect()}>
    <div>
      {getText(name, data)}
      <small>{getUnit(name)}</small>
    </div>
  </div>
)
