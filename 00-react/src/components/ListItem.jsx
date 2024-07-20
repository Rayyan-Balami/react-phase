import { useProduct } from "../contexts/Product";

function ListItem() {
  const { products, toggleBoughtStatus, removeProduct } = useProduct();
  return (
    <>
      {products?.map((product,index) => {
        const { name, bought, price } = product;
        return (
          <li
            key={`product_${name}`}
            className={`flex items-center gap-1 border-2 rounded-md overflow-hidden transition-all duration-300 p-2.5 hover:border-gray-300 `}
          >
            <span className="flex-grow">{name}</span>
            <span className="flex-grow">${price.toFixed(2)}</span>

            <button
              className={`px-1.5 py-1 ${
                bought ? "bg-orange-600" : "bg-green-600"
              } text-white rounded  transition-all duration-300 hover:brightness-90`}
              onClick={() => toggleBoughtStatus(index)}
            >
              {bought ? "Cancel Buy" : "Buy"}
            </button>

            <button
              className="px-1.5 py-1 bg-red-600 text-white rounded hover:brightness-90 transition-all duration-300"
              onClick={() => removeProduct(index)}
            >
              Remove
            </button>
          </li>
        );
      })}
    </>
  );
}

export default ListItem;
