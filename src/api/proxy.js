import axios from 'axios'

import { config } from '../config'

const proxy = axios.create({
  baseURL: ((config || {}).api || {}).host,
  headers: { 'Content-Type': 'application/json' },
  timeout: 5000
})

export default proxy
