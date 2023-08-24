import { data } from "@/data";
import React, { useState } from "react";

const Food = () => {
  const [food, setFood] = useState(data);

  // filter by type
  const typeFilter = (category) => {
    setFood(data.filter((item) => item.category === category));
  };

  // filter by price
  const priceFilter = (price) => {
    setFood(data.filter((item) => item.price === price));
  };
  return (
    <div className="max-w-[1640px] mx-auto px-4 py-12">
      <h1 className="text-orange-500 font-bold text-4xl text-center">
      Meilleures Ventes
      </h1>
      {/* filter */}
      <div className="flex flex-col lg:flex-row justify-between">
        {/* type filter */}
        <div>
          <p className="font-bold text-gray-800 mb-4">Trier par catégorie</p>
          <div className="flex justify-between gap-2 flex-wrap">
            <button
              onClick={() => setFood(data)}
              className="border-orange-500 text-orange-500 hover:bg-orange-500 hover:text-white"
            >
              Tous
            </button>
            <button
              onClick={() => typeFilter("burger")}
              className="border-orange-500 text-orange-500 hover:bg-orange-500 hover:text-white"
            >
              Burgers
            </button>
            <button
              onClick={() => typeFilter("pizza")}
              className="border-orange-500 text-orange-500 hover:bg-orange-500 hover:text-white"
            >
              Pizzas
            </button>
            <button
              onClick={() => typeFilter("pasta")}
              className="border-orange-500 text-orange-500 hover:bg-orange-500 hover:text-white"
            >
              Pâtes
            </button>
            <button
              onClick={() => typeFilter("taco")}
              className="border-orange-500 text-orange-500 hover:bg-orange-500 hover:text-white"
            >
              Tacos
            </button>
          </div>
        </div>
        {/* price filter */}
        <div>
          <p className="font-bold text-gray-800 mb-4">Trier par prix</p>
          <div className="flex justify-between gap-2 w-full max-w-[390px]">
            <button
              onClick={() => priceFilter("€")}
              className="border-orange-500 text-orange-500 hover:bg-orange-500 hover:text-white"
            >
              &euro;
            </button>
            <button
              onClick={() => priceFilter("€€")}
              className="border-orange-500 text-orange-500 hover:bg-orange-500 hover:text-white"
            >
              &euro;&euro;
            </button>
            <button
              onClick={() => priceFilter("€€€")}
              className="border-orange-500 text-orange-500 hover:bg-orange-500 hover:text-white"
            >
              &euro;&euro;&euro;
            </button>
            <button
              onClick={() => priceFilter("€€€€")}
              className="border-orange-500 text-orange-500 hover:bg-orange-500 hover:text-white"
            >
              &euro;&euro;&euro;&euro;
            </button>
          </div>
        </div>
      </div>
      {/* food images */}
      <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 pt-10">
        {food.map((item) => (
          <div
            key={item.id}
            className="border shadow-lg hover:scale-105 duration-300 cursor-pointer rounded-t-lg"
          >
            <img
              src={item.image}
              alt={item.name}
              className="w-full h-[200px] object-cover rounded-t-lg"
            />
            <div className="flex justify-between px-2 py-4">
              <p className="font-bold">{item.name}</p>
              <p>
                <span className="text-orange-500 p-2 font-semibold">
                  {item.price}
                </span>
              </p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Food;
