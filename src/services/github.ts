import axios from 'axios'

export const githubConnect = axios.create({
  baseURL: 'https://api.github.com/'
})
