import axios from 'axios'
const URL = 'http://localhost:8000/api'

const api = axios.create({
  baseURL: URL,
})

export { api }

