import React from 'react';
import Button from 'react-bootstrap/Button';

const Editroles = () => {
    return (<>
        <h1>Edit Roles</h1>
        <textinput placeholder="add new roles"></textinput>
        <Button style={{marginLeft: '20px', paddingLeft: '20px', paddingRight: '20px'}} variant="outline-success">Add</Button> 
    </>);
}
 
export default Editroles;