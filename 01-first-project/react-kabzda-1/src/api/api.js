import axios from 'axios'

const instance = axios.create({
    withCredentials: true,
    baseURL: 'https://social-network.samuraijs.com/api/1.0/',
    headers: { 'API-KEY': '819d5caa-19f1-49b9-810e-6408840f0388' }
})

export const usersAPI = {

    getUsers(currentPage = 1, pageSize = 10) {
        return instance.get(`users?page=${currentPage}&count=${pageSize}`)
            .then(response => {
                return response.data
            })
    }
}


export const getUsers2 = (currentPage = 1, pageSize = 10) => {

    return instance.get(`follow?page=${currentPage}&count=${pageSize}`)
        .then(response => {

        }).then(response => {
            return response.data
        })
}
