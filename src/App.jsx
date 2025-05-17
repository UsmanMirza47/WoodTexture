import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import React, { Suspense, lazy } from "react";
// import Home from "./Pages/Home";
import Navbar from "./Components/Navbar/Navbar";
import Footer from "./Components/Footer/Footer";
import NewsLetter from "./Components/Footer/NewsLetter";
import Loading from "./features/Icons/Loading";

const Home = React.lazy(() => import("./Pages/Home"));
const Cart = lazy(() => import("./Pages/Cart"));
const WishList = lazy(() => import("./Pages/WishList"));
const Shop = lazy(() => import("./Pages/Shop"));
const View = lazy(() => import("./Pages/View"));

function App() {
  return (
    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route
          path="/"
          element={
            <Suspense fallback={<Loading />}>
              <Home />
            </Suspense>
          }
        />
        <Route
          path="/shop"
          element={
            <Suspense fallback={<Loading />}>
              <Shop />
            </Suspense>
          }
        />
        <Route
          path="/view/:id"
          element={
            <Suspense fallback={<Loading />}>
              <View />
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
