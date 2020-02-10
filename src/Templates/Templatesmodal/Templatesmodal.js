import React, { useState } from 'react';
import Modal from 'react-bootstrap/Modal';
import Button from 'react-bootstrap/Button';
import InputGroup from 'react-bootstrap/InputGroup';
import FormControl from 'react-bootstrap/FormControl';
import Modalbody from '../Templatesmodal/Modalbody';

// modal docs: https://react-bootstrap.github.io/components/modal/

function Templatesmodal() {
    const [show, setShow] = useState(false);
  
    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);
  
    return (
      <>
        <Button style={{marginLeft: '20px'}} variant="outline-success" onClick={handleShow}>
          Add New
        </Button>
  
        <Modal size="lg" dialogClassName="modal-90w" show={show} onHide={handleClose} animation={true}>
          <Modal.Header closeButton>
            <Modal.Title>Add New Template</Modal.Title>
          </Modal.Header>
          <Modal.Body style={{height: '450px', width: '800px', overflowY: 'auto'}}>

          {/* Modalbody component created in Modalbody.js   */}

          <Modalbody />

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
 
export default Templatesmodal;