import React, { useContext } from 'react';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import Button from 'react-bootstrap/Button';
import addresses from '../utils/const';
import { Context } from "../index";
import { observer } from 'mobx-react';
import { ListGroup, Form } from 'react-bootstrap';

const PartyDetails = observer(() => {
  const { user } = useContext(Context);
  return (
    <Form.Group className="mb-3 ml-3" style={{ width: 200 }}>
      <Form.Label>Имя</Form.Label>
      <Form.Control
        value={user.firstName}
      />
    </Form.Group>
  );
})

export default PartyDetails