import { getAll, getById,update } from '../../../../http/userAPI';

const getAllUsers = async () => {
  const response = await getAll()
  response.forEach(x => {
    x.body = {
      id: x.id,
      role: x.role,
      email: x.email,
      partyId: x.partyId
    }
  })
  return response;
}

export {
  getAllUsers
}