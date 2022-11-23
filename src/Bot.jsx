
import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import Carousel from 'react-bootstrap/Carousel';
import Image1 from './img/image1.jpg'
import Image2 from './img/image2.jpg'
import Image3 from './img/image3.jpg'
import Card from 'react-bootstrap/Card';
import CardGroup from 'react-bootstrap/CardGroup';

function GroupExample() {
  return (
    <CardGroup>
      <Card>
        <Card.Img variant="top" src={Image1} width="100p"
              height="200" />
        <Card.Body>
          <Card.Title>Cinta</Card.Title>
          <Card.Text>
          Hai Sayang terimakasih telah selalu mendampingi, memberikan support serta menyemangatiku. Kau cinta terbaikku! Selamat Ulang Tahun
          </Card.Text>
        </Card.Body>
        <Card.Footer>
          <small className="text-muted">Last updated 40 mins ago</small>
        </Card.Footer>
      </Card>
      <Card>
        <Card.Img variant="top" src={Image2} width="50p"
              height="200" />
        <Card.Body>
          <Card.Title>Jadilah Pribadi Yang lebih baik</Card.Title>
          <Card.Text>
            Tak banyak kata yang bisa diucapkan,jadilah pribadi yang lebih baik lagi di masa yang akan datang.{' '}
          </Card.Text>
        </Card.Body>
        <Card.Footer>
          <small className="text-muted">Last updated 20 mins ago</small>
        </Card.Footer>
      </Card>
      <Card>
        <Card.Img variant="top" src={Image3} width="100p"
              height="200" />
        <Card.Body>
          <Card.Title>Bahagia</Card.Title>
          <Card.Text>
            Semoga dihari yang special mu,selalu menjadi hari bahagia,termanis,dan penuh kenangan dengan bertambahnya umur mu!
          </Card.Text>
        </Card.Body>
        <Card.Footer>
          <small className="text-muted">Last updated 3 mins ago</small>
        </Card.Footer>
      </Card>
    </CardGroup>
  );
}

export default GroupExample;