import React, { Component } from 'react';
import Rolesdropdown, { Rolesdropdownfour } from './RolesDropdown/RolesDropdown'
import Button from 'react-bootstrap/Button';
import { Link } from 'react-router-dom';

import Rolesmodal from './Rolesmodal/Rolesmodal'

class Roles extends Component {

    constructor(props) {
        super(props);
    }
   
    render() { 

        return (<>
        <h1 style={{marginBottom: '20px'}}>Roles</h1>

        <div style={{display: 'flex',justifyContent: 'center'}}>
            <Rolesdropdownfour />
            <Rolesmodal />  
        </div>  
        </>);
    }
}
 
export default Roles;
