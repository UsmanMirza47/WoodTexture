import React, { useEffect, useState } from "react";
import ProductListCard from "./ProductListCard";
import products from "../../assets/API/products.json";

const ProductList = () => {
  return (
    <div>
      <ul className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-3">
        {products?.slice(3, 9).map((subData) => {
          return <ProductListCard key={subData.id} data={subData} />;
        })}
      </ul>
    </div>
  );
};

export default ProductList;
