import { observer } from "mobx-react";
import React, { useContext, useEffect, useState } from "react";
import {
  BrowserRouter,
} from "react-router-dom";
import Alert from "./components/alert";
import Dashboard from "./components/dashboard";
import NavBar from "./components/navbar";
import Routess from './routes'
import { Context } from "./index";
import { checkAuth } from "./http/userAPI";
import { Spinner } from "react-bootstrap";


const App = observer( () => {
  const { user } = useContext(Context)
  const [loading, setLoading] = useState(true)
  
  useEffect(() => {
    checkAuth().then(data => {
      user.setUser({email: data.email, role: data.role})
      user.setIsAuth(true)
    }).finally(
      () => setLoading(false)
    )
  }, [])

  if (loading) {
    return <Spinner animation={"grow"}></Spinner>
  }

  return (
    <BrowserRouter>
      <NavBar></NavBar>
      <Routess />
    </BrowserRouter>
  );
})

export default App;
