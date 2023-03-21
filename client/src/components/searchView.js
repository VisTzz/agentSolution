import React, { useContext, useEffect, useState } from 'react';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import Button from 'react-bootstrap/Button';
import addresses from '../utils/const';
import { Context } from "../index";
import { observer } from 'mobx-react';
import { ListGroup, Form } from 'react-bootstrap';
import Table from 'react-bootstrap/Table';

const SearchView = observer((props) => {
  const { schema, context } = props.searchParameters;
  //const contextStore = useContext(Context)[contextName];
  const [params, setParams] = useState({ body: {} });
  //console.log(`store: ${Object.values(contextStore.users)}`)
  return (
    <Table striped bordered hover>
      <thead>
        <tr>
          {Object.values(schema).map(x => <th>{x}</th>)}
        </tr>
      </thead>
      <tbody>
        {
          context.length && context.map((x) => {
            return (
              <tr>
                {
                  Object.keys(schema).map(y => <td>{x[y]}</td>)
                }
              </tr>
            )

          })
        }
        <tr>
          { }
        </tr>
      </tbody>
    </Table>
  );
})

export default SearchView