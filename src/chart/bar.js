import './bar.scss'
import Color from 'color'

export default ({ label: { min, max, color }, value }) => {
  const width = value && Math.floor(((value - min) * 100) / (max - min))
  return (
    <div className='bar' style={{ background: Color(color).lightness(94).hex() }}>
      <div style={{ width: `${width}%`, background: color }} />
      <span style={{ color }}>{width}%</span>
    </div>
  )
}
