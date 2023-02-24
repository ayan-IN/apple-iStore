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
    case ORDER_TYPE_CONSTANTS.ORDER_DETAILS_RESET:
      return {
        loading: true,
        orderItems: [],
        shippingAddress: {},
      }
    default:
      return state
  }
}

export const orderPayReducer = (state = {}, action) => {
  switch (action.type) {
    case ORDER_TYPE_CONSTANTS.ORDER_PAY_REQUEST:
      return { loading: true }
    case ORDER_TYPE_CONSTANTS.ORDER_PAY_SUCCESS:
      return {
        loading: false,
        success: true,
      }
    case ORDER_TYPE_CONSTANTS.ORDER_PAY_FAILED:
      return {
        loading: false,
        error: action.payload,
      }
    case ORDER_TYPE_CONSTANTS.ORDER_PAY_RESET:
      return {}
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

export const orderListReducer = (state = { orders: [] }, action) => {
  switch (action.type) {
    case ORDER_TYPE_CONSTANTS.ORDER_LIST_REQUEST:
      return {
        loading: true,
      }
    case ORDER_TYPE_CONSTANTS.ORDER_LIST_SUCCESS:
      return {
        loading: false,
        orders: action.payload,
      }
    case ORDER_TYPE_CONSTANTS.ORDER_LIST_FAILED:
      return {
        loading: false,
        error: action.payload,
      }
    case ORDER_TYPE_CONSTANTS.ORDER_LIST_RESET:
      return {
        orders: [],
      }
    default:
      return state
  }
}

export const orderDeliverReducer = (state = { orders: [] }, action) => {
  switch (action.type) {
    case ORDER_TYPE_CONSTANTS.ORDER_DELIVER_REQUEST:
      return {
        loading: true,
      }
    case ORDER_TYPE_CONSTANTS.ORDER_DELIVER_SUCCESS:
      return {
        loading: false,
        success: true,
      }
    case ORDER_TYPE_CONSTANTS.ORDER_DELIVER_FAILED:
      return {
        loading: false,
        error: action.payload,
      }
    case ORDER_TYPE_CONSTANTS.ORDER_DELIVER_RESET:
      return {
        orders: [],
      }
    default:
      return state
  }
}
