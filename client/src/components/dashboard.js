import React, { useContext } from 'react';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import Button from 'react-bootstrap/Button';
import addresses from '../utils/const';
import { Context } from "../index";
import { observer } from 'mobx-react';
import { ListGroup } from 'react-bootstrap';

const Dashboard = observer(() => {
  const { user } = useContext(Context);

  return (
    <ListGroup className='col-md-12 d-none d-md-block bg-light sidebar'>
      <ListGroup.Item>Cras justo odio</ListGroup.Item>
      <ListGroup.Item>Dapibus ac facilisis in</ListGroup.Item>
      <ListGroup.Item>Morbi leo risus</ListGroup.Item>
      <ListGroup.Item>Porta ac consectetur ac</ListGroup.Item>
      <ListGroup.Item>Vestibulum at eros</ListGroup.Item>
    </ListGroup>
  );
})

export default Dashboard