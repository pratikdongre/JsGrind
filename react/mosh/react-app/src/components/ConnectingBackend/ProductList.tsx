import React, { useEffect, useState } from "react";

type ProductData = {
  [key: string]: string[];
};

function ProductList({ category = "" }: { category: string }) {
  //   const [product, setProducts] = useState<string[]>([]);

  const [products, setProducts] = useState<ProductData>({});

  useEffect(() => {
    console.log(`fetching Data  in ${category}`);

    // setProducts(["Clothing", "HouseHold"]);
    setProducts({
      Clothing: ["Shirt", "Pant", "Jacket"],
      HouseHold: ["Vacuum", "Fan", "TV"],
    });
  }, [category]);

  return (
    <div>
      <p>ProductList</p>
      <p>Variant 1</p>
      {products[category]?.map((item, index) => (
        <li key={index}>{item}</li>
      )) || <p>No Products found in this category</p>}

      <p>Variant 2</p>
      {products[category] ? (
        products[category].map((item, index) => <li key={index}>{item}</li>)
      ) : (
        <p>No products found in this categor</p>
      )}
      <p>Variant 3</p>
      {products[category]?.map((item, index) => (
        <li key={index}>{item}</li>
      ))}
    </div>
  );
}

export default ProductList;
