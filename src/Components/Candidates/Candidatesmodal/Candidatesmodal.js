import React, { Component } from 'react';
import Modal from 'react-bootstrap/Modal';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import InputGroup from 'react-bootstrap/InputGroup';
import FormControl from 'react-bootstrap/FormControl';
import RolesDropdown from '../../Roles/RolesDropdown/RolesDropdown';
import axios from 'axios';

// modal docs: https://react-bootstrap.github.io/components/modal/

class Candidatesmodal extends Component {
  state = {
    show: false,
    First_Name: '',
    Last_Name: '',
    Email: '',
    Phone: '',
    Position: '',
    City: '',
    State: '',
    Zip: '',
    selectedOption: null,
  }

  handleClose = () => this.setState({show: false});
  handleShow = () => this.setState({show: true});

  updateInput = (e) => {
    this.setState({
      [e.target.name]: e.target.value,
    })
  }

  onSubmit = () => {

    const candidate_data = {
      First_Name: this.state.First_Name,
      Last_Name: this.state.Last_Name,
      Email: this.state.Email,
      Phone: this.state.Phone,
      City: this.state.City,
      State: this.state.State,
    }

    console.log(candidate_data)
      
    axios.post('http://localhost:4000/candidates/add', candidate_data)
      .then(res => console.log(res.data));

    this.setState({
      First_Name: '',
      Last_Name: '',
      Email: '',
      Phone: '',
      City: '',
      State: ''
    })
  }
  
  render() { 
  return (
  <>
    <Button style={{marginLeft: '20px'}} variant="outline-success" onClick={this.handleShow}>
      Add New
    </Button>

    <Modal dialogClassName="modal-90w" show={this.state.show} onHide={this.handleClose} animation={true}>
      <Modal.Header closeButton>
        <Modal.Title>Add New Candidate</Modal.Title>
      </Modal.Header>
      <Modal.Body style={{height: '450px', width: '800px'}}>
        
      <Form style={{width: '60%', padding: '40px', borderRadius: '5px'}}>
        <Row>
            <Col>
            <Form.Label>First Name</Form.Label>
            <Form.Control name="First_Name" value={this.state.First_Name} onChange={this.updateInput} placeholder="" />
            </Col>
            <Col>
            <Form.Label>Last Name</Form.Label>
            <Form.Control name="Last_Name" value={this.state.Last_Name} onChange={this.updateInput} placeholder="" />
            </Col>
        </Row>

        <Row style={{marginTop: '25px'}}>
            <Col>
            <Form.Label>Email</Form.Label>
            <Form.Group controlId="formGridEmail">
            <Form.Control name="Email" value={this.state.Email} onChange={this.updateInput} type="email" placeholder="" />
            </Form.Group>
            </Col>
            <Col>
            <Form.Label>Phone</Form.Label>
            <Form.Group controlId="formGridEmail">
            <Form.Control name="Phone" value={this.state.Phone} onChange={this.updateInput} placeholder="" />
            </Form.Group>
            </Col>
        </Row>

        <Form.Group controlId="formGridAddress2">
        <Form.Label>Position</Form.Label>
        <RolesDropdown />
        </Form.Group>

        <Form.Row>
        <Form.Group as={Col} controlId="formGridCity">
          <Form.Label>City</Form.Label>
          <Form.Control name="City" value={this.state.City} onChange={this.updateInput} />
        </Form.Group>

        <Form.Group as={Col} controlId="formGridState">
          <Form.Label>State</Form.Label>
          <Form.Control name="State" value={this.state.State} onChange={this.updateInput}/>
        </Form.Group>

        <Form.Group as={Col} controlId="formGridZip">
          <Form.Label>Zip</Form.Label>
          <Form.Control name="Zip" value={this.state.Zip} onChange={this.updateInput} />
        </Form.Group>
        </Form.Row>

        {/* Add upload resume/cv */}

      </Form>

      </Modal.Body>
      <Modal.Footer>
        <Button variant="outline-secondary" onClick={this.handleClose}>
          Close
        </Button>
        <Button type="submit" variant="primary" onClick={this.onSubmit}>
          Save Changes
        </Button>
      </Modal.Footer>
    </Modal>
  </>
    );
  }
}
 
export default Candidatesmodal;


