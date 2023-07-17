import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

export default function Tile(tile){
    return (
        <div className='container'>
            <Row>
                <Col>
                    <div className="container">
                        <h5>Skill</h5>
                        {tile.skill?.map(x => {
                            return (
                                <li key={x.id}>{x.name}</li>
                            )})
                        }  
                    </div>
                </Col>
                <Col>
                    <div className="container">
                        <h5>Tool</h5>
                        {tile.tool?.map(x => {
                            return (
                                <li key={x.id}>{x.name}</li>
                            )})
                        }   
                    </div>
                </Col>
            </Row>
            <Row>
                <Col>
                <p></p>
                </Col>
            </Row>
        </div>
    );
}