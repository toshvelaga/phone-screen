import React, { useState } from 'react';
import Modal from 'react-bootstrap/Modal';
import Button from 'react-bootstrap/Button';
import InputGroup from 'react-bootstrap/InputGroup';
import FormControl from 'react-bootstrap/FormControl'
import Rolesdropdown, { Rolesdropdownfour } from '../RolesDropdown/RolesDropdown';

// modal docs: https://react-bootstrap.github.io/components/modal/

function Rolesmodal() {
    const [show, setShow] = useState(false);
  
    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);
  
    return (
      <>
        <Button style={{marginLeft: '20px'}} variant="outline-success" onClick={handleShow}>
          Edit Roles
        </Button>
  
        <Modal show={show} onHide={handleClose} animation={true}>
          <Modal.Header closeButton>
            <Modal.Title>Edit Roles</Modal.Title>
          </Modal.Header>
          <Modal.Body style={{height: '300px'}}>

            <div style={{display: 'flex',justifyContent: 'center', marginBottom: '20px' }}>
                <InputGroup className="mb-3">
                    <FormControl style={{width: '400px'}}
                    placeholder="Add new role"
                    aria-label="Add new role"
                    aria-describedby="basic-addon2"
                    />
                    <Button style={{marginLeft: '10px', width: '75px'}} variant="success">Add</Button>
                </InputGroup>
            </div>

            <div style={{display: 'flex',justifyContent: 'center'}}>
                <Rolesdropdownfour /> 
                <Button style={{marginLeft: '10px'}} variant="danger">Delete</Button>
            </div>

          </Modal.Body>
          <Modal.Footer>
            <Button variant="outline-secondary" onClick={handleClose}>
              Close
            </Button>
            <Button variant="outline-primary" onClick={handleClose}>
              Save Changes
            </Button>
          </Modal.Footer>
        </Modal>
      </>
    );
  }
 
export default Rolesmodal;