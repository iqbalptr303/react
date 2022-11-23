import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Container from 'react-bootstrap/Container';
import Navbar from 'react-bootstrap/Navbar';
import Body from './Body'
import Logo from './img/decoration.png'
import Bot from './Bot'
import Bot1 from './Bot1'



function App() {
  return (
    <div className="App">
    
    
    <Navbar bg="dark" variant="dark">
        <Container>
          <Navbar.Brand href="#home">
            <img
              alt=""
              src={Logo}
              width="30"
              height="30"
              className="d-inline-block align-top"
            />{' '}
            Happy Birthday Naina Azzahra
          </Navbar.Brand>
        </Container>
      </Navbar>
    <Body/> 
    <Bot/>
    <Bot1/>
   
     

    </div>
  );
}



export default App;
