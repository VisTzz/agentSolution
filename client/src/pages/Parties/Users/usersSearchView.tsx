import React, { useEffect, useState } from 'react';
import { Button, Card, Form, Modal, Table, Row, Col } from 'react-bootstrap';
import { useContext } from "react";
import { useNavigate } from 'react-router-dom';
import { getAll } from '../../../http/userAPI';
import { observer } from 'mobx-react';
import SearchView from '../../../components/searchView'
import { getAllUsers } from './lib/userHelper';
import { useStore } from '../../../store/rootStoreContext';



export default observer(function Users() {
  const { user } = useStore();
  const navigate = useNavigate();
  //const [users, setUsers] = useState({ body: {} });

  const searchParameters = {
    schema: {
      id: 'ИД',
      email: 'Email'
    },
    link: true,
    context: user.users,
    handleClick: handleNavigate
  }

  useEffect(() => {
    getAllUsers().then(data => {
      user.setUsers(data)
    }
    )
  }, [])

  function handleNavigate(id) {
    navigate(`../user/${id}`)
  }


  return (
    <Card>
      <Button>Жмибиби</Button>
      <SearchView searchParameters={searchParameters}>
      </SearchView>

    </Card>
  );

})
