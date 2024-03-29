import React, { useEffect, useState } from 'react';
import { Button, Card, Container, Form, Row, Col, Checkbox } from 'react-bootstrap';
import { useContext } from "react";
import { Context } from "../index";
import { Link, Navigate, useParams } from 'react-router-dom';
import { login, registration } from '../http/userAPI';
import Alert from 'react-bootstrap/Alert';
import { observer } from 'mobx-react-lite';
import { useNavigate } from 'react-router-dom';
import { useStore } from '../store/rootStoreContext';
const jwt = require('react-jwt')

export default observer(function Auth() {
  //const { user } = useContext(Context);
  const { user } = useStore()
  const { token } = useStore()
  const navigate = useNavigate();
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('');
  const [isRegistration, setRegistration] = useState(false)

  const loginUser = async (email, password) => {
    try {
      const response = await login({ email, password })
      if (response.token) {
        const decode = jwt.decodeToken(response.token)
        user.setUser({
          email: decode.email,
          role: decode.role
        })
        user.setIsAuth(true);
        token.setToken(response.token)
        navigate('/home')
      }
    }
    catch (e) {
      alert(e.response.data.message)
    }
  }

  const registrationUser = async (email, password) => {
    try {
      const response = await registration({ email, password })
      if (response.token) {
        const decode = jwt.decodeToken(response.token)
        user.setUser({
          email: decode.email,
          role: decode.role
        })
        user.setIsAuth(true);
        token.setToken(response.token)
        navigate('/home')
      }
    }
    catch (e) {
      alert(e.response.data.message)
    }
  }

  return (
    <Container className='d-flex justify-content-center align-items-center'>
      <Card style={{ width: 500 }} className="text-center p-2">
        <Card.Header as="h5"> {isRegistration ? 'Регистрация' : 'Авторизация'}</Card.Header>
        <Form>
          <Form.Group className="mb-4">
            <Form.Control
              onChange={(e) => setEmail(e.target.value)}
              value={email}
              type="email" placeholder="Введите почту" />
          </Form.Group>
          <Form.Group className="mb-3">
            <Form.Control
              onChange={(e) => setPassword(e.target.value)}
              value={password}
              type="password" placeholder="Введите пароль" />
          </Form.Group>
          <Row className='mb-4'>
            <Col className='d-flex justify-content-center'>
              <Form.Check type="checkbox" label="Запомнить меня" defaultChecked />
            </Col>
            <Col>
              <a href='#!'>Не забывай пароль, сынок</a>
            </Col>
          </Row>
        </Form>
        {isRegistration ?
          <Button onClick={() => registrationUser(email, password)}>Регистрация</Button> :
          <Button onClick={() => loginUser(email, password)}>Войти</Button>}

        <Link className='mg-l' onClick={() => setRegistration(true)}>Нет учетной записи? Регистрация</Link>
      </Card>
    </Container>
  );
})