import CartContainer from "./CartContainer";
import Navbar from "./Navbar";
import { useSelector, useDispatch } from 'react-redux'
import { useEffect } from "react";
import { calculateTotals, getCartItems } from "./features/cart/cartSlice";
import Modal from "./Modal";
function App() {
  const { cartItems, isLoadng } = useSelector((store) => store.cart)
  const { isModal } = useSelector((store)=> store.modal)
  const dispatch = useDispatch()
  useEffect(() => {
    dispatch(calculateTotals())
  }, [cartItems])
  useEffect(() => {
      dispatch(getCartItems())
    },[])
  if(isLoadng){
     return <h2>loading...</h2>
  }
  return <main>
    {isModal && <Modal />}
    <Navbar />
    <CartContainer/>
  </main>;
}
export default App;
