
import React from 'react'
import {BASE_URL } from '../../utils/config'
import useFetch from '../../hooks/useFetch'

const CustomPage = () => {
    const {data : custom } = useFetch(`${BASE_URL}/custom`)
    console.log(custom);
  return (
    <div>CustomPage</div>
  )
}

export default CustomPage