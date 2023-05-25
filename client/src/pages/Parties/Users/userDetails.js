import { observer } from 'mobx-react';
import React, { useEffect, useState, useContext } from 'react';
import { Button, Card, Container, Form, Row } from 'react-bootstrap';
import { useParams } from 'react-router-dom';
import SearchView from '../../../components/searchView';
import { getById, update } from '../../../http/userAPI';
import { getAllUsers } from './lib/userHelper';
import { Context } from "../../../index";
import * as contragentsApi from '../../../http/contragentsAPI';

export default observer(function UserDetails() {

  const params = useParams()
  const [details, setDetails] = useState({ body: {} });
  const [detailsContragent, setDetailsContragent] = useState({ body: {} });
  const [show, setShow] = useState(false)
  const { user } = useContext(Context);
  const { contragents } = useContext(Context);
  let context = [];

  useEffect(() => {
    let partyId = -1;
    async function getUserById(id) {
      const response = await getById(id)
      return response;
    }

    async function getContragent(partyId) {
      if (!partyId) return;
      const response = await contragentsApi.getById(partyId)
      return response;
    }

    getUserById(params.id).then(userData => {
      //const partyBody = data.body ? JSON.parse(data.body) : {};
      if (userData.partyId) {
        partyId = userData.partyId;
      }
      getContragent(partyId).then(contragentData => {
        user.setUser(Object.assign(
          user.user,
          {
            userData,
            partyBody: JSON.parse(contragentData.body)
          }
        ))
        console.log(user)
      })
    })


  }, [params])

  const updateUser = async (id, details) => {
    const partyId = details.body.id;
    const response = await update(id, { partyId })
    return response;
  }

  const getContragents = async () => {
    contragentsApi.getAll().then(data => {

      if (data && data.length) {

        context = data.map(x => {
          const body = JSON.parse(x.body)
          return (
            {
              id: x.id,
              firstname: body.firstname,
              lastname: body.lastname
            })
        })
      }
    }).finally(e => {
      contragents.setContragents(context)
    }

    )

  }

  const selectContragent = (id) => {
    const selectedC = contragents.data.filter(i => i.id === id)

    setDetails({
      body: {
        id: selectedC[0].id,
        firstname: selectedC[0].firstname,
        lastname: selectedC[0].lastname
      }
    })

    setShow(!show)
  }

  const searchParameters = {
    schema: {
      id: 'ИД',
      firstname: 'Имя',
      lastname: 'Фамилия',
    },
    link: true,
    context: contragents.data,
    handleClick: selectContragent,
    useEffectFn: getContragents
  }



  return (
    <Container className='d-flex'>
      <Card>
        <Card.Body>
          <Card.Title>User Detail</Card.Title>
          <Card.Text>
            <Form>
              <Row className="mb-3">
                <Form.Group className="mb-3 ml-3" style={{ width: 100 }}>
                  <Form.Label disabled>User id</Form.Label>
                  <Form.Control value={user.user.id} />
                </Form.Group>
                <Form.Group className="mb-3 ml-3" style={{ width: 150 }}>
                  <Form.Label disabled>Contragent id</Form.Label>
                  <Form.Control value={user.user.partyBody?.partyId} />
                </Form.Group>
                <Form.Group className="mb-3 ml-3" style={{ width: 200 }}>
                  <Form.Label>Имя</Form.Label>
                  <Form.Control
                    value={user.user.partyBody?.firstname}
                  />
                </Form.Group>
                <Form.Group style={{ width: 200 }}>
                  <Form.Label>Фамилия</Form.Label>
                  <Form.Control
                    value={user.user.partyBody?.lastname}
                  />

                </Form.Group>

              </Row>
              <Button variant="primary" type="submit" onClick={() => updateUser(params.id, details)}>Сохранить</Button>
            </Form>
            <Button variant="primary" type="submit" onClick={() => setShow(!show)}>Поиск</Button>
            {show ? <SearchView searchParameters={searchParameters}></SearchView> : <></>}
          </Card.Text>

        </Card.Body>
      </Card>
    </Container>
  );
})