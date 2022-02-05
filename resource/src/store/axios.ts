import _axios from 'axios'

const axios = () => {
  const instance = _axios.create({
    baseURL: 'http://localhost:4000',
    timeout: 1000
  })

  return instance
}

export { axios }
export default axios()
