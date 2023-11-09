import CartContainer from "./CartContainer";
import Navbar from "./Navbar";
import { useSelector, useDispatch } from 'react-redux'
import { useEffect } from "react";
import { calculateTotals } from "./features/cart/cartSlice";
import Modal from "./Modal";
function App() {
  const { cartItems } = useSelector((store) => store.cart)
  const { isModal } = useSelector((store)=> store.modal)
  const dispatch = useDispatch()
  useEffect(() => {
    dispatch(calculateTotals())
  },[cartItems])
  return <main>
    {isModal && <Modal />}
    <Navbar />
    <CartContainer/>
  </main>;
}
export default App;
