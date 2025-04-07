import React from "react";
import HeroSection from "../Components/Home/HeroSection";
import Categories from "../Components/Home/Categories";
import ProductList from "../Components/Home/ProductList";
import { FaArrowRight } from "react-icons/fa";
import Banner from "../Components/Home/Banner";
import BestSeller from "../Components/Home/BestSeller";
import NewsLetter from "../Components/Footer/NewsLetter";
import Footer from "../Components/Footer/Footer.jsx";

const Home = () => {
  return (
    <div className="flex flex-col justify-center items-center w-full h-full">
      <div className="w-full">
        <HeroSection />
      </div>
      <div className="w-[90%] my-4 flex flex-col gap-5">
        <h1 className="font-bold text-[5vw] md:text-[3vw]">
          Find Your Style : Furniture Categories
        </h1>
        <Categories />
      </div>
      <div className="w-[90%] my-4 flex flex-col gap-5">
        <h1 className="font-bold text-[5vw] md:text-[3vw] text-center">
          Find Your Style : Furniture Categories
        </h1>
        <ProductList />
        <div className="flex justify-center items-center">
          <button className="flex gap-2 justify-center items-center hover:text-lime-400 text-lg transition-all duration-300 ease-linear">
            See More <FaArrowRight />
          </button>
        </div>
      </div>
      <div className="w-[90%] my-4 flex flex-col gap-5">
        <Banner />
      </div>
      <div className="w-[90%] my-4 flex flex-col gap-5">
        <h1 className="font-bold text-[5vw] md:text-[3vw] text-center">
          Discover Our : Best Seller
        </h1>
        <BestSeller />
        <div className="flex justify-center items-center">
          <button className="flex gap-2 justify-center items-center hover:text-lime-400 text-lg transition-all duration-300 ease-linear">
            See More <FaArrowRight />
          </button>
        </div>
      </div>
    </div>
  );
};

export default Home;
