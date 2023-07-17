import { useState } from 'react';
import { Container } from 'react-bootstrap';
import Button from 'react-bootstrap/Button';
import Col from 'react-bootstrap/Col';
import Form from 'react-bootstrap/Form';
import InputGroup from 'react-bootstrap/InputGroup';
import Row from 'react-bootstrap/Row';
import Table from 'react-bootstrap/Table';

function Experience(experience) {
  return (
    console.log(experience),
    <Container>
       <Table striped responsive>
      <thead>
        <tr>
          <th>#</th>
          <th>Name</th>
          <th>Place</th>
          <th>Summary</th>
          <th>Start</th>
          <th>End</th>
          <th>Action</th>
        </tr>
      </thead>
      <tbody>
      {Array.from({ length: experience.experience.length }).map((_, index) => (
            <tr >
              <td>{index + 1}</td>
              <td>{experience.experience[index].name}</td>
              <td>{experience.experience[index].place}</td>
              <td>{experience.experience[index].summary}</td>
              <td>{experience.experience[index].start}</td>
              <td>{experience.experience[index].end}</td>
              <td><Button className='edit-btn'>Edit</Button> <Button className='edit-btn' variant='danger'>Delete</Button></td>
            </tr>
          ))}
      </tbody>
    </Table>
    </Container>
  );
}

export default Experience;