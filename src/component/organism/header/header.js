import Card from 'react-bootstrap/Card';
import Edit from '../../molecule/edit/edit';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import './header.css'

export default function HeaderBox({data,nama}){
    return (
        <Card className='header-card' bg='primary' text='white' as="h4">
                <Card.Body>
                    <Row>
                        <Col>
                            {nama}
                        </Col>
                        <Col xs="auto" md={1}>
                        <Edit props={data} name={nama}></Edit>
                        </Col>
                    </Row>
                </Card.Body>
        </Card>
    )
}