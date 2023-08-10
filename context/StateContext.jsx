import React, { useState, createContext, useContext } from 'react';

const Context = createContext();

export const StateContext = ({ children }) => {
  const [showCart, setShowCart] = useState(false);
  const [cartPrice, setCartPrice] = useState(0)
  const [cartItems, setCartItems] = useState([]);
  const [totalPrice, setTotalPrice] = useState(0);
  const [totalQuantity, setTotalQuantity] = useState(0);
  const [qty, setQty] = useState(1);
  let targetProduct;
  let idx;

  const incQty = () => {
    setQty((prev) => prev + 1);
  }
  const decQty = () => {
    setQty((prev) => qty > 0 ? prev - 1 : prev);
  }

  const onRemove = (product) => {
    targetProduct = cartItems.find((item) => item._id === product._id);
    const newCartItems = cartItems.filter((item) => item._id !== product._id);

    setTotalPrice((prevTotalPrice) => prevTotalPrice -targetProduct.price * targetProduct.quantity);
    setTotalQuantity(prevTotalQuantities => prevTotalQuantities - targetProduct.quantity);
    setCartItems(newCartItems);
  }

  const onAdd = (product, quantity) => {
    const inTheCart = cartItems.find((item) => product._id === item._id);
    setTotalPrice((prev) => prev + product.price * quantity);
    setTotalQuantity((prev) => prev + quantity);

    if(inTheCart) {
      const updatedCartItems = cartItems.map((item) => {
        if(item._id === product._id)return {
          ...item,
          quantity: item.quantity + quantity
        }
      })
      setCartItems(updatedCartItems);
    } else {
      product.quantity = quantity;
      setCartItems([...cartItems, {...product}]);
    }
  }

  
  const toogleCartQuantity = (id, value) => {
    targetProduct = cartItems.find((item) => item._id === id);
    idx = cartItems.findIndex((item) => item._id === id);
    const newCartItems = cartItems.filter((item) => item._id !== id);
    const priceOfCartItem = targetProduct.price;
    
    
    if (value === "inc") {
      setCartItems([
        { ...targetProduct, quantity: targetProduct.quantity + 1},
        ...newCartItems,
      ]);
      setTotalPrice((prev) => prev + targetProduct.price);
      setTotalQuantity((prev) => prev + 1);
    } else if (value === "dec") {
      if (targetProduct.quantity > 1) {
        setCartItems([
          { ...targetProduct, quantity: targetProduct.quantity - 1 },
          ...newCartItems,
        ]);
        setTotalPrice((prev) => prev - targetProduct.price);
        setTotalQuantity((prev) => prev - 1);
      }
    }
  }
  


  return (
    <Context.Provider
      value={{
        showCart,
        setShowCart,
        cartItems,
        totalPrice,
        totalQuantity,
        qty,
        incQty,
        decQty,
        onAdd,
        toogleCartQuantity,
        onRemove
      }}
    >
      {children}
    </Context.Provider>
  );
};

export const useStateContext = () => useContext(Context)