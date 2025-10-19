import { toast } from "react-toastify"
import { apiInstance, apiInstanceMulti } from "./apiInstance"

export const updateData = async ({ url, data }) => {
    try {
        const update = await apiInstance.patch(url, data)
        toast.success(update.data.message)
        return (update)
    } catch (error) {
        console.log(error)
    }
}

export const updateDataMulti = async ({ url, data }) => {
    try {
        const response = await apiInstanceMulti.patch(url, data)
        toast.success(response.data.message)
        return (response)
    } catch (error) {
        toast.error(error.response.data.message)
        console.log(error)
    }
}