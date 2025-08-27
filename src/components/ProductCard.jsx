// src/components/ProductCard.jsx
import React from "react";
import Description from "./Description";
import { categories } from "../utils/products";

const ProductCard = ({ product, categories }) => {
  return (
    <div className="cursor-pointer bg-white rounded-lg shadow-md hover:shadow-lg transition p-4 text-left Flex-col h-full">
      <img
        src={product.image}
        alt={product.name}
        className="w-full h-64 object-cover rounded-md mb-4"
      />
      <h3 className="text-LG font-semibold text-gray-800 mb-2">
        {product.name}
      </h3>
      <Description className="text-gray-600 text-sm mb-2">
        {product.description}
      </Description>
      <button className="mt-4 px-4 py-2 bg-primary text-white rounded-lg">
        View Details
      </button>
    </div>
  );
};

export default ProductCard;
