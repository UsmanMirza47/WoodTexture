import React from "react";
import { removeFromCart, updateCart } from "../../features/Cart/CartSlice";
import { useDispatch } from "react-redux";
import { FaRegTrashCan } from "react-icons/fa6";

const CartRow = ({ item }) => {
  const { id, name, quantity, price, totalPrice } = item;
  const dispatch = useDispatch();

  const handleRemoveItems = (id) => {
    dispatch(removeFromCart(id));
  };

  const handleInputChange = (e, id) => {
    const value = e.target.value;
    dispatch(updateCart({ value, id }));
  };
  return (
    <tr className="*:py-3 text-center" key={id}>
      <td>{id}</td>
      <td>{name}</td>
      <td>
        <input
          type="number"
          value={quantity}
          className="p-2 w-[50%]"
          onChange={(e) => handleInputChange(e, id)}
        />
      </td>
      <td>{price}</td>
      <td>{totalPrice}</td>
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

export default CartRow;
