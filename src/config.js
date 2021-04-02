const dev = !process.env.NODE_ENV || process.env.NODE_ENV === 'development'

export default {
  api: dev ? 'http://localhost:8080/api' : '/api',
  pictures: dev ? 'http://localhost:8080/pictures' : '/pictures',
  labels: [
    { name: 'light', unit: '\nLUX', icon: 'lightbulb', min: 0, max: 55000, color: '#ffab00' },
    { name: 'temperature', unit: '°C', icon: 'thermostat', min: 50, max: 350, color: '#aa00ff' },
    { name: 'moisture', unit: '%', icon: 'local_drink', min: 20, max: 60, color: '#0091ea' },
    { name: 'conductivity', unit: '\nµS/cm', icon: 'grass', min: 100, max: 2000, color: '#00c853' },
    { name: 'battery', unit: '%', icon: 'battery_charging_full', min: 0, max: 100, color: '#c51162' },
    { name: 'date', unit: '', icon: 'today', color: '#8e24aa' }
  ]
}
