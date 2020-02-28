import React, { Component } from 'react';
import Select from 'react-select';
import 'bootstrap/dist/css/bootstrap.min.css';
import axios from 'axios';

class RolesDropdown extends Component {
  constructor(props) {
    super(props);
    // this.handleChage = this.handleChage.bind(this)

    this.state = {
      roles: [],
      // selectedOption: null,
      // selectedRole: 'data was passed'
    };
  }

  // handleChage = (selectedOption) => {
  //   this.setState({ selectedOption });
  //   console.log(selectedOption.id)

  //   // this.passIDtoParent()
  // }
  
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
      label: currentrole.role_title, value: currentrole.role_title, id: currentrole._id
    }))
  }

  render() {
    console.log(this.rolesList())
    const roles = this.rolesList()
    
    return (  
    <div style={{width: '400px'}}>
      <Select
      //  onChange={this.handleChage}
       options={ roles } />
    </div>
    );
  }
}
 
export default RolesDropdown;





