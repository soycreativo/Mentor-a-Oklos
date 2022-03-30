import ACTIONS from './index'
import axios from 'axios'

const baseUrl = 'https://fathomless-bastion-33135.herokuapp.com'

export const dispatchLogin = () => {
    return {
        type: ACTIONS.LOGIN
    }
}

export const fetchUser = async (token) => {
    const res = await axios.get(`${baseUrl}/api/info`, {
        headers: {Authorization: token}
    })
    return res
}

export const dispatchGetUser = (res) => {
    return {
        type: ACTIONS.GET_USER,
        payload: {
            user: res.data,
            isAdmin: res.data.role === 9 ? true : false,
            isStudent: res.data.role === 1 ? true : false
        }
    }
}