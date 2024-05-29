import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import Row from 'react-bootstrap/Row' 
import Col from 'react-bootstrap/Col';

const Utility = () =>{
    return(
        <div>
          <Navbar expand="lg"  className=" bg-warning mb-2 js-">
      <Container>
        <Navbar.Brand href="#home">About Hyderabad</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="ms-auto">
            <NavDropdown title="Visited Places" id="basic-nav-dropdown">
              <NavDropdown.Item href="#action/3.1">Ramoji Film City</NavDropdown.Item>
              <NavDropdown.Item href="#action/3.2">
                Birla Mandir
              </NavDropdown.Item>
              <NavDropdown.Item href="#action/3.3">Golconda Fort</NavDropdown.Item>
            
              <NavDropdown.Item href="#action/3.4">
                Chilukuri Balaji Temple
              </NavDropdown.Item>
            </NavDropdown>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>

  <Container> 
  <Row>
    <Col className="mx-xl-3" lg={4} md={6} sm={12} xl={3} > 
    <Card className= "mt-3" style={{ width: '18rem' }}>
      <Card.Img variant="top"
     src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSeIEltcM88Gtt3fnTleJHpgTl2tnWi_ZtU1wPS_RZVSA&s "/>
      <Card.Body>
        <Card.Title>Golconda Fort</Card.Title>
        <Card.Text>
        Golconda is a fortified citadel and ruined city located in the western outskirts of Hyderabad,
        Telangana, India.The fort was originally built by Kakatiya ruler Pratāparudra in the 11th
        century out of mud walls.
        </Card.Text>
        <Button variant="primary">Go somewhere</Button>
      </Card.Body>
      </Card>
    </Col>

      <Col className="mx-xl-3" lg={4} md={6} sm={12} xl={3}>
    <Card className= "mt-3" style={{ width: '18rem' }}>
      <Card.Img variant="top"
     src="https://www.oyorooms.com/blog/wp-content/uploads/2019/06/Ramoji-Film-City-1.jpg"/>
      <Card.Body>
        <Card.Title>Ramoji Film City</Card.Title>
        <Card.Text>
        Ramoji Film City is an integrated film studio located Hyderabad, India.
        Spread over 1,666 acres it is the largest film studio complex in the world certified by the Guinness World Records.
        </Card.Text>
        <Button variant="primary">Go somewhere</Button>
      </Card.Body>
    </Card>
    </Col>

     <Col className="mx-xl-3" lg={4} md={6} sm={12} xl={3}>
    <Card className= "mt-3" style={{ width: '18rem' }}>
      <Card.Img variant="top"
     src=" https://www.fabhotels.com/blog/wp-content/uploads/2019/05/Charminar_600.jpg "/>
      <Card.Body>
        <Card.Title>Charminar</Card.Title>
        <Card.Text>
        The Charminar  is a monument located in Hyderabad, Telangana, India. Constructed in 1591, 
        the landmark is a symbol of Hyderabad and officially incorporated in the emblem of Telangana.
        </Card.Text>
        <Button variant="primary">Go somewhere</Button>
      </Card.Body>
    </Card>
    </Col>

    <Col className="mx-xl-3"  lg={4} md={6} sm={12} xl={3}>
    <Card className= "mt-3" style={{ width: '18rem' }}>
      <Card.Img variant="top"
     src="https://www.trawell.in/admin/images/upload/1531106BirlaMandir_Main.jpg "/>
      <Card.Body>
        <Card.Title>Birla Mandir</Card.Title>
        <Card.Text>
        Birla Mandir is a Hindu temple built on a 280 feet (85 m) high hillock called Naubath Pahad on a 
        13 acres (53,000 m2) plot in Hyderabad, Telangana, India. The construction took ten years and
        was opened in 1976 by Swami Ranganathananda of Ramakrishna Mission.
        </Card.Text>
        <Button variant="primary">Go somewhere</Button>
      </Card.Body>
    </Card>
    </Col>

    <Col className="mx-xl-3"  lg={4} md={6} sm={12} xl={3}> 
    <Card className= "mt-3" style={{ width: '18rem' }}>
      <Card.Img variant="top"
     src=" https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTFJ3PZEyab2Ssd3QD4MN17dN6VzS256ZySLIPtIJ06dQ&s "/>
      <Card.Body>
        <Card.Title>Wonderla</Card.Title>
        <Card.Text>
        Wonderla is the largest chain of amusement parks in India. It is owned and operated by Wonderla Holidays 
        Limited which is headquartered near Bidadi, 28 kilometres (17 mi) from Bengaluru, Karnataka.
        It operates 4 amusement parks in Kochi, Bangalore, Hyderabad and Bhubaneswar.
        </Card.Text>
        <Button variant="primary">Go somewhere</Button>
      </Card.Body>
    </Card>
    </Col>
    
    </Row>
    </Container>
        </div>
    )
}
export default Utility;