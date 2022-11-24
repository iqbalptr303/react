
import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import Image1 from './img/image1.jpg'
import Image2 from './img/image2.jpg'
import Image3 from './img/image3.jpg'
import Card from 'react-bootstrap/Card';
import CardGroup from 'react-bootstrap/CardGroup';

function GroupExample() {
  return (
    <>
      {[
        'Info',
      ].map((variant) => (

    <CardGroup >
      <Card bg={variant.toLowerCase()}
    key={variant}
    text={variant.toLowerCase() === 'Info'}
    className="mb-2"
    border="dark">
        <Card.Img variant="top" src={Image1} width="100p"
              height="200" />
        <Card.Body>
          <Card.Title>Cinta</Card.Title>
          <Card.Text>
          Cinta mengajariku melihat dengan cara memejam dan mengerti tanpa perlu penjelasan</Card.Text>
        </Card.Body>
        <Card.Footer>
          <small className="text-muted">Last updated 40 mins ago</small>
        </Card.Footer>
      </Card>
      <Card bg={variant.toLowerCase()}
    key={variant}
    text={variant.toLowerCase() === 'Info'}
    className="mb-2"
    border="dark">
        <Card.Img variant="top" src={Image2} width="50p"
              height="200" />
        <Card.Body>
          <Card.Title>Damai</Card.Title>
          <Card.Text>
            Jadilah pribadi yang lebih baik lagi di masa yang akan datang.{' '}
          </Card.Text>
        </Card.Body>
        <Card.Footer>
          <small className="text-muted">Last updated 20 mins ago</small>
        </Card.Footer>
      </Card >
      <Card bg={variant.toLowerCase()}
    key={variant}
    text={variant.toLowerCase() === 'info'}
    className="mb-2"
    border="dark">
        <Card.Img variant="top" src={Image3} width="100p"
              height="200" />
        <Card.Body>
          <Card.Title>Bahagia</Card.Title>
          <Card.Text>
            Semoga dihari yang special ini,selalu menjadi hari bahagia,termanis,dan penuh kenangan dengan bertambahnya umur mu!
          </Card.Text>
        </Card.Body>
        <Card.Footer>
          <small className="text-muted">Last updated 3 mins ago</small>
        </Card.Footer>
      </Card>
    </CardGroup>
  ))}
  </>
  );
}

export default GroupExample;