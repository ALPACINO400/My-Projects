import React, { createContext, useEffect, useState } from "react";
import PropTypes from "prop-types";

export const CartContext = createContext();

export const CartProvider = ({ children }) => {
  // Load the cart from localStorage if available, otherwise initialize it as an empty array
  const loadCartFromLocalStorage = () => {
    const cartData = localStorage.getItem("cart");
    return cartData ? JSON.parse(cartData) : [];
  };

  const [cart, setCart] = useState(loadCartFromLocalStorage);

  // Function to save the cart to localStorage
  const saveCartToLocalStorage = (cartItems) => {
    localStorage.setItem("cart", JSON.stringify(cartItems));
  };

  const addToCart = (product) => {
    setCart((prevCart) => {
      const existingProductIndex = prevCart.findIndex(
        (item) => item.productId === product.productId
      );
      let updatedCart;

      if (existingProductIndex >= 0) {
        // If the product already exists, update quantity
        updatedCart = [...prevCart];
        updatedCart[existingProductIndex].quantity += 1;
      } else {
        // Add new product to cart
        updatedCart = [...prevCart, { ...product, quantity: 1 }];
      }

      saveCartToLocalStorage(updatedCart); // Save the updated cart to localStorage
      return updatedCart;
    });
  };

  const removeFromCart = (productId) => {
    setCart((prevCart) => {
      const updatedCart = prevCart.filter(
        (item) => item.productId !== productId
      );
      saveCartToLocalStorage(updatedCart); // Save the updated cart to localStorage
      return updatedCart;
    });
  };

  const clearCart = () => {
    setCart([]);
    localStorage.removeItem("cart"); // Remove the cart from localStorage
  };

  useEffect(() => {
    saveCartToLocalStorage(cart);
  }, [cart]);

  return (
    <CartContext.Provider
      value={{ cart, addToCart, removeFromCart, clearCart }}
    >
      {children}
    </CartContext.Provider>
  );
};

CartProvider.propTypes = {
  children: PropTypes.node,
};
