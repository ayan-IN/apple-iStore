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
    case USER_CONSTANT_TYPES.USER_LOGOUT:
      return {}
    default:
      return state
  }
}

// User details reducer
export const userDetailsReducer = (state = { user: {} }, action) => {
  switch (action.type) {
    case USER_CONSTANT_TYPES.USER_DETAILS_REQUEST:
      return { ...state, loading: true }
    case USER_CONSTANT_TYPES.USER_DETAILS_SUCCESS:
      return {
        loading: false,
        user: action.payload,
      }
    case USER_CONSTANT_TYPES.USER_DETAILS_FAILED:
      return {
        loading: false,
        error: action.payload,
      }
    case USER_CONSTANT_TYPES.USER_DETAILS_RESET:
      return {
        user: {},
      }
    case USER_CONSTANT_TYPES.USER_LOGOUT:
      return {
        user: {},
      }
    default:
      return state
  }
}

// User update reducer
export const userUpdateProfileReducer = (state = {}, action) => {
  switch (action.type) {
    case USER_CONSTANT_TYPES.USER_UPDATE_PROFILE_REQUEST:
      return {
        ...state,
        loading: true,
      }
    case USER_CONSTANT_TYPES.USER_UPDATE_PROFILE_SUCCESS:
      return {
        loading: false,
        success: true,
        userInfo: action.payload,
      }
    case USER_CONSTANT_TYPES.USER_UPDATE_PROFILE_FAILED:
      return {
        loading: false,
        error: action.payload,
      }
    case USER_CONSTANT_TYPES.USER_UPDATE_PROFILE_RESET:
      return {}
    case USER_CONSTANT_TYPES.USER_LOGOUT:
      return {}
    default:
      return state
  }
}

//! ADMIN

export const userListReducer = (state = { users: [] }, action) => {
  switch (action.type) {
    case USER_CONSTANT_TYPES.USER_LIST_REQUEST:
      return {
        loading: true,
      }
    case USER_CONSTANT_TYPES.USER_LIST_SUCCESS:
      return {
        loading: false,
        users: action.payload,
      }
    case USER_CONSTANT_TYPES.USER_LIST_FAILED:
      return {
        loading: false,
        error: action.payload,
      }
    case USER_CONSTANT_TYPES.USER_LIST_RESET:
      return {
        users: [],
      }
    default:
      return state
  }
}

export const userDeleteReducer = (state = {}, action) => {
  switch (action.type) {
    case USER_CONSTANT_TYPES.USER_DELETE_REQUEST:
      return {
        loading: true,
      }
    case USER_CONSTANT_TYPES.USER_DELETE_SUCCESS:
      return {
        loading: false,
        success: true,
      }
    case USER_CONSTANT_TYPES.USER_DELETE_FAILED:
      return {
        loading: false,
        error: action.payload,
      }
    default:
      return state
  }
}

export const userUpdateReducer = (state = { user: {} }, action) => {
  switch (action.type) {
    case USER_CONSTANT_TYPES.USER_UPDATE_REQUEST:
      return {
        loading: true,
      }
    case USER_CONSTANT_TYPES.USER_UPDATE_SUCCESS:
      return {
        loading: false,
        success: true,
      }
    case USER_CONSTANT_TYPES.USER_UPDATE_FAILED:
      return {
        loading: false,
        error: action.payload,
      }
    case USER_CONSTANT_TYPES.USER_UPDATE_RESET:
      return {
        user: {},
      }
    default:
      return state
  }
}
