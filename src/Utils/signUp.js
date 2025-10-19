import { apiInstance } from "./apiInstance"

export const signUp = async ({ url, data }) => {
    try {
        const response = await apiInstance.post(url, data)
        console.log("signup", response.data)
        return (response)
    } catch (error) {
        console.log(error.response.data.message)
        return (error)
    }
}