import React from 'react';
import { Button, Card, CardGroup } from 'react-bootstrap';
import { useNavigate } from 'react-router-dom';

export default function Home() {
  const navigate = useNavigate();
  return (
    <CardGroup>
      <Card>
        <Card.Body onClick={() => navigate('/contragents')}>
          <Card.Title>Контрагенты</Card.Title>
          <Card.Text>
          </Card.Text>
        </Card.Body>
        <Card.Footer>
          <small className="text-muted">Last updated 3 mins ago</small>
        </Card.Footer>
      </Card>
      <Card>
        <Card.Body onClick={() => navigate('/users')}>
          <Card.Title>Пользователи</Card.Title>
          <Card.Text>
          </Card.Text>
        </Card.Body>
        <Card.Footer>
          <small className="text-muted">Last updated 3 mins ago</small>
        </Card.Footer>
      </Card>
    </CardGroup>
  );
}
