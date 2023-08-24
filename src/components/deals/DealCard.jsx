import React from "react";

const DealCard = ({ deal }) => {
  return (
    <>
      {/* card */}
      <div className="rounded-xl relative hover:scale-105 duration-300">
        {/* overlay */}
        <div className="absolute h-full w-full bg-black/40 rounded-xl text-white">
          <p className="font-bold text-2xl px-2 pt-4">{deal.title}</p>
          <p className="px-2">{deal.subtitle}</p>
          <button className="border-white bg-white text-black absolute bottom-4 right-4 rounded-full mx-2 hover:bg-orange-500 hover:text-white hover:border-orange-500">
            Commander
          </button>
        </div>
        <img
          src={deal.imgUrl}
          alt={deal.imgAlt}
          className="max-h-[160px] md:max-h-[200px] w-full object-cover rounded-xl"
        />
      </div>
    </>
  );
};

export default DealCard;
