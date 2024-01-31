import axios from "axios"
import { API_URL_CHATGPT } from "../../utils/apiURL";

// Content Generation
export const generateContentAPI = async (userPrompt) => {
    const response = await axios.post(
        `${API_URL_CHATGPT}/generate-content`,
        {
            prompt: userPrompt,
        },
        {
            withCredentials: true,
        }
    )
    return response?.data
}