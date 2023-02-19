import axios from 'axios'
import { CART_CONSTANT_TYPES } from '../constants/cartActions'

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
        payload: productID
    })
}