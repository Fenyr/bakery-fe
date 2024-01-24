import React, { useEffect, useState } from "react";

const ProductModel = () => {
  const [product, setProduct] = useState();
  const [status, setStatus] = useState("loading");

  useEffect(() => {
    const fetchData = async () => {
      try {
        console.log("start fetching");
        const response = await fetch("http://127.0.0.1:8000/api/");
        const result = await response.json();
        setProduct(result);
        console.log(result);
      } catch (error) {
        console.log(error.message);
      }
    };

    fetchData();
  }, []);

  return { product, status };
};

export default ProductModel;
