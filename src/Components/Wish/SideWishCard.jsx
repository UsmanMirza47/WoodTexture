import React from "react";
import { IoTrashOutline } from "react-icons/io5";
import { useDispatch } from "react-redux";
import { removeFromWish } from "../../features/WishList/WishListSlice";

const SideWishCard = ({ data }) => {
  const dispatch = useDispatch();

  const handleRemoveFromCart = (id) => {
    dispatch(removeFromWish(id));
  };

  return (
    <div className="p-3 bg-gray-200 flex justify-between gap-3 ">
      <img src={data.images[0]} className="w-1/4" />
      <div className="flex flex-col justify-center items-start">
        <p className="text-lg">{data.name}</p>
        <p className="text-lime-400 text-md">{data.price}</p>
      </div>
      <button
        className="text-2xl"
        onClick={() => handleRemoveFromCart(data.id)}
      >
        <IoTrashOutline className="hover:text-red-500 transition-all duration-300 ease-linear" />
      </button>
    </div>
  );
};

export default SideWishCard;
