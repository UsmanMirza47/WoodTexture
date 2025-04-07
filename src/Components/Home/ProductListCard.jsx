import React from "react";
import { FaRegHeart } from "react-icons/fa";
import { IoEyeOutline } from "react-icons/io5";
import { useDispatch, useSelector } from "react-redux";
import { addToCart } from "../../features/Cart/CartSlice";
import { addToWishList } from "../../features/WishList/WishListSlice";

const ProductListCard = ({ data }) => {
  const { name, price, images } = data;
  const cartItems = useSelector((state) => state.cart.cartItems);
  const wishItems = useSelector((state) => state.wish.wishItems);
  const isInCart = cartItems.some((item) => {
    return item.id === data.id;
  });

  const isInWish = wishItems.some((item) => {
    return item.id === data.id;
  });

  const dispatch = useDispatch();

  const handleAddToCart = (data) => {
    if (!isInCart) {
      dispatch(addToCart(data));
    }
  };

  const handleAddtoWish = (data) => {
    if (!isInWish) {
      dispatch(addToWishList(data));
    }
  };

  return (
    <li className="flex flex-col gap-3">
      <div className="relative group overflow-hidden cursor-pointer ">
        <img src={images[0]} />

        <div className="absolute -bottom-12 w-full flex justify-center items-center group-hover:bottom-5 transition-all duration-700 ease-in-out">
          <button
            className={`${
              isInCart
                ? "bg-gray-200 hover:bg-gray-400"
                : " bg-lime-200  hover:bg-lime-400"
            } bg-lime-200 w-[94%] p-3 hover:bg-lime-400 transition-all duration-300 ease-linear`}
            onClick={() => {
              handleAddToCart(data);
            }}
          >
            {isInCart ? "Items in Cart" : "ADD TO CART"}
          </button>
        </div>

        <div className="flex flex-col absolute top-5 -right-12 gap-4 group-hover:right-5 transition-all duration-700 ease-in-out">
          <button
            className={`${
              isInWish
                ? "bg-red-200 hover:bg-red-400"
                : "bg-lime-200 hover:bg-lime-400"
            }  text-2xl bg-lime-200 p-3 rounded-full hover:bg-lime-400 transition-all duration-300 ease-linear`}
            onClick={() => {
              handleAddtoWish(data);
            }}
          >
            <FaRegHeart />
          </button>
          <button className="text-2xl bg-lime-200 p-3 rounded-full hover:bg-lime-400 transition-all duration-300 ease-linear">
            <IoEyeOutline />
          </button>
        </div>
      </div>
      <div className="flex justify-between items-center">
        <p className="text-lg">{name}</p>
        <p className="text-lime-500 font-bold text-lg">$ {price}</p>
      </div>
    </li>
  );
};

export default ProductListCard;
