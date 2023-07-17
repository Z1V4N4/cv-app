import { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import './edit.css';
import Tile from '../../atom/table/tile';
import Profile from '../../atom/table/profile';
import Experience from '../../atom/table/experience';
import Training from '../../atom/table/training';
import Certificate from '../../atom/table/certificate';
import Education from '../../atom/table/education';

export default function Edit({props, name}){
    const [show, setShow] = useState(false);
    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);
    if (name === 'Profile') {
        return (
            <div>
                <Button className='edit-btn' variant="primary" onClick={handleShow}>
                Edit
                </Button>
                <Modal show={show} onHide={handleClose} size='lg' aria-labelledby="contained-modal-title-vcenter" centered>
                <Modal.Header closeButton>
                    <Modal.Title>Edit {name}</Modal.Title>
                </Modal.Header>
                <Modal.Body><Profile></Profile></Modal.Body>
                </Modal>
            </div> 
        )
    } else if(name === 'Skill & Tool'){
        return (
            <div>
                <Button className='edit-btn' variant="primary" onClick={handleShow}>
                Edit
                </Button>
                <Modal show={show} onHide={handleClose} size='lg' aria-labelledby="contained-modal-title-vcenter" centered>
                <Modal.Header closeButton>
                    <Modal.Title>Edit {name}</Modal.Title>
                </Modal.Header>
                <Modal.Body><Tile tile={props}></Tile></Modal.Body>
                </Modal>
            </div> 
        ) 
    } else if(name === 'Profesional Experience'){
        return (
        <div>
                <Button className='edit-btn' variant="primary" onClick={handleShow}>
                Edit
                </Button>
                <Modal show={show} onHide={handleClose} size='lg' aria-labelledby="contained-modal-title-vcenter" centered>
                <Modal.Header closeButton>
                    <Modal.Title>Edit {name}</Modal.Title>
                </Modal.Header>
                <Modal.Body><Experience experience={props.experience}/></Modal.Body>
                </Modal>
        </div>
        ) 
    } else if(name === 'Training'){
        return (
            <div>
                <Button className='edit-btn' variant="primary" onClick={handleShow}>
                Edit
                </Button>
                <Modal show={show} onHide={handleClose} size='lg' aria-labelledby="contained-modal-title-vcenter" centered>
                <Modal.Header closeButton>
                    <Modal.Title>Edit {name}</Modal.Title>
                </Modal.Header>
                <Modal.Body><Training/></Modal.Body>
                </Modal>
        </div> 
        )
    } else if(name === 'Certification'){
        return (
            <div>
                <Button className='edit-btn' variant="primary" onClick={handleShow}>
                Edit
                </Button>
                <Modal show={show} onHide={handleClose} size='lg' aria-labelledby="contained-modal-title-vcenter" centered>
                <Modal.Header closeButton>
                    <Modal.Title>Edit {name}</Modal.Title>
                </Modal.Header>
                <Modal.Body><Certificate/></Modal.Body>
                </Modal>
            </div>
        ) 
    } else if(name === 'Education'){
        return (
            <div>
                <Button className='edit-btn' variant="primary" onClick={handleShow}>
                Edit
                </Button>
                <Modal show={show} onHide={handleClose} size='lg' aria-labelledby="contained-modal-title-vcenter" centered>
                <Modal.Header closeButton>
                    <Modal.Title>Edit {name}</Modal.Title>
                </Modal.Header>
                <Modal.Body><Education/></Modal.Body>
                </Modal>
            </div>
        ) 
    }
}