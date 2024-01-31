import axios from "axios" 
import { API_URL_USER } from "../../utils/apiURL";

// Registration
export const registerAPI = async (userData) => {
    const response = await axios.post(
        `${API_URL_USER}/register`,
        {
            email: userData?.email,
            password: userData?.password,
            username: userData?.username,
        },
        {
            withCredentials: true,
        }
    )
    return response?.data
}

// Login
export const loginAPI = async (userData) => {
    const response = await axios.post(
        `${API_URL_USER}/login`,
        {
            email: userData?.email,
            password: userData?.password,
        },
        {
            withCredentials: true,
        }
    )
    return response?.data
}

// Check Auth
export const checkUserAuthStatusAPI = async () => {
    const response = await axios.get(
        `${API_URL_USER}/auth/check`,
        {
            withCredentials: true,
        }
    )
    return response?.data
}

// Logout
export const logoutAPI = async () => {
    const response = await axios.post(
        `${API_URL_USER}/logout`,
        {},
        {
            withCredentials: true,
        }
    )
    return response?.data
}

// Profile
export const getUserProfileAPI = async () => {
    const response = await axios.get(
        `${API_URL_USER}/profile`,
        {
            withCredentials: true,
        }
    )
    return response?.data
}