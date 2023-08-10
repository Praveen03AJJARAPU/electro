import React, { useRef } from 'react'
import { MdDelete } from "react-icons/md";
import { AiOutlineClose } from "react-icons/ai";
import '../App.css'
import { useStateContext } from '../../context/StateContext';
import { urlFor } from '../../utils/data';

const Cart = () => {
  const { totalPrice, totalQuantity, cartItems, setShowCart, toogleCartQuantity, onRemove } = useStateContext();
  const cartRef = useRef();
  return (
    <div className="cart-wrapper" ref={cartRef}>
      <div className="cart-container h-screen">
        <div className="flex justify-between items-center px-5  border-b-2 border-b-slate-200 mb-10 pb-5">
          <p className="text-2xl font-bold text-orange-500">Cart</p>
          <AiOutlineClose
            className="cursor-pointer"
            onClick={() => {
              setShowCart(false);
            }}
            size={25}
          />
        </div>
        {cartItems.length < 1 && (
          <div className="flex justify-center items-center mt-80">
            <p className="text-slate-400 text-xl">Your cart is empty</p>
          </div>
        )}
        <div>
          {cartItems.length >= 1 &&
            cartItems.map((item) => (
              <>
              <div className="flex flex-col justify-around mt-3 mb-3">
                <div key={item._id} className=" flex">
                  <img
                    src={urlFor(item?.image[0])}
                    className="w-32 bg-orange-100 rounded-xl"
                    alt=""
                  />
                  <div className="mx-5 md:mx-10 w-full ">
                    <div className="flex flex-col md:flex-row justify-between">
                      <h2 className="font-bold">{item?.title}</h2>
                      <h3 className="font-bold">₹ {item.price}</h3>
                    </div>
                    <div className="flex mt-5 items-center justify-between">
                      <div className="flex">
                        <button
                          className="px-2 md:px-4 md:py-2 border-2 bg-orange-400"
                          onClick={() => toogleCartQuantity(item._id, "dec")}
                        >
                          -
                        </button>
                        <p className="px-4 py-2 border-2 ">{item.quantity}</p>
                        <button
                          className="px-2  md:px-4 md:py-2 border-2 bg-orange-400"
                          onClick={() => toogleCartQuantity(item._id, "inc")}
                        >
                          +
                        </button>
                      </div>
                      <MdDelete size={25} className="text-red-600" onClick={() => onRemove(item)} />
                    </div>
                  </div>
                </div>
              </div>
          <div className="total flex items-center justify-between px-10 border-t-2 border-t-slate-200 py-2">
            <h1 className="font-light text-xl">Total: </h1>
            <h3 className="font-extrabold">₹{totalPrice}</h3>
          </div>
          </>
            ))}
        </div>
      </div>
    </div>
  );
}

export default Cart