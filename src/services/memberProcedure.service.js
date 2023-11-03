import axios from 'axios'

const URL = 'http://89.111.140.52:8081/api'

export const MemberProcedureService = {

    async getAll() {
        const response = await axios.get(`${URL}/MemberProcedure/GetAllMemberProcedures`)
        return response.data
    },

    async getManyByName(name) {
        const response = await axios.get(`${URL}/MemberProcedure/GetMemberProceduresByName?Name=` + name)
        return response.data
    },

    async getById(id) {
        const response = await axios.get(`${URL}/MemberProcedure/GetMemberProcedureById?Id=` + id)
        return response.data
    },

    async getManyByBaseTypeId(id) {
        const response = await axios.get(`${URL}/MemberProcedure/GetMemberProceduresByBaseTypeId?Id=` + id)
        return response.data
    },

    async create(data) {
        const response = await axios.post(`${URL}/MemberProcedure/AddMemberProcedure`, data)
        return response.data
    },

    async update(data) {
        const response = await axios.put(`${URL}/MemberProcedure/UpdateMemberProcedure`, data)
        return response.data
    },

    async delete(id) {
        const response = await axios.post(`${URL}/MemberProcedure/DeleteMemberProcedure?Id=` + id)
        return response.data
    }
}