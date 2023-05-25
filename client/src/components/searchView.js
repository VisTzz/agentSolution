import React, { useContext, useEffect, useState } from 'react';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import Button from 'react-bootstrap/Button';
import addresses from '../utils/const';
import { Context } from "../index";
import { observer } from 'mobx-react';
import { ListGroup, Form, Card } from 'react-bootstrap';
import Table from 'react-bootstrap/Table';

const SearchView = observer((props) => {
  const { schema, context, link, handleClick, useEffectFn } = props.searchParameters;
  const children = props.children;

  if (useEffectFn) {
    useEffect(() => {
      useEffectFn()
    }, [])
  }

  function DefaultTable() {
    return (
      <Table striped bordered hover>
      <thead>
        <tr>
          {Object.values(schema).map(x => <th>{x}</th>)}
        </tr>
      </thead>
      <tbody>
        {
          context && context.length && context.map((x) => {
            return (

              <tr onClick={() => handleClick(x.id)}>
                {
                  Object.keys(schema).map(y => <td>{x[y]}</td>)
                }
              </tr>

            )
          })
        }
      </tbody>
    </Table>
    )
  }
  
  return (
    <Card>
      {children}
      <DefaultTable/>
    </Card>
  );

  
} 
)



export default SearchView