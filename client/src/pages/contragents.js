import React, { useEffect } from 'react';
import { Button, Card, Table } from 'react-bootstrap';
import { useContext } from "react";
import { Context } from "../index";
import {  useNavigate } from 'react-router-dom';
import { getAll } from '../http/contragentsAPI';
import { observer } from 'mobx-react';


export default observer( function Contragents() {
  const { contragents } = useContext(Context);
  const navigate = useNavigate();
  useEffect( () => { getAllContragents().then(data => contragents.setContragents(data)) }, [])

  const getAllContragents = async () => {
    const response = await getAll()
    return response;
  }
  
  return (
    <Card>
      <Table striped bordered hover>
        <thead onClick={() => getAllContragents()}>
          <tr>
            <th>#</th>
            <th>First Name</th>
            <th>Last Name</th>
            <th>link</th>
          </tr>
        </thead>
        <tbody>
          { contragents.data.map(i => (
             <React.Fragment key={i.id}>
            <tr>
              <td><Button onClick={() => navigate(`${i.id}`)}>{i.id}</Button></td>
              <td>{i.firstName}</td>
              <td>{i.lastName}</td>
              <td>{i.link}</td>
            </tr>
            </React.Fragment>
          ))
          }
        </tbody>
      </Table>
    </Card>
  );
})
