import { combineReducers } from 'redux'

import {
  userDetailsReducer,
  userLoginReducer,
  userRegisterReducer,
  userUpdateProfileReducer,
} from './userReducers'
import { productListReducer, productDetailsReducer } from './productReducers'
import { cartReducer } from './cartReducers'
import {
  orderCreateReducer,
  orderDetailsReducer,
  orderListMyReducer,
} from './orderReducers'

export const rootReducer = combineReducers({
  userLogin: userLoginReducer,
  userRegister: userRegisterReducer,
  userDetails: userDetailsReducer,
  userUpdateProfile: userUpdateProfileReducer,
  productList: productListReducer,
  productDetails: productDetailsReducer,
  cart: cartReducer,
  orderCreate: orderCreateReducer,
  orderDetails: orderDetailsReducer,
  orderListMy: orderListMyReducer,
})
