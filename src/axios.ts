import axios from 'axios'

export const https = axios.create({
  baseURL: 'http://localhost:5173/',
  timeout: 10_000,
})
