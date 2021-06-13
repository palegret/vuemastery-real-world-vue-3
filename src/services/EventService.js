import axios from 'axios'

import { ApiBaseUrl } from '../config.json'

const apiClient = axios.create({
  baseURL: ApiBaseUrl,
  withCredentials: false,
  headers: {
    Accept: 'application/json',
    'Content-Type': 'application/json'
  }
})

export default {
  getEvents () {
    return apiClient.get('/events')
  },
  getEvent (id) {
    return apiClient.get('/events/' + id)
  }
}
