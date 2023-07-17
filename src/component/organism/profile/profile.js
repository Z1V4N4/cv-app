import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Card from 'react-bootstrap/Card';
import Container from 'react-bootstrap/Container';

export default function Profile(employee){
    return (
        <Container>
            <Row>
                <Col>
                    <div className="container">
                        <h5>{employee.employee.name}</h5>
                        <p>{employee.employee.gender}, {employee.employee.age}</p>
                        <h5>{employee.employee.position}</h5>   
                    </div>
                </Col>
                <Col xs="auto" md={2}>
                        <Card style={{ width: '6rem' }}>
                            <Card.Img src={employee.employee.foto}></Card.Img>
                        </Card>
                </Col>
            </Row>
            <Row>
                <Col>
                    <div className='container'>
                        <h5>Summary</h5>
                        <p>{employee.employee.summary}</p>
                    </div>
                </Col>
            </Row>
        </Container>
    );
}