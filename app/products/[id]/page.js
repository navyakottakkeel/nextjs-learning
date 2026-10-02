import React from 'react'

const ProductDetails = async ({params}) => {
    const {id} = await params;
  return (
    <div>
      <h1>Product detail page</h1>
      <h2>Product Id : {id}</h2>
    </div>
  )
}

export default ProductDetails
