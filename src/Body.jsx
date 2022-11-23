
import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import Card from 'react-bootstrap/Card';

function WithHeaderExample() {
  return (
    
    <Card>
      <Card.Header>You deserve all the cake, happiness, and love today</Card.Header>
      <Card.Body>
        <Card.Title>Special Birthday</Card.Title>
        <Card.Text>
          Jadikanlah bertambahnya usia mu sebagai pelajaran kalau hidup terus berjalan mengikuti waktu. jangan sia-siakan  walaupun  hanya sedetik saja. 
        </Card.Text>
      </Card.Body>
    </Card>
  );
}

export default WithHeaderExample;