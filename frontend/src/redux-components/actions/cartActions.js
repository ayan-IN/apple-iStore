import axios from 'axios'
import { CART_CONSTANT_TYPES } from '../constants/cartConstants'

//* Add to Cart actions
export const addToCart = (productID, qty) => async (dispatch, getState) => {
  const { data } = await axios.get(`/api/products/${productID}`)
  const { _id, name, image, price, countInStock } = data
  dispatch({
    type: CART_CONSTANT_TYPES.CART_ADD_ITEM,
    payload: {
      product: _id,
      name,
      image,
      price,
      countInStock,
      qty,
    },
  })
}

//* Remove from cart
export const removeFromCart = (productID) => (dispatch, getState) => {
  dispatch({
    type: CART_CONSTANT_TYPES.CART_REMOVE_ITEM,
    payload: productID,
  })
}

//* Save shipping address
export const saveShippingAddress = (data) => (dispatch) => {
  dispatch({
    type: CART_CONSTANT_TYPES.CART_SAVE_SHIPPING_ADDRESS,
    payload: data,
  })
}

//* Save payment-method
export const savePaymentMethod = (data) => (dispatch) => {
  dispatch({
    type: CART_CONSTANT_TYPES.CART_SAVE_PAYMENT_METHOD,
    payload: data,
  })
}

//* Reset Cart after successful order placing
export const resetCart = () => (dispatch) => {
  dispatch({
    type: CART_CONSTANT_TYPES.CART_RESET,
  })
}
