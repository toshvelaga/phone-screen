import React, { Component } from 'react';
import Select from 'react-select';
import 'bootstrap/dist/css/bootstrap.min.css';
import axios from 'axios';

class RolesDropdown extends Component {
  constructor(props) {
    super(props);
    this.state = {roles: []};
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

  rolesList() {
    return this.state.roles.map(currentrole => ({
      label: currentrole.role_title, value: currentrole.role_title
    }))
  }

  render() {

    console.log(this.rolesList())
    const roles = this.rolesList()
    
    let styles;

    return (  
    <div style={{width: '400px'}}>
      <Select options={ roles } />
    </div>
    );
  }
}
 
  export default RolesDropdown;





