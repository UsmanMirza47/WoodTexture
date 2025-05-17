import React from "react";

const Banner = () => {
  return (
    <div className="flex flex-col md:flex-row justify-center items-center gap-2">
      <div className="flex-1 relative">
        <div className="absolute bottom-2 p-3">
          <p className="text-[3vw] md:text-[2vw]">Exclusive Deal:</p>
          <p className="text-[6vw] md:text-[3vw] font-bold">
            Save Big on Stylish Chairs!
          </p>
        </div>
        <img
          src="./Hero_banner/01.jpg"
          className="w-full h-full"
          loading="lazy"
        />
      </div>
      <div className="flex-1 relative w-full">
        <div className="absolute top-2 p-3">
          <p className="text-[3vw] md:text-[2vw]">Limited Time Offer:</p>
          <p className="text-[6vw] md:text-[3vw] font-bold">
            Get Cozy with Discounted Sofas!
          </p>
        </div>
        <img
          src="./Hero_banner/04.jpg"
          className="w-full h-full"
          loading="lazy"
        />
      </div>
    </div>
  );
};

export default Banner;
