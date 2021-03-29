const dev = !process.env.NODE_ENV || process.env.NODE_ENV === 'development'

export default {
  api: dev ? 'http://localhost:8080/api' : '/api',
  pictures: dev ? 'http://localhost:8080/pictures' : '/pictures'
}
