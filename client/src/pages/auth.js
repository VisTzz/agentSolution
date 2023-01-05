import React, { useEffect, useState } from 'react';
import { Button, Card, Container, Form } from 'react-bootstrap';
import { useContext } from "react";
import { Context } from "../index";
import { useParams } from 'react-router-dom';
import { login, registration } from '../http/userAPI';
import Alert from 'react-bootstrap/Alert';
import { observer } from 'mobx-react-lite';
const jwt = require('react-jwt')

export default observer (function Auth() {
  //const { user } = useContext(Context);
  const {user} = useContext(Context)
  const {token} = useContext(Context)

  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('');

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
      }
    }
    catch(e) {
      console.log(e)
      alert(e.response.data.message)
    }

  }

  return (
    <Container className='d-flex justify-content-center align-items-center'>
      <Card style={{ width: 500 }} className="text-center p-2">
        <Card.Header as="h5"> {user.isAuth ? 'Авторизация' : 'Регистрация'}</Card.Header>
        <Form>
          <Form.Group className="mb-3">
            <Form.Label>Email</Form.Label>
            <Form.Control
              onChange={(e) => setEmail(e.target.value)}
              value={email}
              type="email" placeholder="Введите почту" />
          </Form.Group>
          <Form.Group className="mb-3">
            <Form.Label>Пароль</Form.Label>
            <Form.Control
              onChange={(e) => setPassword(e.target.value)}
              value={password}
              type="password" placeholder="Введите пароль" />
          </Form.Group>
        </Form>
        <Button onClick={() => loginUser(email, password)}>Войти</Button>
      </Card>
    </Container>
  );
})