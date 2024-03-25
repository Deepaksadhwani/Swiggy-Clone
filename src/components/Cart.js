import React from "react";
import { useDispatch, useSelector } from "react-redux";
import ItemList from "./ItemList";
import { clearCart } from "../utils/cartSlice";

const Cart = () => {
  const cartItems = useSelector((store) => store.cart.items);
  const dispatch = useDispatch();
  const clearCardHandler = () => {
    dispatch(clearCart());
  };

  return (
    <div className="text-center p-4 mx- m-4">
      <h1 className=" text-2xl font-bold">Cart</h1>
      <button
        className="p-2 m-2 bg-black text-white"
        onClick={clearCardHandler}
      >
        Clear card
      </button>
      {cartItems.length === 0 && <h1>Cart is empty. Add Items to the Cart!</h1>}
      <div className="mx-auto w-3/6">
        <ItemList items={cartItems} />
      </div>
    </div>
  );
};

export default Cart;
