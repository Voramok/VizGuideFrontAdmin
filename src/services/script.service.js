import axios from 'axios'

const URL = 'http://89.111.140.52:8081/api'

export const ScriptService = {

    async getAll() {
        const response = await axios.get(`${URL}/Script/GetAllScripts`)
        return response.data
    },

    async getManyByName(name) {
        const response = await axios.get(`${URL}/Script/GetScriptsByName?Name=` + name)
        return response.data
    },

    async getById(id) {
        const response = await axios.get(`${URL}/Script/GetScriptById?Id=` + id)
        return response.data
    },

    async create(data) {
        const response = await axios.post(`${URL}/Script/AddScript`, data)
        return response.data
    },

    async update(data) {
        const response = await axios.put(`${URL}/Script/UpdateScript`, data)
        return response.data
    },

    async delete(id) {
        const response = await axios.post(`${URL}/Script/DeleteScript?Id=` + id)
        return response.data
    }


}