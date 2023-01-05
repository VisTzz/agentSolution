import { $authHost, $host } from '.';
const jwt = require('react-jwt')

const login = async (body) => {
    const { data } = await $host.post('/api/user/login', body)
    return data
}

const registration = async (body) => {
    const { data } = await $host.post('/api/user/registration', body)
    return data
}

const checkAuth = async () => {
    const { data } = await $authHost.get('/api/user/auth')
    sessionStorage.setItem('token', data.token)

    return jwt.decodeToken(data.token)
}

export {
    login,
    registration,
    checkAuth
}