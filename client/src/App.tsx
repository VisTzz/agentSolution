import { observer } from "mobx-react";
import React, { useEffect, useState } from "react";
import {
  BrowserRouter,
} from "react-router-dom";
import NavBar from "./components/navbar";
import Routess from './routes'
import { checkAuth } from "./http/userAPI";
import { Spinner } from "react-bootstrap";
import { useStore } from "./store/rootStoreContext";


const App = observer( () => {
  const { user } = useStore()
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
