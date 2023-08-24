import { categories } from "@/data";
import React from "react";

const Category = () => {
  return (
    <div className="max-w-[1640px] mx-auto px-4 py-12">
      <h1 className="text-orange-500 font-bold text-4xl text-center">
        Retrouvez ci-dessous nos meilleures offres
      </h1>
      {/* categories */}
      <div className="grid grid-cols-2 md:grid-cols-4 gap-6 py-6">
        {categories.map((item) => (
          <div
            key={item.id}
            className="bg-gray-100 rounded-lg px-1 md:px-4 py-4 flex justify-between items-center hover:scale-105 duration-300 cursor-pointer"
          >
            <h2 className="font-bold text-sm sm:text-xl">{item.name}</h2>
            <img src={item.image} alt={item.name} className="w-20" />
          </div>
        ))}
      </div>
    </div>
  );
};

export default Category;
