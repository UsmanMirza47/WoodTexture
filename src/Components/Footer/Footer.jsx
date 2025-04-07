import React from "react";
import { FaFacebook, FaInstagramSquare } from "react-icons/fa";
import { FaSquareXTwitter } from "react-icons/fa6";
import { NavLink } from "react-router-dom";

const Footer = () => {
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
    <div className="w-[90%] mx-auto grid grid-rows-4 sm:grid-rows-1 grid-cols-1 md:grid-cols-4 justify-center items-center gap-5">
      <div className="flex-1 flex flex-col gap-3">
        <p className="font-bold text-xl">WOOD TEXTURE</p>
        <p className="text-sm text-gray-500 italic tracking-wider">
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Architecto
          sapiente ducimus accusamus autem hic est error sit quisquam animi
          omnis natus deserunt quaerat, dicta sint adipisci. Sint facilis
          reiciendis incidunt!
        </p>
      </div>
      <div className="flex-1 flex flex-col gap-3">
        <p className="font-bold text-2xl">Quick Links</p>
        {/* NavList Icons */}
        <ul className="flex flex-col gap-2 justify-center items-start">
          {navList.map((item, index) => {
            return (
              <li key={index} className="font-semibold">
                <NavLink to={item.path}>{item.element}</NavLink>
              </li>
            );
          })}
        </ul>
      </div>
      <div className="flex-1 flex gap-3 flex-col">
        <p className="font-bold text-2xl">Terms & Conditions</p>
        <p>Privacy Policy</p>
        <p>Terms of use</p>
      </div>
      <div className="flex-1 flex flex-col gap-3">
        <p className="font-bold text-2xl">Social Links</p>
        <div className="flex gap-3">
          <span className="bg-lime-400 p-4 rounded-sm flex justify-center items-center w-fit text-3xl">
            <FaFacebook />
          </span>
          <span className="bg-lime-400 p-4 rounded-sm flex justify-center items-center w-fit text-3xl">
            <FaInstagramSquare />
          </span>
          <span className="bg-lime-400 p-4 rounded-sm flex justify-center items-center w-fit text-3xl">
            <FaSquareXTwitter />
          </span>
        </div>
      </div>
    </div>
  );
};

export default Footer;
