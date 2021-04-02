import date from 'date-and-time'
import config from '../config'

const getText = (name, data) => {
  switch (name) {
    case 'temperature': return data / 10
    case 'date': return date.format(new Date(data), 'HH:mm DD/MM')
    default: return data
  }
}

const getUnit = name => (config.labels.find(label => label.name === name) || {}).unit || ''

export default ({ name, data, onSelect }) => (
  <div className='data' onClick={() => onSelect()}>
    <div>
      {getText(name, data)}
      <small>{getUnit(name)}</small>
    </div>
  </div>
)
