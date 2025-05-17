import React, { Suspense, lazy } from "react";
// import HeroSection from "../Components/Home/HeroSection";
// import Categories from "../Components/Home/Categories";
// import ProductList from "../Components/Home/ProductList";
import { FaArrowRight } from "react-icons/fa";
import Loading from "../features/Icons/Loading";
// import Banner from "../Components/Home/Banner";
// import BestSeller from "../Components/Home/BestSeller";

const HeroSection = lazy(() => import("../Components/Home/HeroSection"));
const Categories = lazy(() => import("../Components/Home/Categories"));
const ProductList = lazy(() => import("../Components/Home/ProductList"));
const Banner = lazy(() => import("../Components/Home/Banner"));
const BestSeller = lazy(() => import("../Components/Home/BestSeller"));

const Home = () => {
  return (
    <div className="flex flex-col justify-center items-center w-full h-full">
      <div className="w-full">
        <Suspense fallback={<Loading />}>
          <HeroSection />
        </Suspense>
      </div>
      <div className="w-[90%] my-4 flex flex-col gap-5">
        <h1 className="font-bold text-[5vw] md:text-[3vw]">
          Find Your Style : Furniture Categories
        </h1>
        <Suspense fallback={<Loading />}>
          <Categories />
        </Suspense>
      </div>
      <div className="w-[90%] my-4 flex flex-col gap-5">
        <h1 className="font-bold text-[5vw] md:text-[3vw] text-center">
          Find Your Style : Furniture Categories
        </h1>
        <Suspense fallback={<Loading />}>
          <ProductList />
        </Suspense>
        <div className="flex justify-center items-center">
          <button className="flex gap-2 justify-center items-center hover:text-lime-400 text-lg transition-all duration-300 ease-linear">
            See More <FaArrowRight />
          </button>
        </div>
      </div>
      <div className="w-[90%] my-4 flex flex-col gap-5">
        <Suspense fallback={<Loading />}>
          <Banner />
        </Suspense>
      </div>
      <div className="w-[90%] my-4 flex flex-col gap-5">
        <h1 className="font-bold text-[5vw] md:text-[3vw] text-center">
          Discover Our : Best Seller
        </h1>
        <Suspense fallback={<Loading />}>
          <BestSeller />
        </Suspense>
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
