import { createContext, ReactNode, useContext, useState } from "react";

interface Product {
  id: string;
}

interface CartItem {
  product: Product;
  quantity: number;
}
export const ProductContextProvider = createContext({});

export const useCart = () => useContext(ProductContextProvider);

export const Context = ({ children }: { children: ReactNode }) => {
  const [cartItems, setCartItems] = useState<CartItem[]>([]);

  const addToCartsItems = (product: Product, quantity: number) => {
    setCartItems((prev) => {
      const productExists = prev.find((item) => item.product.id === product.id);
      if (productExists) {
        return prev.map((item) =>
          item.product.id === product.id
            ? { ...item, quantity: item.quantity + quantity }
            : item
        );
      } else {
        return [...prev, { product, quantity }];
      }
    });
  };

  return (
    <ProductContextProvider.Provider value={{ addToCartsItems, cartItems }}>
      {children}
    </ProductContextProvider.Provider>
  );
};
