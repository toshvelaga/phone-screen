import React, { Component } from 'react';
import Modal from 'react-bootstrap/Modal';
import Button from 'react-bootstrap/Button';
import InputGroup from 'react-bootstrap/InputGroup';
import FormControl from 'react-bootstrap/FormControl'
import axios from 'axios';
import Select from 'react-select';

// modal docs: https://react-bootstrap.github.io/components/modal/

  class Rolesmodal extends Component {
    constructor(props) {
      super(props);

      this.updateInput = this.updateInput.bind(this);
      this.onSubmit = this.onSubmit.bind(this);
      this.deleteRole = this.deleteRole.bind(this)

      this.state = { 
        show: false,
        role: '',
        roles: [],
        selectedOption: null,
        id: null,
      }
    }

    // opens and closes the modal on click of Edit Roles Button

    handleClose = () => {
      this.setState({ show: false})
    }

    handleShow = () => {
      this.setState({ show: true})
    }

    // gets roles data from database

    componentDidMount() {
      axios.get('http://localhost:4000/roles')
          .then(res => {
              this.setState({ roles: res.data });
          })
          .catch(function (error) {
              console.log(error);
          })
    }

    // When a role is selected in the dropdown the id of that role is set in the state

    handleChage = (selectedOption) => {
      this.setState({ selectedOption });
      this.setState({ id: selectedOption.id})
    }

    // creates an array of roles

    rolesList() {
      return this.state.roles.map(currentrole => ({
        label: currentrole.role_title, value: currentrole.role_title, id: currentrole._id
      }))
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
        role: '',
        roles: [...this.state.roles, roleadd]
      })
    }

    deleteRole(id) {

      // remove deleted item from state

      axios.delete('http://localhost:4000/roles/'+this.state.id)
        .then(response => { console.log(response.data)})

      // this.setState({
      //   roles: this.state.roles.filter(el => el.id !== id)
      // })

      const currentroles = this.state.roles;

      this.setState(({
        roles: currentroles.filter(role => role.id !== id)
      }))
    }

    render() { 
      
    console.log(this.state.id)  
    const roles = this.rolesList()
    console.log(roles)
    console.log(this.state.roles)

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
                  <FormControl 
                  role={this.state.role} 
                  value={this.state.role} 
                  onChange={this.updateInput} 
                  style={{width: '400px'}}
                  placeholder="Add new role"
                  aria-label="Add new role"
                  aria-describedby="basic-addon2"
                  />
                  <Button onClick={this.onSubmit} style={{marginLeft: '10px', width: '75px'}} variant="success">Add</Button>
              </InputGroup>
          </div>

          <div style={{display: 'flex',justifyContent: 'center'}}>
          <div style={{width: '400px'}}>
            <Select onChange={this.handleChage} options={ roles } />
          </div>
          <Button onClick={this.deleteRole} style={{marginLeft: '10px'}} variant="danger">Delete</Button>
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
 
