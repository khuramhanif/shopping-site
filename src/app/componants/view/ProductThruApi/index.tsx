import React from 'react'

const ProductthruApi = ({productData}:any) => {
  return (
    <div>{productData[0].productName}</div>
  )
}

export default ProductthruApi