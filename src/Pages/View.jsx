import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

const View = () => {
  const [data, setData] = useState([]);
  const { id } = useParams();

  useEffect(() => {
    fetch("./Products/products.json")
      .then((res) => {
        return res.json();
      })
      .then((data) => {
        setData(data.products);
      });
  }, []);

  const existingData = data?.map((item) => {
    return item.id === id;
  });

  return <div>{existingData.id}</div>;
};

export default View;
