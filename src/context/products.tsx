import React, { useState, createContext } from "react";

export const ProductsContext = createContext<any | null>(null);

export const ProductsProvider = (props: any) => {
  const [products, setProducts] = useState([
    {
      name: "Yam",
      price: "700",
      id: 12345,
      type: "grocery",
      category: "tuber",
      img: "yam.jpg",
    },
    {
      name: "Egg",
      price: "100",
      id: 12346,
      type: "grocery",
      category: "protein",
      img: "yam.jpg",
    },
    {
      name: "Groundnut Oil",
      price: "700",
      id: 12347,
      type: "grocery",
      category: "oil",
      img: "yam.jpg",
    },
    {
      name: "Curry",
      price: "30",
      id: 12348,
      img: "yam.jpg",
      type: "grocery",
      category: "spice",
    },
    {
      name: "Rice and Beans",
      price: "700",
      id: 1234,
      img: "yam.jpg",
      type: "food",
      category: "food",
    },
    {
      name: "Yam and Egg",
      price: "500",
      id: 1235,
      img: "yam.jpg",
      type: "food",
      category: "food",
    },
    {
      name: "Oil Beans",
      price: "350",
      id: 1236,
      img: "yam.jpg",
      type: "food",
      category: "food",
    },
    {
      name: "Jollof Rice",
      price: "600",
      id: 1237,
      type: "food",
      img: "yam.jpg",
      category: "food",
    },
  ]);
  return (
    <ProductsContext.Provider value={[products, setProducts]}>
      {props.children}
    </ProductsContext.Provider>
  );
};
