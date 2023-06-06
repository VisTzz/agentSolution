import React, { useEffect, useState } from 'react';
import { Button, Card, Form, Modal, Table, Row, Col } from 'react-bootstrap';
import { useContext } from "react";
import { Context } from "../index";
import { useNavigate } from 'react-router-dom';
import { getAll, create } from '../http/contragentsAPI';
import { observer } from 'mobx-react';
import { useStore } from '../store/rootStoreContext';


export default observer(function Contragents() {
  const { contragents } = useStore();
  const navigate = useNavigate();
  const [show, setShow] = useState(false)
  const [contragent, setContragent] = useState({
    firstname: '',
    lastname: '',
    middlename: ''
  })

  const handleShow = () => setShow(true)
  const handleClose = () => setShow(false)

  useEffect(() => {
    getAllContragents().then(data => {
      contragents.setContragents(data)
    }
    )
  }, [])

  const getAllContragents = async () => {
    const response = await getAll()

    response.forEach(x => {
      x.body = JSON.parse(x.body)
    })
    return response;
  }

  const createContragent = async (body) => {
    const response = await create(body)
    return response;
  }

  return (
    <Card>
      <Row>
        <Col sm={4}>
          <Button onClick={handleShow}>Создать</Button>
        </Col>
        <Col sm={8}></Col>
      </Row>
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
                <td>{i.body.firstname}</td>
                <td>{i.body.lastname}</td>
                <td>{i.body.link}</td>
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
                onChange={(e) => setContragent({
                  ...contragent,
                  firstname: e.target.value
                })}
                value={contragent.firstname} />
            </Form.Group>,
            <Form.Group className="mb-3">
              <Form.Label>Фамилия</Form.Label>
              <Form.Control
                onChange={(e) => setContragent({
                  ...contragent,
                  lastname: e.target.value
                })}
                value={contragent.lastname} />
            </Form.Group>,
            <Form.Group className="mb-3">
              <Form.Label>Отчество</Form.Label>
              <Form.Control
                onChange={(e) => setContragent({
                  ...contragent,
                  middlename: e.target.value
                })}
                value={contragent.middlename} />
            </Form.Group>
          </Form>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Закрыть
          </Button>
          <Button variant="primary" onClick={() => createContragent(contragent)}>
            Сохранить
          </Button>
        </Modal.Footer>
      </Modal>
    </Card>
  );
})
