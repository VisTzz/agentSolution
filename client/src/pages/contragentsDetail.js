import { observer } from 'mobx-react';
import React, { useEffect, useState } from 'react';
import { Button, Card, Container, Form, Row } from 'react-bootstrap';
import { useParams } from 'react-router-dom';
import { getById, update} from '../http/contragentsAPI';

export default observer(function ContragentsDetail() {
  const params = useParams()
  const [details, setDetails] = useState({body: {}});
  
  useEffect(() => { 
    async function getContragentById(id) {
      const response = await getById(id)
      return response;
    }
    getContragentById(params.id).then(data => {
      const partyBody = JSON.parse(data.body);
      
      setDetails({
        body: partyBody
      })
      console.log(partyBody)
    }) 
    
  }, [params])

  

  const updateContragent = async (id, details) => {
    let body = JSON.stringify(details)
    const response = await update(id, body)
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
                    body: Object.assign(details, {firstname: e.target.value})
                  })}
                  value={details.body.firstname}
                   />
                </Form.Group>
                <Form.Group style={{ width: 200 }}>
                  <Form.Label>Фамилия</Form.Label>
                  <Form.Control 
                  onChange={e => setDetails({
                    body: Object.assign(details, {lastname: e.target.value})
                  })}
                  value={details.body.lastname}
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