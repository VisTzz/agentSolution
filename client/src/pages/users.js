import React, { useEffect, useState } from 'react';
import { Button, Card, Form, Modal, Table, Row, Col } from 'react-bootstrap';
import { useContext } from "react";
import { Context } from "../index";
import { useNavigate } from 'react-router-dom';
import { getAll } from '../http/userAPI';
import { observer } from 'mobx-react';
import SearchView from '../components/searchView'


export default observer(function Users() {
  const { user } = useContext(Context);
  //const [users, setUsers] = useState({ body: {} });
  const getAllUsers = async () => {
    const response = await getAll()
    response.forEach(x => {
      x.body = {
        id: x.id,
        role: x.role,
        email: x.email,
        partyId: x.partyId
      }
    })
    return response;
  }

  const searchParameters = {
    schema: {
      id: 'ИД',
      email: 'Email'
    },
    context: user.users,
  }

  useEffect(() => {
    getAllUsers().then(data => {
      console.log(data)
      user.setUsers(data)
      console.log(user)
    }
    )
  }, [])



  return (
    <Card>
      <SearchView searchParameters={searchParameters}>
      </SearchView>
    </Card>
  );
})
