import React from "react";
import { useDispatch } from "react-redux";
import { FaRegTrashCan } from "react-icons/fa6";
import { removeFromWish } from "../../features/WishList/WishListSlice";

const WishRow = ({ item }) => {
  const { id, name, quantity, price } = item;
  const dispatch = useDispatch();

  const handleRemoveItems = (id) => {
    dispatch(removeFromWish(id));
  };
  return (
    <tr className="*:py-3 text-center" key={id}>
      <td>{id}</td>
      <td>{name}</td>
      <td>{quantity}</td>
      <td>{price}</td>
      <td>
        <button
          onClick={() => {
            handleRemoveItems(id);
          }}
          className="text-xl hover:text-red-500 transition-all duration-300 ease-linear"
        >
          <FaRegTrashCan />
        </button>
      </td>
    </tr>
  );
};

export default WishRow;
