import Chart from './simple'

import './charts.scss'

import Icon from '../common/icon'
import Bar from './bar'
import config from '../config'

export default ({ items }) => (
  <div className='charts'>
    {config.labels.filter(label => label.name !== 'date').map((label, index) => {
      const first = items.find(item => item)
      const { color, icon, name, unit } = label
      return (
        <div key={index} className='mdc-card'>
          <div className='title' style={{ color }}>
            <Icon icon={icon} />
            <span className='label'>{name}</span>
            <span className='value'>
              {first && first[name] && (name === 'temperature' ? (first[name] / 10) : first[name])}
              <small>{unit.replace('\n', '')}</small>
            </span>

          </div>
          <Chart data={items.slice(0, 47).map(item => item[name]).reverse()} label={label} />
          <Bar label={label} value={first && first[name]} />
        </div>
      )
    })}
  </div>
)
