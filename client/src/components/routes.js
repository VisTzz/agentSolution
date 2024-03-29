import Contragents from '../pages/contragents';
import Users from '../pages/Parties/Users/usersSearchView';
import User from '../pages/Parties/Users/userDetails';
import Home from '../pages/home';
import Auth from '../pages/auth';
import addresses from '../utils/const';
import ContragentsDetail from '../pages/contragentsDetail';

export const publicRoutes = [
  {
    path: addresses.HOME,
    element: Home
  },
  {
    path: addresses.LOGIN,
    element: Auth
  }
]

export const privateRoutes = [
  {
    path: addresses.CONTRAGENTS,
    element: Contragents
  },
  {
    path: addresses.CONTRAGENTS + '/:id',
    element: ContragentsDetail
  },
  {
    path: addresses.USERS,
    element: Users
  },
  {
    path: addresses.USER  + '/:id',
    element: User
  },
]
