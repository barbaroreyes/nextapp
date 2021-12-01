import React from 'react'
import {useRouter} from 'next/router'

const Product = () => {
    const router = useRouter()
    const {product}= router.query;
  return (
    <div>
      {product}
    </div>
  )
}

export default Product
