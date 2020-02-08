import React from 'react';
import Rolesdropdown from './RolesDropdown/RolesDropdown'
import Button from 'react-bootstrap/Button';
import { Link } from 'react-router-dom';

const Roles = () => {
    return (<><h1 style={{marginBottom: '20px'}}>Roles</h1>
    
    <div style={{display: 'flex',justifyContent: 'center'}}>
        <Rolesdropdown /> 
        <Button style={{marginLeft: '20px'}} variant="outline-success">Edit Roles</Button> 
    </div>    
    
    </>);
}

export default Roles;