
import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import Card from 'react-bootstrap/Card';

function ImageAndTextExample() {
  return (
    <>
    {[
        'Info',
      ].map((variant) => (
      <Card
      bg={variant.toLowerCase()}
    key={variant}
    text={variant.toLowerCase() === 'Info'}
    className="mb-2">
        <Card.Body>
          <Card.Text>
          Karena bagiku, mencintaimu saja adalah hal istimewa. 
          1 Desember adalah hari spesial mu di umur ke 19 ini,semoga diberi kemudahan,rezeki yang lancar,panjang umur,sehat selalu naina ku yang cantik,
          cie udah 19 tahun,udh makin dewasa anak pak herman yak :v "hehehe bercanda". menjadi momen yang tak terduga bisa hadir di umur mu yang ke 19 tahun,
          abang selalu berharap untuk kebaikan masa depan mu dan tentu saja impian mu yang harus kamu gapai dikemudian hari,jangan sombong sama abang yak :(
          btw kalau website nya jelek dan kata-kata abang ga sesuai ekspetasi naina abang mohon maaf yaaaaaaaaaaaaa.
          KAMU CANTIK, KAMU HEBAT, KAMU KUAT, dan KAMU PINTAR, Happy Birthday sekali lagi abang ucapkan dengan penuh suka cita,tapi ga tau kalau cita itu suka balik hehehe,pasti garing ya kan:( 
            I LOVE U NAINA AZZAHRA Happines always with u  

          </Card.Text>
          <Card.Text>
            So much Love
          </Card.Text>
          <Card.Text>
            From 
          </Card.Text>
          <Card.Text>
          MUHAMMAD IQBAL PERDANA PUTRA
          </Card.Text>
        </Card.Body>
        <Card.Img variant="bottom" src="" />
      </Card>
      ))}
    </>
  );
}

export default ImageAndTextExample;