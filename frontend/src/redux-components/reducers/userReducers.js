import { USER_CONSTANT_TYPES } from '../constants/userConstants'

//* User Login reducer
export const userLoginReducer = (state = {}, action) => {
  switch (action.type) {
    case USER_CONSTANT_TYPES.USER_LOGIN_REQUEST:
      return { loading: true }
    case USER_CONSTANT_TYPES.USER_LOGIN_SUCCESS:
      return {
        loading: false,
        userInfo: action.payload,
      }
    case USER_CONSTANT_TYPES.USER_LOGIN_FAILED:
      return {
        loading: false,
        error: action.payload,
      }
    case USER_CONSTANT_TYPES.USER_LOGOUT:
      return {}
    default:
      return state
  }
}

//* User Register reducer
export const userRegisterReducer = (state = {}, action) => {
  switch (action.type) {
    case USER_CONSTANT_TYPES.USER_REGISTER_REQUEST:
      return { loading: true }
    case USER_CONSTANT_TYPES.USER_REGISTER_SUCCESS:
      return {
        loading: false,
        userInfo: action.payload,
      }
    case USER_CONSTANT_TYPES.USER_REGISTER_FAILED:
      return {
        loading: false,
        error: action.payload,
      }
    default:
      return state
  }
}
