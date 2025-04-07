import React from "react";
import { FaRegHeart } from "react-icons/fa";
import { NavLink } from "react-router-dom";
import CartSideBox from "./CartSideBox";
import { useSelector } from "react-redux";
import WishSideBox from "./WishSideBox";

const Navbar = () => {
  const wishItems = useSelector((state) => state.wish.wishItems);

  const navList = [
    {
      path: "/",
      element: "Home",
    },
    {
      path: "/shop",
      element: "Shop",
    },
    {
      path: "/cart",
      element: "Cart",
    },
    {
      path: "/wishlist",
      element: "Wishlist",
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
      <ul className="flex fixed bottom-0 sm:hidden gap-3 justify-center items-center w-full p-5 bg-white">
        {navList.map((item, index) => {
          return (
            <li key={index}>
              <NavLink to={item.path}>{item.element}</NavLink>
            </li>
          );
        })}
      </ul>
    </nav>
  );
};

export default Navbar;
