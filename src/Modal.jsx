
import { closeModal } from "./features/modal/cartModal"
import { clearCart } from "./features/cart/cartSlice"
import { useDispatch } from "react-redux"

const Modal = () => {

    const dispatch = useDispatch()
  return (
      <aside className="modal-container">
          <div className="modal">
              <h4>remove all item from your shopping cart</h4>
              <div className="btn-container">
                  <button className="btn btn-confirm" onClick={() => {
                      dispatch(clearCart())
                      dispatch(closeModal())
                  }}>
                      confirm
                  </button>
                  <button className="btn clear-btn" onClick={()=>dispatch(closeModal())}> cancel</button>
              </div>
          </div>
    </aside>
  )
}
export default Modal