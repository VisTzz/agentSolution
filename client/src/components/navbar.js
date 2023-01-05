import React, { useContext } from 'react';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import Button from 'react-bootstrap/Button';
import addresses from '../utils/const';
import { Context } from "../index";
import { observer } from 'mobx-react';

const NavBar = observer(() => {
  const { user } = useContext(Context);
  return (
    <Navbar bg="light" expand="lg">
      <Container>
        <Navbar.Brand>Учет страховок</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link href={addresses.HOME}>На главную</Nav.Link>
            <Nav.Link href={addresses.CONTRAGENTS}>Контрагенты</Nav.Link>
          </Nav>
        </Navbar.Collapse>
        {!user.isAuth ?
          <Nav className="me-auto">
            <Button variant="light" href={addresses.LOGIN}>Войти</Button>
          </Nav>
          :
          <Nav className="me-auto">
            <Button variant="light">Привет, {user.email}</Button>
            <Button variant="light" onClick = {() => user.setIsAuth(!user.isAuth)}>Выйти</Button>
          </Nav>
        }

      </Container>
    </Navbar>
  );
})

export default NavBar