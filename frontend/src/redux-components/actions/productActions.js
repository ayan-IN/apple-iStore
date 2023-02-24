import axios from 'axios'
import { PRODUCT_CONSTANT_TYPES } from '../constants/productConstants'

//* Action to get the list of products from the remote database
export const listProducts =
  (keyword = '', pageNumber = '') =>
  async (dispatch) => {
    try {
      dispatch({
        type: PRODUCT_CONSTANT_TYPES.PRODUCT_LIST_REQUEST,
      })
      const { data } = await axios(
        `/api/products?keyword=${keyword}&pageNumber=${pageNumber}`
      )
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

//! ADMIN

//* Delete product
export const deleteProduct = (id) => async (dispatch, getState) => {
  try {
    dispatch({
      type: PRODUCT_CONSTANT_TYPES.PRODUCT_DELETE_REQUEST,
    })
    const {
      userLogin: { userInfo },
    } = getState()
    const config = {
      headers: {
        Authorization: `Bearer ${userInfo.token}`,
      },
    }
    await axios.delete(`/api/products/${id}`, config)
    dispatch({
      type: PRODUCT_CONSTANT_TYPES.PRODUCT_DELETE_SUCCESS,
    })
  } catch (error) {
    dispatch({
      type: PRODUCT_CONSTANT_TYPES.PRODUCT_DELETE_FAILED,
      payload:
        error.response && error.response.message
          ? error.message
          : error.message.data.message,
    })
  }
}

//* Create product
export const createProduct = () => async (dispatch, getState) => {
  try {
    dispatch({
      type: PRODUCT_CONSTANT_TYPES.PRODUCT_CREATE_REQUEST,
    })
    const {
      userLogin: { userInfo },
    } = getState()
    const config = {
      headers: {
        Authorization: `Bearer ${userInfo.token}`,
      },
    }
    const { data } = await axios.post(`/api/products`, {}, config)
    dispatch({
      type: PRODUCT_CONSTANT_TYPES.PRODUCT_CREATE_SUCCESS,
      payload: data,
    })
  } catch (error) {
    dispatch({
      type: PRODUCT_CONSTANT_TYPES.PRODUCT_CREATE_FAILED,
      payload:
        error.response && error.response.message
          ? error.message
          : error.message.data.message,
    })
  }
}

//* Update product
export const updateProduct = (product) => async (dispatch, getState) => {
  try {
    dispatch({
      type: PRODUCT_CONSTANT_TYPES.PRODUCT_UPDATE_REQUEST,
    })
    const {
      userLogin: { userInfo },
    } = getState()
    const config = {
      headers: {
        'Content-Type': 'application/json',
        Authorization: `Bearer ${userInfo.token}`,
      },
    }
    const { data } = await axios.put(
      `/api/products/${product._id}`,
      product,
      config
    )
    dispatch({
      type: PRODUCT_CONSTANT_TYPES.PRODUCT_UPDATE_SUCCESS,
      payload: data,
    })
  } catch (error) {
    dispatch({
      type: PRODUCT_CONSTANT_TYPES.PRODUCT_UPDATE_FAILED,
      payload:
        error.response && error.response.message
          ? error.message
          : error.message.data.message,
    })
  }
}

//* Review product
export const createProductReview =
  (productId, review) => async (dispatch, getState) => {
    try {
      dispatch({
        type: PRODUCT_CONSTANT_TYPES.PRODUCT_CREATE_REVIEW_REQUEST,
      })
      const {
        userLogin: { userInfo },
      } = getState()
      const config = {
        headers: {
          'Content-Type': 'application/json',
          Authorization: `Bearer ${userInfo.token}`,
        },
      }
      await axios.post(`/api/products/${productId}/reviews`, review, config)
      dispatch({
        type: PRODUCT_CONSTANT_TYPES.PRODUCT_CREATE_REVIEW_SUCCESS,
      })
    } catch (error) {
      dispatch({
        type: PRODUCT_CONSTANT_TYPES.PRODUCT_CREATE_REVIEW_FAILED,
        payload:
          error.response && error.response.data.message
            ? error.response.data.message
            : error.message,
      })
    }
  }

//* Action to get the list of top products
export const listTopProducts = () => async (dispatch) => {
  try {
    dispatch({
      type: PRODUCT_CONSTANT_TYPES.PRODUCT_TOP_REQUEST,
    })
    const { data } = await axios.get(`/api/products/top`)
    dispatch({
      type: PRODUCT_CONSTANT_TYPES.PRODUCT_TOP_SUCCESS,
      payload: data,
    })
  } catch (error) {
    dispatch({
      type: PRODUCT_CONSTANT_TYPES.PRODUCT_TOP_FAILED,
      payload:
        error.response && error.response.data.message
          ? error.response.data.message
          : error.message,
    })
  }
}
