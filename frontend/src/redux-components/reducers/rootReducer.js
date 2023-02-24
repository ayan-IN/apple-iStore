import { combineReducers } from 'redux'

import {
  userDetailsReducer,
  userLoginReducer,
  userRegisterReducer,
  userUpdateProfileReducer,
  userListReducer,
  userDeleteReducer,
  userUpdateReducer,
} from './userReducers'
import {
  productListReducer,
  productDetailsReducer,
  productDeleteReducer,
  productCreateReducer,
  productUpdateReducer,
  productCreateReviewReducer,
  productTopRatedReducer,
} from './productReducers'
import { cartReducer } from './cartReducers'
import {
  orderCreateReducer,
  orderDeliverReducer,
  orderDetailsReducer,
  orderListMyReducer,
  orderListReducer,
  orderPayReducer,
} from './orderReducers'

export const rootReducer = combineReducers({
  userLogin: userLoginReducer,
  userRegister: userRegisterReducer,
  userDetails: userDetailsReducer,
  userUpdateProfile: userUpdateProfileReducer,
  productList: productListReducer,
  productDetails: productDetailsReducer,
  productCreateReview: productCreateReviewReducer,
  productTopRated: productTopRatedReducer,
  cart: cartReducer,
  orderCreate: orderCreateReducer,
  orderDetails: orderDetailsReducer,
  orderPay: orderPayReducer,
  orderListMy: orderListMyReducer,

  //!ADMIN
  userList: userListReducer,
  userDelete: userDeleteReducer,
  userUpdate: userUpdateReducer,

  productDelete: productDeleteReducer,
  productCreate: productCreateReducer,
  productUpdate: productUpdateReducer,

  orderList: orderListReducer,
  orderDeliver: orderDeliverReducer,
})
