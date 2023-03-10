import React from "react";
import {
  Route,
  Routes
} from "react-router-dom";
import Contragents from "./pages/contragents"
import Home from "./pages/home"
import {publicRoutes, privateRoutes} from "./components/routes"
import { useContext } from "react";
import { Context } from "./index";


const Routess = () => {
  
  const { user } = useContext(Context)
  console.log(user.isAuth + ' '+ user.user.email)
  console.log(user)
  return (
    <Routes>
      { publicRoutes.map(i => <Route key={ i.path } exact path={ i.path } element={<i.element/>} />) }
      { user.isAuth && privateRoutes.map(i => <Route key={ i.path } exact path={ i.path } element={<i.element/>} />) }
    </Routes>
  );
}

export default Routess