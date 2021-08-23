import { useState, useEffect } from 'react'
import axios from 'axios'

const useCrud = (url_to, initialState = {}) => {
  const [error, setError] = useState('')
  const [data, setData] = useState(initialState)

  useEffect(() => {
    const getData = async () => {
      await axios.get(url_to).then(response => {
        setData(response.data)
      }).catch(error => {
        setError(error)
      })
    }
    getData()
  }, [url_to])

  return { error, data }
}

export default useCrud
