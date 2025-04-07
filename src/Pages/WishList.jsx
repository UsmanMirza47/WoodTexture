import React from "react";
import { useSelector } from "react-redux";
import WishRow from "../Components/Wish/WishRow";

const WishList = () => {
  const wishItems = useSelector((state) => state.wish.wishItems);
  return (
    <div className="w-full flex flex-col justify-center items-center">
      <h1>My WishList</h1>
      <div className="w-[90%]">
        <table className="w-full">
          <thead className="bg-gray-400">
            <tr className="*:py-3 *:border">
              <th>ID</th>
              <th>Name</th>
              <th>Quantity</th>
              <th>Price</th>
              <th>Action</th>
            </tr>
          </thead>

          <tbody className="bg-gray-200">
            {wishItems.length > 0 ? (
              wishItems.map((item) => {
                return <WishRow key={item.id} item={item} />;
              })
            ) : (
              <tr>
                <td colSpan={6} className="py-3 text-center">
                  The WishList is Empty
                </td>
              </tr>
            )}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default WishList;
