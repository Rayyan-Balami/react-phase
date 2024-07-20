import { useRef } from "react";
import { useProduct } from "../contexts/Product";

function AddProduct() {
  const {addProduct} = useProduct();

  const name = useRef('');
  const price = useRef(0.00);

  const addNewProduct = (e) => {
    e.preventDefault();
    addProduct(name.current.value, parseFloat(price.current.value)); // Ensure price is a float
    name.current.value = '';
    price.current.value = '';
  }

  return (
    <form
      className="w-[50vh] flex items-stretch overflow-hidden rounded-md border-2 transition-all duration-300 focus-within:border-blue-600 bg-gray-50"
      onSubmit={addNewProduct} // Corrected to use addNewProduct
    >
      <input
        type="text"
        name="userInput"
        id="userInput"
        placeholder="Enter Product"
        className="flex-grow px-3 py-2 focus:outline-none"
        required
        ref={name}
      />
      
      {/* Price Input Field */}
      <input
        type="number"
        name="price"
        id="price"
        placeholder="Price"
        className="w-1/4 px-3 py-2 focus:outline-none border-l-2"
        required
        min="0" // Ensures that only non-negative numbers can be entered
        step="0.01" // Allows entering cents
        ref={price}
      />
      
      <button
        type="submit"
        className="m-1 rounded bg-blue-600 px-3 py-2 text-white transition-all duration-300 hover:bg-blue-800"
      >
        Add
      </button>
    </form>
  );
}

export default AddProduct;