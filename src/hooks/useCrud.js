import { useState } from 'react'
import axios from 'axios'

const useCrud = (url_to) => {
  const [error, setError] = useState('')

  const setData = (setState, url=url_to) => {
    axios.get(url).then(response => {
      setState(response.data)
    }).catch(error=> {
      setError(error)
    })
  }

  return {error , setData}
}

export default useCrud
