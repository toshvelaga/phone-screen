import React, { Component } from 'react';
import Modal from 'react-bootstrap/Modal';
import Button from 'react-bootstrap/Button';
import InputGroup from 'react-bootstrap/InputGroup';
import FormControl from 'react-bootstrap/FormControl'
import RolesDropdown from '../RolesDropdown/RolesDropdown';
import axios from 'axios';

// modal docs: https://react-bootstrap.github.io/components/modal/

  class Rolesmodal extends Component {
    constructor(props) {
      super(props);

      this.updateInput = this.updateInput.bind(this);
      this.onSubmit = this.onSubmit.bind(this);

      this.state = { 
        show: false,
        role: '',
       }
    }

    handleClose = () => {
      this.setState({ show: false})
    }

    handleShow = () => {
      this.setState({ show: true})
    }

    updateInput = (e) => {
      this.setState({
        role: e.target.value
      })
    }

    Capitalize(str){
      return str.charAt(0).toUpperCase() + str.slice(1);
    }

    onSubmit() {
  
      const roleadd = {
        role_title: this.Capitalize(this.state.role)
      }
  
      console.log(roleadd);
  
      axios.post('http://localhost:4000/roles/add', roleadd)
        .then(res => console.log(res.data));
  
      this.setState({
        role: ''
      })
    }

  render() { 
    return (
    <>
      <Button style={{marginLeft: '20px'}} variant="outline-success" onClick={this.handleShow}>
        Edit Roles
      </Button>

      <Modal show={this.state.show} onHide={this.handleClose} animation={true}>
        <Modal.Header closeButton>
          <Modal.Title>Edit Roles</Modal.Title>
        </Modal.Header>
        <Modal.Body style={{height: '300px'}}>

          <div style={{display: 'flex',justifyContent: 'center', marginBottom: '20px' }}>
              <InputGroup className="mb-3">
                  <FormControl role={this.state.role} value={this.state.role} onChange={this.updateInput} style={{width: '400px'}}
                  placeholder="Add new role"
                  aria-label="Add new role"
                  aria-describedby="basic-addon2"
                  />
                  <Button onClick={this.onSubmit} style={{marginLeft: '10px', width: '75px'}} variant="success">Add</Button>
              </InputGroup>
          </div>

          <div style={{display: 'flex',justifyContent: 'center'}}>
              <RolesDropdown /> 
              <Button style={{marginLeft: '10px'}} variant="danger">Delete</Button>
          </div>

        </Modal.Body>
        <Modal.Footer>
          <Button variant="outline-secondary" onClick={this.handleClose}>
            Close
          </Button>
          <Button variant="outline-primary" onClick={this.handleClose}>
            Save Changes
          </Button>
        </Modal.Footer>
      </Modal>
    </>
    );
  }
}
 
export default Rolesmodal;
 
