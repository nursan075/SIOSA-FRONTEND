import { toast } from "react-toastify"
import { apiInstance, apiInstanceMulti } from "./apiInstance"

export const addData = async ({ url, data }) => {
    console.log("data:", data)
    try {
        const response = await apiInstance.post(url, data)
        console.log(response)
        toast.success(response.data.message)
        return (response)
    } catch (error) {
        console.log(error)
        toast.error(error.response.data.message)
    }
}

export const addDataMulti = async ({ url, data }) => {
    console.log("data:", data)
    try {
        const response = await apiInstanceMulti.post(url, data)
        console.log(response)
        toast.success(response.data.message)
        return (response)
    } catch (error) {
        console.log(error)
        toast.error(error.response.data.message)
    }
}