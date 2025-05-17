import React, { useEffect, useState } from "react";
import categories from "../../assets/API/categories.json";

const Categories = () => {
  return (
    <div>
      <ul className="flex flex-wrap justify-center items-center gap-5">
        {categories?.map((subData) => {
          return (
            <li
              key={subData.id}
              className="bg-lime-200 w-32 h-32 flex justify-center items-center flex-col gap-2 rounded-full hover:bg-lime-400 transition-all duration-300 ease-linear cursor-pointer"
            >
              <img srcSet={subData.image} loading="lazy" />
              <p>{subData.name}</p>
            </li>
          );
        })}
      </ul>
    </div>
  );
};

export default Categories;
