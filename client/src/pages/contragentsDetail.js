import { observer } from 'mobx-react';
import React, { useEffect, useState } from 'react';
import { Button, Card, Container, Form, Row } from 'react-bootstrap';
import { useParams } from 'react-router-dom';
import { getById, update} from '../http/contragentsAPI';

export default observer(function ContragentsDetail() {
  const params = useParams()
  const [details, setDetails] = useState({firstName: '', lastName: ''});

  useEffect(() => { 
    async function getContragentById(id) {
      const response = await getById(id)
      return response;
    }
    getContragentById(params.id).then(data => setDetails(data)) 
  }, [params])

  

  const updateContragent = async (id, details) => {
    const response = await update(id, details)
    return response;
  }

  return (
    <Container className='d-flex'>
      <Card>
        <Card.Body>
          <Card.Title>Contragents Detail</Card.Title>
          <Card.Text>
            <Form>
              <Row className="mb-3">
                <Form.Group className="mb-3 ml-3" style={{ width: 200 }}>
                  <Form.Label>Имя</Form.Label>
                  <Form.Control 
                  onChange={e => setDetails({
                    firstName: e.target.value,
                    lastName: details.lastName
                  })}
                  value={details.firstName}
                   />
                </Form.Group>
                <Form.Group style={{ width: 200 }}>
                  <Form.Label>Фамилия</Form.Label>
                  <Form.Control 
                  onChange={e => setDetails({
                    firstName: details.firstName,
                    lastName: e.target.value
                  })}
                  value={details.lastName}
                   />
                </Form.Group>
              </Row>
              <Button variant="primary" type="submit" onClick={() => updateContragent(params.id, details)}>Сохранить</Button>
            </Form>
          </Card.Text>
          
        </Card.Body>
      </Card>
    </Container>
  );
})