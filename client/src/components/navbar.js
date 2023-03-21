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

  const logOut = () => {
    user.setUser('');
    user.setIsAuth(false);
    sessionStorage.removeItem('token');
  }

  return (
    <Navbar bg="light" expand="lg">
      <Container>
        <Navbar.Brand>Учет страховок</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link href={addresses.HOME}>На главную</Nav.Link>
            <Nav.Link href={addresses.CONTRAGENTS}>Контрагенты</Nav.Link>
            <Nav.Link href={addresses.USERS}>Пользователи</Nav.Link>
          </Nav>
        </Navbar.Collapse>
        {!user.isAuth ?
          <Nav className="me-auto">
            <Button variant="light" href={addresses.LOGIN}>Войти</Button>
          </Nav>
          :
          <Nav className="me-auto">
            <Button variant="light">Привет, {user.user.email}</Button>
            <Button variant="light" onClick = {() => logOut()}>Выйти</Button>
          </Nav>
        }

      </Container>
    </Navbar>
  );
})

export default NavBar