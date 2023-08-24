import React from "react";

const Hero = () => {
  return (
    <div className="max-w-[1640px] mx-auto p-4">
      <div className="max-h-[500px] relative">
        {/* overlay */}
        <div className="absolute h-full w-full text-gray-200 max-h-[500px] bg-black/60 flex flex-col justify-center uppercase px-4 text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold">
          <h1>
            La <span className="text-orange-500">livraison</span>
          </h1>
          <h1>
            <span className="text-orange-500">top </span>Foods
          </h1>
        </div>
        <img
          src="https://images.pexels.com/photos/1640772/pexels-photo-1640772.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
          alt="Image by Ella Olsson on Pexels"
          className="w-full max-h-[500px] object-cover"
        />
      </div>
    </div>
  );
};

export default Hero;
