import React, { useEffect, useState } from 'react';
import { Button, Card, Form, Modal, Table } from 'react-bootstrap';
import { useContext } from "react";
import { Context } from "../index";
import { useNavigate } from 'react-router-dom';
import { getAll, create } from '../http/contragentsAPI';
import { observer } from 'mobx-react';


export default observer(function Contragents() {
  const { contragents } = useContext(Context);
  const navigate = useNavigate();
  const [show, setShow] = useState(false)
  const [name, setName] = useState('')

  const handleShow = () => setShow(true)
  const handleClose = () => setShow(false)

  useEffect(() => { getAllContragents().then(data => contragents.setContragents(data)) }, [])

  const getAllContragents = async () => {
    const response = await getAll()
    return response;
  }

  const createContragent = async (body) => {
    const response = await create(body)
    return response;
  }

  return (
    <Card>
      <Button onClick={handleShow}>Создать</Button>
      <Table striped bordered hover>
        <thead>
          <tr>
            <th>#</th>
            <th>First Name</th>
            <th>Last Name</th>
            <th>link</th>
          </tr>
        </thead>
        <tbody>
          {contragents.data.map(i => (
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

      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Создать контрагента</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Form>
            <Form.Group className="mb-3">
              <Form.Label>Имя</Form.Label>
              <Form.Control
                onChange={(e) => setName(e.target.value)}
                value={name} />
            </Form.Group>
          </Form>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Закрыть
          </Button>
          <Button variant="primary" onClick ={ () => createContragent({firstName: name})}>
            Сохранить
          </Button>
        </Modal.Footer>
      </Modal>
    </Card>
  );
})
