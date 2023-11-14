import { $host } from '.';

const getAll = async () => {
    const { data } = await $host.get('/api/contragents/getAll')
    return data
}

const getById = async (id: number) => {
    const { data } = await $host.get('/api/contragents/get/'+ id)
    return data
}

const update = async (id: number, body: object) => {
    const { data } = await $host.post('/api/contragents/get/'+ id, body)
    return data
}

const create = async (body: object) => {
    const { data } = await $host.post('/api/contragents/create', body)
    return data
}

export {
    getAll,
    getById,
    update,
    create
}