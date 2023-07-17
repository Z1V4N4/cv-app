import { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Col from 'react-bootstrap/Col';
import Form from 'react-bootstrap/Form';
import Row from 'react-bootstrap/Row';
import Edit from '../../molecule/edit/edit'

function Profile() {
  const [validated, setValidated] = useState(false);

  const handleSubmit = (event) => {
    const form = event.currentTarget;
    if (form.checkValidity() === false) {
      event.preventDefault();
      event.stopPropagation();
    }

    setValidated(true);
  };

  return (
    <Form noValidate validated={validated} onSubmit={handleSubmit}>
      <Row className="mb-3">
        <Form.Group as={Col} md="8" controlId="validationCustom01">
          <Form.Label>Name</Form.Label>
          <Form.Control
            required
            type="text"
            placeholder="name"
            defaultValue="Muhamad Hafid"
          />
        </Form.Group>
        <Form.Group as={Col} md="4" controlId="validationCustom02">
          <Form.Label>Gender</Form.Label>
            <Form.Select aria-label="Default select example">
              <option value="1">Male</option>
              <option value="2">Female</option>
            </Form.Select>
        </Form.Group>
      </Row>
      <Row className="mb-3">
        <Form.Group as={Col} md="6" controlId="validationCustom03">
          <Form.Label>Position</Form.Label>
          <Form.Control
            required
            type="text"
            placeholder="Position"
            defaultValue="Jr. Developer"
          />
        </Form.Group>
        <Form.Group as={Col} md="3" controlId="validationCustom04">
          <Form.Label>Birth Day</Form.Label>
          <Form.Control
            required
            type="date"
            placeholder="Birt Day"
            defaultValue={'2000-08-15'}
          />
        </Form.Group>
      </Row>
      <Form.Group controlId="validationCustom03">
          <Form.Label>Summary</Form.Label>
          <Form.Control
            required
            as="textarea"
            placeholder="Summary"
            style={{ height: '200px' }}
            defaultValue="Experienced as internship Web Developer for 1 year and able to develop database backup, monitoring website system, and handling technical issues. Currently working at PT Bumi Amartha Teknologi Mandiri as Graduate Development Program."
          />
      </Form.Group>
      <p></p>
      <Button type="submit">Save Changes</Button>
      <Edit></Edit>
    </Form>
  );
}

export default Profile;