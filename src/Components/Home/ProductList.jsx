import React, { useEffect, useState } from "react";
import ProductListCard from "./ProductListCard";

const ProductList = () => {
  const [data, setData] = useState();

  useEffect(() => {
    fetch("./Products/products.json")
      .then((res) => {
        return res.json();
      })
      .then((data) => {
        setData(data.products);
      });
  }, []);


  return (
    <div>
      <ul className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-3">
        {data?.slice(3, 9).map((subData) => {
          return <ProductListCard key={subData.id} data={subData} />;
        })}
      </ul>
    </div>
  );
};

export default ProductList;
