import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./Pages/Home";
import Navbar from "./Components/Navbar/Navbar";
import Footer from "./Components/Footer/Footer";
import NewsLetter from "./Components/Footer/NewsLetter";
import Cart from "./Pages/Cart";
import WishList from "./Pages/WishList";
import Shop from "./Pages/Shop";
import View from "./Pages/View";

function App() {
  return (
    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/shop" element={<Shop />} />
        <Route path="/view/:id" element={<View />} />
        <Route path="/cart" element={<Cart />} />
        <Route path="/wishList" element={<WishList />} />
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
