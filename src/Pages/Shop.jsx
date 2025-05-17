import React, { useEffect, useState } from "react";
import ProductCard from "../Components/Shop/ProductCard";
import products from "../assets/API/products.json";

const Shop = () => {
  const [data, setData] = useState([...products]);
  const [option, setOption] = useState();

  const handleSortData = (e) => {
    const value = e.target.value;
    setOption(value);

    if (value === "SELECT") {
      data.sort((a, b) => a.id - b.id);
    } else {
      if (value !== "SELECT") {
        if (value === "price:Low to High") {
          data.sort((a, b) => a.price - b.price);
        } else if (value === "price:Hight to Low") {
          data.sort((a, b) => b.price - a.price);
        } else if (value === "asc:A to Z") {
          data.sort((a, b) => a.name.localeCompare(b.name));
        } else if (value === "dsc:Z to A") {
          data.sort((a, b) => b.name.localeCompare(a.name));
        }
      }
    }
  };

  return (
    <>
      <div className="w-[90%] my-4 flex flex-col gap-5 mx-auto">
        <select
          className="sm:w-52 w-full p-2 border border-black cursor-pointer *:cursor-pointer"
          value={option}
          onChange={(e) => {
            handleSortData(e);
          }}
        >
          <option value="SELECT">SELECT</option>
          <option value="price:Low to High">Price : Low To High</option>
          <option value="price:Hight to Low">Price : Hight To Low</option>
          <option value="asc:A to Z">A To Z</option>
          <option value="dsc:Z to A">Z To A</option>
        </select>
        <ul className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-3">
          {data?.map((subData) => {
            return <ProductCard data={subData} key={subData.id} />;
          })}
        </ul>
      </div>
    </>
  );
};

export default Shop;
