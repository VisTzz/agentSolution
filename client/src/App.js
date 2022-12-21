import React from "react";
import {
  BrowserRouter,
} from "react-router-dom";
import Dashboard from "./components/dashboard";
import NavBar from "./components/navbar";
import Routess from './routes'


const App = () => {
  return (
    <BrowserRouter>
      <NavBar></NavBar>
      <Dashboard>
      </Dashboard>
      <Routess />
    </BrowserRouter>
  );
}

export default App;
