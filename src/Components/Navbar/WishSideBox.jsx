import React, { useState } from "react";
import { IoMdClose } from "react-icons/io";
import { useSelector } from "react-redux";
import SideCartCard from "../Cart/SideCartCard";
import { FaRegHeart } from "react-icons/fa";
import SideWishCard from "../Wish/SideWishCard";

const WishSideBox = () => {
  const [isOpen, setIsOpen] = useState(false);

  const wishItems = useSelector((state) => state.wish.wishItems);
  return (
    <div>
      {/* Cart Button */}
      <button
        className="w-10 h-10 text-2xl flex justify-center items-center bg-lime-100 hover:bg-lime-300 rounded-full transition-all duration-200 ease-linear relative"
        onClick={() => {
          setIsOpen(true);
        }}
      >
        <span className="absolute -top-1 -right-1 w-4 h-4 bg-red-500 rounded-full flex justify-center items-center text-white text-sm">
          {wishItems.length}
        </span>
        <FaRegHeart />
      </button>
      {/* Blur Background */}
      <div
        className={`${
          isOpen ? "block" : "hidden"
        } w-[100vw] h-[100vh] bg-transparent fixed top-0 right-0 z-10 bg-gray-400 rounded-md bg-clip-padding backdrop-filter backdrop-blur-sm bg-opacity-40 border border-gray-100 flex justify-end items-center cursor-pointer`}
        onClick={() => {
          setIsOpen(false);
        }}
      ></div>
      {/* SideCart Bar */}
      <div
        className={`${
          isOpen ? "block" : "hidden"
        }  w-full sm:w-[60vh] h-[100vh] bg-white fixed top-0 right-0 z-10 cursor-pointer`}
      >
        <div className="flex justify-between items-center p-3 text-xl border-b">
          <p>My Wish</p>
          <button
            onClick={() => {
              setIsOpen(false);
            }}
          >
            <IoMdClose className="text-3xl hover:text-red-500 transition-all duration-300 ease-linear" />
          </button>
        </div>
        <div className="p-3 flex flex-col gap-3">
          {wishItems.length > 0 ? (
            wishItems.map((item) => {
              return <SideWishCard key={item.id} data={item} />;
            })
          ) : (
            <h1 className="text-xl text-center">Your WishList is Empty</h1>
          )}
        </div>
      </div>
    </div>
  );
};

export default WishSideBox;
