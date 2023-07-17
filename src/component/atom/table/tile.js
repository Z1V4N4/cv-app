import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import { Button, Table } from 'react-bootstrap';

function TileTable(tile) {
  return (
    console.log(tile),
    <div>
        <Row>
            <Col xs="auto" md={1}></Col>
            <Col xs="auto" md={4}>
            <center><h6>Skill</h6></center>
            <Table striped bordered hover size="sm">
            <tbody>
            {tile.tile.skill?.map(x => {
                return (
                    <tr>
                    <Row>
                        <Col xs="auto" md={8}><p>{x.name}</p></Col>
                        <Col xs="auto" md={4}><Button className='edit-btn' variant='danger'>Delete</Button></Col>
                    </Row>
                    </tr>
                )})
            }
            </tbody>
            </Table>
            <center><Button>+</Button></center>
            </Col>
            <Col xs="auto" md={2}>
            </Col>
            <Col xs="auto" md={4}>
            <center><h6>Tool</h6></center>
            <Table striped bordered hover size="sm">
            <tbody>
            {tile.tile.tool?.map(x => {
                return (
                    <tr>
                        <Row>
                        <Col xs="auto" md={8}><p>{x.name}</p></Col>
                        <Col xs="auto" md={4}><Button className='edit-btn' variant='danger'>Delete</Button></Col>
                    </Row>
                    </tr>
                )})
            }
            </tbody>
            </Table>
            <center><Button>+</Button></center>
            </Col>
        </Row>
    </div>
  );
}

export default TileTable;