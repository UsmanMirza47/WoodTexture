import React from "react";
import { FaHeart, FaHome, FaRegHeart } from "react-icons/fa";
import { NavLink } from "react-router-dom";
import CartSideBox from "./CartSideBox";
import { useSelector } from "react-redux";
import WishSideBox from "./WishSideBox";
import { GiShop } from "react-icons/gi";
import { FaCartShopping } from "react-icons/fa6";

const Navbar = () => {
  const wishItems = useSelector((state) => state.wish.wishItems);

  const navList = [
    {
      path: "/",
      element: "Home",
      icon: <FaHome />,
    },
    {
      path: "/shop",
      element: "Shop",
      icon: <GiShop />,
    },
    {
      path: "/cart",
      element: "Cart",
      icon: <FaCartShopping />,
    },
    {
      path: "/wishlist",
      element: "Wishlist",
      icon: <FaHeart />,
    },
  ];

  return (
    <nav className="flex justify-between items-center w-4/5 mx-auto py-5">
      <div className="font-bold text-xl">WOOD TEXTURE</div>

      {/* NavList Icons */}
      <ul className="hidden sm:flex gap-3 justify-center items-center">
        {navList.map((item, index) => {
          return (
            <li key={index}>
              <NavLink to={item.path}>{item.element}</NavLink>
            </li>
          );
        })}
      </ul>

      {/* Right Side Buttons */}
      <div className="flex gap-3">
        <WishSideBox />
        <CartSideBox />
      </div>
      {/* NavList Icons */}
      <ul className="flex fixed bottom-0 right-0 sm:hidden gap-3 justify-between items-center w-full p-5 z-50 bg-white shadow-[inset_0px_20px_20px_10px_#00000024]">
        {navList.map((item, index) => {
          return (
            <li key={index} className=" text-3xl bg-lime-400 p-3 rounded-full">
              <NavLink to={item.path} className="hover:">
                {item.icon}
              </NavLink>
            </li>
          );
        })}
      </ul>
    </nav>
  );
};

export default Navbar;
