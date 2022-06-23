import React, { useState, createContext } from "react";
import axios from "axios";

export const ProductsContext = createContext<any | null>(null);

export const ProductsProvider = (props: any) => {
  const [products, setProducts] = useState([]);
  const options = {
    method: "GET",
    url: "https://edamam-food-and-grocery-database.p.rapidapi.com/parser",
    params: { ingr: "rice" },
    headers: {
      "X-RapidAPI-Key": "8a010f77d9mshee0900340439703p107267jsn8d4ac1bd65ae",
      "X-RapidAPI-Host": "edamam-food-and-grocery-database.p.rapidapi.com",
    },
  };

  axios
    .request(options)
    .then(function (response: any) {
      setProducts(response.data.hints);
      // console.log(response.data)
    })
    .catch(function (error: any) {
      console.error(error);
    });

  return (
    <ProductsContext.Provider value={[products, setProducts]}>
      {props.children}
    </ProductsContext.Provider>
  );
};
