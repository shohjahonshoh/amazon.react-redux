import React from "react";
import { useDispatch } from "react-redux";
import products from "../data/products";
import { addToCart } from "../redux/cartSlice";
function Home() {
  const dispatch = useDispatch();

  const allProducts = Object.values(products).flat();

  const handleAddToCart = (product) => {
    dispatch(addToCart({ ...product, quantity: 1 }));
  };

  return (
    <div>
      <div className="home-container"></div>

      <div className="product-grid">
        {allProducts.map((product) => (
          <div key={product.id} className="product-card">
            <img
              src={product.image}
              alt={product.name}
              className="product-image"
            />
            <h2>{product.name}</h2>
            <p>Price: ${product.price}</p>

            <button onClick={() => handleAddToCart(product)}>
              Add to Cart
            </button>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Home;
