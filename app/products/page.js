import React from "react";

const Product = async () => {

  await new Promise((resolve) => setTimeout(resolve, 3000))

  const response = await fetch("https://jsonplaceholder.typicode.com/posts", {
    cache:"no-store",
  });
  const products = await response.json();
  console.log(products);

  return (
    <div>
      <h1>Product page</h1>
      {products.map((product) => (
        <div key={product.id}>
          <h2>{product.titlt}</h2>
          <p>{product.body}</p>
        </div>
      ))}
    </div>
  );
};

export default Product;
