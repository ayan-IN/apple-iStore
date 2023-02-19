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
  localStorage.removeItem('userInfo')
  dispatch({
    type: USER_CONSTANT_TYPES.USER_LOGOUT,
  })
}
