import React, { useEffect, useState } from "react";
import BestSellerCard from "./BestSellerCard";
import products from "../../assets/API/products.json";

const BestSeller = () => {
  return (
    <div>
      <ul className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-3">
        {products?.slice(0, 6).map((subData) => {
          return <BestSellerCard key={subData.id} data={subData} />;
        })}
      </ul>
    </div>
  );
};

export default BestSeller;
