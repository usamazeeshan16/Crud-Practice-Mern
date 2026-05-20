import React, { useState } from "react";
import ProductForm from "./components/ProductForm";
import ProductTable from "./components/ProductTable";

function App() {
    const [products, setProducts] = useState([]);

  const addProduct = (product) => {
    const newProduct = {
      id: Date.now(),
      ...product,
    };

    setProducts([...products, newProduct]);
  };

  return (
    <div>
     <ProductForm addProduct={addProduct} />
      <ProductTable products={products} />
    </div>
  );
}

export default App;

// import { useState } from "react";

// function App() {

//   const [count, setCount] = useState(0);

//   const increaseCount = () => {
//     setCount(count + 1);
//   };
//    console.log("Component Re-rendered");

//   return (
//     <div>

//       <h1>{count}</h1>
      

//       <button onClick={increaseCount}>
//         Increase
//       </button>

//     </div>
//   );
// }

// export default App;