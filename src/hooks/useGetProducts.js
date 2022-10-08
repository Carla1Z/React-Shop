import { useEffect, useState } from "react";
import axios from "axios";

const useGetProducts = (API) => {
  const [products, setProducts] = useState([]);

  const getData = async () => {
    const response = await axios.get(API);
    setProducts(response.data);
    console.log(response);
  };

  useEffect(() => {
    getData();
  }, []);

  return products;
};

export default useGetProducts;
