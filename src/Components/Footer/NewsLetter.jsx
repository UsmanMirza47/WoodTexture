import React from "react";

const NewsLetter = () => {
  return (
    <div className="w-full flex flex-col justify-center items-center py-20 bg-gray-300 gap-2">
      <p className="text-[3vw]">Subscribe for Exclusive Updates</p>
      <div className="flex justify-center items-center">
        <input
          type="text"
          className="border-black border active:outline-none hover:outline-none p-2 rounded-l-md md:w-[30vw] w-[40vw]"
        />
        <button className="py-2 px-4 rounded-r-md border border-black bg-black text-white">
          Send
        </button>
      </div>
    </div>
  );
};

export default NewsLetter;
