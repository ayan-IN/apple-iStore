import { combineReducers } from 'redux'

import { userLoginReducer, userRegisterReducer } from './userReducers'
import { productListReducer, productDetailsReducer } from './productReducers'
import { cartReducer } from './cartReducers'

export const rootReducer = combineReducers({
  userLogin: userLoginReducer,
  userRegister: userRegisterReducer,
  productList: productListReducer,
  productDetails: productDetailsReducer,
  cart: cartReducer,
})
