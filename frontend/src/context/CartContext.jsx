import { createContext, useContext, useEffect, useState } from "react";

const CartContext = createContext();

export const CartProvider = ({ children }) => {
  const [cartItems, setCartItems] = useState(() => {
    try {
      const savedCart = localStorage.getItem("zara-cart");
      return savedCart ? JSON.parse(savedCart) : [];
    } catch {
      return [];
    }
  });

  useEffect(() => {
    localStorage.setItem("zara-cart", JSON.stringify(cartItems));
  }, [cartItems]);

const addItem = (product, size, quantity = 1) => {
  if (!size) {
    alert("Please select a size");
    return;
  }

  if (quantity < 1) return;

  setCartItems((prevItems) => {
    const existingItem = prevItems.find(
      (item) =>
        item.productId === product._id &&
        item.size === size
    );

    if (existingItem) {
      return prevItems.map((item) =>
        item.productId === product._id &&
        item.size === size
          ? {
              ...item,
              quantity: item.quantity + quantity,
            }
          : item
      );
    }

    return [
      ...prevItems,
      {
        productId: product._id,
        title: product.title,
        image: product.image,
        price: product.price,
        size,
        quantity,
      },
    ];
  });
};
  const removeItem = (productId, size) => {
    setCartItems((prevItems) =>
      prevItems.filter(
        (item) => !(item.productId === productId && item.size === size),
      ),
    );
  };
  const updateQuantity = (productId, size, quantity) => {
    if (quantity < 1) return;
    setCartItems((prevItems) =>
      prevItems.map((item) =>
        item.productId === productId && item.size === size
          ? { ...item, quantity }
          : item,
      ),
    );
  };

  const clearCart = () => {
    setCartItems([]);
  };
  const cartCount = cartItems.reduce(
    (total,item) => total + item.quantity,
    0
  );

  const cartTotal = cartItems.reduce(
    (total,item) => total + item.price * item.quantity,0
  );

    return (
    <CartContext.Provider
      value={{
        cartItems,
        addItem,
        removeItem,
        updateQuantity,
        clearCart,
        cartCount,
        cartTotal,
      }}
    >
      {children}
    </CartContext.Provider>
  );
};
export const useCart = () => {
  const context = useContext(CartContext);

  if (!context) {
    throw new Error("useCart must be used inside CartProvider");
  }

  return context;
};
