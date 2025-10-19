import { apiInstance } from "./apiInstance"

export const signIn = async ({ url, data }) => {
    try {
        const login = await apiInstance.post(url, data)
        return (login)
    } catch (error) {
        console.log(error)
        return (error)
    }
}