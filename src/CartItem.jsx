import { ChevronDown, ChevronUp } from "./icons";
import { removeCart, increaseCart, decrease } from "./features/cart/cartSlice";
import { useDispatch } from "react-redux";

const CartItem = ({ id, img, amount, price, title }) => {
  const dispatch = useDispatch();
  return (
    <article className="cart-item">
      <img src={img} alt="" className="img" />
      <div>
        <h4>{title}</h4>
        <h4 className="item-price">{price}</h4>
        <button className="remove-btn" onClick={() => dispatch(removeCart(id))}>
          remove
        </button>
      </div>
      <div>
        <button
          className="amount-btn"
          onClick={() => dispatch(increaseCart(id))}
        >
          <ChevronUp />
        </button>
        <p className="amount">{amount}</p>
        <button
          className="amount-btn"
          onClick={() => {
            if(amount === 1) return dispatch(removeCart(id))
            dispatch(decrease(id));
          }}
        >
          <ChevronDown />
        </button>
      </div>
    </article>
  );
};
export default CartItem;
