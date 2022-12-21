import { $host } from '.';

const getAll = async () => {
    const { data } = await $host.get('/api/contragents/getAll')
    return data
}

const getById = async (id) => {
    const { data } = await $host.get('/api/contragents/get/'+ id)
    console.log(data)
    return data
}

const update = async (id, body) => {
    const { data } = await $host.post('/api/contragents/get/'+ id, body)
    return data
}

export {
    getAll,
    getById,
    update
}