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
