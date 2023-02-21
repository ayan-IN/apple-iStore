import { ORDER_TYPE_CONSTANTS } from '../constants/orderConstants'

export const orderCreateReducer = (state = {}, action) => {
  switch (action.type) {
    case ORDER_TYPE_CONSTANTS.ORDER_CREATE_REQUEST:
      return {
        loading: true,
      }
    case ORDER_TYPE_CONSTANTS.ORDER_CREATE_SUCCESS:
      return {
        loading: false,
        success: true,
        order: action.payload,
      }
    case ORDER_TYPE_CONSTANTS.ORDER_CREATE_FAILED:
      return {
        loading: false,
        error: action.payload,
      }
    case ORDER_TYPE_CONSTANTS.ORDER_CREATE_RESET:
      return {}
    default:
      return state
  }
}

export const orderDetailsReducer = (
  state = {
    loading: true,
    orderItems: [],
    shippingAddress: {},
  },
  action
) => {
  switch (action.type) {
    case ORDER_TYPE_CONSTANTS.ORDER_DETAILS_REQUEST:
      return { ...state, loading: true }
    case ORDER_TYPE_CONSTANTS.ORDER_DETAILS_SUCCESS:
      return {
        loading: false,
        order: action.payload,
      }
    case ORDER_TYPE_CONSTANTS.ORDER_DETAILS_FAILED:
      return {
        loading: false,
        error: action.payload,
      }
    default:
      return state
  }
}

export const orderListMyReducer = (state = { orders: [] }, action) => {
  switch (action.type) {
    case ORDER_TYPE_CONSTANTS.ORDER_LIST_MY_REQUEST:
      return {
        loading: true,
      }
    case ORDER_TYPE_CONSTANTS.ORDER_LIST_MY_SUCCESS:
      return {
        loading: false,
        orders: action.payload,
      }
    case ORDER_TYPE_CONSTANTS.ORDER_LIST_MY_FAILED:
      return {
        loading: false,
        error: action.payload,
      }
    case ORDER_TYPE_CONSTANTS.ORDER_LIST_MY_RESET:
      return {
        orders: [],
      }
    default:
      return state
  }
}
