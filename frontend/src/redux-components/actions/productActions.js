import axios from 'axios'
import { PRODUCT_CONSTANT_TYPES } from '../constants/productConstants'

//* Action to get the list of products from the remote database
export const listProducts = () => async (dispatch) => {
  try {
    dispatch({
      type: PRODUCT_CONSTANT_TYPES.PRODUCT_LIST_REQUEST,
    })
    const { data } = await axios('/api/products')
    dispatch({
      type: PRODUCT_CONSTANT_TYPES.PRODUCT_LIST_SUCCESS,
      payload: data,
    })
  } catch (error) {
    dispatch({
      type: PRODUCT_CONSTANT_TYPES.PRODUCT_LIST_FAILED,
      payload:
        error.response && error.response.data.message
          ? error.response.data.message
          : error.message,
    })
  }
}

//* Action to get a particular product by its ID
export const listProductDetails = (productID) => async (dispatch) => {
  try {
    dispatch({ type: PRODUCT_CONSTANT_TYPES.PRODUCT_DETAILS_REQUEST })
    const { data } = await axios(`/api/products/${productID}`)
    dispatch({
      type: PRODUCT_CONSTANT_TYPES.PRODUCT_DETAILS_SUCCESS,
      payload: data,
    })
  } catch (error) {
    dispatch({
      type: PRODUCT_CONSTANT_TYPES.PRODUCT_DETAILS_FAILED,
      payload:
        error.response && error.response.data.message
          ? error.response.data.message
          : error.message,
    })
  }
}
