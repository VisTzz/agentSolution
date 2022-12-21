import React from 'react';
import { Button, Card, Container, Form } from 'react-bootstrap';
import { useContext } from "react";
import { Context } from "../index";

export default function Auth() {
  const { user } = useContext(Context);

  return (
    <Container className='d-flex justify-content-center align-items-center'>
      <Card style={{width: 500}} className="text-center p-2">
      <Card.Header as="h5"> {user.isAuth ? 'Авторизация' : 'Регистрация'}</Card.Header>
        <Form>
          <Form.Group className="mb-3">
            <Form.Label>Email</Form.Label>
            <Form.Control type="email" placeholder="Введите почту" />
          </Form.Group>
          <Form.Group className="mb-3">
            <Form.Label>Пароль</Form.Label>
            <Form.Control type="password" placeholder="Введите пароль" />
          </Form.Group>
        </Form>
        <Button onClick={() => { return user.setIsAuth(true)} }>Войти</Button>
      </Card>
    </Container>
  );
}