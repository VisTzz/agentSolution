import React, { useEffect, useState } from 'react';
import { Button, Card, Container, Form } from 'react-bootstrap';
import { useContext } from "react";
import { Context } from "../index";
import { useParams } from 'react-router-dom';
import { login } from '../http/userAPI';
const jwt = require('react-jwt')

export default function Auth() {
  //const { user } = useContext(Context);
  const [user, setUser] = useState({ id: '', role: '', email: '', password: '', isAuth: false })
  const [isAuth, setIsAuth] = useState(false)

  const loginUser = async (email, password) => {
    const response = await login({ email, password })
    if (response.token) {
      const decode = jwt.decodeToken(response.token)
      setUser({
        email: decode.email,
        role: decode.role,
        id: decode.id,
        isAuth: true
      })
      
    }
    console.log(user)
    return response;
  }

  return (
    <Container className='d-flex justify-content-center align-items-center'>
      <Card style={{ width: 500 }} className="text-center p-2">
        <Card.Header as="h5"> {user.isAuth ? 'Авторизация' : 'Регистрация'}</Card.Header>
        <Form>
          <Form.Group className="mb-3">
            <Form.Label>Email</Form.Label>
            <Form.Control
              onChange={(e) => setUser({
                email: e.target.value,
                password: user.password
              })}
              value={user.email}
              type="email" placeholder="Введите почту" />
          </Form.Group>
          <Form.Group className="mb-3">
            <Form.Label>Пароль</Form.Label>
            <Form.Control
              onChange={(e) => setUser({
                email: user.email,
                password: e.target.value
              })}
              value={user.password}
              type="password" placeholder="Введите пароль" />
          </Form.Group>
        </Form>
        <Button onClick={() => loginUser(user.email, user.password)}>Войти</Button>
      </Card>
    </Container>
  );
}