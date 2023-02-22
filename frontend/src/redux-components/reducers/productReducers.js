import { PRODUCT_CONSTANT_TYPES } from '../constants/productConstants'

//* Product List Reducer
export const productListReducer = (state = { products: [] }, action) => {
  switch (action.type) {
    case PRODUCT_CONSTANT_TYPES.PRODUCT_LIST_REQUEST:
      return { loading: true, products: [] }
    case PRODUCT_CONSTANT_TYPES.PRODUCT_LIST_SUCCESS:
      return { loading: false, products: action.payload }
    case PRODUCT_CONSTANT_TYPES.PRODUCT_LIST_FAILED:
      return { loading: false, error: action.payload }
    default:
      return state
  }
}

//* Product Details Reducer
export const productDetailsReducer = (
  state = { product: { reviews: [] } },
  action
) => {
  switch (action.type) {
    case PRODUCT_CONSTANT_TYPES.PRODUCT_DETAILS_REQUEST:
      return { loading: true }
    case PRODUCT_CONSTANT_TYPES.PRODUCT_DETAILS_SUCCESS:
      return { loading: false, product: action.payload }
    case PRODUCT_CONSTANT_TYPES.PRODUCT_DETAILS_FAILED:
      return { loading: false, error: action.payload }
    default:
      return state
  }
}

//* Product Delete Reducer
export const productDeleteReducer = (state = {}, action) => {
  switch (action.type) {
    case PRODUCT_CONSTANT_TYPES.PRODUCT_DELETE_REQUEST:
      return { loading: true }
    case PRODUCT_CONSTANT_TYPES.PRODUCT_DELETE_SUCCESS:
      return { loading: false, success: true }
    case PRODUCT_CONSTANT_TYPES.PRODUCT_DELETE_FAILED:
      return { loading: false, error: action.payload }
    default:
      return state
  }
}

//* Product Create Reducer
export const productCreateReducer = (state = {}, action) => {
  switch (action.type) {
    case PRODUCT_CONSTANT_TYPES.PRODUCT_CREATE_REQUEST:
      return { loading: true }
    case PRODUCT_CONSTANT_TYPES.PRODUCT_CREATE_SUCCESS:
      return { loading: false, success: true, product: action.payload }
    case PRODUCT_CONSTANT_TYPES.PRODUCT_CREATE_FAILED:
      return { loading: false, error: action.payload }
    case PRODUCT_CONSTANT_TYPES.PRODUCT_CREATE_RESET:
      return {}
    default:
      return state
  }
}

//* Product Update Reducer
export const productUpdateReducer = (state = { product: {} }, action) => {
  switch (action.type) {
    case PRODUCT_CONSTANT_TYPES.PRODUCT_UPDATE_REQUEST:
      return { loading: true }
    case PRODUCT_CONSTANT_TYPES.PRODUCT_UPDATE_SUCCESS:
      return { loading: false, success: true, product: action.payload }
    case PRODUCT_CONSTANT_TYPES.PRODUCT_UPDATE_FAILED:
      return { loading: false, error: action.payload }
    case PRODUCT_CONSTANT_TYPES.PRODUCT_UPDATE_RESET:
      return { product: {} }
    default:
      return state
  }
}
