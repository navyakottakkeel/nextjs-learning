import { notFound } from 'next/navigation';
import React from 'react'

const ProductDetails = async ({params}) => {
    const {id} = await params;

    const response = await fetch(
      `https://jsonplaceholder.typicode.com/posts/${id}`,
      {
        cache: "no-store",
      }
    );

    const post = await response.json();

    if(!response.ok){
      notFound();
    }

  return (
    <div>
      <h1>Product Details</h1>
      <h2>Product id : {post.id}</h2>
      <h2>{post.title}</h2>
      <p>{post.body}</p>
    </div>
  )
}

export default ProductDetails
