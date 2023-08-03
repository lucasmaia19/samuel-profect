import axios from 'axios'

const HOST = process.env.HOST

const api = axios.create({
  baseURL: 'http://localhost:8000',
})

export default api
