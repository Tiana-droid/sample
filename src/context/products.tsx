import { useState, createContext, useEffect, useMemo } from "react";
import axios from "axios";

export const ProductsContext = createContext<any | null>(null);

export const ProductsProvider = (props: any) => {
  const [products, setProducts] = useState([]);
  const options = useMemo(() => ({
    method: "GET",
    url: "https://edamam-food-and-grocery-database.p.rapidapi.com/parser",
    params: { ingr: "rice" },
    headers: {
      "X-RapidAPI-Key": "8a010f77d9mshee0900340439703p107267jsn8d4ac1bd65ae",
      "X-RapidAPI-Host": "edamam-food-and-grocery-database.p.rapidapi.com",
    },
  }), [])

  useEffect(()=> {
    axios
    .request(options)
    .then(function (response: any) {
      setProducts(response.data.hints);
    })
    .catch(function (error: any) {
      setProducts(error);
    });
  }, [options])
  

  return (
    <ProductsContext.Provider value={[products, setProducts]}>
      {props.children}
    </ProductsContext.Provider>
  );
};
