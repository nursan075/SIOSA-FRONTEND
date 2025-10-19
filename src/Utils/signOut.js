import { toast } from "react-toastify"
import { apiInstance } from "./apiInstance"

export const SignOut = async ({ url, data }) => {
    console.log(data)
    try {
        const response = await apiInstance.post(url, { data })
        console.log(response)
        return (response)
    } catch (error) {
        console.log(error)
        toast.error(error.message)
    }
}