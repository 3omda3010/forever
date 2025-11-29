import React, { useContext, useEffect, useState } from "react";
import Title from "./Title";
import { ShopContext } from "../context/ShopContext";
import ProductItem from "./ProductItem";

const Bestsller = () => {
  const { products } = useContext(ShopContext);
  const [bestseller, setBestseller] = useState([]);

  useEffect(() => {
    const bestProducts = products.filter((product) => product.bestseller === true)
    setBestseller(bestProducts.slice(0,5));
},[]);

return (
    <div className="my-10">
      <div className="text-center py-8 text-3xl ">
        <Title text1={"BEST"} text2={"SELLERS"} />
        <p className="w-3/4 m-auto text-xs sm:text-sm md:text-base text-gray-600">
          Lorem Ipsum is simply dummy text of the printing and typesetting
          industry. Lorem Ipsum has been the.
        </p>
      </div>
      {/* rendering bestseller products */}
      {
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4 gap-y-6">
        {bestseller.map((product, index) => {
          return (
            <ProductItem
              key={index}
              id={product._id}
              price={product.price}
              image={product.image}
              name={product.name}
            />
          );
        })}
      </div>
      }
    </div>
  );
};

export default Bestsller;

