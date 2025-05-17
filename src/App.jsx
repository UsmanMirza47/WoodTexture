import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Suspense, lazy } from "react";
import Loading from "./features/Icons/Loading";
import Navbar from "./Components/Navbar/Navbar";
import Home from "./Pages/Home";
import NewsLetter from "./Components/Footer/NewsLetter";
import Footer from "./Components/Footer/Footer";

const Cart = lazy(() => import("./Pages/Cart"));
const WishList = lazy(() => import("./Pages/WishList"));
const Shop = lazy(() => import("./Pages/Shop"));

function App() {
  return (
    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route
          path="/shop"
          element={
            <Suspense fallback={<Loading />}>
              <Shop />
            </Suspense>
          }
        />
        <Route
          path="/cart"
          element={
            <Suspense fallback={<Loading />}>
              <Cart />
            </Suspense>
          }
        />
        <Route
          path="/wishList"
          element={
            <Suspense fallback={<Loading />}>
              <WishList />
            </Suspense>
          }
        />
      </Routes>

      <div className="w-full flex flex-col justify-center items-center">
        <div className="w-[90%] my-4 flex flex-col gap-5">
          <NewsLetter />
        </div>
        <div className="w-full my-3">
          <Footer />
        </div>
      </div>
    </BrowserRouter>
  );
}

export default App;
