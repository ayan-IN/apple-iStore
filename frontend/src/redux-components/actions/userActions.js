import axios from 'axios'
import { USER_CONSTANT_TYPES } from '../constants/userConstants'

//* Register action for user
export const register = (name, email, password) => async (dispatch) => {
  try {
    dispatch({
      type: USER_CONSTANT_TYPES.USER_REGISTER_REQUEST,
    })
    const config = {
      headers: {
        'Content-Type': 'application/json',
      },
    }
    const { data } = await axios.post(
      '/api/users',
      {
        name,
        email,
        password,
      },
      config
    )
    dispatch({
      type: USER_CONSTANT_TYPES.USER_REGISTER_SUCCESS,
      payload: data,
    })
    dispatch({
      type: USER_CONSTANT_TYPES.USER_LOGIN_SUCCESS,
      payload: data,
    })
  } catch (error) {
    dispatch({
      type: USER_CONSTANT_TYPES.USER_REGISTER_FAILED,
      payload:
        error.response && error.response.message
          ? error.message
          : error.response.data.message,
    })
  }
}

//* Login action for user
export const login = (email, password) => async (dispatch) => {
  try {
    dispatch({
      type: USER_CONSTANT_TYPES.USER_LOGIN_REQUEST,
    })
    const config = {
      headers: {
        'Content-Type': 'application/json',
      },
    }
    const { data } = await axios.post(
      '/api/users/login',
      { email, password },
      config
    )
    dispatch({
      type: USER_CONSTANT_TYPES.USER_LOGIN_SUCCESS,
      payload: data,
    })
  } catch (error) {
    dispatch({
      type: USER_CONSTANT_TYPES.USER_LOGIN_FAILED,
      payload:
        error.response && error.response.message
          ? error.message
          : error.response.data.message,
    })
  }
}

export const logout = () => (dispatch) => {
  dispatch({
    type: USER_CONSTANT_TYPES.USER_LOGOUT,
  })
}
export const resetUserDetails = () => (dispatch) => {
  dispatch({
    type: USER_CONSTANT_TYPES.USER_DETAILS_RESET
  })
}

export const resetUserUpdateDetails = () => (dispatch) => {
  dispatch({
    type: USER_CONSTANT_TYPES.USER_UPDATE_PROFILE_RESET,
  })
}
export const getUserDetails = (id) => async (dispatch, getState) => {
  try {
    dispatch({
      type: USER_CONSTANT_TYPES.USER_DETAILS_REQUEST,
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
    const { data } = await axios.get(`/api/users/${id}`, config)
    dispatch({
      type: USER_CONSTANT_TYPES.USER_DETAILS_SUCCESS,
      payload: data,
    })
  } catch (error) {
    dispatch({
      type: USER_CONSTANT_TYPES.USER_DETAILS_FAILED,
      payload:
        error.message && error.response.message
          ? error.message
          : error.response.data.message,
    })
  }
}

export const updateUserProfile = (user) => async (dispatch, getState) => {
  try {
    dispatch({
      type: USER_CONSTANT_TYPES.USER_UPDATE_PROFILE_REQUEST,
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
    const { data } = await axios.put(`/api/users/profile`, user, config)
    dispatch({
      type: USER_CONSTANT_TYPES.USER_UPDATE_PROFILE_SUCCESS,
      payload: data,
    })
  } catch (error) {
    dispatch({
      type: USER_CONSTANT_TYPES.USER_UPDATE_PROFILE_FAILED,
      payload:
        error.message && error.response.message
          ? error.message
          : error.response.data.message,
    })
  }
}
