import React, { useState } from 'react';
import Modal from 'react-bootstrap/Modal';
import Button from 'react-bootstrap/Button';
import InputGroup from 'react-bootstrap/InputGroup';
import FormControl from 'react-bootstrap/FormControl';
import Newcandidates from '../Newcandidates/Newcandidates';

// modal docs: https://react-bootstrap.github.io/components/modal/

function Rolesmodal() {
    const [show, setShow] = useState(false);
  
    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);
  
    return (
      <>
        <Button style={{marginLeft: '20px'}} variant="outline-success" onClick={handleShow}>
          Add New
        </Button>
  
        <Modal dialogClassName="modal-90w" show={show} onHide={handleClose} animation={true}>
          <Modal.Header closeButton>
            <Modal.Title>Add New Candidate</Modal.Title>
          </Modal.Header>
          <Modal.Body style={{height: '450px', width: '800px'}}>
            
          <Newcandidates />

          </Modal.Body>
          <Modal.Footer>
            <Button variant="outline-secondary" onClick={handleClose}>
              Close
            </Button>
            <Button variant="primary" onClick={handleClose}>
              Save Changes
            </Button>
          </Modal.Footer>
        </Modal>
      </>
    );
  }
 
export default Rolesmodal;