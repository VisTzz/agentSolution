import axios from 'axios';

interface IAuthConfig {
    headers: {
        authorization: string;
    }
}

const $host = axios.create({
    baseURL: 'http://localhost:5000/'
})

const $authHost = axios.create({
    baseURL: 'http://localhost:5000/'
})

const authInterceptor = (config: any) => {
    config.headers.authorization = `Bearer ${sessionStorage.getItem('token')}`
    return config
}

$authHost.interceptors.request.use(authInterceptor);

export {
    $host,
    $authHost
}