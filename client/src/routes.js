import React from "react";
import {
  Route,
  Routes
} from "react-router-dom";
import Contragents from "./pages/contragents"
import Home from "./pages/home"
import {publicRoutes, privateRoutes} from "./components/routes"
import { useContext } from "react";
import { Context } from ".";


const Routess = () => {
  
  const { user } = useContext(Context)
  
  return (
    <Routes>
      { publicRoutes.map(i => <Route key={ i.path } exact path={ i.path } element={<i.element/>} />) }
      { user.isAuth && privateRoutes.map(i => <Route key={ i.path } exact path={ i.path } element={<i.element/>} />) }
    </Routes>
  );
}

export default Routess