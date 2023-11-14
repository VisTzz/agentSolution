import React from "react";
import {
  Route,
  Routes
} from "react-router-dom";
import {publicRoutes, privateRoutes} from "./components/routes"
import { useStore } from "./store/rootStoreContext";


const Routess = () => {
  
  const { user } = useStore()
  return (
    <Routes>
      { publicRoutes.map(i => <Route key={ i.path } path={ i.path } element={<i.element/>} />) }
      { user.isAuth && privateRoutes.map(i => <Route key={ i.path } path={ i.path } element={<i.element/>} />) }
    </Routes>
  );
}

export default Routess