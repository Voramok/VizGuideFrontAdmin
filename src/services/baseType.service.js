import axios from 'axios'

const URL = 'http://89.111.140.52:8081/api'

export const BaseTypeService = {

    async getAll() {
        const response = await axios.get(`${URL}/BaseType/GetAllBaseTypes`)
        return response.data
    },

    async getManyByName(name) {
        const response = await axios.get(`${URL}/BaseType/GetBaseTypesByName?Name=` + name)
        return response.data
    },

    async getById(id) {
        const response = await axios.get(`${URL}/BaseType/GetBaseTypeById?Id=` + id)
        return response.data
    },

    async create(data) {
        const response = await axios.post(`${URL}/BaseType/AddBaseType`, data)
        return response.data
    },

    async update(data) {
        const response = await axios.put(`${URL}/BaseType/UpdateBaseType`, data)
        return response.data
    },

    async delete(id) {
        const response = await axios.post(`${URL}/BaseType/DeleteBaseType?Id=` + id)
        return response.data
    }


}