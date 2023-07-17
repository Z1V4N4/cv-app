import { useState } from 'react';
import { Card, Container } from 'react-bootstrap';
import Button from 'react-bootstrap/Button';
import Offcanvas from 'react-bootstrap/Offcanvas';
import './menu.css'
import Print from '../../molecule/print/print';

function Menu() {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  return (
    <>
      <Button variant="primary" onClick={handleShow}>
        Menu
      </Button>

      <Offcanvas placement='end' show={show} onHide={handleClose}>
        <Offcanvas.Header closeButton>
          <Offcanvas.Title>Menu</Offcanvas.Title>
        </Offcanvas.Header>
        <Offcanvas.Body>
          <Container>
            <ul class="navigation">
                <li class="nav-item"><a href="#">Home</a></li>
                <li class="nav-item"><Print></Print></li>
                <li class="nav-item"><a href="#">Logout</a></li>
            </ul>
          </Container>
        </Offcanvas.Body>
      </Offcanvas>
    </>
  );
}

export default Menu;