import React, { useEffect } from 'react'
import { fetchApi } from '../redux/fetchApi'
import { useDispatch } from 'react-redux'

function Products() {

    const dispatch = useDispatch()

    useEffect(() => {
        fetchApi(dispatch)
    }, [])

  return (
    <div>
        hello
    </div>
  )
}

export default Products