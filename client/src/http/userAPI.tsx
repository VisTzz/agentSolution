import { $authHost, $host } from '.';

const jwt = require('react-jwt')


const login = async (body: object) => {
    const { data } = await $host.post('/api/user/login', body)
    return data
}

const registration = async (body: object) => {
    const { data } = await $host.post('/api/user/registration', body)
    return data
}

const checkAuth = async () => {
    const { data } = await $authHost.get('/api/user/auth')
    sessionStorage.setItem('token', JSON.stringify(data.token))

    return jwt.decodeToken(data.token)
}

const getAll = async () => {
    const { data } = await $host.get('/api/user/getAll')
    return data
}

const getById = async (id: number) => {
    const { data } = await $host.get('/api/user/get/'+ id)
    return data
}

const update = async (id: number, body: object) => {
    const { data } = await $host.post('/api/user/'+ id, body)
    return data
}

export {
    login,
    registration,
    checkAuth,
    getAll,
    getById,
    update
}