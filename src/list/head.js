import Icon from '../common/icon'
import config from '../config'

const getIcon = name => (config.labels.find(label => label.name === name) || {}).icon || ''

export default ({ name }) => <div className='head'><Icon icon={getIcon(name)} /></div>
