import Chart from 'react-apexcharts'

import options from './simple-options'

export default ({ label: { color, min, max }, data }) => {
  return (
    <Chart
      options={Object.assign({}, options, { colors: [color], yaxis: { min, max } })}
      series={[{ data }]}
      type='area'
      height='100'
    />
  )
}
