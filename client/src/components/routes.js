import Contragents from '../pages/contragents';
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
  }
]
