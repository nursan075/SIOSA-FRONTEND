import { apiInstance } from "./apiInstance"

export const getData = async ({ url }) => {
    try {
        const response = await apiInstance.get(url)
        return (response.data.data)
    } catch (error) {
        console.log(error)
    }
}