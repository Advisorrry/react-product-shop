import axios from 'redaxios'
import React from 'react'
import { IProduct } from '../utils/types'

export const useFetching = () => {
  const [data, setData] = React.useState([])
  const [isLoading, setIsLoading] = React.useState(true)
  const [isError, setIsError] = React.useState(false)

  React.useEffect(() => {
    const getSneakers = async () => {
      setIsLoading(true)
      try {
        const response = await axios.get('http://localhost:3001/sneakers')
        const { results, error } = await response.data
        if (error) {
          throw new Error(error)
        }
        setData(results)
        setIsError(false)
      } catch (e) {
        setIsError(true)
      } finally {
        setIsLoading(false)
      }
    }
    getSneakers()
  }, [])
  return {
    data,
    isLoading,
    isError,
  }
}
