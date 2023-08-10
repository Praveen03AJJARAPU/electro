import React from 'react'

import { AiTwotoneThunderbolt } from "react-icons/ai";

import { BsCart4 } from "react-icons/bs";
import Cart from './Cart';
import { useStateContext } from '../../context/StateContext';
const Nav = () => {
  const { showCart, setShowCart, totalQuantity } = useStateContext(); 
  return (
    <>
      <div className="sticky top-0 backdrop-blur-xl z-10">
        <div className="main flex justify-between items-center px-7 py-5">
          <div className="nav flex items-center">
            <AiTwotoneThunderbolt size={40} />
            <h2 className="text-lg font-semibold uppercase">Electro</h2>
          </div>
          <div className="relative">
            <BsCart4
              size={25}
              className="cursor-pointer"
              onClick={() => setShowCart(true)}
            />
            <span className="absolute bottom-3 left-5 bg-orange-400 text-slate-50 px-1 rounded-full text-sm">{ totalQuantity > 0 && totalQuantity}</span>
          </div>
        </div>
      </div>
      <>{showCart && <Cart />}</>
    </>
  );
}

export default Nav