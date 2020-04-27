// Axios
import axios from 'axios'

// Types
import { URL, LOGIN_SUCCESS, LOGIN_FAIL, LOGOUT_SUCCESS, REGISTER_SUCCESS, REGISTER_FAIL, REDO_REGISTER } from './types'

// Login 
export const login = (username, password) => dispatch => {
    const body = { username, password }

    axios.post(`${URL}/api/users/login`, body)
    .then(res => dispatch({ type: LOGIN_SUCCESS, payload: {user: res.data } }))
    .catch(err => dispatch({type: LOGIN_FAIL}))
}

// Register
export const register = (username, email, password, text) => dispatch => {
    const body = { username, email, password }
    console.log(body)
    
    axios.post(`${URL}/api/users/register`, body)
    .then(res => dispatch({ type: REGISTER_SUCCESS, payload: { user: res.data } }))
    .catch(err => dispatch({ type: REGISTER_FAIL }))
}

// Logout
export const logout = () => dispatch => {
    dispatch({type: LOGOUT_SUCCESS})
}

// Re-Register
export const redoRegister = () => dispatch => {
    dispatch({ type: REDO_REGISTER })
}