import { observer } from "mobx-react";
import React, { useContext, useEffect } from "react";
import {
  BrowserRouter,
} from "react-router-dom";
import Alert from "./components/alert";
import Dashboard from "./components/dashboard";
import NavBar from "./components/navbar";
import Routess from './routes'
import { Context } from "./index";
import { checkAuth } from "./http/userAPI";


const App = observer( () => {
  const {user} = useContext(Context)
  
  useEffect(() => {
    checkAuth().then(data => {
      user.setUser({email: data.email, role: data.role})
      user.setIsAuth(true)
    })
  })

  return (
    <BrowserRouter>
      <NavBar></NavBar>
      <Dashboard>
      </Dashboard>
      <Routess />
    </BrowserRouter>
  );
})

export default App;
