import React, { useEffect, useState } from "react";
import BestSellerCard from "./BestSellerCard";
import products from "../../assets/API/products.json";
import { FaArrowRight } from "react-icons/fa";

const BestSeller = () => {
  return (
    <div className="w-[90%] my-4 flex flex-col gap-5">
      <h1 className="font-bold text-[5vw] md:text-[3vw] text-center">
        Discover Our : Best Seller
      </h1>
      <div>
        <ul className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-3">
          {products?.slice(0, 6).map((subData) => {
            return <BestSellerCard key={subData.id} data={subData} />;
          })}
        </ul>
      </div>
      <div className="flex justify-center items-center">
        <button className="flex gap-2 justify-center items-center hover:text-lime-400 text-lg transition-all duration-300 ease-linear">
          See More <FaArrowRight />
        </button>
      </div>
    </div>
  );
};

export default BestSeller;
