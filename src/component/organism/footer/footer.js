import Side from '../../../img/side_addition-removebg-preview.png';
import Container from 'react-bootstrap/Container';
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';

export default function Footer(){
    return (
        <Container className='footer'>
            <Row>
                <Col>
                    <div className='container'></div>
                </Col>
                <Col xs="auto" md={2}>
                    <img
                        alt=""
                        src= {Side}
                        width="160"
                        height="80"
                    />
                </Col>
            </Row>
        </Container>
    )
}