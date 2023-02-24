import axios from 'axios'
import { ORDER_TYPE_CONSTANTS } from '../constants/orderConstants'

//* Action to create order
export const createdOrder = (order) => async (dispatch, getState) => {
  try {
    dispatch({
      type: ORDER_TYPE_CONSTANTS.ORDER_CREATE_REQUEST,
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
    const { data } = await axios.post('/api/orders', order, config)
    dispatch({
      type: ORDER_TYPE_CONSTANTS.ORDER_CREATE_SUCCESS,
      payload: data,
    })
  } catch (error) {
    dispatch({
      type: ORDER_TYPE_CONSTANTS.ORDER_CREATE_FAILED,
      payload:
        error.response && error.response.message
          ? error.message
          : error.response.data.message,
    })
  }
}

//* Action to get order details based on ID
export const getOrderDetails = (orderID) => async (dispatch, getState) => {
  try {
    dispatch({
      type: ORDER_TYPE_CONSTANTS.ORDER_DETAILS_REQUEST,
    })
    const {
      userLogin: { userInfo },
    } = getState()
    const config = {
      headers: {
        Authorization: `Bearer ${userInfo.token}`,
      },
    }
    const { data } = await axios.get(`/api/orders/${orderID}`, config)
    dispatch({
      type: ORDER_TYPE_CONSTANTS.ORDER_DETAILS_SUCCESS,
      payload: data,
    })
  } catch (error) {
    dispatch({
      type: ORDER_TYPE_CONSTANTS.ORDER_DETAILS_FAILED,
      payload:
        error.response && error.response.message
          ? error.message
          : error.response.data.message,
    })
  }
}

//* Reset CreateOrder State once order placed
export const resetCreateOrderState = () => (dispatch) => {
  dispatch({
    type: ORDER_TYPE_CONSTANTS.ORDER_CREATE_RESET,
  })
}

//* Get orders of the logged user
export const listMyOrders = () => async (dispatch, getState) => {
  try {
    dispatch({
      type: ORDER_TYPE_CONSTANTS.ORDER_LIST_MY_REQUEST,
    })
    const {
      userLogin: { userInfo },
    } = getState()
    const config = {
      headers: {
        Authorization: `Bearer ${userInfo.token}`,
      },
    }
    const { data } = await axios.get('/api/orders/myorders', config)
    dispatch({
      type: ORDER_TYPE_CONSTANTS.ORDER_LIST_MY_SUCCESS,
      payload: data,
    })
  } catch (error) {
    dispatch({
      type: ORDER_TYPE_CONSTANTS.ORDER_LIST_MY_FAILED,
      payload:
        error.response && error.response.message
          ? error.message
          : error.message.data.message,
    })
  }
}

//* Get all orders
export const listOrders = () => async (dispatch, getState) => {
  try {
    dispatch({
      type: ORDER_TYPE_CONSTANTS.ORDER_LIST_REQUEST,
    })
    const {
      userLogin: { userInfo },
    } = getState()
    const config = {
      headers: {
        Authorization: `Bearer ${userInfo.token}`,
      },
    }
    const { data } = await axios.get('/api/orders', config)
    dispatch({
      type: ORDER_TYPE_CONSTANTS.ORDER_LIST_SUCCESS,
      payload: data,
    })
  } catch (error) {
    dispatch({
      type: ORDER_TYPE_CONSTANTS.ORDER_LIST_FAILED,
      payload:
        error.response && error.response.message
          ? error.message
          : error.message.data.message,
    })
  }
}

//* Deliver status update
export const deliverOrder = (order) => async (dispatch, getState) => {
  try {
    dispatch({
      type: ORDER_TYPE_CONSTANTS.ORDER_DELIVER_REQUEST,
    })
    const {
      userLogin: { userInfo },
    } = getState()
    const config = {
      headers: {
        Authorization: `Bearer ${userInfo.token}`,
      },
    }
    const { data } = await axios.put(
      `/api/orders/${order._id}/deliver`,
      {},
      config
    )
    dispatch({
      type: ORDER_TYPE_CONSTANTS.ORDER_DELIVER_SUCCESS,
      payload: data,
    })
  } catch (error) {
    dispatch({
      type: ORDER_TYPE_CONSTANTS.ORDER_DELIVER_FAILED,
      payload:
        error.response && error.response.message
          ? error.message
          : error.message.data.message,
    })
  }
}

//* Pay status update
export const payOrder = (orderId) => async (dispatch, getState) => {
  try {
    dispatch({
      type: ORDER_TYPE_CONSTANTS.ORDER_PAY_REQUEST,
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
    const { data } = await axios.put(`/api/orders/${orderId}/pay`, {}, config)
    dispatch({
      type: ORDER_TYPE_CONSTANTS.ORDER_PAY_SUCCESS,
      payload: data,
    })
  } catch (error) {
    dispatch({
      type: ORDER_TYPE_CONSTANTS.ORDER_PAY_FAILED,
      payload:
        error.response && error.response.message
          ? error.message
          : error.message.data.message,
    })
  }
}

export const resetMyOrders = () => (dispatch) => {
  dispatch({
    type: ORDER_TYPE_CONSTANTS.ORDER_LIST_MY_RESET,
  })
}
