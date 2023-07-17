import { Button } from 'react-bootstrap';
import Logo from '../../../img/BATM_Logo-removebg-preview.png';
import Container from 'react-bootstrap/Container';
import Navbar from 'react-bootstrap/Navbar';
import Menu from '../menu/menu';

export default function CustomNavbar(){
    return (
        <Navbar fixed='top'>
            <Container>
                <Navbar.Brand href="">
                    <img
                        alt=""
                        src= {Logo}
                        width="200"
                        height="80"
                        className="d-inline-block align-top"
                    />
                </Navbar.Brand>
                <Navbar.Collapse className="justify-content-end">
                    <Menu></Menu>
                </Navbar.Collapse>
            </Container>
         </Navbar>
    )
}