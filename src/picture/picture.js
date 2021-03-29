import './picture.scss'
import config from '../config'

export default ({ item }) => {
  const picture = item && item.date && `${config.pictures}/${item.date}.jpg`
  const alt = picture && new Date(item.date).toLocaleString()
  return (
    <div className='picture'>
      {picture && <img src={picture} alt={alt} />}
    </div>
  )
}
