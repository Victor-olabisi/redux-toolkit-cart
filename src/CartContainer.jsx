import { useSelector, useDispatch } from "react-redux";
import CartItem from "./CartItem";
import { clearCart } from "./features/cart/cartSlice";

const CartContainer = () => {
  const { cartItems, amount, total } = useSelector((store) => store.cart);
 const dispatch = useDispatch()
  if (amount < 1) {
    return (
      <section className="cart">
        <header>
          <h2>your bag is emtpy </h2>
        </header>
      </section>
    );
  }
  return (
    <section className="cart">
      <header>
        <h2>your bag</h2>
      </header>
      {cartItems.map((item) => {
        return <CartItem Key={item.id} {...item} />;
      })}
      <footer>
        <hr />
        <div className="cart-total">
          <h4>
            total <span>${total}</span>
          </h4>
              </div>
              <button className="clear-btn" onClick={()=>dispatch(clearCart())}>clear cart</button>
      </footer>
    </section>
  );
};
export default CartContainer;
