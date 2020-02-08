import React, { Component } from 'react';
import Rolesdropdown from './RolesDropdown/RolesDropdown'
import Button from 'react-bootstrap/Button';
import { Link } from 'react-router-dom';

import Rolesmodal from '../Roles/Rolesmodal/Rolesmodal'

class Roles extends Component {

    constructor(props) {
        super(props);
        this.state = {ModalShow: false}
        this.ModalClose = this.ModalClose.bind(this);
        this.ModalShow = this.ModalShow.bind(this);
    }
   
    ModalClose = () => {
        this.setState({ModalShow: false})
    }

    ModalShow = () => {
        this.setState({ModalShow: true})
    }

    render() { 
        return (<>
        <h1 style={{marginBottom: '20px'}}>Roles</h1>

        <div style={{display: 'flex',justifyContent: 'center'}}>
            <Rolesdropdown /> 
            <Rolesmodal show={this.state.ModalShow} onHide={this.ModalClose} />  

            {/* <Button onClick={this.ModalShow} style={{marginLeft: '20px'}} variant="outline-success">Edit Roles</Button>  */}
        </div>  
        
        {/* <Rolesmodal show={this.state.ModalShow} onHide={this.ModalClose} />   */}
        </>);
    }
}
 
export default Roles;

// const Roles = () => {
//     return (<><h1 style={{marginBottom: '20px'}}>Roles</h1>

//     <div style={{display: 'flex',justifyContent: 'center'}}>
//         <Rolesdropdown /> 
//         <Button style={{marginLeft: '20px'}} variant="outline-success">Edit Roles</Button> 
//     </div>    
    
//     </>);
// }

// export default Roles;