import { FaRegTrashCan } from "react-icons/fa6";
import { useDispatch, useSelector } from "react-redux";
import { clearCart, removeFromCart } from "../features/Cart/CartSlice";
import CartRow from "../Components/Cart/CartRow";

const Cart = () => {
  const cartItems = useSelector((state) => state.cart.cartItems);
  const totalPrice = useSelector((state) => state.cart.totalPrice);
  const dispatch = useDispatch();

  return (
    <div className="w-full flex flex-col justify-center items-center">
      <h1>My Cart</h1>
      <div className="w-[90%]">
        <table className="w-full">
          <thead className="bg-gray-400">
            <tr className="*:py-3 *:border">
              <th>ID</th>
              <th>Name</th>
              <th>Quantity</th>
              <th>Price</th>
              <th>TotalPrice</th>
              <th>Action</th>
            </tr>
          </thead>

          <tbody className="bg-gray-200">
            {cartItems.length > 0 ? (
              cartItems.map((item) => {
                return <CartRow key={item.id} item={item} />;
              })
            ) : (
              <tr>
                <td colSpan={6} className="py-3 text-center">
                  The Cart is Empty
                </td>
              </tr>
            )}
          </tbody>

          {cartItems.length > 0 && (
            <tfoot>
              <tr className="*:py-3 *:text-center *:font-bold *:text-xl">
                <td colSpan={3}>Total Price :</td>
                <td colSpan={3}>{totalPrice}</td>
              </tr>
            </tfoot>
          )}
        </table>

        {cartItems.length > 0 && (
          <div className="w-full flex justify-end items-center py-3 hover:text-red-500 my-3 transition-all duration-300 ease-linear">
            <button
              className="flex justify-center items-center gap-3 text-2xl"
              onClick={() => dispatch(clearCart())}
            >
              <FaRegTrashCan />
              Clear Cart
            </button>
          </div>
        )}
      </div>
    </div>
  );
};

export default Cart;
