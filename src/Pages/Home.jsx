import { Suspense, lazy } from "react";
import Loading from "../features/Icons/Loading";

const HeroSection = lazy(() => import("../Components/Home/HeroSection"));
const Categories = lazy(() => import("../Components/Home/Categories"));
const ProductList = lazy(() => import("../Components/Home/ProductList"));
const Banner = lazy(() => import("../Components/Home/Banner"));
const BestSeller = lazy(() => import("../Components/Home/BestSeller"));

const Home = () => {
  return (
    <div className="flex flex-col justify-center items-center w-full h-full">
      <Suspense fallback={<Loading />}>
        <HeroSection />
        <Suspense fallback={<Loading />}>
          <Categories />
        </Suspense>
        <Suspense fallback={<Loading />}>
          <ProductList />
        </Suspense>
        <Suspense fallback={<Loading />}>
          <Banner />
        </Suspense>
        <Suspense fallback={<Loading />}>
          <BestSeller />
        </Suspense>
      </Suspense>
    </div>
  );
};

export default Home;
