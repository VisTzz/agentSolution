import React, { useState } from 'react';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import Button from 'react-bootstrap/Button';
import addresses from '../utils/const';
import { Context } from '..';
import { observer } from 'mobx-react';
import { ListGroup } from 'react-bootstrap';

const Alert = observer(() => {
  const [show, setShow] = useState(false)


    if (show) {
    return (
      <Alert key={'warning'} variant={'warning'}>
         alert—check it out!
      </Alert>
    )
    }
})

export default Alert