import ProductList from "./components/ProductList";
import AddProduct from "./components/AddProduct";
import { ProductProvider } from "./contexts/Product";


function App() {
  return (
    <div className="flex flex-col items-center justify-center h-screen">
    <ProductProvider >
      <AddProduct/>
      <ProductList/>
    </ProductProvider>
    </div>
  );
}

export default App;
