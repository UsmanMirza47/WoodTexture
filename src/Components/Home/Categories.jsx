import React, { useEffect, useState } from "react";

const Categories = () => {
  const [data, setData] = useState();

  useEffect(() => {
    fetch("./Category/categories.json")
      .then((res) => {
        return res.json();
      })
      .then((data) => {
        setData(data);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

  return (
    <div>
      <ul className="flex flex-wrap justify-center items-center gap-5">
        {data?.map((subData) => {
          return (
            <li className="bg-lime-200 w-32 h-32 flex justify-center items-center flex-col gap-2 rounded-full hover:bg-lime-400 transition-all duration-300 ease-linear cursor-pointer">
              <img src={subData.image} loading="lazy" />
              <p>{subData.name}</p>
            </li>
          );
        })}
      </ul>
    </div>
  );
};

export default Categories;
