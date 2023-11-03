import axios from 'axios'

const URL = 'http://89.111.140.52:8081/api'

export const PropertieService = {

    async getAll() {
        const response = await axios.get(`${URL}/Propertie/GetAllProperties`)
        return response.data
    },

    async getManyByName(name) {
        const response = await axios.get(`${URL}/Propertie/GetPropertiesByName?Name=` + name)
        return response.data
    },

    async getById(id) {
        const response = await axios.get(`${URL}/Propertie/GetPropertieById?Id=` + id)
        return response.data
    },

    async getManyByBaseTypeId(id) {
        const response = await axios.get(`${URL}/Propertie/GetPropertiesByBaseTypeId?Id=` + id)
        return response.data
    },

    async create(data) {
        const response = await axios.post(`${URL}/Propertie/AddPropertie`, data)
        return response.data
    },

    async update(data) {
        const response = await axios.put(`${URL}/Propertie/UpdatePropertie`, data)
        return response.data
    },

    async delete(id) {
        const response = await axios.post(`${URL}/Propertie/DeletePropertie?Id=` + id)
        return response.data
    }
}