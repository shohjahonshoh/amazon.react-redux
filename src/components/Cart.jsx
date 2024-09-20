import React from "react";
import { useSelector, useDispatch } from "react-redux";
import {
  removeFromCart,
  clearCart,
  increaseQuantity,
  decreaseQuantity,
} from "../redux/cartSlice";

function Cart() {
  const cartItems = useSelector((state) => state.cart.items);
  const dispatch = useDispatch();

  const handleRemove = (id) => {
    dispatch(removeFromCart({ id }));
  };

  const handleIncrease = (id) => {
    dispatch(increaseQuantity({ id }));
  };

  const handleDecrease = (id) => {
    dispatch(decreaseQuantity({ id }));
  };

  const handleClear = () => {
    dispatch(clearCart());
  };

  const totalAmount = cartItems.reduce(
    (acc, item) => acc + item.price * item.quantity,
    0
  );

  return (
    <div>
      <h1>Shopping Cart</h1>
      {cartItems.length === 0 ? (
        <p>Hech nima harid qilinmadi</p>
      ) : (
        <div>
          <button onClick={handleClear}>Clear Cart</button>
          {cartItems.map((item) => (
            <div key={item.id} className="cart-item">
              <img
                src={item.image}
                alt={item.name}
                className="cart-item-image"
              />
              <div className="cart-item-details">
                <h2>{item.name}</h2>
                <p>Price: ${item.price}</p>
                <p>
                  Quantity:
                  <button onClick={() => handleDecrease(item.id)}>-</button>
                  {item.quantity}
                  <button onClick={() => handleIncrease(item.id)}>+</button>
                </p>
                <button onClick={() => handleRemove(item.id)}>Remove</button>
              </div>
            </div>
          ))}
          <h2>Total: ${totalAmount.toFixed(2)}</h2>
        </div>
      )}
    </div>
  );
}

export default Cart;
