import { createContext, useState, useContext } from "react";

export const ProductContext = createContext({
  products: [],
  addProduct: () => {},
  toggleBoughtStatus: () => {},
  removeProduct: () => {},
});

export const ProductProvider = ({ children }) => {
  const [products, setProducts] = useState([
    { name: "iPhone", bought: false, price: 999 },
    { name: "case", bought: false, price: 4.99 },
    { name: "apple care", bought: false, price: 299 },
  ]);

  const addProduct = (productName, price) => {
    setProducts([
      { name: productName, bought: false, price: price },
      ...products,
    ]);
  };

  const toggleBoughtStatus = (productIndex) => {
    // Clone the products array
    const updatedProducts = [...products];

    // Directly access the product using its index and toggle its 'bought' status
    updatedProducts[productIndex] = {
      ...updatedProducts[productIndex],
      bought: !updatedProducts[productIndex].bought,
    };

    // Update the state with the modified products array
    setProducts(updatedProducts);
  };

  const removeProduct = (productIndex) => {
    setProducts(products.filter((_, index) => index !== productIndex));
  };

  return (
    <ProductContext.Provider
      value={{ products, addProduct, toggleBoughtStatus, removeProduct }}
    >
      {children}
    </ProductContext.Provider>
  );
};

// Custom hook to use the product context
export const useProduct = () => useContext(ProductContext);
