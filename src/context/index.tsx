import { createContext, ReactNode, useContext, useState } from "react";

interface Product {
  id: string;
}

interface CartItem {
  product: Product;
  quantity: number;
}


interface CartContextValue {
  cartItems: CartItem[];
  setCartItems: React.Dispatch<React.SetStateAction<CartItem[]>>;
  addToCartsItems: (product: Product, quantity: number) => void;
}

export const ProductContextProvider = createContext<CartContextValue | undefined>(undefined);

export const useCart = () => {
  const context = useContext(ProductContextProvider);
  if (!context) {
    throw new Error("useCart must be used within a ProductContextProvider");
  }
  return context;
};

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
    <ProductContextProvider.Provider value={{ cartItems, setCartItems, addToCartsItems }}>
      {children}
    </ProductContextProvider.Provider>
  );
};
