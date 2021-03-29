import Head from './head'
import Data from './data'

import './list.scss'

export default ({ items = [], onSelect }) => {
  const first = items.find(item => item)
  return (
    <div className='list'>
      {first && Object.keys(first).map((name, index) => (<Head name={name} key={index} />))}
      {items.map((item, current) => Object.keys(item).map((key, index) => (
        <Data key={index} name={key} data={item[key]} onSelect={() => onSelect(item)} />
      )))}
    </div>
  )
}
