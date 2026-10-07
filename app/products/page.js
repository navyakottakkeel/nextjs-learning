import Link from "next/link";
import React from "react";

const Product = async ({ searchParams }) => {
  const { page = 1 } = await searchParams;

  await new Promise((resolve) => setTimeout(resolve, 3000));

  const response = await fetch(
    `https://jsonplaceholder.typicode.com/posts?_page=${page}&_limit=10`,
    {
      cache: "no-store",
    }
  );
  const products = await response.json();
  console.log(products);

  return (
    <div>
      <h1>Product page - Page {page}</h1>
      {products.length === 0 ? (
        <p> No Products Found</p>
      ) : (
      products.map((product) => (
        <div key={product.id}>
          <h2>{product.titlt}</h2>
          <p>{product.body}</p>

          <Link href={`products/${product.id}`}>View Detail</Link>
        </div>
      ))
      )}
       {products.length > 0 && (
      <div>
      {Number(page > 1) && (
        <Link href={`/products?page=${Number(page) - 1}`}>Previous</Link>
        )}
        {" | "}
          <Link href={`/products?page=${Number(page) + 1}`}>Next</Link>
      </div>
       )}
    </div>
  );
};

export default Product;
