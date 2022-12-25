import { $host } from '.';

const login = async (body) => {
    const { data } = await $host.post('/api/user/login', body)
    return data
}

export {
    login
}