import Icon from '../common/icon'

const getIcon = name => {
  switch (name) {
    case 'light': return 'lightbulb'
    case 'temperature': return 'thermostat'
    case 'moisture': return 'local_drink'
    case 'conductivity': return 'grass'
    case 'battery': return 'battery_charging_full'
    case 'date': return 'today'
    default: return ''
  }
}

export default ({ name }) => <div className='head'><Icon icon={getIcon(name)} /></div>
