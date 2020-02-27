import React, { Component } from 'react';
import Select from 'react-select';
import 'bootstrap/dist/css/bootstrap.min.css';
import axios from 'axios';

class RolesDropdown extends Component {
  constructor(props) {
    super(props);
    this.handleChage = this.handleChage.bind(this)

    this.state = {
      roles: [],
      selectedOption: null,
    };
  }

  someFn = () => {
    // [...somewhere in here I define a variable listInfo which    I think will be useful as data in my ToDoList component...]
    this.props.callbackFromParent("listInfo");
  }

  handleChage = (selectedOption) => {
    this.setState({ selectedOption });
    console.log(selectedOption.id)
  }
  
  componentDidMount() {
    axios.get('http://localhost:4000/roles')
        .then(res => {
            this.setState({ roles: res.data });
        })
        .catch(function (error) {
            console.log(error);
        })
  }

  // function that deletes the role from the database

  deleteRole(id) {
    axios.delete('http://localhost:4000/roles/'+id)
      .then(response => { console.log(response.data)});
  
    this.setState({
      roles: this.state.roles.filter(el => el._id !== id)
    })
  }

  rolesList() {
    return this.state.roles.map(currentrole => ({
      label: currentrole.role_title, value: currentrole.role_title, id: currentrole._id
    }))
  }

  render() {
    console.log(this.rolesList())
    const roles = this.rolesList()
    
    return (  
    <div style={{width: '400px'}}>
      <Select onChange={this.handleChage} options={ roles } />
    </div>
    );
  }
}
 
export default RolesDropdown;





